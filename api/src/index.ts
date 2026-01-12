import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { Env, createApp, getAllowedOrigins, AppServices } from './app';
import { authMiddleware } from './middleware';
import { sponsor, member } from './routes';

// Create main Hono app
const app = new Hono<{ Bindings: Env; Variables: { services: AppServices } }>();

// Request logging (for debugging)
app.use('*', logger());

// CORS middleware
app.use('*', async (c, next) => {
  const corsMiddleware = cors({
    origin: getAllowedOrigins(c.env),
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'X-API-Key'],
    maxAge: 86400,
  });
  return corsMiddleware(c, next);
});

// Health check (no auth required)
app.get('/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'umatt-api'
  });
});

// API routes with auth
const api = new Hono<{ Bindings: Env; Variables: { services: AppServices } }>();

// Auth middleware for all API routes
api.use('*', authMiddleware);

// Inject services into context
api.use('*', async (c, next) => {
  const services = createApp(c.env);
  c.set('services', services);
  await next();
});

// Mount routes
api.route('/sponsor', sponsor);
api.route('/member', member);

// Mount API under /api
app.route('/api', api);

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ 
    error: 'Internal Server Error',
    message: err.message 
  }, 500);
});

export default app;
