# UMATT Website

Welcome to the official repository for the [UMATT Website](https://umatt.org/)!

This site represents the University of Manitoba Association of Tiny Tractors (UMATT), showcasing our projects and team information. It is built with modern web technologies to ensure speed, maintainability and scalability.

## Project Structure

```
/umatt_website
├── /frontend          # Vue.js frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── /api               # Cloudflare Workers API
│   ├── src/
│   │   ├── index.ts           # Main Hono router
│   │   ├── app.ts             # Service wiring
│   │   ├── /routes            # API route handlers
│   │   ├── /services          # Business logic
│   │   │   ├── /interfaces    # Service contracts
│   │   │   └── /implementations
│   │   ├── /templates         # Email templates
│   │   └── /middleware        # Auth, validation
│   ├── wrangler.toml
│   └── package.json
│
└── README.md
```

## Tech Stack

### Frontend
- [Vue.js](https://vuejs.org/)
- [Vite](https://vite.dev/)

### Backend
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Hono](https://hono.dev/) - Lightweight web framework
- [Cloudflare R2](https://www.cloudflare.com/r2/) - Object storage for resumes
- [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) - Email sending

## Frontend Setup

**Note:** The setup instructions assume that a latest LTS version of [Node.js](https://nodejs.org/en) (which includes `npm`) is already installed.

### Recommended IDE Setup
[Visual Studio Code](https://code.visualstudio.com/) with [Vue.js extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Install dependencies
```sh
cd frontend
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
```sh
npm run build
```

## API Setup

### Install dependencies
```sh
cd api
npm install
```

### Run locally
```sh
npm run dev
```

### Deploy to Cloudflare Workers

1. Configure Cloudflare resources:
   ```bash
   # Create R2 buckets
   wrangler r2 bucket create umatt-resumes
   wrangler r2 bucket create umatt-assets
   
   # Upload sponsorship package
   wrangler r2 object put umatt-assets/sponsorship-package.pdf --file=path/to/package.pdf
   
   # Set API secret
   wrangler secret put API_SECRET
   ```

2. Enable Email Routing on your domain in Cloudflare dashboard

3. Deploy:
   ```bash
   npm run deploy
   ```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/sponsor/inquiry` | POST | New sponsor inquiry |
| `/api/member/join` | POST | New member application |

## Maintainers

- [Ramatjyot Singh](https://github.com/RamatjyotSingh)
- [Varun Mulchandani](https://github.com/im-varun)