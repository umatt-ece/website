import {
  Section,
  Text,
  Link,
  Hr,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';
import { EmailLayout, styles, colors, WEBSITE_URL } from './base';

interface SponsorWelcomeProps {
  companyName: string;
  contactName: string;
}

export function SponsorWelcomeEmail({ companyName, contactName }: SponsorWelcomeProps) {
  const firstName = contactName.split(' ')[0];
  
  return (
    <EmailLayout 
      headerTitle="Thank You for Your Support!"
      previewText={`Thank you for your interest in sponsoring UMATT, ${companyName}!`}
    >
      {/* Accent bar */}
      <Section style={{ backgroundColor: colors.accent, padding: '12px 24px' }}>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>
                <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#2b1d0f' }}>
                  Partnership Inquiry Received
                </Text>
              </td>
              <td style={{ textAlign: 'right' as const }}>
                <Text style={{ margin: 0, fontSize: '12px', color: '#2b1d0f' }}>
                  Ref: UMATT-{Date.now().toString(36).toUpperCase()}
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      
      {/* Main content */}
      <Section style={styles.content}>
        <Text style={{ ...styles.paragraph, fontSize: '20px', fontWeight: 600, color: colors.secondary, lineHeight: '1.4' }}>
          Thanks, {firstName} — we received your message!
        </Text>
        
        <Text style={styles.paragraph}>
          On behalf of the entire UMATT team, thank you for your interest in supporting 
          the <strong>University of Manitoba Association of Tiny Tractors</strong>!
        </Text>
        
        <Text style={styles.paragraph}>
          Your partnership inquiry for <strong>{companyName}</strong> has been received. 
          Our team will review it and get back to you shortly.
        </Text>
        
        <Section style={styles.infoBox}>
          <Text style={{ ...styles.paragraph, margin: 0 }}>
            <strong style={{ color: colors.secondary }}>📎 Sponsorship Package Attached</strong>
          </Text>
          <Text style={{ ...styles.paragraph, margin: '8px 0 0 0', fontSize: '13px' }}>
            We've attached our sponsorship package for your reference. It includes details about 
            partnership tiers, benefits, and how your support helps our team.
          </Text>
        </Section>
        
        <Hr style={styles.hr} />
        
        <Text style={styles.sectionTitle}>
          What Happens Next
        </Text>
        
        <Section style={{ marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px 0', verticalAlign: 'top', width: '32px' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: colors.accent, 
                    borderRadius: '50%',
                    marginTop: '4px',
                  }}></span>
                </td>
                <td style={{ padding: '10px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    We'll review how your interests align with our current projects.
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px 0', verticalAlign: 'top' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: colors.accent, 
                    borderRadius: '50%',
                    marginTop: '4px',
                  }}></span>
                </td>
                <td style={{ padding: '10px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    A team member will reach out to schedule a quick introductory call.
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px 0', verticalAlign: 'top' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: colors.accent, 
                    borderRadius: '50%',
                    marginTop: '4px',
                  }}></span>
                </td>
                <td style={{ padding: '10px 0' }}>
                  <Text style={{ ...styles.paragraph, margin: 0 }}>
                    We'll work together to create a partnership that benefits everyone.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        
        <Hr style={styles.hr} />
        
        <Text style={styles.sectionTitle}>
          About UMATT
        </Text>
        
        <Text style={styles.paragraph}>
          UMATT is a student-led engineering design team that designs, builds, and competes with 
          quarter-scale tractors at the <strong>ASABE International Quarter-Scale Tractor Student Design Competition</strong>.
        </Text>
        
        <Text style={styles.paragraph}>
          Your support helps us:
        </Text>
        
        <Section style={{ paddingLeft: '16px', marginBottom: '20px' }}>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Design and manufacture innovative tractor components
          </Text>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Train the next generation of engineers
          </Text>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Represent the University of Manitoba at international competitions
          </Text>
        </Section>
        
        <Row>
          <Column align="center">
            <Link href={WEBSITE_URL} style={styles.button}>
              Visit Our Website
            </Link>
          </Column>
        </Row>
        
        <Hr style={styles.hr} />
        
        <Text style={styles.paragraph}>
          We truly appreciate your interest in supporting UMATT and look forward to building 
          a great partnership with <strong>{companyName}</strong>!
        </Text>
        
        <Text style={{ ...styles.paragraph, marginBottom: '4px' }}>
          Warm regards,
        </Text>
        <Text style={{ ...styles.paragraph, fontWeight: 700, color: colors.secondary, marginBottom: '0' }}>
          The UMATT Team
        </Text>
      </Section>
    </EmailLayout>
  );
}

export default SponsorWelcomeEmail;
