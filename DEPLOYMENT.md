# Deployment Guide 🚀

This guide covers deploying the Afaan language learning platform to various hosting services.

## 📋 Pre-deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Application builds successfully (`npm run build`)
- [ ] Environment variables configured
- [ ] API keys secured
- [ ] Git repository initialized

## 🌐 Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Serverless functions support
- Free tier available

**Steps:**

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy via Vercel dashboard:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Configure build settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add environment variables (if needed)
   - Click "Deploy"

3. Or deploy via CLI:
```bash
vercel
```

**Environment Variables on Vercel:**
- Go to Project Settings → Environment Variables
- Add `VITE_ANTHROPIC_API_KEY` (if using)
- Redeploy to apply changes

### Netlify

**Steps:**

1. Build the project:
```bash
npm run build
```

2. Deploy via Netlify dashboard:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your Git repository

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Add environment variables in Site Settings → Build & deploy → Environment

### GitHub Pages

**Steps:**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://OliTamrat.github.io/Afaan",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Afaan/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

### Render

**Steps:**

1. Create a `render.yaml` in the root:
```yaml
services:
  - type: web
    name: afaan
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
```

2. Connect repository on [render.com](https://render.com)
3. Render will auto-deploy on every push

### Railway

**Steps:**

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and initialize:
```bash
railway login
railway init
```

3. Add a `Nixpacks` configuration or use the default
4. Deploy:
```bash
railway up
```

## 🔐 Environment Variables

For production, set these via your deployment platform's dashboard:

```bash
# Optional: If implementing API key requirement
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

**Security Note:** Never commit API keys to Git. Always use environment variables.

## 🏗️ Build Optimization

### Production Build
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

### Analyze Bundle Size
Add to `package.json`:
```json
{
  "scripts": {
    "analyze": "vite build --mode analyze"
  }
}
```

## 🚀 Performance Tips

1. **Enable Compression**: Most platforms enable gzip/brotli automatically
2. **CDN**: Use platform's CDN features (enabled by default on Vercel/Netlify)
3. **Caching**: Configure proper cache headers
4. **Image Optimization**: Use optimized images and lazy loading
5. **Code Splitting**: Vite handles this automatically

## 📊 Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Vercel Analytics
- User feedback tools

## 🔄 Continuous Deployment

All platforms support automatic deployment:
- Push to `main` branch → Auto-deploy
- Pull requests → Preview deployments
- Rollback capabilities

## 🐛 Troubleshooting

### Build Fails

**Check:**
- Node version (use 16+ or 18+)
- Dependencies installed correctly
- No syntax errors
- Environment variables set correctly

**Common fixes:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Runtime Errors

**Check:**
- Browser console for errors
- API keys configured correctly
- LocalStorage not blocked
- CORS issues (if using external APIs)

### Speech Features Not Working

**Requirements:**
- HTTPS (required for speech recognition)
- Modern browser (Chrome, Edge, Safari)
- Microphone permissions granted

## 📱 Mobile Considerations

- Test on real devices
- Check responsive design
- Verify touch interactions
- Test audio features

## 🌍 Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## ✅ Post-deployment Checklist

- [ ] Site loads correctly
- [ ] All features work
- [ ] Speech features functional (HTTPS)
- [ ] Mobile responsive
- [ ] Performance is good
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] SEO tags added
- [ ] Social media preview configured

## 📈 Scaling Considerations

As your user base grows:
- Monitor API usage and costs
- Consider implementing rate limiting
- Add caching strategies
- Optimize database queries (if added later)
- Consider serverless functions for API calls

---

## 🎉 Your App is Live!

Once deployed, share your language learning platform with the world!

**Example URLs:**
- Vercel: `https://afaan.vercel.app`
- Netlify: `https://afaan.netlify.app`
- Custom: `https://afaan.yourdomain.com`

---

Need help? Check the platform-specific documentation or open an issue on GitHub.
