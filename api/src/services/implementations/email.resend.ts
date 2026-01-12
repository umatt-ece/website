import { IEmailService, EmailData } from '../interfaces/email.interface';
import { templates } from '../../templates';

interface ResendEmailPayload {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: string; // base64 encoded
  }[];
}

interface ResendResponse {
  id?: string;
  error?: {
    message: string;
    name: string;
  };
}

/**
 * Resend Email Service implementation
 * @see https://resend.com/docs/api-reference/emails/send-email
 */
export class ResendEmailService implements IEmailService {
  private readonly apiUrl = 'https://api.resend.com/emails';

  constructor(
    private apiKey: string,
    private fromAddress: string,
    private teamEmail: string
  ) {}

  async send(data: EmailData): Promise<void> {
    const payload: ResendEmailPayload = {
      from: data.from || this.fromAddress,
      to: data.to,
      subject: data.subject,
      html: data.html,
    };

    // Add attachments if any
    if (data.attachments?.length) {
      payload.attachments = data.attachments.map((attachment) => ({
        filename: attachment.filename,
        content:
          typeof attachment.content === 'string'
            ? attachment.content
            : this.arrayBufferToBase64(attachment.content),
      }));
    }

    // In local dev mode without API key
    if (!this.apiKey || this.apiKey === 'dev') {
      console.log('[DEV MODE] Email would be sent via Resend:');
      console.log(`  From: ${payload.from}`);
      console.log(`  To: ${payload.to}`);
      console.log(`  Subject: ${payload.subject}`);
      console.log(`  Attachments: ${payload.attachments?.length || 0}`);
      return;
    }

    try {
      console.log(`[Resend] Sending email to ${data.to} from ${payload.from}`);
      
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result: ResendResponse = await response.json();
      console.log(`[Resend] Response status: ${response.status}`, JSON.stringify(result));

      if (!response.ok) {
        throw new Error(
          result.error?.message || `Resend API error: ${response.status}`
        );
      }

      console.log(`Email sent successfully via Resend to ${data.to}, id: ${result.id}`);
    } catch (error) {
      console.error('Failed to send email via Resend:', error);
      throw error;
    }
  }

  async sendSponsorWelcome(data: {
    to: string;
    companyName: string;
    contactName: string;
    sponsorshipPackage: ArrayBuffer;
  }): Promise<void> {
    await this.send({
      to: data.to,
      subject: `Thank You for Supporting UMATT, ${data.companyName}!`,
      html: templates.sponsorWelcome({
        companyName: data.companyName,
        contactName: data.contactName,
      }),
      attachments: [
        {
          filename: 'UMATT-Sponsorship-Package.pdf',
          content: data.sponsorshipPackage,
          contentType: 'application/pdf',
        },
      ],
    });
  }

  async notifyTeamNewSponsor(data: {
    companyName: string;
    contactName: string;
    contactEmail: string;
    message?: string;
  }): Promise<void> {
    await this.send({
      to: this.teamEmail,
      subject: `🎉 New Sponsor Inquiry: ${data.companyName}`,
      html: templates.teamSponsorNotification({
        companyName: data.companyName,
        contactName: data.contactName,
        contactEmail: data.contactEmail,
        message: data.message,
      }),
    });
  }

  async sendMemberWelcome(data: { to: string; name: string }): Promise<void> {
    await this.send({
      to: data.to,
      subject: 'Welcome to UMATT - Thanks for Your Interest!',
      html: templates.memberWelcome({ name: data.name }),
    });
  }

  async notifyTeamNewMember(data: {
    name: string;
    email: string;
    resume?: {
      filename: string;
      content: ArrayBuffer;
      contentType: string;
    };
  }): Promise<void> {
    const attachments = data.resume
      ? [
          {
            filename: data.resume.filename,
            content: data.resume.content,
            contentType: data.resume.contentType,
          },
        ]
      : [];

    await this.send({
      to: this.teamEmail,
      subject: `👋 New Member Application: ${data.name}`,
      html: templates.teamMemberNotification({
        name: data.name,
        email: data.email,
        hasResume: !!data.resume,
      }),
      attachments,
    });
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}
