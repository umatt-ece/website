import { Hono } from 'hono';
import { AppServices, Env } from '../app';
import { R2StorageService } from '../services/implementations/storage.r2';

const member = new Hono<{ Bindings: Env; Variables: { services: AppServices } }>();

/**
 * POST /member/join
 * Handle new member application:
 * 1. Send welcome email to member with social links
 * 2. Notify team about new member (with resume if provided)
 */
member.post('/join', async (c) => {
  const services = c.get('services');
  
  const contentType = c.req.header('content-type') || '';
  
  let name: string;
  let email: string;
  let resumeData: { filename: string; content: ArrayBuffer; contentType: string } | undefined;

  // Handle multipart form data (when resume is uploaded)
  if (contentType.includes('multipart/form-data')) {
    const formData = await c.req.formData();
    
    name = formData.get('name') as string;
    email = formData.get('email') as string;
    const resumeFile = formData.get('resume') as File | null;

    if (resumeFile && resumeFile.size > 0) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(resumeFile.type)) {
        return c.json({
          success: false,
          error: 'Invalid file type. Please upload a PDF or Word document.'
        }, 400);
      }

      // Validate file size (max 5MB)
      if (resumeFile.size > 5 * 1024 * 1024) {
        return c.json({
          success: false,
          error: 'File too large. Maximum size is 5MB.'
        }, 400);
      }

      const content = await resumeFile.arrayBuffer();
      
      // Store resume in R2
      const resumeKey = R2StorageService.generateResumeKey(resumeFile.name);
      await services.resumeStorage.upload(resumeKey, content, resumeFile.type);

      resumeData = {
        filename: resumeFile.name,
        content,
        contentType: resumeFile.type
      };
    }
  } else {
    // Handle JSON request (no resume)
    const body = await c.req.json<{ name: string; email: string }>();
    name = body.name;
    email = body.email;
  }

  // Validate required fields
  if (!name || !email) {
    return c.json({
      success: false,
      error: 'Missing required fields: name, email'
    }, 400);
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return c.json({
      success: false,
      error: 'Invalid email format'
    }, 400);
  }

  try {
    // Send welcome email to new member
    await services.email.sendMemberWelcome({
      to: email,
      name
    });

    // Notify team about new member (with resume if uploaded)
    await services.email.notifyTeamNewMember({
      name,
      email,
      resume: resumeData
    });

    return c.json({
      success: true,
      message: 'Thank you for your interest in UMATT! Check your email for next steps.'
    });
  } catch (error) {
    console.error('Error processing member application:', error);
    return c.json({
      success: false,
      error: 'Failed to process application. Please try again.'
    }, 500);
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export { member };
