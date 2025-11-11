# Quick Start Guide 🚀

Get your Afaan language learning platform up and running in minutes!

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and more.

### 2. Run Development Server

```bash
npm run dev
```

Your app will be available at: **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

Test your production build locally before deployment.

## First Time Using the App

1. **Select a Language**: Choose from 10 supported languages in the dropdown
2. **Start Chatting**: Type a message in your target language or use the microphone
3. **Get Feedback**: Receive real-time corrections and encouragement
4. **Try Exercises**: Click the flashcard or exercise buttons to practice
5. **Explore Features**: Check out the grammar library and cultural insights

## Key Features to Try

### 🗣️ Voice Features
- Click the **microphone button** to speak (Ctrl+M)
- Click the **speaker icon** on any message to hear pronunciation

### 📚 Learning Resources
- **Flashcards**: Click the flashcard button for vocabulary practice
- **Grammar**: Press Ctrl+G or click the Grammar button
- **Cultural Insights**: Learn about customs and traditions

### 🎨 Customization
- **Dark Mode**: Click the moon icon or press Ctrl+D
- **Themes**: Coming soon!

### ⌨️ Keyboard Shortcuts
- `Ctrl + Enter` - Send message
- `Ctrl + K` - Open exercises
- `Ctrl + G` - Open grammar library
- `Ctrl + M` - Toggle microphone
- `Ctrl + D` - Toggle dark mode

## Project Structure Overview

```
Afaan/
├── src/
│   ├── App.jsx              # Main application
│   ├── data/                # Language data & exercises
│   ├── utils/               # Helper functions
│   └── index.css            # Global styles
├── index.html               # Entry point
├── package.json             # Dependencies
└── vite.config.js           # Build configuration
```

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## Deployment

Ready to deploy? See **DEPLOYMENT.md** for detailed instructions on deploying to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Render
- Railway

Quick Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Troubleshooting

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
Change port in `vite.config.js` or stop the process using port 3000.

### Speech Features Not Working
- Ensure you're using HTTPS (required for speech recognition)
- Grant microphone permissions in your browser
- Use a supported browser (Chrome, Edge, Safari)

## Need Help?

- 📖 Read the full **README.md**
- 🚀 Check **DEPLOYMENT.md** for deployment guides
- 🐛 Open an issue on GitHub
- 💬 Start a discussion in the repository

## What's Next?

1. **Customize**: Add your own exercises and cultural insights
2. **Extend**: Add more languages or features
3. **Deploy**: Share your platform with the world
4. **Contribute**: Submit improvements via pull requests

---

**Happy Learning! 🎓**

Start your language journey today with Afaan!
