// Exercise data for various interactive learning activities
import { getAllFlashcards } from './flashcardsExpanded.js';
import {
  generateFlashcardsFromOmniglot,
  generateFillInBlankExercises,
  generateMultipleChoiceExercises,
  generateTranslationExercises
} from './openSourceIntegration.js';
import {
  fetchTatoebaSentences,
  generateUnlimitedFlashcards,
  generateUnlimitedExercises,
  massiveOmniglotData,
  UnlimitedContentLoader
} from './unlimitedContent.js';

// Create content loaders for each language - enables UNLIMITED content!
export const contentLoaders = {
  spanish: new UnlimitedContentLoader('spanish'),
  french: new UnlimitedContentLoader('french'),
  afaan_oromo: new UnlimitedContentLoader('afaan_oromo'),
  amharic: new UnlimitedContentLoader('amharic'),
  korean: new UnlimitedContentLoader('korean'),
  chinese: new UnlimitedContentLoader('chinese'),
  german: new UnlimitedContentLoader('german'),
  italian: new UnlimitedContentLoader('italian'),
  portuguese: new UnlimitedContentLoader('portuguese'),
  japanese: new UnlimitedContentLoader('japanese')
};

/**
 * Load more content dynamically for any language
 * This allows truly unlimited learning resources!
 */
export async function loadMoreContent(language, type = 'flashcards', count = 50) {
  if (!contentLoaders[language]) {
    console.warn(`No content loader for ${language}`);
    return [];
  }

  return await contentLoaders[language].loadMore(type, count);
}

/**
 * Get content statistics for a language
 * Shows how much content has been loaded so far
 */
export function getContentStats(language) {
  if (!contentLoaders[language]) {
    return { flashcardsLoaded: 0, sentencesLoaded: 0, exercisesLoaded: 0, totalItems: 0 };
  }

  return contentLoaders[language].getStats();
}

/**
 * Initialize content for a language
 * Loads initial batch of content from multiple sources
 */
export async function initializeLanguageContent(language) {
  console.log(`Initializing unlimited content for ${language}...`);

  try {
    // Load initial flashcards (combines Omniglot + Tatoeba)
    const flashcards = await generateUnlimitedFlashcards(language, 100);

    // Load initial sentences from Tatoeba
    const sentences = await fetchTatoebaSentences(language, 50);

    // Load initial exercises
    const exercises = await generateUnlimitedExercises(language, 'all', 50);

    console.log(`${language} initialized:`, {
      flashcards: flashcards.length,
      sentences: sentences.length,
      exercises: Object.values(exercises).flat().length
    });

    return {
      flashcards,
      sentences,
      exercises
    };
  } catch (error) {
    console.error(`Error initializing ${language}:`, error);
    // Fallback to existing static content
    return {
      flashcards: generateFlashcardsFromOmniglot(language),
      sentences: [],
      exercises: {
        fillInBlank: generateFillInBlankExercises(language),
        multipleChoice: generateMultipleChoiceExercises(language),
        translation: generateTranslationExercises(language)
      }
    };
  }
}

export const exerciseTypes = {
  FILL_IN_BLANK: 'fill_in_blank',
  MULTIPLE_CHOICE: 'multiple_choice',
  FLASHCARD: 'flashcard',
  TRANSLATION: 'translation',
  LISTENING: 'listening'
};

export const exercisesData = {
  spanish: {
    fill_in_blank: [
      {
        id: 1,
        level: 'Beginner',
        question: 'Yo ___ español.',
        options: ['hablo', 'habla', 'hablas', 'hablan'],
        correct: 'hablo',
        translation: 'I speak Spanish',
        explanation: '"Hablo" is the first person singular (yo) form of the verb "hablar"'
      },
      {
        id: 2,
        level: 'Beginner',
        question: '¿Cómo ___ llamas?',
        options: ['te', 'se', 'me', 'le'],
        correct: 'te',
        translation: 'What is your name?',
        explanation: '"Te" is the reflexive pronoun for "tú" (you)'
      },
      {
        id: 3,
        level: 'Beginner',
        question: 'Ella ___ una estudiante.',
        options: ['es', 'está', 'son', 'están'],
        correct: 'es',
        translation: 'She is a student',
        explanation: 'Use "ser" (es) for professions and permanent characteristics'
      }
    ],
    multiple_choice: [
      {
        id: 1,
        level: 'Beginner',
        question: 'What does "Buenos días" mean?',
        options: ['Good night', 'Good afternoon', 'Good morning', 'Goodbye'],
        correct: 'Good morning',
        explanation: '"Buenos días" is used to greet someone in the morning'
      },
      {
        id: 2,
        level: 'Intermediate',
        question: 'Which verb is irregular in the present tense?',
        options: ['hablar', 'comer', 'ser', 'vivir'],
        correct: 'ser',
        explanation: '"Ser" (to be) is highly irregular: soy, eres, es, somos, sois, son'
      }
    ],
    // Import 540 comprehensive flashcards from flashcardsExpanded.js
    flashcards: getAllFlashcards('spanish'),
    translation: [
      {
        id: 1,
        level: 'Beginner',
        english: 'I am happy',
        spanish: 'Estoy feliz',
        alternatives: ['Soy feliz'],
        explanation: 'Use "estar" for temporary emotions'
      },
      {
        id: 2,
        level: 'Beginner',
        english: 'We eat bread',
        spanish: 'Comemos pan',
        alternatives: ['Nosotros comemos pan'],
        explanation: 'Comer (to eat) → nosotros comemos'
      }
    ]
  },
  french: {
    // Auto-generated from open-source Omniglot data
    fill_in_blank: generateFillInBlankExercises('french'),
    multiple_choice: generateMultipleChoiceExercises('french'),
    flashcards: generateFlashcardsFromOmniglot('french'),
    translation: generateTranslationExercises('french')
  },
  afaan_oromo: {
    // Auto-generated from open-source Omniglot data (40+ phrases)
    fill_in_blank: generateFillInBlankExercises('afaan_oromo'),
    multiple_choice: generateMultipleChoiceExercises('afaan_oromo'),
    flashcards: generateFlashcardsFromOmniglot('afaan_oromo'),
    translation: generateTranslationExercises('afaan_oromo')
  },
  amharic: {
    // Auto-generated from open-source Omniglot data (35+ phrases with romanization)
    fill_in_blank: generateFillInBlankExercises('amharic'),
    multiple_choice: generateMultipleChoiceExercises('amharic'),
    flashcards: generateFlashcardsFromOmniglot('amharic'),
    translation: generateTranslationExercises('amharic')
  },
  korean: {
    // Auto-generated from open-source Omniglot data (30+ phrases with romanization)
    fill_in_blank: generateFillInBlankExercises('korean'),
    multiple_choice: generateMultipleChoiceExercises('korean'),
    flashcards: generateFlashcardsFromOmniglot('korean'),
    translation: generateTranslationExercises('korean')
  },
  chinese: {
    // Auto-generated from open-source Omniglot data (30+ phrases with Pinyin romanization)
    fill_in_blank: generateFillInBlankExercises('chinese'),
    multiple_choice: generateMultipleChoiceExercises('chinese'),
    flashcards: generateFlashcardsFromOmniglot('chinese'),
    translation: generateTranslationExercises('chinese')
  }
};

// Spaced Repetition Algorithm (SM-2 simplified)
export class SpacedRepetitionManager {
  constructor() {
    this.cards = new Map();
  }

  // Initialize or get card data
  getCard(cardId) {
    if (!this.cards.has(cardId)) {
      this.cards.set(cardId, {
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        nextReview: Date.now(),
        lastReview: null
      });
    }
    return this.cards.get(cardId);
  }

  // Update card after review (quality: 0-5, where 5 is perfect)
  reviewCard(cardId, quality) {
    const card = this.getCard(cardId);

    if (quality < 3) {
      // Failed - reset
      card.repetitions = 0;
      card.interval = 1;
    } else {
      // Passed
      if (card.repetitions === 0) {
        card.interval = 1;
      } else if (card.repetitions === 1) {
        card.interval = 6;
      } else {
        card.interval = Math.round(card.interval * card.easeFactor);
      }

      card.repetitions++;
      card.easeFactor = Math.max(1.3,
        card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
      );
    }

    card.lastReview = Date.now();
    card.nextReview = Date.now() + (card.interval * 24 * 60 * 60 * 1000); // days to milliseconds

    return card;
  }

  // Get cards due for review
  getDueCards(allCards) {
    const now = Date.now();
    return allCards.filter(card => {
      const cardData = this.getCard(card.id);
      return cardData.nextReview <= now;
    });
  }

  // Get all card states
  getAllCardStates() {
    return Object.fromEntries(this.cards);
  }

  // Load card states from storage
  loadStates(states) {
    this.cards = new Map(Object.entries(states));
  }
}
