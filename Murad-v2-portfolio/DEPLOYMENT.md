# Deployment Guide for Vercel

## ✅ Pre-Deployment Checklist

### Build Status
- ✅ Build completed successfully (4.50s)
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ All components working
- ✅ Dist folder created with optimized assets

### Files Ready
- ✅ `package.json` - All dependencies configured
- ✅ `vite.config.ts` - Build configuration set
- ✅ `vercel.json` - SPA routing configured
- ✅ `.gitignore` - Excludes node_modules, dist, .env
- ✅ `.env` - EmailJS credentials (needs to be set in Vercel)

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd Murad-v2-portfolio
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? `murad-portfolio` (or your choice)
   - In which directory is your code located? `./`
   - Want to override settings? `N`

5. **Set Environment Variables**:
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID
   vercel env add VITE_EMAILJS_TEMPLATE_ID
   vercel env add VITE_EMAILJS_PUBLIC_KEY
   ```
   Enter the values from your `.env` file when prompted.

6. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add these variables:
     - `VITE_EMAILJS_SERVICE_ID` = `service_u8trdze`
     - `VITE_EMAILJS_TEMPLATE_ID` = `template_xp0oudn`
     - `VITE_EMAILJS_PUBLIC_KEY` = `qUdiajeePSPR9AduZ`

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete

## ⚙️ Important Configuration

### Environment Variables (CRITICAL!)
Your EmailJS credentials are in `.env` but **NOT** committed to Git (good for security).
You MUST add them to Vercel:

```
VITE_EMAILJS_SERVICE_ID=service_u8trdze
VITE_EMAILJS_TEMPLATE_ID=template_xp0oudn
VITE_EMAILJS_PUBLIC_KEY=qUdiajeePSPR9AduZ
```

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## 🔍 Post-Deployment Checks

After deployment, test these features:

1. ✅ **Theme Toggle**: Switch between light/dark mode
2. ✅ **Navigation**: All menu links work
3. ✅ **Scroll Animations**: Sections animate on scroll
4. ✅ **Contact Form**: Submit a test message
5. ✅ **Responsive Design**: Test on mobile/tablet
6. ✅ **CV Download**: Download button works
7. ✅ **Project Links**: GitHub and live demo links work

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Run `npm install` to ensure all dependencies are installed
- Run `npm run build` locally to test

### Contact Form Not Working
- Verify environment variables are set in Vercel
- Check EmailJS dashboard for API limits
- Check browser console for errors

### Images Not Loading
- Ensure all images are in `/public` folder
- Check image paths start with `/` (e.g., `/Hero.jpg`)

### Routing Issues (404 on refresh)
- Verify `vercel.json` exists with SPA rewrites
- Check Vercel dashboard → Settings → Rewrites

## 📊 Build Output

```
✓ 2253 modules transformed
dist/index.html                    0.47 kB │ gzip: 0.30 kB
dist/assets/Logo2-EoalqpOa.jpg    39.88 kB
dist/assets/Hero-COR4q1ld.jpg    229.11 kB
dist/assets/index-Dp8bY-Wo.css    24.50 kB │ gzip: 4.78 kB
dist/assets/index-D1PFTTEe.js    250.92 kB │ gzip: 82.10 kB
✓ built in 4.50s
```

## 🎉 Success!

Your portfolio is ready for deployment! Choose your preferred method above and follow the steps.

**Estimated Deployment Time**: 2-3 minutes

**Your site will be live at**: `https://your-project-name.vercel.app`
