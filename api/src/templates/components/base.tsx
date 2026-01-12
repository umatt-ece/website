import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Hr,
} from '@react-email/components';
import * as React from 'react';

// Brand colors
export const colors = {
  primary: '#385E9D',      // UMATT Blue
  secondary: '#653819',    // UMATT Brown
  accent: '#F2A900',       // UMATT Gold
  text: '#222222',
  textLight: '#5c6670',
  textMuted: '#777777',
  background: '#f4f5f7',
  white: '#ffffff',
  border: '#e9ecef',
};

// Common styles
export const styles = {
  body: {
    backgroundColor: colors.background,
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    backgroundColor: colors.white,
    borderRadius: '14px',
    overflow: 'hidden' as const,
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  },
  header: {
    backgroundColor: colors.primary,
    padding: '24px',
    textAlign: 'center' as const,
  },
  logo: {
    width: '120px',
    height: 'auto',
  },
  headerTitle: {
    color: colors.white,
    fontSize: '24px',
    fontWeight: 700,
    margin: '16px 0 0 0',
  },
  accentBar: {
    backgroundColor: colors.accent,
    padding: '14px 24px',
  },
  content: {
    padding: '24px 28px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: `2px solid ${colors.accent}33`,
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '1.7',
    color: colors.text,
    margin: '0 0 16px 0',
  },
  label: {
    fontWeight: 700,
    color: colors.secondary,
    display: 'inline-block',
    width: '140px',
    verticalAlign: 'top',
  },
  value: {
    color: colors.text,
  },
  button: {
    backgroundColor: colors.accent,
    color: '#2b1d0f',
    padding: '12px 24px',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '14px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    border: `2px solid ${colors.accent}`,
    color: colors.secondary,
    padding: '10px 22px',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '14px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  footer: {
    borderTop: `1px solid ${colors.border}`,
    padding: '20px 28px',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '12px',
    color: colors.textMuted,
    margin: '0 0 8px 0',
  },
  link: {
    color: colors.primary,
    textDecoration: 'none',
  },
  hr: {
    borderColor: colors.accent,
    margin: '20px 0',
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    padding: '16px 20px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    marginBottom: '20px',
  },
  notification: {
    backgroundColor: '#f9f9f9',
    padding: '16px 20px',
    borderLeft: `4px solid ${colors.accent}`,
    marginBottom: '20px',
  },
};

// Logo URL
export const LOGO_URL = 'https://umatt.org/assets/logo-Dv8e2Fz9.png';
export const WEBSITE_URL = 'https://umatt.org';
export const SUPPORT_EMAIL = 'umattinfo@gmail.com';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText?: string;
  headerTitle?: string;
}

export function EmailLayout({ children, previewText, headerTitle }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        {/* Preheader (hidden) */}
        {previewText && (
          <div style={{ display: 'none', overflow: 'hidden', lineHeight: '1px', opacity: 0, maxHeight: 0, maxWidth: 0 }}>
            {previewText}
          </div>
        )}
        
        <Container style={{ padding: '28px 12px' }}>
          <Container style={styles.container}>
            {/* Header */}
            <Section style={styles.header}>
              <Img src={LOGO_URL} alt="UMATT Logo" style={styles.logo} />
              {headerTitle && (
                <Text style={styles.headerTitle}>{headerTitle}</Text>
              )}
            </Section>
            
            {/* Content */}
            {children}
            
            {/* Footer */}
            <Section style={styles.footer}>
              <Hr style={styles.hr} />
              <Text style={styles.footerText}>
                This is an automated notification from UMATT.
              </Text>
              <Text style={styles.footerText}>
                Website: <Link href={WEBSITE_URL} style={styles.link}>umatt.org</Link> • 
                Email: <Link href={`mailto:${SUPPORT_EMAIL}`} style={styles.link}>{SUPPORT_EMAIL}</Link>
              </Text>
              <Text style={styles.footerText}>
                © {new Date().getFullYear()} University of Manitoba Association of Tiny Tractors
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
}
