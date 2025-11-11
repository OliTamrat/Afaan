// Language data including grammar rules, cultural insights, and scenarios

export const languages = {
  spanish: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', code: 'es-ES' },
  french: { name: 'French', nativeName: 'Français', flag: '🇫🇷', code: 'fr-FR' },
  german: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', code: 'de-DE' },
  japanese: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', code: 'ja-JP' },
  italian: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', code: 'it-IT' },
  portuguese: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', code: 'pt-PT' },
  chinese: { name: 'Chinese', nativeName: '中文', flag: '🇨🇳', code: 'zh-CN' },
  korean: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', code: 'ko-KR' },
  afaan_oromo: { name: 'Afaan Oromo', nativeName: 'Afaan Oromoo', flag: '🇪🇹', code: 'om-ET' },
  amharic: { name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹', code: 'am-ET' }
};

export const grammarLibrary = {
  spanish: [
    {
      id: 1,
      title: 'Present Tense Regular Verbs',
      category: 'Verbs',
      level: 'Beginner',
      explanation: 'Spanish verbs in the present tense follow regular patterns based on their endings: -ar, -er, -ir.',
      examples: [
        { spanish: 'Yo hablo español', english: 'I speak Spanish' },
        { spanish: 'Tú comes pan', english: 'You eat bread' },
        { spanish: 'Él vive en Madrid', english: 'He lives in Madrid' }
      ],
      practice: 'Try conjugating: hablar (to speak), comer (to eat), vivir (to live)'
    },
    {
      id: 2,
      title: 'Ser vs Estar',
      category: 'Verbs',
      level: 'Beginner',
      explanation: 'Both mean "to be" but have different uses. Ser for permanent characteristics, Estar for temporary states and locations.',
      examples: [
        { spanish: 'Soy estudiante (permanent)', english: 'I am a student' },
        { spanish: 'Estoy cansado (temporary)', english: 'I am tired' },
        { spanish: 'Ella está en casa', english: 'She is at home' }
      ],
      practice: 'When would you use ser vs estar?'
    }
  ],
  french: [
    {
      id: 1,
      title: 'Être and Avoir',
      category: 'Verbs',
      level: 'Beginner',
      explanation: 'The two most important irregular verbs in French. Être (to be) and Avoir (to have) are used extensively.',
      examples: [
        { french: 'Je suis heureux', english: 'I am happy' },
        { french: 'J\'ai un chat', english: 'I have a cat' },
        { french: 'Nous sommes français', english: 'We are French' }
      ],
      practice: 'Practice conjugating both verbs in all persons'
    }
  ],
  afaan_oromo: [
    {
      id: 1,
      title: 'Basic Greetings',
      category: 'Phrases',
      level: 'Beginner',
      explanation: 'Afaan Oromo greetings vary by time of day and context.',
      examples: [
        { oromo: 'Akkam jirta?', english: 'How are you? (to a woman)' },
        { oromo: 'Akkam jirtu?', english: 'How are you? (to a man)' },
        { oromo: 'Nagaan', english: 'Peacefully/Well' }
      ],
      practice: 'Try using these greetings in different contexts'
    }
  ],
  amharic: [
    {
      id: 1,
      title: 'Ge\'ez Script Basics',
      category: 'Writing',
      level: 'Beginner',
      explanation: 'Amharic uses the Ge\'ez script, which is an abugida (each character represents a consonant-vowel combination).',
      examples: [
        { amharic: 'ሰላም', english: 'Hello/Peace' },
        { amharic: 'እንዴት ነህ?', english: 'How are you? (to a man)' },
        { amharic: 'እንዴት ነሽ?', english: 'How are you? (to a woman)' }
      ],
      practice: 'Practice writing and pronouncing basic characters'
    }
  ]
};

export const culturalInsights = {
  spanish: [
    {
      id: 1,
      title: 'La Siesta',
      content: 'In Spain, many businesses close in the afternoon (2-5 PM) for a break. This tradition is less common in Latin America.',
      icon: '☀️'
    },
    {
      id: 2,
      title: 'Greeting with Kisses',
      content: 'In Spain and many Latin American countries, friends greet with two kisses on the cheeks (or one in some regions).',
      icon: '💋'
    },
    {
      id: 3,
      title: 'Meal Times',
      content: 'Dinner (la cena) is typically eaten very late, around 9-10 PM in Spain, much later than in many other countries.',
      icon: '🍽️'
    }
  ],
  french: [
    {
      id: 1,
      title: 'Tu vs Vous',
      content: 'French has formal (vous) and informal (tu) forms. Use "vous" with strangers, elders, and professional settings.',
      icon: '🎩'
    },
    {
      id: 2,
      title: 'Bread and Meals',
      content: 'Bread is an essential part of every French meal and is usually placed directly on the table, not on a plate.',
      icon: '🥖'
    }
  ],
  afaan_oromo: [
    {
      id: 1,
      title: 'Coffee Ceremony',
      content: 'The Oromo people have a rich coffee ceremony tradition. Coffee (buna) is roasted, ground, and brewed fresh, symbolizing friendship and respect.',
      icon: '☕'
    },
    {
      id: 2,
      title: 'Respect for Elders',
      content: 'In Oromo culture, showing respect to elders is paramount. This includes specific language forms and gestures when greeting older people.',
      icon: '🙏'
    }
  ],
  amharic: [
    {
      id: 1,
      title: 'Coffee Ceremony',
      content: 'The Ethiopian coffee ceremony is a significant cultural practice. It involves roasting green coffee beans, grinding them, and brewing the coffee in three rounds.',
      icon: '☕'
    },
    {
      id: 2,
      title: 'Hand Gestures',
      content: 'Pointing with the index finger is considered rude. Ethiopians often point with their chin or use an open hand.',
      icon: '👋'
    }
  ]
};

export const conversationScenarios = {
  restaurant: {
    title: 'At a Restaurant',
    icon: '🍽️',
    difficulty: 'Beginner',
    spanish: [
      { role: 'waiter', text: '¿Qué desea tomar?', english: 'What would you like to drink?' },
      { role: 'customer', text: 'Un agua, por favor', english: 'A water, please' },
      { role: 'waiter', text: '¿Y para comer?', english: 'And to eat?' },
      { role: 'customer', text: 'La paella, por favor', english: 'The paella, please' }
    ],
    french: [
      { role: 'waiter', text: 'Bonjour, que désirez-vous?', english: 'Hello, what would you like?' },
      { role: 'customer', text: 'Un café, s\'il vous plaît', english: 'A coffee, please' }
    ]
  },
  shopping: {
    title: 'Shopping',
    icon: '🛍️',
    difficulty: 'Beginner',
    spanish: [
      { role: 'clerk', text: '¿En qué puedo ayudarle?', english: 'How can I help you?' },
      { role: 'customer', text: 'Busco una camiseta', english: 'I\'m looking for a t-shirt' },
      { role: 'clerk', text: '¿Qué talla usa?', english: 'What size do you wear?' },
      { role: 'customer', text: 'Mediana, por favor', english: 'Medium, please' }
    ]
  },
  travel: {
    title: 'Travel & Directions',
    icon: '✈️',
    difficulty: 'Intermediate',
    spanish: [
      { role: 'tourist', text: 'Disculpe, ¿dónde está la estación?', english: 'Excuse me, where is the station?' },
      { role: 'local', text: 'Está a dos cuadras, a la derecha', english: 'It\'s two blocks away, on the right' },
      { role: 'tourist', text: 'Muchas gracias', english: 'Thank you very much' },
      { role: 'local', text: 'De nada', english: 'You\'re welcome' }
    ]
  },
  medical: {
    title: 'At the Doctor',
    icon: '🏥',
    difficulty: 'Intermediate',
    spanish: [
      { role: 'doctor', text: '¿Qué le pasa?', english: 'What\'s wrong?' },
      { role: 'patient', text: 'Me duele la cabeza', english: 'My head hurts' },
      { role: 'doctor', text: '¿Desde cuándo?', english: 'Since when?' },
      { role: 'patient', text: 'Desde ayer', english: 'Since yesterday' }
    ]
  }
};

export const achievements = [
  { id: 1, name: 'First Steps', description: 'Send your first message', icon: '👶', requirement: 1 },
  { id: 2, name: 'Conversationalist', description: 'Have 10 conversations', icon: '💬', requirement: 10 },
  { id: 3, name: 'Word Collector', description: 'Learn 50 new words', icon: '📚', requirement: 50 },
  { id: 4, name: 'Grammar Master', description: 'Complete 20 exercises', icon: '✅', requirement: 20 },
  { id: 5, name: 'Streak Champion', description: 'Maintain a 7-day streak', icon: '🔥', requirement: 7 },
  { id: 6, name: 'Polyglot', description: 'Practice 3 different languages', icon: '🌍', requirement: 3 },
  { id: 7, name: 'Dedicated Learner', description: 'Study for 30 days total', icon: '📅', requirement: 30 },
  { id: 8, name: 'Perfect Score', description: 'Get 100% on an exercise', icon: '💯', requirement: 1 },
  { id: 9, name: 'Speed Learner', description: 'Complete 10 exercises in one day', icon: '⚡', requirement: 10 },
  { id: 10, name: 'Culture Explorer', description: 'Read all cultural insights', icon: '🌟', requirement: 1 }
];

export const themes = {
  light: {
    name: 'Light',
    primary: 'bg-white',
    secondary: 'bg-gray-50',
    text: 'text-gray-900',
    border: 'border-gray-200'
  },
  dark: {
    name: 'Dark',
    primary: 'bg-gray-900',
    secondary: 'bg-gray-800',
    text: 'text-white',
    border: 'border-gray-700'
  },
  blue: {
    name: 'Ocean Blue',
    primary: 'bg-blue-50',
    secondary: 'bg-blue-100',
    text: 'text-blue-900',
    border: 'border-blue-200'
  },
  green: {
    name: 'Forest Green',
    primary: 'bg-green-50',
    secondary: 'bg-green-100',
    text: 'text-green-900',
    border: 'border-green-200'
  },
  purple: {
    name: 'Royal Purple',
    primary: 'bg-purple-50',
    secondary: 'bg-purple-100',
    text: 'text-purple-900',
    border: 'border-purple-200'
  }
};
