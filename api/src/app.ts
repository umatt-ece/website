import { IEmailService, IStorageService } from './services/interfaces';
import { CFEmailService, R2StorageService } from './services/implementations';

/**
 * Environment bindings from Cloudflare
 */
export interface Env {
  // Email binding
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
  return {
    email: new CFEmailService(
      env.SEND_EMAIL || null,  // May be null in local dev
      env.FROM_EMAIL || 'noreply@umatt.ca',
      env.TEAM_EMAIL || 'umattinfo@gmail.com'
    ),
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
