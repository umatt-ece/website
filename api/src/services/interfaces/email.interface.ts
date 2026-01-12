/**
 * Email service interface
 */
export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
  attachments?: EmailAttachment[];
}

export interface EmailAttachment {
  filename: string;
  content: ArrayBuffer | string;
  contentType: string;
}

export interface IEmailService {
  /**
   * Send a generic email
   */
  send(data: EmailData): Promise<void>;

  /**
   * Send welcome email to new sponsor with sponsorship package
   */
  sendSponsorWelcome(data: {
    to: string;
    companyName: string;
    contactName: string;
    sponsorshipPackage: ArrayBuffer;
  }): Promise<void>;

  /**
   * Notify team about new sponsor inquiry
   */
  notifyTeamNewSponsor(data: {
    companyName: string;
    contactName: string;
    contactEmail: string;
    message?: string;
  }): Promise<void>;

  /**
   * Send welcome email to new member with social links
   */
  sendMemberWelcome(data: {
    to: string;
    name: string;
  }): Promise<void>;

  /**
   * Notify team about new member application (with optional resume)
   */
  notifyTeamNewMember(data: {
    name: string;
    email: string;
    resume?: {
      filename: string;
      content: ArrayBuffer;
      contentType: string;
    };
  }): Promise<void>;
}
