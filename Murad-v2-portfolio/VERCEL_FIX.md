# 🔧 Quick Fix: "vite: command not found" Error

## The Problem
```
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

## The Solution (2 minutes)

### Step 1: Go to Vercel Dashboard
1. Open your project in Vercel
2. Click **Settings** (top navigation)
3. Click **General** (left sidebar)
4. Scroll to **Build & Development Settings**

### Step 2: Configure Build Settings
Click **Edit** and set these values:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x
```

### Step 3: Save & Redeploy
1. Click **Save**
2. Go to **Deployments** tab
3. Click **Redeploy** on the latest deployment
4. Select **Use existing Build Cache** (optional)
5. Click **Redeploy**

## Why This Happens
- Vercel tries to run `vite build` directly instead of `npm run build`
- The `vite` command is not in PATH when run directly
- Using `npm run build` ensures npm scripts run correctly

## Verify It Works
After redeployment, check the build logs:
- ✅ Should see: `> murad-v2-portfolio@0.0.0 build`
- ✅ Should see: `> tsc -b && vite build`
- ✅ Should see: `✓ built in X.XXs`

## Alternative Solution
Add to `package.json`:
```json
"engines": {
  "node": ">=20.19.0"
}
```

Then redeploy.

---

**Still having issues?** Check DEPLOYMENT.md for full troubleshooting guide.
