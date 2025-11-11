# Afaan - Advanced Language Learning Platform 🌍

An AI-powered language learning platform with comprehensive features for immersive language education. Built with React, featuring real-time conversation practice, interactive exercises, cultural insights, and advanced progress tracking.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🔊 Audio Features
- **Text-to-Speech**: Hear native pronunciation for all tutor messages
- **Speech Recognition**: Practice speaking with voice input
- **Auto-play Audio**: Automatic playback for conversation practice
- **Multi-language Support**: Native voice synthesis for 10+ languages

### 📝 Interactive Exercises
- **Flashcards**: Spaced repetition system for vocabulary retention
- **Fill-in-the-Blank**: Grammar and vocabulary practice
- **Multiple Choice**: Quick comprehension quizzes
- **Intelligent Difficulty**: Exercises adapt to your level

### 💾 Data Persistence
- **Auto-save Progress**: All conversations and progress saved locally
- **Export/Import**: Backup your learning data
- **Cross-session Continuity**: Pick up where you left off
- **Vocabulary Tracking**: Automatic word collection

### 🎯 Enhanced Learning
- **Grammar Library**: Comprehensive grammar explanations with examples
- **Cultural Insights**: Learn about customs, traditions, and etiquette
- **Conversation Scenarios**: Practice real-world situations (restaurant, travel, shopping)
- **Adaptive Difficulty**: Content adjusts to your proficiency level

### 🎨 UI/UX Features
- **Dark Mode**: Eye-friendly theme for any time of day
- **Mobile Responsive**: Seamless experience on all devices
- **Customizable Themes**: 5 beautiful color schemes
- **Keyboard Shortcuts**: Quick access to all features
  - `Ctrl+Enter`: Send message
  - `Ctrl+K`: Open exercises
  - `Ctrl+G`: Open grammar library
  - `Ctrl+M`: Toggle microphone
  - `Ctrl+D`: Toggle dark mode

### 📊 Advanced Analytics
- **Progress Charts**: Visualize vocabulary growth and accuracy
- **Streak Tracking**: Maintain your learning momentum
- **Achievement System**: 10+ achievements to unlock
- **Proficiency Detection**: Automatic level assessment
- **Weekly/Monthly Reports**: Track your improvement over time

## 🌐 Supported Languages

- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇩🇪 German (Deutsch)
- 🇯🇵 Japanese (日本語)
- 🇮🇹 Italian (Italiano)
- 🇵🇹 Portuguese (Português)
- 🇨🇳 Chinese (中文)
- 🇰🇷 Korean (한국어)
- 🇪🇹 Afaan Oromo (Afaan Oromoo)
- 🇪🇹 Amharic (አማርኛ)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser with speech synthesis support
- Anthropic API key (for AI tutor functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OliTamrat/Afaan.git
cd Afaan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🎮 How to Use

### Starting a Conversation
1. Select your target language from the dropdown
2. Type your message or use the microphone button for voice input
3. Press Enter or click Send to get a response from your AI tutor
4. Click the speaker icon on any message to hear it pronounced

### Practicing with Exercises
1. Click any exercise button in the sidebar (Flashcards, Fill Blanks, etc.)
2. Complete the exercise and receive instant feedback
3. Track your progress in the sidebar

### Exploring Grammar & Culture
1. Click the Grammar button to access comprehensive grammar explanations
2. Browse Cultural Insights to learn about customs and traditions
3. Practice with pre-built conversation scenarios

### Tracking Your Progress
- View your vocabulary count, accuracy, and message count in the sidebar
- Monitor your learning streak to stay motivated
- Unlock achievements as you progress
- Export your data anytime for backup

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI**: Claude API (Anthropic)
- **Storage**: Browser LocalStorage

## 📁 Project Structure

```
Afaan/
├── src/
│   ├── components/       # React components (future modularization)
│   ├── data/            # Language data, exercises, achievements
│   │   ├── languageData.js
│   │   └── exercises.js
│   ├── utils/           # Utility functions
│   │   ├── storage.js   # LocalStorage management
│   │   └── audio.js     # Audio/speech features
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md            # This file
```

## 🎯 Learning Goals

The platform automatically generates personalized learning goals based on:
- Your current proficiency level
- Selected language
- Progress and performance
- Areas needing improvement

## 🏆 Achievement System

Unlock achievements by:
- Sending your first message
- Maintaining learning streaks
- Completing exercises
- Building vocabulary
- Exploring multiple languages

## 🔒 Privacy & Data

- All data is stored locally in your browser
- No personal information is sent to external servers (except AI API calls)
- Export your data at any time
- Clear all data easily from settings

## 🌟 Future Enhancements

- [ ] Video lessons and tutorials
- [ ] Multiplayer conversation practice
- [ ] Native speaker recordings
- [ ] Advanced AI conversation modes
- [ ] Community features
- [ ] Mobile apps (iOS/Android)
- [ ] More languages and dialects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Oli Tamrat**
- GitHub: [@OliTamrat](https://github.com/OliTamrat)

## 🙏 Acknowledgments

- Claude AI by Anthropic for natural language tutoring
- The open-source community for amazing tools and libraries
- Language learners worldwide for inspiration

## 📧 Contact & Support

For questions, suggestions, or issues:
- Open an issue on GitHub
- Email: [Your email]
- Twitter: [@YourHandle]

---

**Happy Learning! 🎓✨**

Remember: Consistency is key to language mastery. Practice a little every day!
