import { Hono } from 'hono';
import { AppServices, Env } from '../app';
import { R2StorageService } from '../services/implementations/storage.r2';

const sponsor = new Hono<{ Bindings: Env; Variables: { services: AppServices } }>();

/**
 * POST /sponsor/inquiry
 * Handle new sponsor inquiry:
 * 1. Send thank you email to sponsor with sponsorship package
 * 2. Notify team about the new sponsor
 */
sponsor.post('/inquiry', async (c) => {
  const services = c.get('services');
  
  const body = await c.req.json<{
    companyName: string;
    contactName: string;
    email: string;
    message?: string;
  }>();

  // Validate required fields
  if (!body.companyName || !body.contactName || !body.email) {
    return c.json({ 
      success: false, 
      error: 'Missing required fields: companyName, contactName, email' 
    }, 400);
  }

  // Validate email format
  if (!isValidEmail(body.email)) {
    return c.json({ 
      success: false, 
      error: 'Invalid email format' 
    }, 400);
  }

  try {
    // Get sponsorship package from assets
    const sponsorshipPackage = await services.assetsStorage.get('sponsorship-package.pdf');
    
    if (!sponsorshipPackage) {
      console.error('Sponsorship package not found in assets');
      // Continue without attachment - still send emails
    }

    // Send thank you email to sponsor (with attachment if available)
    await services.email.sendSponsorWelcome({
      to: body.email,
      companyName: body.companyName,
      contactName: body.contactName,
      sponsorshipPackage: sponsorshipPackage?.content || new ArrayBuffer(0)
    });

    // Notify team about new sponsor
    await services.email.notifyTeamNewSponsor({
      companyName: body.companyName,
      contactName: body.contactName,
      contactEmail: body.email,
      message: body.message
    });

    return c.json({ 
      success: true, 
      message: 'Thank you for your interest! We will be in touch shortly.' 
    });
  } catch (error) {
    console.error('Error processing sponsor inquiry:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to process inquiry. Please try again.' 
    }, 500);
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export { sponsor };
