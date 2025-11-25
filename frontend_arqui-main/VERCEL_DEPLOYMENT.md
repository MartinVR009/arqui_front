# Vercel Deployment Guide

## Prerequisites
- GitHub repository with your Next.js code
- Vercel account (https://vercel.com)
- Backend API URL (for environment variables)

## Deployment Steps

### 1. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Select the framework: **Next.js**

### 2. Configure Build Settings
Vercel will auto-detect these settings, but verify:
- **Framework Preset**: Next.js
- **Root Directory**: `./frontend_arqui-main` (or adjust based on your repo structure)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

### 3. Configure Environment Variables
Add these environment variables in Vercel dashboard:

#### Required Variables:
- `NEXT_PUBLIC_API_URL` = `https://your-backend-api.com/v1`
- `BACKEND_URL` = `https://your-backend-api.com/v1`
- `NEXT_PUBLIC_BANK_API_URL` = `https://api.bank.com/pagos`

#### Optional Variables (add if needed):
- `NEXTAUTH_SECRET` = `your-secret-here` (if using NextAuth)
- `NEXTAUTH_URL` = `https://your-vercel-domain.vercel.app`

### 4. Deploy
1. Click **Deploy**
2. Wait for build to complete
3. Your app will be available at: `https://your-project-name.vercel.app`

## Post-Deployment

### Domain Configuration (Optional)
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS according to Vercel instructions

### Environment Variables by Environment
- **Production**: Set your production API URLs
- **Preview**: Set staging/test API URLs  
- **Development**: Set local development URLs

## Monitoring
- Build logs: Available in Vercel dashboard
- Function logs: Real-time in dashboard
- Performance: Built-in analytics

## Important Notes
- This project uses Next.js 13.5.1 with App Router
- API routes are included (`/api/auth/login`, `/api/bank/notificacion`)
- Static generation is enabled for most pages
- Images are unoptimized (set in next.config.js)

## Troubleshooting
- If build fails, check the build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify your backend API is accessible from Vercel's servers
- Check for any TypeScript/ESLint errors in the logs

## Local Development
```bash
npm install
npm run dev
# App runs on http://localhost:3001
```