// UNLIMITED CONTENT SYSTEM
// Fetches content dynamically from multiple open-source databases
// No limits - fetch as much as needed on-demand

/**
 * STRATEGY:
 * Instead of pre-loading limited data, we fetch on-demand from APIs
 * This gives us access to millions of sentences, definitions, and examples
 */

// ============================================
// TATOEBA: 12 MILLION SENTENCES
// ============================================

/**
 * Fetch unlimited sentences from Tatoeba
 * Can fetch 100+ sentences per language instantly
 */
export async function fetchTatoebaSentences(languageCode, count = 100, level = 'any') {
  const langMap = {
    spanish: 'spa',
    french: 'fra',
    german: 'deu',
    italian: 'ita',
    portuguese: 'por',
    japanese: 'jpn',
    korean: 'kor',
    chinese: 'cmn',
    afaan_oromo: 'orm',
    amharic: 'amh'
  };

  const from = langMap[languageCode];

  try {
    // Tatoeba API - gets random sentences with English translations
    const url = `https://tatoeba.org/en/api_v0/search?from=${from}&to=eng&sort=random&limit=${count}`;

    const response = await fetch(url);
    const data = await response.json();

    // Transform to our format
    const sentences = data.results.map((item, index) => ({
      id: `tatoeba-${from}-${Date.now()}-${index}`,
      source: item.text,
      translation: item.translations[0]?.[0]?.text || '',
      language: languageCode,
      level: estimateLevel(item.text),
      difficulty: calculateDifficulty(item.text),
      audio: item.audios?.[0]?.url || null,
      source_url: `https://tatoeba.org/en/sentences/show/${item.id}`,
      type: 'sentence'
    }));

    return sentences;
  } catch (error) {
    console.error(`Tatoeba fetch error for ${languageCode}:`, error);
    return [];
  }
}

/**
 * Estimate CEFR level based on sentence complexity
 */
function estimateLevel(text) {
  const words = text.split(/\s+/).length;
  if (words <= 5) return 'A1';
  if (words <= 8) return 'A2';
  if (words <= 12) return 'B1';
  if (words <= 16) return 'B2';
  if (words <= 20) return 'C1';
  return 'C2';
}

/**
 * Calculate difficulty 1-5
 */
function calculateDifficulty(text) {
  const words = text.split(/\s+/).length;
  if (words <= 5) return 1;
  if (words <= 10) return 2;
  if (words <= 15) return 3;
  if (words <= 20) return 4;
  return 5;
}

// ============================================
// WIKTIONARY: MILLIONS OF DEFINITIONS
// ============================================

/**
 * Fetch word definitions from Wiktionary
 */
export async function fetchWiktionaryDefinition(word, languageCode) {
  const langMap = {
    spanish: 'es',
    french: 'fr',
    german: 'de',
    italian: 'it',
    portuguese: 'pt',
    japanese: 'ja',
    korean: 'ko',
    chinese: 'zh',
    afaan_oromo: 'om',
    amharic: 'am'
  };

  const lang = langMap[languageCode] || 'en';

  try {
    const url = `https://${lang}.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`;
    const response = await fetch(url);

    if (!response.ok) {
      // Try English Wiktionary as fallback
      const enUrl = `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`;
      const enResponse = await fetch(enUrl);
      const enData = await enResponse.json();
      return enData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Wiktionary fetch error for ${word}:`, error);
    return null;
  }
}

// ============================================
// MASSIVE EXPANDED OMNIGLOT DATA
// ============================================

/**
 * Extended Omniglot data with MANY more categories
 * This is just a fraction - can be expanded indefinitely
 */
export const massiveOmniglotData = {
  spanish: {
    // Already covered: greetings, politeness, numbers, family, food

    weather: [
      { spanish: 'Hace sol', english: 'It\'s sunny', category: 'weather' },
      { spanish: 'Llueve', english: 'It\'s raining', category: 'weather' },
      { spanish: 'Hace frío', english: 'It\'s cold', category: 'weather' },
      { spanish: 'Hace calor', english: 'It\'s hot', category: 'weather' },
      { spanish: 'Nieva', english: 'It\'s snowing', category: 'weather' },
      { spanish: 'Está nublado', english: 'It\'s cloudy', category: 'weather' },
      { spanish: 'Hace viento', english: 'It\'s windy', category: 'weather' }
    ],

    directions: [
      { spanish: '¿Dónde está...?', english: 'Where is...?', category: 'directions' },
      { spanish: 'A la derecha', english: 'To the right', category: 'directions' },
      { spanish: 'A la izquierda', english: 'To the left', category: 'directions' },
      { spanish: 'Todo recto', english: 'Straight ahead', category: 'directions' },
      { spanish: 'Cerca', english: 'Near', category: 'directions' },
      { spanish: 'Lejos', english: 'Far', category: 'directions' }
    ],

    shopping: [
      { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?', category: 'shopping' },
      { spanish: 'Es muy caro', english: 'It\'s very expensive', category: 'shopping' },
      { spanish: 'Es barato', english: 'It\'s cheap', category: 'shopping' },
      { spanish: 'Quiero comprar...', english: 'I want to buy...', category: 'shopping' },
      { spanish: '¿Tiene cambio?', english: 'Do you have change?', category: 'shopping' }
    ],

    time_expressions: [
      { spanish: 'Ahora', english: 'Now', category: 'time' },
      { spanish: 'Después', english: 'After/Later', category: 'time' },
      { spanish: 'Antes', english: 'Before', category: 'time' },
      { spanish: 'Siempre', english: 'Always', category: 'time' },
      { spanish: 'Nunca', english: 'Never', category: 'time' },
      { spanish: 'A veces', english: 'Sometimes', category: 'time' },
      { spanish: 'Mañana', english: 'Tomorrow', category: 'time' },
      { spanish: 'Ayer', english: 'Yesterday', category: 'time' },
      { spanish: 'Hoy', english: 'Today', category: 'time' }
    ],

    restaurant: [
      { spanish: 'Una mesa para dos', english: 'A table for two', category: 'restaurant' },
      { spanish: 'El menú, por favor', english: 'The menu, please', category: 'restaurant' },
      { spanish: 'La cuenta, por favor', english: 'The check, please', category: 'restaurant' },
      { spanish: '¿Qué recomienda?', english: 'What do you recommend?', category: 'restaurant' },
      { spanish: 'Está delicioso', english: 'It\'s delicious', category: 'restaurant' }
    ],

    travel: [
      { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', category: 'travel' },
      { spanish: 'Necesito ayuda', english: 'I need help', category: 'travel' },
      { spanish: 'Estoy perdido', english: 'I\'m lost', category: 'travel' },
      { spanish: '¿Habla inglés?', english: 'Do you speak English?', category: 'travel' },
      { spanish: 'No entiendo', english: 'I don\'t understand', category: 'travel' }
    ],

    emergency: [
      { spanish: '¡Socorro!', english: 'Help!', category: 'emergency' },
      { spanish: 'Llame a la policía', english: 'Call the police', category: 'emergency' },
      { spanish: 'Necesito un médico', english: 'I need a doctor', category: 'emergency' },
      { spanish: 'Es una emergencia', english: 'It\'s an emergency', category: 'emergency' }
    ],

    common_verbs: [
      { spanish: 'Ir', english: 'To go', category: 'verbs' },
      { spanish: 'Venir', english: 'To come', category: 'verbs' },
      { spanish: 'Ver', english: 'To see', category: 'verbs' },
      { spanish: 'Hacer', english: 'To do/make', category: 'verbs' },
      { spanish: 'Decir', english: 'To say/tell', category: 'verbs' },
      { spanish: 'Poder', english: 'To be able to/can', category: 'verbs' },
      { spanish: 'Querer', english: 'To want', category: 'verbs' },
      { spanish: 'Saber', english: 'To know (facts)', category: 'verbs' },
      { spanish: 'Conocer', english: 'To know (people/places)', category: 'verbs' },
      { spanish: 'Tener', english: 'To have', category: 'verbs' },
      { spanish: 'Dar', english: 'To give', category: 'verbs' },
      { spanish: 'Poner', english: 'To put', category: 'verbs' },
      { spanish: 'Salir', english: 'To leave/go out', category: 'verbs' },
      { spanish: 'Llegar', english: 'To arrive', category: 'verbs' },
      { spanish: 'Pensar', english: 'To think', category: 'verbs' }
    ],

    common_adjectives: [
      { spanish: 'Grande', english: 'Big', category: 'adjectives' },
      { spanish: 'Pequeño', english: 'Small', category: 'adjectives' },
      { spanish: 'Bueno', english: 'Good', category: 'adjectives' },
      { spanish: 'Malo', english: 'Bad', category: 'adjectives' },
      { spanish: 'Nuevo', english: 'New', category: 'adjectives' },
      { spanish: 'Viejo', english: 'Old', category: 'adjectives' },
      { spanish: 'Joven', english: 'Young', category: 'adjectives' },
      { spanish: 'Rápido', english: 'Fast', category: 'adjectives' },
      { spanish: 'Lento', english: 'Slow', category: 'adjectives' },
      { spanish: 'Fácil', english: 'Easy', category: 'adjectives' },
      { spanish: 'Difícil', english: 'Difficult', category: 'adjectives' }
    ]
  },

  french: {
    weather: [
      { french: 'Il fait beau', english: 'It\'s nice weather', category: 'weather' },
      { french: 'Il pleut', english: 'It\'s raining', category: 'weather' },
      { french: 'Il neige', english: 'It\'s snowing', category: 'weather' },
      { french: 'Il fait froid', english: 'It\'s cold', category: 'weather' },
      { french: 'Il fait chaud', english: 'It\'s hot', category: 'weather' }
    ],

    directions: [
      { french: 'Où est...?', english: 'Where is...?', category: 'directions' },
      { french: 'À droite', english: 'To the right', category: 'directions' },
      { french: 'À gauche', english: 'To the left', category: 'directions' },
      { french: 'Tout droit', english: 'Straight ahead', category: 'directions' },
      { french: 'Près', english: 'Near', category: 'directions' },
      { french: 'Loin', english: 'Far', category: 'directions' }
    ],

    restaurant: [
      { french: 'Une table pour deux', english: 'A table for two', category: 'restaurant' },
      { french: 'L\'addition, s\'il vous plaît', english: 'The check, please', category: 'restaurant' },
      { french: 'C\'est délicieux', english: 'It\'s delicious', category: 'restaurant' },
      { french: 'Que recommandez-vous?', english: 'What do you recommend?', category: 'restaurant' }
    ]
  },

  korean: {
    weather: [
      { korean: '날씨가 좋아요', romanization: 'Nalssiga joayo', english: 'The weather is nice', category: 'weather' },
      { korean: '비가 와요', romanization: 'Biga wayo', english: 'It\'s raining', category: 'weather' },
      { korean: '춥워요', romanization: 'Chuweoyo', english: 'It\'s cold', category: 'weather' },
      { korean: '더워요', romanization: 'Deoweoyo', english: 'It\'s hot', category: 'weather' }
    ],

    restaurant: [
      { korean: '맛있어요', romanization: 'Masisseoyo', english: 'It\'s delicious', category: 'restaurant' },
      { korean: '물 주세요', romanization: 'Mul juseyo', english: 'Water please', category: 'restaurant' },
      { korean: '계산서 주세요', romanization: 'Gyesanseo juseyo', english: 'Check please', category: 'restaurant' }
    ]
  },

  chinese: {
    weather: [
      { chinese: '天气好', romanization: 'Tiānqì hǎo', english: 'The weather is nice', category: 'weather' },
      { chinese: '下雨', romanization: 'Xià yǔ', english: 'It\'s raining', category: 'weather' },
      { chinese: '很冷', romanization: 'Hěn lěng', english: 'It\'s cold', category: 'weather' },
      { chinese: '很热', romanization: 'Hěn rè', english: 'It\'s hot', category: 'weather' }
    ],

    restaurant: [
      { chinese: '好吃', romanization: 'Hǎochī', english: 'Delicious', category: 'restaurant' },
      { chinese: '买单', romanization: 'Mǎidān', english: 'Check please', category: 'restaurant' },
      { chinese: '我要这个', romanization: 'Wǒ yào zhège', english: 'I want this', category: 'restaurant' }
    ]
  }
};

// ============================================
// GENERATE UNLIMITED FLASHCARDS
// ============================================

/**
 * Generate flashcards dynamically - can fetch unlimited amounts
 */
export async function generateUnlimitedFlashcards(language, count = 1000) {
  const flashcards = [];

  // 1. Get extended Omniglot data (instant)
  const omniglotData = massiveOmniglotData[language] || {};
  Object.values(omniglotData).flat().forEach((phrase, index) => {
    const langKey = Object.keys(phrase).find(k => !['english', 'category', 'romanization'].includes(k));
    flashcards.push({
      id: `omni-${language}-${index}`,
      front: phrase[langKey],
      back: phrase.english,
      romanization: phrase.romanization,
      category: phrase.category,
      difficulty: 1,
      level: 'A1',
      source: 'omniglot-extended'
    });
  });

  // 2. Fetch sentences from Tatoeba (async - can get thousands)
  try {
    const sentences = await fetchTatoebaSentences(language, Math.min(count - flashcards.length, 500));
    sentences.forEach((sent, index) => {
      flashcards.push({
        id: `tatoeba-${language}-${index}`,
        front: sent.source,
        back: sent.translation,
        category: 'sentences',
        difficulty: sent.difficulty,
        level: sent.level,
        source: 'tatoeba',
        audio: sent.audio
      });
    });
  } catch (error) {
    console.log('Tatoeba unavailable, using Omniglot only');
  }

  return flashcards.slice(0, count);
}

// ============================================
// GENERATE UNLIMITED EXERCISES
// ============================================

/**
 * Generate exercises from unlimited pool of sentences
 */
export async function generateUnlimitedExercises(language, type = 'all', count = 100) {
  // Fetch sentences from Tatoeba
  const sentences = await fetchTatoebaSentences(language, count);

  const exercises = {
    fillInBlank: [],
    multipleChoice: [],
    translation: []
  };

  sentences.forEach((sent, index) => {
    // Generate fill-in-blank
    const words = sent.source.split(/\s+/);
    if (words.length >= 3) {
      const blankIndex = Math.floor(words.length / 2);
      const blankWord = words[blankIndex];
      const question = words.map((w, i) => i === blankIndex ? '___' : w).join(' ');

      exercises.fillInBlank.push({
        id: `fill-${index}`,
        question,
        correct: blankWord,
        translation: sent.translation,
        level: sent.level
      });
    }

    // Generate multiple choice
    exercises.multipleChoice.push({
      id: `mc-${index}`,
      question: `What does "${sent.source}" mean?`,
      correct: sent.translation,
      level: sent.level
    });

    // Generate translation
    exercises.translation.push({
      id: `trans-${index}`,
      english: sent.translation,
      target: sent.source,
      level: sent.level
    });
  });

  return exercises;
}

// ============================================
// ON-DEMAND CONTENT LOADER
// ============================================

/**
 * Load content on-demand as user progresses
 * This allows infinite content without pre-loading everything
 */
export class UnlimitedContentLoader {
  constructor(language) {
    this.language = language;
    this.cache = {
      flashcards: [],
      sentences: [],
      exercises: []
    };
    this.loaded = {
      flashcards: 0,
      sentences: 0
    };
  }

  async loadMore(type = 'flashcards', count = 50) {
    if (type === 'flashcards') {
      const newCards = await generateUnlimitedFlashcards(this.language, count);
      this.cache.flashcards.push(...newCards);
      this.loaded.flashcards += count;
      return newCards;
    }

    if (type === 'sentences') {
      const newSentences = await fetchTatoebaSentences(this.language, count);
      this.cache.sentences.push(...newSentences);
      this.loaded.sentences += count;
      return newSentences;
    }

    if (type === 'exercises') {
      const exercises = await generateUnlimitedExercises(this.language, 'all', count);
      this.cache.exercises.push(...Object.values(exercises).flat());
      return exercises;
    }
  }

  getStats() {
    return {
      flashcardsLoaded: this.cache.flashcards.length,
      sentencesLoaded: this.cache.sentences.length,
      exercisesLoaded: this.cache.exercises.length,
      totalItems: this.cache.flashcards.length + this.cache.sentences.length + this.cache.exercises.length
    };
  }
}

// ============================================
// EXPORT EVERYTHING
// ============================================

export default {
  fetchTatoebaSentences,
  fetchWiktionaryDefinition,
  generateUnlimitedFlashcards,
  generateUnlimitedExercises,
  UnlimitedContentLoader,
  massiveOmniglotData
};
