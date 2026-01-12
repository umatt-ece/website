import { renderToStaticMarkup } from 'react-dom/server';
import * as React from 'react';
import { MemberWelcomeEmail } from './components/member-welcome';
import { TeamMemberNotificationEmail } from './components/team-member-notification';
import { SponsorWelcomeEmail } from './components/sponsor-welcome';
import { TeamSponsorNotificationEmail } from './components/team-sponsor-notification';

/**
 * Render React Email component to HTML string
 */
function render(component: React.ReactElement): string {
  return '<!DOCTYPE html>' + renderToStaticMarkup(component);
}

/**
 * Email templates - renders React Email components to HTML strings
 */
export const templates = {
  /**
   * Welcome email for new members
   */
  memberWelcome: (data: { name: string }): string => {
    return render(React.createElement(MemberWelcomeEmail, data));
  },

  /**
   * Team notification for new member applications
   */
  teamMemberNotification: (data: {
    name: string;
    email: string;
    hasResume: boolean;
    resumeUrl?: string;
    program?: string;
    year?: string;
    interest?: string;
    experience?: string;
  }): string => {
    return render(React.createElement(TeamMemberNotificationEmail, data));
  },

  /**
   * Welcome email for new sponsors
   */
  sponsorWelcome: (data: { companyName: string; contactName: string }): string => {
    return render(React.createElement(SponsorWelcomeEmail, data));
  },

  /**
   * Team notification for new sponsor inquiries
   */
  teamSponsorNotification: (data: {
    companyName: string;
    contactName: string;
    contactEmail: string;
    message?: string;
  }): string => {
    return render(React.createElement(TeamSponsorNotificationEmail, data));
  },
};

export default templates;
