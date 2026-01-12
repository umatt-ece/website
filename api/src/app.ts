import { IEmailService, IStorageService } from './services/interfaces';
import { CFEmailService, R2StorageService, ResendEmailService } from './services/implementations';

/**
 * Environment bindings from Cloudflare
 */
export interface Env {
  // Email binding (for Cloudflare Email)
  SEND_EMAIL: SendEmail;
  
  // R2 bucket for resumes
  RESUME_BUCKET: R2Bucket;
  
  // Assets bucket for sponsorship package, etc.
  ASSETS_BUCKET: R2Bucket;
  
  // Environment variables
  API_SECRET: string;
  FROM_EMAIL: string;
  TEAM_EMAIL: string;
  ALLOWED_ORIGINS: string; // comma-separated
  
  // Email provider: 'resend' or 'cloudflare' (default: cloudflare)
  EMAIL_PROVIDER?: string;
  // Resend API key (required if EMAIL_PROVIDER is 'resend')
  RESEND_API_KEY?: string;
}

/**
 * Application services container
 */
export interface AppServices {
  email: IEmailService;
  resumeStorage: IStorageService;
  assetsStorage: IStorageService;
}

/**
 * Create application services from environment bindings
 * Called per-request (Workers are stateless)
 */
export function createApp(env: Env): AppServices {
  const fromEmail = env.FROM_EMAIL || 'noreply@umatt.ca';
  const teamEmail = env.TEAM_EMAIL || 'umattinfo@gmail.com';

  console.log(`[createApp] EMAIL_PROVIDER: ${env.EMAIL_PROVIDER}, RESEND_API_KEY: ${env.RESEND_API_KEY ? 'set' : 'not set'}`);

  // Select email provider based on environment variable
  const emailService: IEmailService = 
    env.EMAIL_PROVIDER === 'resend' && env.RESEND_API_KEY
      ? new ResendEmailService(env.RESEND_API_KEY, fromEmail, teamEmail)
      : new CFEmailService(env.SEND_EMAIL || null, fromEmail, teamEmail);

  console.log(`[createApp] Using email service: ${emailService.constructor.name}`);

  return {
    email: emailService,
    resumeStorage: new R2StorageService(env.RESUME_BUCKET),
    assetsStorage: new R2StorageService(env.ASSETS_BUCKET),
  };
}

/**
 * Get allowed origins for CORS
 */
export function getAllowedOrigins(env: Env): string[] {
  const origins = env.ALLOWED_ORIGINS || 'https://umatt.ca,http://localhost:5173';
  return origins.split(',').map(o => o.trim());
}
