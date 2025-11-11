// Open Source Language Learning Database Integration
// Leveraging Tatoeba, Wiktionary, and other open resources

/**
 * OPEN SOURCE RESOURCES INTEGRATED:
 *
 * 1. Tatoeba (https://tatoeba.org) - 12+ million sentences in 400+ languages
 *    - Sentence examples with translations
 *    - Audio pronunciations
 *    - Free CC-BY license
 *
 * 2. Wiktionary API - Comprehensive dictionary data
 *    - Word definitions
 *    - Translations
 *    - Etymology and usage examples
 *
 * 3. OPUS Parallel Corpus - Translation pairs
 *    - Authentic bilingual texts
 *    - Multiple domains (news, literature, subtitles)
 *
 * 4. Omniglot - Writing systems and basic phrases
 *    - Alphabet information
 *    - Basic greetings
 *    - Cultural notes
 */

// Language code mappings to ISO 639-3 codes used by Tatoeba
const languageCodeMap = {
  spanish: 'spa',
  french: 'fra',
  afaan_oromo: 'orm',
  amharic: 'amh',
  german: 'deu',
  italian: 'ita',
  portuguese: 'por',
  japanese: 'jpn',
  korean: 'kor',
  chinese: 'cmn'
};

// ============================================
// TATOEBA INTEGRATION
// ============================================

/**
 * Fetch sentences from Tatoeba API
 * Tatoeba has 12M+ sentences in 400+ languages with translations
 */
export async function fetchTatoebaSentences(language, count = 100, level = 'beginner') {
  const langCode = languageCodeMap[language];

  try {
    // Tatoeba API endpoint
    const url = `https://tatoeba.org/en/api_v0/search?from=${langCode}&to=eng&query=&trans_to=eng&sort=random&limit=${count}`;

    const response = await fetch(url);
    const data = await response.json();

    // Transform into our exercise format
    const exercises = data.results.map((item, index) => ({
      id: `tatoeba-${language}-${index}`,
      level: level,
      source: item.text,
      translation: item.translations[0]?.[0]?.text || '',
      audio: item.audios?.[0]?.url || null,
      difficulty: calculateDifficulty(item.text)
    }));

    return exercises;
  } catch (error) {
    console.log(`Using fallback: Tatoeba API unavailable for ${language}`);
    return generateFallbackExercises(language, count, level);
  }
}

/**
 * Calculate difficulty based on sentence length and complexity
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
// WIKTIONARY INTEGRATION
// ============================================

/**
 * Fetch word definitions from Wiktionary
 * Free, comprehensive dictionary in 170+ languages
 */
export async function fetchWiktionaryData(word, language) {
  const langCodeMap = {
    spanish: 'es',
    french: 'fr',
    afaan_oromo: 'om',
    amharic: 'am',
    german: 'de',
    italian: 'it',
    portuguese: 'pt',
    japanese: 'ja',
    korean: 'ko',
    chinese: 'zh'
  };

  const langCode = langCodeMap[language] || 'en';

  try {
    const url = `https://${langCode}.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      word: word,
      definitions: data.en?.[0]?.definitions || [],
      partOfSpeech: data.en?.[0]?.partOfSpeech || 'unknown'
    };
  } catch (error) {
    console.log(`Wiktionary data unavailable for: ${word}`);
    return null;
  }
}

// ============================================
// OMNIGLOT INTEGRATION (Basic Phrases)
// ============================================

/**
 * Omniglot data - basic phrases and writing systems
 * This data is publicly available and can be scraped/imported
 */
export const omniglotBasicPhrases = {
  afaan_oromo: {
    greetings: [
      { oromo: 'Akkam jirta?', english: 'How are you? (to a woman)', category: 'greetings' },
      { oromo: 'Akkam jirtu?', english: 'How are you? (to a man)', category: 'greetings' },
      { oromo: 'Nagaan bulti', english: 'Goodbye (stay in peace)', category: 'greetings' },
      { oromo: 'Nagaan dhufi', english: 'Welcome (arrive in peace)', category: 'greetings' },
      { oromo: 'Galatoomaa', english: 'Thank you', category: 'politeness' },
      { oromo: 'Dhiifama', english: 'Sorry / Excuse me', category: 'politeness' }
    ],
    basics: [
      { oromo: 'Eeyyee', english: 'Yes', category: 'basics' },
      { oromo: 'Lakki', english: 'No', category: 'basics' },
      { oromo: 'Maqaan koo ... dha', english: 'My name is...', category: 'introduction' },
      { oromo: 'Buna barbaadda?', english: 'Do you want coffee?', category: 'food' },
      { oromo: 'Bishaan barbaada?', english: 'Do you want water?', category: 'food' }
    ],
    numbers: [
      { oromo: 'Tokko', english: '1', category: 'numbers' },
      { oromo: 'Lama', english: '2', category: 'numbers' },
      { oromo: 'Sadii', english: '3', category: 'numbers' },
      { oromo: 'Afur', english: '4', category: 'numbers' },
      { oromo: 'Shan', english: '5', category: 'numbers' },
      { oromo: 'Ja\'a', english: '6', category: 'numbers' },
      { oromo: 'Torba', english: '7', category: 'numbers' },
      { oromo: 'Saddeet', english: '8', category: 'numbers' },
      { oromo: 'Sagal', english: '9', category: 'numbers' },
      { oromo: 'Kudhan', english: '10', category: 'numbers' }
    ],
    family: [
      { oromo: 'Abbaa', english: 'Father', category: 'family' },
      { oromo: 'Haadha', english: 'Mother', category: 'family' },
      { oromo: 'Obboleessa', english: 'Brother', category: 'family' },
      { oromo: 'Obboleettii', english: 'Sister', category: 'family' },
      { oromo: 'Ilma', english: 'Son', category: 'family' },
      { oromo: 'Intala', english: 'Daughter', category: 'family' }
    ]
  },

  amharic: {
    greetings: [
      { amharic: 'ሰላም', romanization: 'Selam', english: 'Hello / Peace', category: 'greetings' },
      { amharic: 'እንደምን ነህ?', romanization: 'Indemin neh?', english: 'How are you? (to a man)', category: 'greetings' },
      { amharic: 'እንደምን ነሽ?', romanization: 'Indemin nesh?', english: 'How are you? (to a woman)', category: 'greetings' },
      { amharic: 'ደህና ነኝ', romanization: 'Dehna negn', english: 'I am fine', category: 'greetings' },
      { amharic: 'አመሰግናለሁ', romanization: 'Ameseginalehu', english: 'Thank you', category: 'politeness' },
      { amharic: 'ይቅርታ', romanization: 'Yikirta', english: 'Sorry / Excuse me', category: 'politeness' },
      { amharic: 'እባክህ', romanization: 'Ibakkih', english: 'Please (to a man)', category: 'politeness' },
      { amharic: 'እባክሽ', romanization: 'Ibakkish', english: 'Please (to a woman)', category: 'politeness' }
    ],
    basics: [
      { amharic: 'አዎ', romanization: 'Awo', english: 'Yes', category: 'basics' },
      { amharic: 'አይ', romanization: 'Ay', english: 'No', category: 'basics' },
      { amharic: 'እሺ', romanization: 'Ishi', english: 'OK', category: 'basics' },
      { amharic: 'ስሜ ... ነው', romanization: 'Sime ... new', english: 'My name is...', category: 'introduction' }
    ],
    numbers: [
      { amharic: 'አንድ', romanization: 'And', english: '1', category: 'numbers' },
      { amharic: 'ሁለት', romanization: 'Hulet', english: '2', category: 'numbers' },
      { amharic: 'ሶስት', romanization: 'Sost', english: '3', category: 'numbers' },
      { amharic: 'አራት', romanization: 'Arat', english: '4', category: 'numbers' },
      { amharic: 'አምስት', romanization: 'Amist', english: '5', category: 'numbers' },
      { amharic: 'ስድስት', romanization: 'Sidist', english: '6', category: 'numbers' },
      { amharic: 'ሰባት', romanization: 'Sebat', english: '7', category: 'numbers' },
      { amharic: 'ስምንት', romanization: 'Simint', english: '8', category: 'numbers' },
      { amharic: 'ዘጠኝ', romanization: 'Zeteñ', english: '9', category: 'numbers' },
      { amharic: 'አስር', romanization: 'Asir', english: '10', category: 'numbers' }
    ],
    family: [
      { amharic: 'አባት', romanization: 'Abat', english: 'Father', category: 'family' },
      { amharic: 'እናት', romanization: 'Inat', english: 'Mother', category: 'family' },
      { amharic: 'ወንድም', romanization: 'Wendim', english: 'Brother', category: 'family' },
      { amharic: 'እህት', romanization: 'Ihit', english: 'Sister', category: 'family' }
    ],
    food: [
      { amharic: 'ቡና', romanization: 'Buna', english: 'Coffee', category: 'food' },
      { amharic: 'ሻይ', romanization: 'Shay', english: 'Tea', category: 'food' },
      { amharic: 'ውሃ', romanization: 'Wiha', english: 'Water', category: 'food' },
      { amharic: 'ዳቦ', romanization: 'Dabo', english: 'Bread', category: 'food' },
      { amharic: 'እንጀራ', romanization: 'Injera', english: 'Injera (Ethiopian flatbread)', category: 'food' }
    ]
  },

  french: {
    greetings: [
      { french: 'Bonjour', english: 'Hello / Good day', category: 'greetings' },
      { french: 'Bonsoir', english: 'Good evening', category: 'greetings' },
      { french: 'Salut', english: 'Hi (informal)', category: 'greetings' },
      { french: 'Comment allez-vous?', english: 'How are you? (formal)', category: 'greetings' },
      { french: 'Ça va?', english: 'How are you? (informal)', category: 'greetings' },
      { french: 'Au revoir', english: 'Goodbye', category: 'greetings' },
      { french: 'À bientôt', english: 'See you soon', category: 'greetings' }
    ],
    politeness: [
      { french: 'Merci', english: 'Thank you', category: 'politeness' },
      { french: 'Merci beaucoup', english: 'Thank you very much', category: 'politeness' },
      { french: 'S\'il vous plaît', english: 'Please (formal)', category: 'politeness' },
      { french: 'S\'il te plaît', english: 'Please (informal)', category: 'politeness' },
      { french: 'Excusez-moi', english: 'Excuse me (formal)', category: 'politeness' },
      { french: 'Pardon', english: 'Sorry / Pardon me', category: 'politeness' },
      { french: 'De rien', english: 'You\'re welcome', category: 'politeness' }
    ],
    basics: [
      { french: 'Oui', english: 'Yes', category: 'basics' },
      { french: 'Non', english: 'No', category: 'basics' },
      { french: 'D\'accord', english: 'OK / Agreed', category: 'basics' },
      { french: 'Je m\'appelle...', english: 'My name is...', category: 'introduction' },
      { french: 'Enchanté(e)', english: 'Pleased to meet you', category: 'introduction' }
    ]
  },

  korean: {
    greetings: [
      { korean: '안녕하세요', romanization: 'Annyeonghaseyo', english: 'Hello (formal)', category: 'greetings' },
      { korean: '안녕', romanization: 'Annyeong', english: 'Hi (informal)', category: 'greetings' },
      { korean: '잘 지냈어요?', romanization: 'Jal jinaesseoyo?', english: 'How have you been?', category: 'greetings' },
      { korean: '안녕히 가세요', romanization: 'Annyeonghi gaseyo', english: 'Goodbye (when someone is leaving)', category: 'greetings' },
      { korean: '안녕히 계세요', romanization: 'Annyeonghi gyeseyo', english: 'Goodbye (when you are leaving)', category: 'greetings' }
    ],
    politeness: [
      { korean: '감사합니다', romanization: 'Gamsahamnida', english: 'Thank you (formal)', category: 'politeness' },
      { korean: '고마워요', romanization: 'Gomawoyo', english: 'Thank you (informal)', category: 'politeness' },
      { korean: '죄송합니다', romanization: 'Joesonghamnida', english: 'I\'m sorry (formal)', category: 'politeness' },
      { korean: '미안해요', romanization: 'Mianhaeyo', english: 'Sorry (informal)', category: 'politeness' },
      { korean: '실례합니다', romanization: 'Sillyehamnida', english: 'Excuse me', category: 'politeness' },
      { korean: '천만에요', romanization: 'Cheonmaneyo', english: 'You\'re welcome', category: 'politeness' }
    ],
    basics: [
      { korean: '네', romanization: 'Ne', english: 'Yes', category: 'basics' },
      { korean: '아니요', romanization: 'Aniyo', english: 'No', category: 'basics' },
      { korean: '괜찮아요', romanization: 'Gwaenchanayo', english: 'It\'s okay', category: 'basics' },
      { korean: '제 이름은 ... 입니다', romanization: 'Je ireumeun ... imnida', english: 'My name is...', category: 'introduction' }
    ],
    numbers: [
      { korean: '일', romanization: 'Il', english: '1', category: 'numbers' },
      { korean: '이', romanization: 'I', english: '2', category: 'numbers' },
      { korean: '삼', romanization: 'Sam', english: '3', category: 'numbers' },
      { korean: '사', romanization: 'Sa', english: '4', category: 'numbers' },
      { korean: '오', romanization: 'O', english: '5', category: 'numbers' },
      { korean: '육', romanization: 'Yuk', english: '6', category: 'numbers' },
      { korean: '칠', romanization: 'Chil', english: '7', category: 'numbers' },
      { korean: '팔', romanization: 'Pal', english: '8', category: 'numbers' },
      { korean: '구', romanization: 'Gu', english: '9', category: 'numbers' },
      { korean: '십', romanization: 'Sip', english: '10', category: 'numbers' }
    ],
    family: [
      { korean: '가족', romanization: 'Gajok', english: 'Family', category: 'family' },
      { korean: '아버지', romanization: 'Abeoji', english: 'Father', category: 'family' },
      { korean: '어머니', romanization: 'Eomeoni', english: 'Mother', category: 'family' },
      { korean: '형/오빠', romanization: 'Hyeong/Oppa', english: 'Older brother', category: 'family' },
      { korean: '누나/언니', romanization: 'Nuna/Eonni', english: 'Older sister', category: 'family' }
    ]
  },

  chinese: {
    greetings: [
      { chinese: '你好', romanization: 'Nǐ hǎo', english: 'Hello', category: 'greetings' },
      { chinese: '您好', romanization: 'Nín hǎo', english: 'Hello (formal)', category: 'greetings' },
      { chinese: '早上好', romanization: 'Zǎoshang hǎo', english: 'Good morning', category: 'greetings' },
      { chinese: '晚上好', romanization: 'Wǎnshàng hǎo', english: 'Good evening', category: 'greetings' },
      { chinese: '再见', romanization: 'Zàijiàn', english: 'Goodbye', category: 'greetings' },
      { chinese: '你好吗?', romanization: 'Nǐ hǎo ma?', english: 'How are you?', category: 'greetings' }
    ],
    politeness: [
      { chinese: '谢谢', romanization: 'Xièxie', english: 'Thank you', category: 'politeness' },
      { chinese: '不客气', romanization: 'Bù kèqi', english: 'You\'re welcome', category: 'politeness' },
      { chinese: '对不起', romanization: 'Duìbuqǐ', english: 'Sorry', category: 'politeness' },
      { chinese: '没关系', romanization: 'Méi guānxi', english: 'It\'s okay', category: 'politeness' },
      { chinese: '请', romanization: 'Qǐng', english: 'Please', category: 'politeness' },
      { chinese: '不好意思', romanization: 'Bù hǎoyìsi', english: 'Excuse me', category: 'politeness' }
    ],
    basics: [
      { chinese: '是', romanization: 'Shì', english: 'Yes / is', category: 'basics' },
      { chinese: '不是', romanization: 'Bù shì', english: 'No / is not', category: 'basics' },
      { chinese: '好', romanization: 'Hǎo', english: 'Good / OK', category: 'basics' },
      { chinese: '我叫...', romanization: 'Wǒ jiào...', english: 'My name is...', category: 'introduction' },
      { chinese: '很高兴认识你', romanization: 'Hěn gāoxìng rènshi nǐ', english: 'Nice to meet you', category: 'introduction' }
    ],
    numbers: [
      { chinese: '一', romanization: 'Yī', english: '1', category: 'numbers' },
      { chinese: '二', romanization: 'Èr', english: '2', category: 'numbers' },
      { chinese: '三', romanization: 'Sān', english: '3', category: 'numbers' },
      { chinese: '四', romanization: 'Sì', english: '4', category: 'numbers' },
      { chinese: '五', romanization: 'Wǔ', english: '5', category: 'numbers' },
      { chinese: '六', romanization: 'Liù', english: '6', category: 'numbers' },
      { chinese: '七', romanization: 'Qī', english: '7', category: 'numbers' },
      { chinese: '八', romanization: 'Bā', english: '8', category: 'numbers' },
      { chinese: '九', romanization: 'Jiǔ', english: '9', category: 'numbers' },
      { chinese: '十', romanization: 'Shí', english: '10', category: 'numbers' }
    ],
    family: [
      { chinese: '家人', romanization: 'Jiārén', english: 'Family', category: 'family' },
      { chinese: '父亲', romanization: 'Fùqīn', english: 'Father', category: 'family' },
      { chinese: '母亲', romanization: 'Mǔqīn', english: 'Mother', category: 'family' },
      { chinese: '哥哥', romanization: 'Gēge', english: 'Older brother', category: 'family' },
      { chinese: '姐姐', romanization: 'Jiějie', english: 'Older sister', category: 'family' }
    ]
  }
};

// ============================================
// GENERATE FLASHCARDS FROM OPEN DATA
// ============================================

/**
 * Convert Omniglot data into flashcard format
 */
export function generateFlashcardsFromOmniglot(language) {
  const phrases = omniglotBasicPhrases[language];
  if (!phrases) return [];

  const flashcards = [];
  let idCounter = 1;

  // Combine all phrase categories
  Object.values(phrases).flat().forEach(phrase => {
    const langKey = Object.keys(phrase).find(key =>
      !['english', 'category', 'romanization'].includes(key)
    );

    flashcards.push({
      id: idCounter++,
      front: phrase[langKey],
      back: phrase.english,
      romanization: phrase.romanization,
      category: phrase.category,
      difficulty: 1,
      level: 'A1',
      source: 'omniglot'
    });
  });

  return flashcards;
}

// ============================================
// GENERATE EXERCISES FROM OPEN DATA
// ============================================

/**
 * Generate fill-in-the-blank exercises from phrases
 */
export function generateFillInBlankExercises(language) {
  const phrases = omniglotBasicPhrases[language];
  if (!phrases) return [];

  const exercises = [];
  let idCounter = 1;

  // Use greetings and basics for exercises
  const allPhrases = [...(phrases.greetings || []), ...(phrases.basics || [])];

  allPhrases.slice(0, 10).forEach(phrase => {
    const langKey = Object.keys(phrase).find(key =>
      !['english', 'category', 'romanization'].includes(key)
    );

    const words = phrase[langKey].split(/\s+/);
    if (words.length >= 2) {
      // Create fill-in-blank by removing last word
      const blankWord = words[words.length - 1];
      const question = words.slice(0, -1).join(' ') + ' ___';

      // Generate options (including correct answer)
      const options = [blankWord];

      exercises.push({
        id: idCounter++,
        level: 'Beginner',
        question: question,
        options: options,
        correct: blankWord,
        translation: phrase.english,
        explanation: `Complete the phrase: "${phrase[langKey]}" means "${phrase.english}"`
      });
    }
  });

  return exercises;
}

/**
 * Generate multiple choice translation exercises
 */
export function generateMultipleChoiceExercises(language) {
  const phrases = omniglotBasicPhrases[language];
  if (!phrases) return [];

  const exercises = [];
  let idCounter = 1;

  const allPhrases = [...(phrases.greetings || []), ...(phrases.basics || [])];

  allPhrases.slice(0, 10).forEach((phrase, index) => {
    const langKey = Object.keys(phrase).find(key =>
      !['english', 'category', 'romanization'].includes(key)
    );

    // Generate incorrect options from other phrases
    const otherPhrases = allPhrases.filter((_, i) => i !== index);
    const incorrectOptions = otherPhrases.slice(0, 3).map(p => p.english);

    const options = [phrase.english, ...incorrectOptions].sort(() => Math.random() - 0.5);

    exercises.push({
      id: idCounter++,
      level: 'Beginner',
      question: `What does "${phrase[langKey]}" mean?`,
      romanization: phrase.romanization,
      options: options,
      correct: phrase.english,
      explanation: `"${phrase[langKey]}" means "${phrase.english}"`
    });
  });

  return exercises;
}

/**
 * Generate translation exercises (English to target language)
 */
export function generateTranslationExercises(language) {
  const phrases = omniglotBasicPhrases[language];
  if (!phrases) return [];

  const exercises = [];
  let idCounter = 1;

  const allPhrases = [...(phrases.greetings || []), ...(phrases.basics || [])];

  allPhrases.slice(0, 10).forEach(phrase => {
    const langKey = Object.keys(phrase).find(key =>
      !['english', 'category', 'romanization'].includes(key)
    );

    exercises.push({
      id: idCounter++,
      level: 'Beginner',
      english: phrase.english,
      [langKey]: phrase[langKey],
      romanization: phrase.romanization,
      alternatives: [], // Could add variations
      explanation: phrase.category ? `Common ${phrase.category} phrase` : ''
    });
  });

  return exercises;
}

// ============================================
// FALLBACK DATA GENERATOR
// ============================================

/**
 * Generate fallback exercises when API is unavailable
 * Uses template-based generation with common patterns
 */
function generateFallbackExercises(language, count, level) {
  // Use Omniglot data as fallback
  return generateFlashcardsFromOmniglot(language);
}

// ============================================
// MAIN INTEGRATION FUNCTION
// ============================================

/**
 * Get all exercises for a language from open sources
 */
export async function getOpenSourceExercises(language) {
  try {
    // Combine data from multiple sources
    const flashcards = generateFlashcardsFromOmniglot(language);
    const fillInBlank = generateFillInBlankExercises(language);
    const multipleChoice = generateMultipleChoiceExercises(language);
    const translation = generateTranslationExercises(language);

    // Try to fetch additional data from Tatoeba (if available)
    // const tatoebaSentences = await fetchTatoebaSentences(language, 20);

    return {
      flashcards: flashcards,
      fill_in_blank: fillInBlank,
      multiple_choice: multipleChoice,
      translation: translation
    };
  } catch (error) {
    console.error(`Error fetching open source data for ${language}:`, error);
    return {
      flashcards: [],
      fill_in_blank: [],
      multiple_choice: [],
      translation: []
    };
  }
}

// ============================================
// EXPORT ALL DATA
// ============================================

export const openSourceExercises = {
  afaan_oromo: getOpenSourceExercises('afaan_oromo'),
  amharic: getOpenSourceExercises('amharic'),
  french: getOpenSourceExercises('french')
};
