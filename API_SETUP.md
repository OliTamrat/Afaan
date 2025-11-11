# API Setup Guide - Getting AI Chat to Work

## 🚨 Important: API Credits Required

The AI chat feature requires **Anthropic API credits**. Here's what you need to know:

## Understanding Anthropic's Credit Systems

Anthropic has **three separate credit systems**:

1. **Claude Pro Subscription ($20/month)**
   - For unlimited usage on claude.ai website
   - Does NOT include API credits

2. **Claude Code Credits ($250 free trial)**
   - For using the Claude Code CLI tool
   - Does NOT include API credits

3. **API Credits** ⬅️ **This is what you need!**
   - For making API calls from your own applications
   - Required for the Afaan language tutor chat feature
   - Purchased separately at https://console.anthropic.com/

## How to Add API Credits

### Step 1: Check Your Current Balance

1. Go to https://console.anthropic.com/
2. Log in with your Anthropic account
3. Look at the top right corner - you should see your **API credit balance** (e.g., "$5.00" or "$0.00")

### Step 2: Add Credits (If Needed)

1. Click on **Settings** → **Plans & Billing**
2. Choose a plan:
   - **Pay-as-you-go**: Add credits manually (start with $5-10)
   - **Build Plan**: $5/month + usage credits
   - **Scale Plan**: For higher volume

3. Add payment method and purchase credits

### Step 3: Verify Your API Key

Make sure your API key in `.env` matches the account you just added credits to:

```bash
VITE_ANTHROPIC_API_KEY=sk-ant-api03-...
```

## Cost Estimates

**Claude Sonnet 4 pricing (as of 2024):**
- Input: ~$3 per million tokens
- Output: ~$15 per million tokens

**Typical conversation costs:**
- Simple greeting: ~$0.001 (1/10th of a cent)
- Long conversation: ~$0.01-0.05 (1-5 cents)
- $5 of credits = approximately 100-500 conversations

## Error Messages

### "Your credit balance is too low"

**Problem:** Your API credit balance is $0 or below minimum threshold

**Solution:** Add credits at https://console.anthropic.com/settings/plans

### "API key not configured"

**Problem:** `.env` file is missing or doesn't contain `VITE_ANTHROPIC_API_KEY`

**Solution:**
1. Copy `.env.example` to `.env`
2. Add your API key from https://console.anthropic.com/settings/keys

### "Failed to fetch" or CORS error

**Problem:** Backend server isn't running

**Solution:**
1. Open a second terminal
2. Run: `npm run server` (starts backend on port 3002)
3. Keep it running while using the app

## Running the App Locally

You need **TWO servers** running simultaneously:

### Terminal 1: Frontend (Vite)
```bash
npm run dev
# Runs on http://localhost:3001
```

### Terminal 2: Backend (Express API Proxy)
```bash
npm run server
# Runs on http://localhost:3002
```

**Why two servers?**
- Browsers can't call Anthropic API directly (CORS restriction)
- Our Express server acts as a proxy to forward requests
- Frontend → Backend (port 3002) → Anthropic API

## Testing the Chat

1. Ensure both servers are running
2. Open http://localhost:3001
3. Type a message in the chat
4. If you see a helpful error message, check the browser console (F12)
5. Backend logs will show API requests in Terminal 2

## Features That Work WITHOUT API Credits

✅ These work immediately, no credits needed:
- Language picker with flags
- Flashcards with romanization
- Grammar library
- Cultural insights
- Progress tracking
- All UI features

❌ These require API credits:
- AI chat conversations
- Real-time grammar corrections
- Personalized feedback

## Deploying to Vercel

When deploying, you'll need to set up the backend differently:

### Option 1: Serverless Functions (Recommended)

Create `api/chat.js`:
```javascript
export default async function handler(req, res) {
  // Same logic as server.js /api/chat endpoint
}
```

### Option 2: Separate Backend Deployment

Deploy `server.js` to a service like:
- Railway.app
- Render.com
- Heroku

Then set `VITE_API_URL` environment variable in Vercel to your backend URL.

## Need Help?

**Check your setup:**
1. ✅ API key is valid (from console.anthropic.com)
2. ✅ API credits added ($5 minimum recommended)
3. ✅ Both frontend and backend servers running
4. ✅ .env file contains correct API key

**Still not working?**
1. Open browser console (F12)
2. Check backend terminal logs
3. Look for specific error messages
4. See TROUBLESHOOTING.md for common issues

## Free Alternatives (Coming Soon)

We're working on a "Demo Mode" that will let you try the app without API credits:
- Pre-written conversation examples
- Simulated AI responses
- All other features fully functional

Stay tuned for updates!

---

**Happy Learning! 🌍📚**

Once you add credits, the AI chat will work seamlessly with all the other features!
