/**
 * Email templates for UMATT
 * Using raw HTML with inline CSS for maximum email client compatibility
 */

const UMATT_LOGO = 'https://umatt.ca/images/logo.png';
const WEBSITE_URL = 'https://umatt.ca';
const INSTAGRAM_URL = 'https://www.instagram.com/umatt_team';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100057560615097';
const LINKEDIN_URL = 'https://www.linkedin.com/company/umatt/';
const TEAM_PAGE_URL = 'https://umatt.ca/team';

const baseStyles = {
  wrapper: 'margin:0; padding:0; font-family:Arial,Helvetica,sans-serif; background:#f4f4f5;',
  container: 'background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);',
  header: 'background:#1e3a5f; padding:30px; text-align:center;',
  headerTitle: 'color:#ffffff; margin:0; font-size:28px; font-weight:700;',
  body: 'padding:40px 30px;',
  paragraph: 'color:#374151; font-size:16px; line-height:1.6; margin:0 0 20px 0;',
  button: 'display:inline-block; background:#2563eb; color:#ffffff; padding:14px 28px; text-decoration:none; border-radius:6px; font-weight:600; margin:10px 5px;',
  footer: 'background:#f9fafb; padding:30px; text-align:center; border-top:1px solid #e5e7eb;',
  footerText: 'color:#6b7280; font-size:14px; margin:0 0 15px 0;',
  socialLink: 'display:inline-block; margin:0 8px; color:#1e3a5f; text-decoration:none; font-weight:500;',
};

function wrapTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UMATT</title>
</head>
<body style="${baseStyles.wrapper}">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="${baseStyles.container}">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function header(title: string): string {
  return `
<tr>
  <td style="${baseStyles.header}">
    <img src="${UMATT_LOGO}" alt="UMATT Logo" width="80" style="margin-bottom:15px;"/>
    <h1 style="${baseStyles.headerTitle}">${title}</h1>
  </td>
</tr>`;
}

function footer(): string {
  return `
<tr>
  <td style="${baseStyles.footer}">
    <p style="${baseStyles.footerText}">Connect with us</p>
    <div style="margin-bottom:20px;">
      <a href="${INSTAGRAM_URL}" style="${baseStyles.socialLink}">Instagram</a>
      <a href="${FACEBOOK_URL}" style="${baseStyles.socialLink}">Facebook</a>
      <a href="${LINKEDIN_URL}" style="${baseStyles.socialLink}">LinkedIn</a>
    </div>
    <p style="${baseStyles.footerText}">
      University of Manitoba Association of Tiny Tractors<br/>
      <a href="${WEBSITE_URL}" style="color:#2563eb;">umatt.ca</a>
    </p>
  </td>
</tr>`;
}

export const templates = {
  /**
   * Welcome email for new sponsors
   */
  sponsorWelcome: (data: { companyName: string; contactName: string }) => wrapTemplate(`
    ${header('Thank You for Your Support!')}
    <tr>
      <td style="${baseStyles.body}">
        <p style="${baseStyles.paragraph}">
          Dear ${data.contactName},
        </p>
        <p style="${baseStyles.paragraph}">
          On behalf of the entire UMATT team, thank you for choosing to sponsor 
          <strong>${data.companyName}</strong> with the University of Manitoba Association of Tiny Tractors!
        </p>
        <p style="${baseStyles.paragraph}">
          Your support helps us design, build, and compete with our quarter-scale tractors 
          at the ASABE International Quarter-Scale Tractor Student Design Competition.
        </p>
        <p style="${baseStyles.paragraph}">
          We've attached our sponsorship package for your reference. A member of our team 
          will reach out shortly to discuss the next steps and answer any questions you may have.
        </p>
        <p style="${baseStyles.paragraph}">
          We truly appreciate your partnership and look forward to working with you!
        </p>
        <p style="${baseStyles.paragraph}">
          Warm regards,<br/>
          <strong>The UMATT Team</strong>
        </p>
        <div style="text-align:center; margin-top:30px;">
          <a href="${WEBSITE_URL}" style="${baseStyles.button}">Visit Our Website</a>
          <a href="${TEAM_PAGE_URL}" style="${baseStyles.button}">Meet the Team</a>
        </div>
      </td>
    </tr>
    ${footer()}
  `),

  /**
   * Internal notification for new sponsor inquiry
   */
  teamSponsorNotification: (data: { 
    companyName: string; 
    contactName: string; 
    contactEmail: string;
    message?: string;
  }) => wrapTemplate(`
    ${header('New Sponsor Inquiry!')}
    <tr>
      <td style="${baseStyles.body}">
        <p style="${baseStyles.paragraph}">
          <strong>Great news!</strong> A new sponsor has reached out to UMATT.
        </p>
        <table width="100%" cellpadding="10" style="background:#f0f9ff; border-radius:8px; margin:20px 0;">
          <tr>
            <td style="color:#1e40af; font-weight:600;">Company</td>
            <td style="color:#374151;">${data.companyName}</td>
          </tr>
          <tr>
            <td style="color:#1e40af; font-weight:600;">Contact Name</td>
            <td style="color:#374151;">${data.contactName}</td>
          </tr>
          <tr>
            <td style="color:#1e40af; font-weight:600;">Email</td>
            <td style="color:#374151;">
              <a href="mailto:${data.contactEmail}" style="color:#2563eb;">${data.contactEmail}</a>
            </td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="color:#1e40af; font-weight:600;">Message</td>
            <td style="color:#374151;">${data.message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="${baseStyles.paragraph}">
          Please reach out to them as soon as possible to discuss sponsorship opportunities.
        </p>
        <div style="text-align:center; margin-top:30px;">
          <a href="mailto:${data.contactEmail}" style="${baseStyles.button}">Reply to Sponsor</a>
        </div>
      </td>
    </tr>
    ${footer()}
  `),

  /**
   * Welcome email for new members
   */
  memberWelcome: (data: { name: string }) => wrapTemplate(`
    ${header('Welcome to UMATT!')}
    <tr>
      <td style="${baseStyles.body}">
        <p style="${baseStyles.paragraph}">
          Hi ${data.name},
        </p>
        <p style="${baseStyles.paragraph}">
          Thank you for your interest in joining the University of Manitoba Association 
          of Tiny Tractors! We're excited that you want to be part of our team.
        </p>
        <p style="${baseStyles.paragraph}">
          While we review your application, we encourage you to explore our team and 
          learn more about what we do:
        </p>
        <div style="text-align:center; margin:30px 0;">
          <a href="${TEAM_PAGE_URL}" style="${baseStyles.button}">Meet Our Team</a>
          <a href="${WEBSITE_URL}" style="${baseStyles.button}">Visit Website</a>
        </div>
        <p style="${baseStyles.paragraph}">
          <strong>Follow us on social media to stay updated:</strong>
        </p>
        <div style="text-align:center; margin:20px 0; padding:20px; background:#f9fafb; border-radius:8px;">
          <a href="${INSTAGRAM_URL}" style="${baseStyles.button}; background:#E4405F;">Instagram</a>
          <a href="${LINKEDIN_URL}" style="${baseStyles.button}; background:#0A66C2;">LinkedIn</a>
          <a href="${FACEBOOK_URL}" style="${baseStyles.button}; background:#1877F2;">Facebook</a>
        </div>
        <p style="${baseStyles.paragraph}">
          A team member will be in touch soon to discuss next steps!
        </p>
        <p style="${baseStyles.paragraph}">
          Best regards,<br/>
          <strong>The UMATT Team</strong>
        </p>
      </td>
    </tr>
    ${footer()}
  `),

  /**
   * Internal notification for new member application
   */
  teamMemberNotification: (data: { 
    name: string; 
    email: string;
    hasResume: boolean;
  }) => wrapTemplate(`
    ${header('New Member Application!')}
    <tr>
      <td style="${baseStyles.body}">
        <p style="${baseStyles.paragraph}">
          <strong>A new potential teammate has applied!</strong>
        </p>
        <table width="100%" cellpadding="10" style="background:#f0fdf4; border-radius:8px; margin:20px 0;">
          <tr>
            <td style="color:#166534; font-weight:600;">Name</td>
            <td style="color:#374151;">${data.name}</td>
          </tr>
          <tr>
            <td style="color:#166534; font-weight:600;">Email</td>
            <td style="color:#374151;">
              <a href="mailto:${data.email}" style="color:#2563eb;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="color:#166534; font-weight:600;">Resume</td>
            <td style="color:#374151;">${data.hasResume ? '✅ Attached to this email' : '❌ Not provided'}</td>
          </tr>
        </table>
        <p style="${baseStyles.paragraph}">
          Please reach out to welcome them and discuss how they can contribute to the team.
        </p>
        <div style="text-align:center; margin-top:30px;">
          <a href="mailto:${data.email}" style="${baseStyles.button}">Contact Applicant</a>
        </div>
      </td>
    </tr>
    ${footer()}
  `),
};
