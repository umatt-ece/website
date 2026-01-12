import {
  Section,
  Text,
  Link,
  Hr,
} from '@react-email/components';
import * as React from 'react';
import { EmailLayout, styles, colors, SUPPORT_EMAIL } from './base';

interface TeamSponsorNotificationProps {
  companyName: string;
  contactName: string;
  contactEmail: string;
  message?: string;
}

export function TeamSponsorNotificationEmail({ 
  companyName, 
  contactName, 
  contactEmail,
  message,
}: TeamSponsorNotificationProps) {
  const submissionDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <EmailLayout 
      headerTitle="New Sponsor Inquiry!"
      previewText={`🎉 New sponsor inquiry from ${companyName}`}
    >
      {/* Accent bar */}
      <Section style={{ backgroundColor: colors.accent, padding: '12px 24px' }}>
        <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#2b1d0f' }}>
          🎉 Great news! A potential sponsor has reached out!
        </Text>
      </Section>
      
      {/* Main content */}
      <Section style={styles.content}>
        <Section style={styles.notification}>
          <Text style={{ ...styles.paragraph, margin: 0, marginBottom: '8px' }}>
            <strong>New Sponsorship Inquiry Received</strong>
          </Text>
          <Text style={{ ...styles.paragraph, margin: 0, fontSize: '12px', color: colors.textMuted }}>
            Submitted on: {submissionDate}
          </Text>
        </Section>
        
        {/* Company Information */}
        <Text style={styles.sectionTitle}>
          Company Information
        </Text>
        
        <Section style={styles.infoBox}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top', width: '140px' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Company:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.value, margin: 0, fontWeight: 600, fontSize: '16px' }}>
                    {companyName}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        
        {/* Contact Information */}
        <Text style={styles.sectionTitle}>
          Contact Information
        </Text>
        
        <Section style={styles.infoBox}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top', width: '140px' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Contact Name:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.value, margin: 0 }}>{contactName}</Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Email:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Link href={`mailto:${contactEmail}`} style={{ ...styles.link, fontSize: '14px' }}>
                    {contactEmail}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        
        {/* Message */}
        {message && (
          <>
            <Text style={styles.sectionTitle}>
              Their Message
            </Text>
            
            <Section style={{ 
              ...styles.infoBox,
              borderLeft: `4px solid ${colors.accent}`,
              backgroundColor: '#fefef5',
            }}>
              <Text style={{ ...styles.paragraph, margin: 0, whiteSpace: 'pre-wrap' as const }}>
                {message}
              </Text>
            </Section>
          </>
        )}
        
        <Hr style={styles.hr} />
        
        {/* Suggested Actions */}
        <Text style={styles.sectionTitle}>
          Suggested Next Steps
        </Text>
        
        <Section style={{ marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top', width: '24px' }}>
                  <Text style={{ margin: 0, color: colors.accent, fontWeight: 700 }}>1.</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    Respond within 24-48 hours while interest is high
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                  <Text style={{ margin: 0, color: colors.accent, fontWeight: 700 }}>2.</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    Schedule an introductory call to discuss partnership options
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                  <Text style={{ margin: 0, color: colors.accent, fontWeight: 700 }}>3.</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    Prepare a customized sponsorship proposal if needed
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        
        {/* Quick Actions */}
        <Section style={{ textAlign: 'center' as const }}>
          <Link 
            href={`mailto:${contactEmail}?subject=Re: UMATT Sponsorship Inquiry - ${companyName}`} 
            style={styles.button}
          >
            Reply to {contactName.split(' ')[0]}
          </Link>
        </Section>
        
        <Hr style={styles.hr} />
        
        <Text style={{ ...styles.paragraph, fontSize: '12px', color: colors.textMuted, textAlign: 'center' as const }}>
          This notification was sent to <Link href={`mailto:${SUPPORT_EMAIL}`} style={styles.link}>{SUPPORT_EMAIL}</Link>
        </Text>
      </Section>
    </EmailLayout>
  );
}

export default TeamSponsorNotificationEmail;
