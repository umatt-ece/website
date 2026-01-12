import { Mailbox, createMimeMessage } from 'mimetext';
import { EmailMessage } from 'cloudflare:email';
import { IEmailService, EmailData } from '../interfaces/email.interface';
import { templates } from '../../templates';

/**
 * Cloudflare Email Service implementation using CF Workers Email Routing
 */
export class CFEmailService implements IEmailService {
  constructor(
    private sendEmail: SendEmail | null,
    private fromAddress: string,
    private teamEmail: string
  ) {}

  async send(data: EmailData): Promise<void> {
    const msg = createMimeMessage();
    
    msg.setSender({ name: 'UMATT', addr: data.from || this.fromAddress } as Mailbox);
    msg.setRecipient(data.to);
    msg.setSubject(data.subject);
    msg.addMessage({ contentType: 'text/html', data: data.html });

    // Add attachments if any
    if (data.attachments?.length) {
      for (const attachment of data.attachments) {
        const content = typeof attachment.content === 'string' 
          ? attachment.content 
          : this.arrayBufferToBase64(attachment.content);
        
        msg.addAttachment({
          filename: attachment.filename,
          contentType: attachment.contentType,
          data: content,
          encoding: 'base64'
        });
      }
    }

    // In local dev mode, sendEmail binding may not be available
    if (!this.sendEmail) {
      console.log('[DEV MODE] Email would be sent:');
      console.log(`  To: ${data.to}`);
      console.log(`  Subject: ${data.subject}`);
      console.log(`  Attachments: ${data.attachments?.length || 0}`);
      return;
    }

    try {
      const message = new EmailMessage(
        data.from || this.fromAddress,
        data.to,
        msg.asRaw()
      );

      await this.sendEmail.send(message);
      console.log(`Email sent successfully to ${data.to}`);
    } catch (error) {
      console.error('Failed to send email:', error);
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
        contactName: data.contactName
      }),
      attachments: [{
        filename: 'UMATT-Sponsorship-Package.pdf',
        content: data.sponsorshipPackage,
        contentType: 'application/pdf'
      }]
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
        message: data.message
      })
    });
  }

  async sendMemberWelcome(data: {
    to: string;
    name: string;
  }): Promise<void> {
    await this.send({
      to: data.to,
      subject: 'Welcome to UMATT - Thanks for Your Interest!',
      html: templates.memberWelcome({ name: data.name })
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
    const attachments = data.resume ? [{
      filename: data.resume.filename,
      content: data.resume.content,
      contentType: data.resume.contentType
    }] : [];

    await this.send({
      to: this.teamEmail,
      subject: `👋 New Member Application: ${data.name}`,
      html: templates.teamMemberNotification({
        name: data.name,
        email: data.email,
        hasResume: !!data.resume
      }),
      attachments
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
