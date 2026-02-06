# Deployment Guide for Vercel

## ⚠️ IMPORTANT FIX FOR "vite: command not found" ERROR

If you get the error `sh: line 1: vite: command not found`, follow these steps:

### Solution: Configure Build Settings in Vercel Dashboard

1. **Go to your project in Vercel Dashboard**
2. **Settings → General → Build & Development Settings**
3. **Configure these settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node.js Version**: `20.x` (or `22.x`)

4. **Save and Redeploy**

### Alternative: Use package.json engines field

Add this to your `package.json`:
```json
"engines": {
  "node": ">=20.19.0"
}
```

## ✅ Pre-Deployment Checklist

### Build Status
- ✅ Build completed successfully (5.34s)
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ All components working
- ✅ Dist folder created with optimized assets

### Files Ready
- ✅ `package.json` - All dependencies configured (removed problematic "node" package)
- ✅ `vite.config.ts` - Build configuration set
- ✅ `vercel.json` - SPA routing configured (simplified)
- ✅ `.gitignore` - Excludes node_modules, dist, .env
- ✅ `.env` - EmailJS credentials (needs to be set in Vercel)

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

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

3. **Configure Project Settings**:
   - **Framework Preset**: Select `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node.js Version**: `20.x`

4. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add these variables for **Production**, **Preview**, and **Development**:
     - `VITE_EMAILJS_SERVICE_ID` = `service_u8trdze`
     - `VITE_EMAILJS_TEMPLATE_ID` = `template_xp0oudn`
     - `VITE_EMAILJS_PUBLIC_KEY` = `qUdiajeePSPR9AduZ`

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
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
   - Want to override settings? `Y`
   - Build Command? `npm run build`
   - Output Directory? `dist`
   - Development Command? `npm run dev`

5. **Set Environment Variables**:
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID production
   vercel env add VITE_EMAILJS_TEMPLATE_ID production
   vercel env add VITE_EMAILJS_PUBLIC_KEY production
   ```
   Enter the values when prompted.

6. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## ⚙️ Important Configuration

### Environment Variables (CRITICAL!)
Your EmailJS credentials are in `.env` but **NOT** committed to Git (good for security).
You MUST add them to Vercel:

```
VITE_EMAILJS_SERVICE_ID=service_u8trdze
VITE_EMAILJS_TEMPLATE_ID=template_xp0oudn
VITE_EMAILJS_PUBLIC_KEY=qUdiajeePSPR9AduZ
```

**How to add in Vercel Dashboard:**
1. Project Settings → Environment Variables
2. Click "Add New"
3. Enter variable name and value
4. Select all environments (Production, Preview, Development)
5. Click "Save"
6. Repeat for all three variables

### Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 20.x or higher

## 🔍 Post-Deployment Checks

After deployment, test these features:

1. ✅ **Theme Toggle**: Switch between light/dark mode
2. ✅ **Navigation**: All menu links work
3. ✅ **Scroll Animations**: Sections animate on scroll
4. ✅ **Contact Form**: Submit a test message
5. ✅ **Responsive Design**: Test on mobile/tablet
6. ✅ **CV Download**: Download button works
7. ✅ **Project Links**: GitHub and live demo links work
8. ✅ **Page Refresh**: No 404 errors on refresh

## 🐛 Troubleshooting

### Error: "vite: command not found"
**Solution**: Configure build settings in Vercel Dashboard (see top of this file)

### Build Fails
- Check Node version is set to 20.x or higher in Vercel
- Verify `npm run build` works locally
- Check Vercel build logs for specific errors

### Contact Form Not Working
- Verify environment variables are set in Vercel
- Check all three variables are added
- Ensure variables are set for Production environment
- Check EmailJS dashboard for API limits

### Images Not Loading
- Ensure all images are in `/public` folder
- Check image paths start with `/` (e.g., `/Hero.jpg`)
- Verify images are committed to Git

### Routing Issues (404 on refresh)
- Verify `vercel.json` exists with SPA rewrites
- Check Vercel dashboard → Settings → Rewrites

### Theme Not Persisting
- Check localStorage is enabled in browser
- Verify ThemeContext is properly wrapped in App.tsx

## 📊 Build Output

```
✓ 2253 modules transformed
dist/index.html                    0.47 kB │ gzip: 0.30 kB
dist/assets/Logo2-EoalqpOa.jpg    39.88 kB
dist/assets/Hero-COR4q1ld.jpg    229.11 kB
dist/assets/index-Dp8bY-Wo.css    24.50 kB │ gzip: 4.78 kB
dist/assets/index-D1PFTTEe.js    250.92 kB │ gzip: 82.10 kB
✓ built in 5.34s
```

## 🎉 Success!

Your portfolio is ready for deployment! Follow the steps above carefully, especially:
1. Configure build settings in Vercel Dashboard
2. Add environment variables
3. Deploy

**Estimated Deployment Time**: 2-3 minutes

**Your site will be live at**: `https://your-project-name.vercel.app`

---

**Need More Help?**
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- Vercel Support: https://vercel.com/support
