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

interface MemberWelcomeProps {
  name: string;
}

export function MemberWelcomeEmail({ name }: MemberWelcomeProps) {
  const firstName = name.split(' ')[0];
  
  return (
    <EmailLayout 
      headerTitle="Welcome to UMATT!"
      previewText={`Welcome to UMATT, ${firstName}! We're excited to have you join our team.`}
    >
      {/* Accent bar */}
      <Section style={{ backgroundColor: colors.accent, padding: '12px 24px' }}>
        <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#2b1d0f' }}>
          Your journey with UMATT begins here! 🚜
        </Text>
      </Section>
      
      {/* Main content */}
      <Section style={styles.content}>
        <Text style={{ ...styles.paragraph, fontSize: '18px', fontWeight: 600, color: colors.secondary }}>
          Hi {firstName},
        </Text>
        
        <Text style={styles.paragraph}>
          Thank you for your interest in joining the <strong>University of Manitoba Association of Tiny Tractors</strong>! 
          We're thrilled to have you as part of our community.
        </Text>
        
        <Section style={styles.notification}>
          <Text style={{ ...styles.paragraph, margin: 0 }}>
            <strong>What happens next?</strong> Our team will review your application and reach out 
            to discuss how you can get involved with our projects.
          </Text>
        </Section>
        
        <Text style={{ ...styles.sectionTitle, marginTop: '24px' }}>
          About UMATT
        </Text>
        
        <Text style={styles.paragraph}>
          UMATT is a student-led engineering design team that designs, builds, and competes with 
          quarter-scale tractors at the <strong>ASABE International Quarter-Scale Tractor Student Design Competition</strong>.
        </Text>
        
        <Text style={styles.paragraph}>
          As a member, you'll have the opportunity to:
        </Text>
        
        <Section style={{ paddingLeft: '16px', marginBottom: '20px' }}>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Gain hands-on engineering experience
          </Text>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Work with industry-standard tools and equipment
          </Text>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Collaborate with a passionate team of students
          </Text>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            <span style={{ color: colors.accent, fontWeight: 700 }}>•</span> Compete at an international engineering competition
          </Text>
        </Section>
        
        <Hr style={styles.hr} />
        
        <Text style={{ ...styles.sectionTitle }}>
          Connect With Us
        </Text>
        
        <Row>
          <Column align="center">
            <Link href={WEBSITE_URL} style={styles.button}>
              Visit Our Website
            </Link>
          </Column>
        </Row>
        
        <Section style={{ marginTop: '24px', textAlign: 'center' as const }}>
          <Text style={{ ...styles.paragraph, marginBottom: '8px' }}>
            Follow us on social media:
          </Text>
          <Text style={styles.paragraph}>
            <Link href="https://www.instagram.com/umatt_team" style={{ ...styles.link, marginRight: '16px' }}>Instagram</Link>
            <Link href="https://www.facebook.com/profile.php?id=100057560615097" style={{ ...styles.link, marginRight: '16px' }}>Facebook</Link>
            <Link href="https://www.linkedin.com/company/umatt/" style={styles.link}>LinkedIn</Link>
          </Text>
        </Section>
        
        <Hr style={styles.hr} />
        
        <Text style={styles.paragraph}>
          We look forward to working with you!
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

export default MemberWelcomeEmail;
