import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Send, BookOpen, Target, TrendingUp, MessageSquare, CheckCircle, Languages,
  BarChart3, Sparkles, Award, Volume2, Mic, MicOff, Download, Upload,
  Moon, Sun, Palette, Settings, X, Menu, ChevronRight, Play, Pause,
  GraduationCap, Lightbulb, Globe, Trophy, Calendar, Zap, Book, PenTool
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Import utilities and data
import { saveToStorage, loadFromStorage, exportData, importData, STORAGE_KEYS } from './utils/storage';
import { speak, stopSpeaking, isSpeechSynthesisSupported, SpeechRecognitionManager } from './utils/audio';
import { transliterate, needsTransliteration } from './utils/transliteration';
import {
  languages, grammarLibrary, culturalInsights, conversationScenarios,
  achievements as achievementsData, themes as themesData
} from './data/languageData';
import { exercisesData, exerciseTypes, SpacedRepetitionManager } from './data/exercises';

const LanguageTutor = () => {
  // Core State
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // User Profile & Progress
  const [userProfile, setUserProfile] = useState({
    proficiencyLevel: 'Beginner',
    totalMessages: 0,
    vocabularyCount: new Set(),
    grammarAccuracy: 100,
    sessionCount: 0,
    streakDays: 0,
    lastStudyDate: null,
    totalStudyDays: 0,
    languagesLearned: new Set(['spanish'])
  });

  const [learningGoals, setLearningGoals] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [translatedMessages, setTranslatedMessages] = useState(new Set());

  // Progress Stats
  const [progressStats, setProgressStats] = useState({
    vocabularyGrowth: [20, 35, 50, 65, 78],
    grammarAccuracy: [60, 65, 70, 75, 80],
    conversationLength: [5, 8, 12, 15, 18],
    weeklyProgress: [],
    monthlyReports: []
  });

  // Audio Features State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const speechRecognition = useRef(new SpeechRecognitionManager());

  // Exercise State
  const [showExercises, setShowExercises] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [exerciseType, setExerciseType] = useState('flashcard');
  const [exerciseScore, setExerciseScore] = useState(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const spacedRepetition = useRef(new SpacedRepetitionManager());

  // Enhanced Learning State
  const [showGrammar, setShowGrammar] = useState(false);
  const [showCultural, setShowCultural] = useState(false);
  const [showScenarios, setShowScenarios] = useState(false);
  const [selectedGrammarTopic, setSelectedGrammarTopic] = useState(null);
  const [showLessonMode, setShowLessonMode] = useState(false);

  // UI State
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Achievements State
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [newAchievement, setNewAchievement] = useState(null);

  // Refs
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProfile = loadFromStorage(STORAGE_KEYS.USER_PROFILE);
    if (savedProfile) {
      setUserProfile({
        ...savedProfile,
        vocabularyCount: new Set(savedProfile.vocabularyCount || []),
        languagesLearned: new Set(savedProfile.languagesLearned || ['spanish'])
      });
    }

    const savedMessages = loadFromStorage(STORAGE_KEYS.MESSAGES, []);
    setMessages(savedMessages);

    const savedGoals = loadFromStorage(STORAGE_KEYS.LEARNING_GOALS);
    if (savedGoals) {
      setLearningGoals(savedGoals);
    } else {
      setLearningGoals(generateLearningGoals('Beginner', selectedLanguage));
    }

    const savedStats = loadFromStorage(STORAGE_KEYS.PROGRESS_STATS);
    if (savedStats) {
      setProgressStats(savedStats);
    }

    const savedAchievements = loadFromStorage(STORAGE_KEYS.ACHIEVEMENTS, []);
    setUnlockedAchievements(savedAchievements);

    const savedSettings = loadFromStorage(STORAGE_KEYS.SETTINGS);
    if (savedSettings) {
      setDarkMode(savedSettings.darkMode || false);
      setCurrentTheme(savedSettings.theme || 'light');
      setAudioEnabled(savedSettings.audioEnabled ?? true);
    }

    const savedExercisesHistory = loadFromStorage(STORAGE_KEYS.EXERCISES_HISTORY);
    if (savedExercisesHistory) {
      spacedRepetition.current.loadStates(savedExercisesHistory);
    }

    updateStreak();
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const profileToSave = {
      ...userProfile,
      vocabularyCount: Array.from(userProfile.vocabularyCount),
      languagesLearned: Array.from(userProfile.languagesLearned)
    };
    saveToStorage(STORAGE_KEYS.USER_PROFILE, profileToSave);
  }, [userProfile]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.MESSAGES, messages);
  }, [messages]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.LEARNING_GOALS, learningGoals);
  }, [learningGoals]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PROGRESS_STATS, progressStats);
  }, [progressStats]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, unlockedAchievements);
  }, [unlockedAchievements]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SETTINGS, {
      darkMode,
      theme: currentTheme,
      audioEnabled
    });
  }, [darkMode, currentTheme, audioEnabled]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + Enter to send message
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && currentMessage.trim()) {
        sendMessage();
      }
      // Ctrl/Cmd + K for exercises
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowExercises(!showExercises);
      }
      // Ctrl/Cmd + G for grammar
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        setShowGrammar(!showGrammar);
      }
      // Ctrl/Cmd + D for dark mode
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setDarkMode(!darkMode);
      }
      // Ctrl/Cmd + M for mic
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        toggleListening();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentMessage, showExercises, showGrammar, darkMode, isListening]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastDate = userProfile.lastStudyDate;

    if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      setUserProfile(prev => ({
        ...prev,
        lastStudyDate: today,
        totalStudyDays: prev.totalStudyDays + 1,
        streakDays: lastDate === yesterdayStr ? prev.streakDays + 1 : 1
      }));
    }
  };

  const generateLearningGoals = (level, language) => {
    const goalsByLevel = {
      Beginner: {
        spanish: [
          'Master basic greetings and introductions',
          'Learn present tense regular verbs',
          'Build food and drink vocabulary',
          'Practice numbers 1-100',
          'Use basic question words'
        ],
        french: [
          'Master basic greetings',
          'Learn être and avoir',
          'Build family vocabulary',
          'Practice pronunciation',
          'Use basic question words'
        ],
        afaan_oromo: [
          'Master basic greetings',
          'Learn simple sentences',
          'Build everyday vocabulary',
          'Practice pronunciation',
          'Learn basic verbs'
        ],
        amharic: [
          'Master Ge\'ez script basics',
          'Learn essential greetings',
          'Practice pronunciation',
          'Build basic vocabulary',
          'Learn simple sentences'
        ]
      }
    };

    const goals = goalsByLevel[level]?.[language] || goalsByLevel.Beginner.spanish;
    return goals.map((text, index) => ({
      id: Date.now() + index,
      text,
      completed: false,
      progress: 0
    }));
  };

  const analyzeProficiencyLevel = (messageHistory) => {
    if (messageHistory.length < 5) return 'Beginner';
    if (messageHistory.length < 15) return 'Intermediate';
    if (messageHistory.length < 30) return 'Advanced';
    return 'Fluent';
  };

  const handleSpeakMessage = async (text, language = selectedLanguage) => {
    if (!audioEnabled) return;

    setIsSpeaking(true);
    try {
      await speak(text, language);
    } catch (error) {
      console.error('Speech error:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  const toggleListening = () => {
    if (!speechRecognition.current.isSupported()) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    if (isListening) {
      speechRecognition.current.stop();
      setIsListening(false);
    } else {
      const success = speechRecognition.current.start(
        selectedLanguage,
        (transcript, isFinal) => {
          setRecognizedText(transcript);
          if (isFinal) {
            setCurrentMessage(transcript);
            setRecognizedText('');
          }
        },
        () => setIsListening(false),
        (error) => {
          console.error('Speech recognition error:', error);
          setIsListening(false);
        }
      );
      setIsListening(success);
    }
  };

  const checkAchievements = () => {
    achievementsData.forEach(achievement => {
      if (unlockedAchievements.find(a => a.id === achievement.id)) return;

      let unlocked = false;
      switch(achievement.id) {
        case 1: // First message
          unlocked = userProfile.totalMessages >= 1;
          break;
        case 2: // 10 conversations
          unlocked = userProfile.totalMessages >= 10;
          break;
        case 3: // 50 words
          unlocked = userProfile.vocabularyCount.size >= 50;
          break;
        case 4: // 20 exercises
          unlocked = exercisesCompleted >= 20;
          break;
        case 5: // 7 day streak
          unlocked = userProfile.streakDays >= 7;
          break;
        case 6: // 3 languages
          unlocked = userProfile.languagesLearned.size >= 3;
          break;
        case 7: // 30 days total
          unlocked = userProfile.totalStudyDays >= 30;
          break;
        default:
          break;
      }

      if (unlocked) {
        setUnlockedAchievements(prev => [...prev, achievement]);
        setNewAchievement(achievement);
        setTimeout(() => setNewAchievement(null), 5000);
      }
    });
  };

  useEffect(() => {
    checkAchievements();
  }, [userProfile, exercisesCompleted]);

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      const conversationHistory = [...messages, userMessage];
      const detectedLevel = analyzeProficiencyLevel(conversationHistory);

      const prompt = `You are a friendly, encouraging language tutor helping someone learn ${languages[selectedLanguage].name}.

Conversation history: ${JSON.stringify(conversationHistory.slice(-5).map(m => ({ sender: m.sender, text: m.text })))}

Current user message: "${currentMessage}"
User's proficiency level: ${detectedLevel}
Learning goals: ${learningGoals.map(g => g.text).join(', ')}
Lesson mode: ${showLessonMode}

Respond with a JSON object in this exact format:
{
  "tutorResponse": "Your encouraging response in ${languages[selectedLanguage].name}. ${showLessonMode ? 'Focus on teaching specific grammar or vocabulary.' : 'Keep the conversation natural.'} Keep responses concise (2-3 sentences).",
  "englishTranslation": "The same response in English",
  "feedback": {
    "positive": ["Specific positive aspects"],
    "corrections": ["Gentle corrections if needed"],
    "suggestions": ["One helpful suggestion"]
  },
  "grammarAnalysis": {
    "accuracy": 85,
    "detectedLevel": "${detectedLevel}",
    "strengths": ["What they did well"],
    "improvements": ["One area to work on"]
  },
  "vocabularyUsed": ["new", "words"],
  "progressNotes": "Brief encouraging note"
}

IMPORTANT: Return only valid JSON, no markdown formatting.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        })
      });

      const data = await response.json();
      let responseText = data.content[0].text.trim();

      if (responseText.startsWith('```json')) {
        responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (responseText.startsWith('```')) {
        responseText = responseText.replace(/```\n?/g, '');
      }

      const parsedResponse = JSON.parse(responseText);

      const tutorMessage = {
        id: Date.now() + 1,
        text: parsedResponse.tutorResponse,
        englishTranslation: parsedResponse.englishTranslation,
        sender: 'tutor',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, tutorMessage]);
      setFeedback(parsedResponse.feedback);

      // Auto-play audio if enabled
      if (audioEnabled) {
        handleSpeakMessage(parsedResponse.tutorResponse, selectedLanguage);
      }

      // Update profile
      const newVocabCount = new Set([...userProfile.vocabularyCount, ...parsedResponse.vocabularyUsed]);
      setUserProfile(prev => ({
        ...prev,
        totalMessages: prev.totalMessages + 1,
        proficiencyLevel: parsedResponse.grammarAnalysis.detectedLevel,
        grammarAccuracy: parsedResponse.grammarAnalysis.accuracy,
        vocabularyCount: newVocabCount,
        languagesLearned: new Set([...prev.languagesLearned, selectedLanguage])
      }));

      // Update progress stats
      if (conversationHistory.length % 3 === 0) {
        setProgressStats(prev => ({
          ...prev,
          vocabularyGrowth: [...prev.vocabularyGrowth.slice(-4), newVocabCount.size],
          grammarAccuracy: [...prev.grammarAccuracy.slice(-4), parsedResponse.grammarAnalysis.accuracy],
          conversationLength: [...prev.conversationLength.slice(-4), conversationHistory.length]
        }));
      }

      // Update goals
      setLearningGoals(prev =>
        prev.map(goal => ({
          ...goal,
          progress: Math.min(100, goal.progress + 5)
        }))
      );

      updateStreak();

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: `I'm having trouble right now. Let's keep practicing! 🌟`,
        sender: 'tutor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    setMessages([]);
    setFeedback(null);
    setTranslatedMessages(new Set());
    const newGoals = generateLearningGoals(userProfile.proficiencyLevel, newLang);
    setLearningGoals(newGoals);
    setUserProfile(prev => ({
      ...prev,
      languagesLearned: new Set([...prev.languagesLearned, newLang])
    }));
  };

  const toggleGoalCompletion = (goalId) => {
    setLearningGoals(prev =>
      prev.map(goal =>
        goal.id === goalId
          ? { ...goal, completed: !goal.completed, progress: goal.completed ? goal.progress : 100 }
          : goal
      )
    );
  };

  const toggleMessageTranslation = (messageId) => {
    setTranslatedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const startExercise = (type) => {
    setExerciseType(type);
    setShowExercises(true);
    setExerciseScore(null);

    const langExercises = exercisesData[selectedLanguage];
    if (!langExercises) {
      alert(`No exercises available for ${languages[selectedLanguage].name} yet`);
      return;
    }

    if (type === 'flashcard' && langExercises.flashcards) {
      setFlashcardIndex(0);
      setShowFlashcardAnswer(false);
    } else if (type === 'fill_in_blank' && langExercises.fill_in_blank) {
      const randomExercise = langExercises.fill_in_blank[Math.floor(Math.random() * langExercises.fill_in_blank.length)];
      setCurrentExercise(randomExercise);
    } else if (type === 'multiple_choice' && langExercises.multiple_choice) {
      const randomExercise = langExercises.multiple_choice[Math.floor(Math.random() * langExercises.multiple_choice.length)];
      setCurrentExercise(randomExercise);
    }
  };

  const handleExerciseAnswer = (answer) => {
    if (!currentExercise) return;

    const isCorrect = answer === currentExercise.correct;
    setExerciseScore({ correct: isCorrect, explanation: currentExercise.explanation });

    if (isCorrect) {
      setExercisesCompleted(prev => prev + 1);
    }

    setTimeout(() => {
      setExerciseScore(null);
      const langExercises = exercisesData[selectedLanguage];
      if (exerciseType === 'fill_in_blank' && langExercises.fill_in_blank) {
        const randomExercise = langExercises.fill_in_blank[Math.floor(Math.random() * langExercises.fill_in_blank.length)];
        setCurrentExercise(randomExercise);
      } else if (exerciseType === 'multiple_choice' && langExercises.multiple_choice) {
        const randomExercise = langExercises.multiple_choice[Math.floor(Math.random() * langExercises.multiple_choice.length)];
        setCurrentExercise(randomExercise);
      }
    }, 2000);
  };

  const nextFlashcard = (quality) => {
    const langExercises = exercisesData[selectedLanguage];
    if (!langExercises?.flashcards) return;

    const currentCard = langExercises.flashcards[flashcardIndex];
    spacedRepetition.current.reviewCard(currentCard.id, quality);

    saveToStorage(STORAGE_KEYS.EXERCISES_HISTORY, spacedRepetition.current.getAllCardStates());

    setFlashcardIndex((flashcardIndex + 1) % langExercises.flashcards.length);
    setShowFlashcardAnswer(false);
    setExercisesCompleted(prev => prev + 1);
  };

  const handleImportData = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      importData(file)
        .then(() => {
          alert('Data imported successfully! Refreshing page...');
          window.location.reload();
        })
        .catch(error => {
          alert('Error importing data: ' + error.message);
        });
    }
  };

  const getProficiencyColor = (level) => {
    const colors = {
      'Beginner': 'text-green-600 bg-green-100 border-green-200 dark:bg-green-900 dark:text-green-200',
      'Intermediate': 'text-yellow-600 bg-yellow-100 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200',
      'Advanced': 'text-orange-600 bg-orange-100 border-orange-200 dark:bg-orange-900 dark:text-orange-200',
      'Fluent': 'text-purple-600 bg-purple-100 border-purple-200 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[level] || colors.Beginner;
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-1 h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-br from-green-400 to-blue-500 p-2 rounded-xl shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Afaan Tutor
                  </h1>
                </div>

                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 font-medium shadow-sm"
                >
                  {Object.entries(languages).map(([code, lang]) => (
                    <option key={code} value={code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>

                <div className={`px-4 py-2 rounded-xl text-sm font-bold border-2 shadow-sm ${getProficiencyColor(userProfile.proficiencyLevel)}`}>
                  ⭐ {userProfile.proficiencyLevel}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                  <span className="text-2xl">🔥</span>
                  <span className="font-bold text-orange-700 dark:text-orange-200">{userProfile.streakDays}</span>
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform"
                  title="Toggle dark mode (Ctrl+D)"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform"
                >
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-8xl mb-6 animate-bounce">{languages[selectedLanguage].flag}</div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                  Ready to learn {languages[selectedLanguage].name}?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Start chatting and I'll help you improve! 🌟
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <button
                    onClick={() => startExercise('flashcard')}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-xl font-medium hover:scale-105 transition-transform"
                  >
                    📚 Flashcards
                  </button>
                  <button
                    onClick={() => setShowGrammar(true)}
                    className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-4 py-2 rounded-xl font-medium hover:scale-105 transition-transform"
                  >
                    📖 Grammar
                  </button>
                  <button
                    onClick={() => setShowCultural(true)}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-4 py-2 rounded-xl font-medium hover:scale-105 transition-transform"
                  >
                    🌍 Culture
                  </button>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl relative group transition-all ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg'
                }`}>
                  {message.sender === 'tutor' && (
                    <div className="absolute -top-2 -right-2 flex space-x-1">
                      <button
                        onClick={() => handleSpeakMessage(message.text, selectedLanguage)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500 text-white p-1.5 rounded-full shadow-lg hover:scale-110"
                      >
                        <Volume2 className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => toggleMessageTranslation(message.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 text-white p-1.5 rounded-full shadow-lg hover:scale-110"
                      >
                        <Languages className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  <p className="text-base leading-relaxed">
                    {message.sender === 'tutor' && translatedMessages.has(message.id)
                      ? message.englishTranslation || message.text
                      : message.text
                    }
                  </p>
                  {message.sender === 'tutor' && translatedMessages.has(message.id) && (
                    <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 italic border-t border-gray-200 dark:border-gray-600 pt-2">
                      🌍 Translation
                    </p>
                  )}
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {recognizedText && (
              <div className="flex justify-end">
                <div className="max-w-xs lg:max-w-md px-5 py-3 rounded-2xl bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 italic">
                  <p className="text-sm text-blue-700 dark:text-blue-200">Listening... "{recognizedText}"</p>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-2xl px-5 py-3 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white dark:bg-gray-800 border-t-2 border-gray-100 dark:border-gray-700 p-4 shadow-lg">
            <div className="flex space-x-3">
              <button
                onClick={toggleListening}
                disabled={!speechRecognition.current.isSupported()}
                className={`p-3 rounded-xl transition-all ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                } disabled:opacity-50`}
                title="Voice input (Ctrl+M)"
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={`Type in ${languages[selectedLanguage].name}...`}
                className="flex-1 px-5 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 text-base shadow-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !currentMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all shadow-md hover:shadow-lg hover:scale-105 font-bold"
                title="Send message (Ctrl+Enter)"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Shortcuts: Ctrl+Enter (send) | Ctrl+K (exercises) | Ctrl+G (grammar) | Ctrl+M (mic)
            </div>
          </div>
        </div>

        {/* Sidebar - Desktop */}
        {sidebarOpen && (
          <div className={`hidden lg:block w-96 bg-white dark:bg-gray-800 border-l-2 border-gray-100 dark:border-gray-700 overflow-y-auto`}>
            {/* Quick Actions */}
            <div className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => startExercise('flashcard')}
                  className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-lg hover:scale-105 transition-transform text-sm font-medium"
                >
                  📚 Flashcards
                </button>
                <button
                  onClick={() => startExercise('fill_in_blank')}
                  className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg hover:scale-105 transition-transform text-sm font-medium"
                >
                  ✍️ Fill Blanks
                </button>
                <button
                  onClick={() => setShowGrammar(true)}
                  className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-lg hover:scale-105 transition-transform text-sm font-medium"
                >
                  📖 Grammar
                </button>
                <button
                  onClick={() => setShowCultural(true)}
                  className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 rounded-lg hover:scale-105 transition-transform text-sm font-medium"
                >
                  🌍 Culture
                </button>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Your Progress
              </h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">💬 Messages</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">{userProfile.totalMessages}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all" style={{width: `${Math.min(100, userProfile.totalMessages * 5)}%`}}></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-4 border-2 border-green-200 dark:border-green-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">📚 Vocabulary</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-300">{userProfile.vocabularyCount.size}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all" style={{width: `${Math.min(100, userProfile.vocabularyCount.size)}%`}}></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-4 border-2 border-purple-200 dark:border-purple-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">✅ Accuracy</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">{userProfile.grammarAccuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all" style={{width: `${userProfile.grammarAccuracy}%`}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-orange-600" />
                Learning Goals
              </h3>
              <div className="space-y-3">
                {learningGoals.slice(0, 5).map((goal) => (
                  <div key={goal.id} className={`p-3 rounded-xl border-2 transition-all ${
                    goal.completed
                      ? 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700'
                      : 'bg-white dark:bg-gray-700 border-gray-100 dark:border-gray-600'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={`text-sm font-medium mb-2 ${goal.completed ? 'line-through text-gray-500' : 'text-gray-700 dark:text-gray-200'}`}>
                          {goal.text}
                        </p>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              goal.completed
                                ? 'bg-gradient-to-r from-green-400 to-green-600'
                                : 'bg-gradient-to-r from-blue-400 to-purple-500'
                            }`}
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleGoalCompletion(goal.id)}
                        className="ml-3"
                      >
                        {goal.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <div className="h-6 w-6 border-3 border-gray-300 dark:border-gray-600 rounded-full"></div>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            {feedback && (
              <div className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                  Latest Feedback
                </h3>
                <div className="space-y-3">
                  {feedback.positive.length > 0 && (
                    <div className="bg-green-50 dark:bg-green-900 border-2 border-green-200 dark:border-green-700 rounded-xl p-4">
                      <p className="text-sm font-bold text-green-700 dark:text-green-200 mb-2">
                        🎉 Great job!
                      </p>
                      {feedback.positive.map((item, idx) => (
                        <p key={idx} className="text-sm text-green-800 dark:text-green-300 mb-1">
                          • {item}
                        </p>
                      ))}
                    </div>
                  )}
                  {feedback.suggestions.length > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-4">
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-200 mb-2">
                        ⭐ Try this:
                      </p>
                      {feedback.suggestions.map((item, idx) => (
                        <p key={idx} className="text-sm text-blue-800 dark:text-blue-300 mb-1">
                          • {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Achievements */}
            <div className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                Achievements ({unlockedAchievements.length}/{achievementsData.length})
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {achievementsData.slice(0, 6).map((achievement) => {
                  const unlocked = unlockedAchievements.find(a => a.id === achievement.id);
                  return (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-lg text-center transition-all ${
                        unlocked
                          ? 'bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-300 dark:border-yellow-700 scale-105'
                          : 'bg-gray-100 dark:bg-gray-700 opacity-50'
                      }`}
                      title={achievement.description}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs font-medium text-gray-700 dark:text-gray-200">{achievement.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Data Management */}
            <div className="p-5">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Data Management
              </h3>
              <div className="space-y-2">
                <button
                  onClick={exportData}
                  className="w-full px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-lg hover:scale-105 transition-transform flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Progress
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg hover:scale-105 transition-transform flex items-center justify-center"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Import Progress
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* Modals */}
        {/* Exercise Modal */}
        {showExercises && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {exerciseType === 'flashcard' && '📚 Flashcards'}
                  {exerciseType === 'fill_in_blank' && '✍️ Fill in the Blank'}
                  {exerciseType === 'multiple_choice' && '✅ Multiple Choice'}
                </h2>
                <button onClick={() => setShowExercises(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {exerciseType === 'flashcard' && exercisesData[selectedLanguage]?.flashcards && (
                <div className="text-center">
                  {/* Audio Button - Prominent position */}
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => {
                        const card = exercisesData[selectedLanguage].flashcards[flashcardIndex];
                        const textToSpeak = showFlashcardAnswer ? card.back : card.front;
                        handleSpeakMessage(textToSpeak, showFlashcardAnswer ? 'english' : selectedLanguage);
                      }}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                      title="Click to hear pronunciation"
                    >
                      <Volume2 className="h-5 w-5" />
                      <span>🔊 Listen</span>
                    </button>
                  </div>

                  <div
                    className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-12 mb-6 cursor-pointer hover:scale-105 transition-transform min-h-[300px] flex flex-col items-center justify-center"
                    onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
                  >
                    <div className="text-center">
                      <p className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {showFlashcardAnswer
                          ? exercisesData[selectedLanguage].flashcards[flashcardIndex].back
                          : exercisesData[selectedLanguage].flashcards[flashcardIndex].front
                        }
                      </p>

                      {/* Show romanization for non-Latin scripts */}
                      {!showFlashcardAnswer && needsTransliteration(selectedLanguage) && (
                        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-300 dark:border-blue-600">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pronunciation:</p>
                          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                            {exercisesData[selectedLanguage].flashcards[flashcardIndex].romanization ||
                             transliterate(exercisesData[selectedLanguage].flashcards[flashcardIndex].front, selectedLanguage)}
                          </p>
                        </div>
                      )}

                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                        {showFlashcardAnswer ? '✅ (English Translation)' : `📖 (${languages[selectedLanguage].name})`}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                        Click card to flip • Click speaker to hear
                      </p>
                    </div>
                  </div>

                  {showFlashcardAnswer && (
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => nextFlashcard(2)}
                        className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 hover:scale-105 transition-transform shadow-md"
                      >
                        Hard 😰
                      </button>
                      <button
                        onClick={() => nextFlashcard(3)}
                        className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600 hover:scale-105 transition-transform shadow-md"
                      >
                        Good 😊
                      </button>
                      <button
                        onClick={() => nextFlashcard(5)}
                        className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 hover:scale-105 transition-transform shadow-md"
                      >
                        Easy 😎
                      </button>
                    </div>
                  )}

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Card {flashcardIndex + 1} of {exercisesData[selectedLanguage].flashcards.length}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Category: {exercisesData[selectedLanguage].flashcards[flashcardIndex].category}
                    </p>
                  </div>
                </div>
              )}


              {(exerciseType === 'fill_in_blank' || exerciseType === 'multiple_choice') && currentExercise && (
                <div>
                  <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 mb-6">
                    <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {currentExercise.question}
                    </p>
                    {currentExercise.translation && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                        ({currentExercise.translation})
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {currentExercise.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleExerciseAnswer(option)}
                        disabled={exerciseScore !== null}
                        className={`p-4 rounded-xl text-left font-medium transition-all ${
                          exerciseScore
                            ? option === currentExercise.correct
                              ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500'
                              : exerciseScore.correct === false && option === exerciseScore.userAnswer
                              ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500'
                              : 'bg-gray-100 dark:bg-gray-700'
                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {exerciseScore && (
                    <div className={`mt-6 p-4 rounded-xl ${
                      exerciseScore.correct
                        ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500'
                        : 'bg-red-100 dark:bg-red-900 border-2 border-red-500'
                    }`}>
                      <p className="font-bold mb-2 text-gray-800 dark:text-white">
                        {exerciseScore.correct ? '🎉 Correct!' : '❌ Try again!'}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        {exerciseScore.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grammar Modal */}
        {showGrammar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <Book className="h-7 w-7 mr-2 text-blue-600" />
                  Grammar Library
                </h2>
                <button onClick={() => setShowGrammar(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {grammarLibrary[selectedLanguage] ? (
                <div className="space-y-4">
                  {grammarLibrary[selectedLanguage].map((topic) => (
                    <div key={topic.id} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{topic.title}</h3>
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                          {topic.level}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 mb-4">{topic.explanation}</p>
                      <div className="space-y-2 mb-4">
                        <p className="font-semibold text-gray-800 dark:text-white">Examples:</p>
                        {topic.examples.map((ex, idx) => (
                          <div key={idx} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <p className="font-medium text-gray-800 dark:text-white">{Object.values(ex)[0]}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 italic">{ex.english}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                          💡 {topic.practice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Grammar content coming soon for {languages[selectedLanguage].name}!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Cultural Insights Modal */}
        {showCultural && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <Globe className="h-7 w-7 mr-2 text-green-600" />
                  Cultural Insights
                </h2>
                <button onClick={() => setShowCultural(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {culturalInsights[selectedLanguage] ? (
                <div className="grid gap-4">
                  {culturalInsights[selectedLanguage].map((insight) => (
                    <div key={insight.id} className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{insight.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{insight.title}</h3>
                          <p className="text-gray-700 dark:text-gray-200">{insight.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Cultural content coming soon for {languages[selectedLanguage].name}!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Achievement Notification */}
        {newAchievement && (
          <div className="fixed top-20 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl animate-slide-up z-50">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{newAchievement.icon}</div>
              <div>
                <p className="font-bold">Achievement Unlocked!</p>
                <p className="text-sm">{newAchievement.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageTutor;
