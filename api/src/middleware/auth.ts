import { Context, Next } from 'hono';
import { Env, getAllowedOrigins } from '../app';

/**
 * Validate API request authentication
 */
export function validateApiKey(apiKey: string | null | undefined, env: Env): boolean {
  if (!env.API_SECRET) {
    console.warn('API_SECRET not configured - skipping auth in development');
    return true;
  }
  return apiKey === env.API_SECRET;
}

/**
 * Check if origin is allowed
 */
export function isAllowedOrigin(origin: string | null | undefined, env: Env): boolean {
  if (!origin) return false;
  const allowedOrigins = getAllowedOrigins(env);
  return allowedOrigins.some(allowed => origin.startsWith(allowed));
}

/**
 * Auth middleware for Hono
 */
export async function authMiddleware(c: Context<{ Bindings: Env }>, next: Next) {
  const apiKey = c.req.header('x-api-key');
  const origin = c.req.header('origin');

  // Validate origin
  if (!isAllowedOrigin(origin, c.env)) {
    return c.json({ error: 'Forbidden' }, 403);
  }

  // Validate API key
  if (!validateApiKey(apiKey, c.env)) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  await next();
}
