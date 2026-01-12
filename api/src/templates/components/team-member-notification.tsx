import {
  Section,
  Text,
  Link,
  Hr,
} from '@react-email/components';
import * as React from 'react';
import { EmailLayout, styles, colors, SUPPORT_EMAIL } from './base';

interface TeamMemberNotificationProps {
  name: string;
  email: string;
  hasResume: boolean;
  resumeUrl?: string;
  program?: string;
  year?: string;
  interest?: string;
  experience?: string;
}

export function TeamMemberNotificationEmail({ 
  name, 
  email, 
  hasResume,
  resumeUrl,
  program,
  year,
  interest,
  experience,
}: TeamMemberNotificationProps) {
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
      headerTitle="New Application Received"
      previewText={`New member application from ${name}`}
    >
      {/* Accent bar */}
      <Section style={{ backgroundColor: colors.accent, padding: '12px 24px' }}>
        <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#2b1d0f' }}>
          👋 A new student has applied to join UMATT!
        </Text>
      </Section>
      
      {/* Main content */}
      <Section style={styles.content}>
        <Section style={styles.notification}>
          <Text style={{ ...styles.paragraph, margin: 0, marginBottom: '8px' }}>
            <strong>New Application Submitted</strong>
          </Text>
          <Text style={{ ...styles.paragraph, margin: 0, fontSize: '12px', color: colors.textMuted }}>
            Submitted on: {submissionDate}
          </Text>
        </Section>
        
        {/* Personal Information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>
        
        <Section style={styles.infoBox}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top', width: '140px' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Name:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Text style={{ ...styles.value, margin: 0 }}>{name}</Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Email:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  <Link href={`mailto:${email}`} style={{ ...styles.link, fontSize: '14px' }}>{email}</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        
        {/* Academic Information */}
        {(program || year) && (
          <>
            <Text style={styles.sectionTitle}>
              Academic Information
            </Text>
            
            <Section style={styles.infoBox}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {program && (
                    <tr>
                      <td style={{ padding: '8px 0', verticalAlign: 'top', width: '140px' }}>
                        <Text style={{ ...styles.label, margin: 0 }}>Program/Major:</Text>
                      </td>
                      <td style={{ padding: '8px 0' }}>
                        <Text style={{ ...styles.value, margin: 0 }}>{program}</Text>
                      </td>
                    </tr>
                  )}
                  {year && (
                    <tr>
                      <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                        <Text style={{ ...styles.label, margin: 0 }}>Year of Study:</Text>
                      </td>
                      <td style={{ padding: '8px 0' }}>
                        <Text style={{ ...styles.value, margin: 0 }}>{year}</Text>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Section>
          </>
        )}
        
        {/* Interest & Experience */}
        <Text style={styles.sectionTitle}>
          Interest & Experience
        </Text>
        
        <Section style={styles.infoBox}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {interest && (
                <tr>
                  <td style={{ padding: '8px 0', verticalAlign: 'top', width: '140px' }}>
                    <Text style={{ ...styles.label, margin: 0 }}>Interest Area:</Text>
                  </td>
                  <td style={{ padding: '8px 0' }}>
                    <Text style={{ ...styles.value, margin: 0 }}>{interest}</Text>
                  </td>
                </tr>
              )}
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                  <Text style={{ ...styles.label, margin: 0 }}>Resume:</Text>
                </td>
                <td style={{ padding: '8px 0' }}>
                  {hasResume ? (
                    resumeUrl ? (
                      <Link href={resumeUrl} style={{ ...styles.button, padding: '8px 16px', fontSize: '12px' }}>
                        View Resume
                      </Link>
                    ) : (
                      <Text style={{ ...styles.value, margin: 0, color: colors.primary }}>
                        ✓ Resume attached to this email
                      </Text>
                    )
                  ) : (
                    <Text style={{ ...styles.value, margin: 0, fontStyle: 'italic', color: colors.textMuted }}>
                      No resume provided
                    </Text>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          
          {experience && (
            <Section style={{ marginTop: '16px' }}>
              <Text style={{ ...styles.label, marginBottom: '8px' }}>Experience:</Text>
              <Section style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '12px 16px', 
                borderRadius: '8px',
                borderLeft: `3px solid ${colors.accent}`,
              }}>
                <Text style={{ ...styles.value, margin: 0, whiteSpace: 'pre-wrap' as const }}>
                  {experience}
                </Text>
              </Section>
            </Section>
          )}
        </Section>
        
        <Hr style={styles.hr} />
        
        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>
        
        <Section style={{ textAlign: 'center' as const }}>
          <Link href={`mailto:${email}?subject=Welcome to UMATT!`} style={styles.button}>
            Reply to Applicant
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

export default TeamMemberNotificationEmail;
