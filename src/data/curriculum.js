// Comprehensive Language Curriculum - A1 (Beginner) to C2 (Mastery)
// Following CEFR (Common European Framework of Reference for Languages)

export const curriculumLevels = {
  A1: {
    name: 'Beginner',
    description: 'Can understand and use familiar everyday expressions and very basic phrases.',
    targetVocabulary: 200,
    color: 'green',
    icon: '🌱'
  },
  A2: {
    name: 'Elementary',
    description: 'Can communicate in simple routine tasks requiring simple and direct exchange.',
    targetVocabulary: 400,
    color: 'blue',
    icon: '🌿'
  },
  B1: {
    name: 'Intermediate',
    description: 'Can deal with most situations likely to arise while traveling.',
    targetVocabulary: 800,
    color: 'yellow',
    icon: '🌳'
  },
  B2: {
    name: 'Upper-Intermediate',
    description: 'Can interact with a degree of fluency and spontaneity.',
    targetVocabulary: 1500,
    color: 'orange',
    icon: '🎋'
  },
  C1: {
    name: 'Advanced',
    description: 'Can express ideas fluently and spontaneously without much searching.',
    targetVocabulary: 2500,
    color: 'red',
    icon: '🌲'
  },
  C2: {
    name: 'Mastery',
    description: 'Can understand virtually everything heard or read with ease.',
    targetVocabulary: 5000,
    color: 'purple',
    icon: '🏆'
  }
};

// Curriculum structure for each language
export const curriculum = {
  spanish: {
    A1: [
      {
        id: 1,
        title: 'Greetings & Introductions',
        lessons: [
          {
            id: 1,
            title: 'Basic Greetings',
            vocabulary: ['Hola', 'Buenos días', 'Buenas tardes', 'Buenas noches', 'Adiós', 'Hasta luego'],
            grammar: 'Subject pronouns (yo, tú, él/ella)',
            exercises: ['Practice saying hello', 'Introduce yourself', 'Say goodbye'],
            culturalNote: 'Spanish greetings often include physical contact like kisses on cheeks (2 in Spain, varies by region)'
          },
          {
            id: 2,
            title: 'Self Introduction',
            vocabulary: ['Me llamo', 'Soy', 'Tengo', 'años', 'nombre', 'apellido'],
            grammar: 'Verb "ser" (to be) - present tense',
            exercises: ['State your name', 'Say your age', 'Say where you\'re from'],
            culturalNote: 'Spanish speakers often use two last names (father\'s and mother\'s)'
          },
          {
            id: 3,
            title: 'Asking Questions',
            vocabulary: ['¿Cómo te llamas?', '¿Cuántos años tienes?', '¿De dónde eres?', '¿Qué?', '¿Dónde?', '¿Cuándo?'],
            grammar: 'Question formation with intonation',
            exercises: ['Ask someone\'s name', 'Ask about age', 'Ask where they\'re from'],
            culturalNote: 'Upside-down question marks (¿) start Spanish questions'
          }
        ]
      },
      {
        id: 2,
        title: 'Numbers & Time',
        lessons: [
          {
            id: 1,
            title: 'Numbers 1-20',
            vocabulary: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'],
            grammar: 'Number agreement with gender',
            exercises: ['Count to 20', 'Say phone numbers', 'Give your age'],
            culturalNote: 'In Spanish-speaking countries, commas and periods in numbers are reversed (1.000,50 instead of 1,000.50)'
          },
          {
            id: 2,
            title: 'Telling Time',
            vocabulary: ['hora', 'minuto', 'Son las', 'Es la', 'media', 'cuarto', 'y', 'menos'],
            grammar: 'Use of "ser" for telling time',
            exercises: ['Say the current time', 'Schedule appointments', 'Talk about daily routine times'],
            culturalNote: '24-hour clock is commonly used in Spain; 12-hour format more common in Latin America'
          }
        ]
      },
      {
        id: 3,
        title: 'Family & Relationships',
        lessons: [
          {
            id: 1,
            title: 'Family Members',
            vocabulary: ['padre', 'madre', 'hermano', 'hermana', 'abuelo', 'abuela', 'tío', 'tía', 'primo', 'prima'],
            grammar: 'Possessive adjectives (mi, tu, su)',
            exercises: ['Describe your family', 'Talk about family members', 'Ask about someone\'s family'],
            culturalNote: 'Family is central in Hispanic culture - multi-generational living is common'
          }
        ]
      },
      {
        id: 4,
        title: 'Food & Dining',
        lessons: [
          {
            id: 1,
            title: 'Basic Foods',
            vocabulary: ['pan', 'agua', 'leche', 'carne', 'pescado', 'fruta', 'verdura', 'arroz', 'pollo', 'queso'],
            grammar: 'Articles (el, la, los, las)',
            exercises: ['Order food', 'Say what you like to eat', 'Shop for groceries'],
            culturalNote: 'Spanish meal times are later: lunch around 2-3pm, dinner around 9-10pm'
          },
          {
            id: 2,
            title: 'At the Restaurant',
            vocabulary: ['menu', 'camarero/a', 'cuenta', 'propina', 'plato', 'bebida', 'postre'],
            grammar: 'Polite requests with "por favor"',
            exercises: ['Order a meal', 'Ask for the bill', 'Make special requests'],
            culturalNote: 'Tipping is less common in Spain (5-10%) but more expected in Latin America (10-15%)'
          }
        ]
      },
      {
        id: 5,
        title: 'Colors & Descriptions',
        lessons: [
          {
            id: 1,
            title: 'Basic Colors',
            vocabulary: ['rojo', 'azul', 'verde', 'amarillo', 'negro', 'blanco', 'naranja', 'morado', 'rosa', 'gris'],
            grammar: 'Adjective agreement with gender and number',
            exercises: ['Describe objects by color', 'Describe clothing', 'Talk about preferences'],
            culturalNote: 'Color symbolism varies: red can mean passion, yellow can represent sadness'
          }
        ]
      }
    ],
    A2: [
      {
        id: 1,
        title: 'Daily Activities',
        lessons: [
          {
            id: 1,
            title: 'Morning Routine',
            vocabulary: ['despertarse', 'levantarse', 'ducharse', 'desayunar', 'cepillarse', 'vestirse'],
            grammar: 'Reflexive verbs in present tense',
            exercises: ['Describe your morning', 'Compare routines', 'Talk about habits'],
            culturalNote: 'Spanish breakfast is typically light: coffee with toast or pastry'
          },
          {
            id: 2,
            title: 'Work & Study',
            vocabulary: ['trabajar', 'estudiar', 'oficina', 'escuela', 'profesor', 'estudiante', 'libro', 'examen'],
            grammar: 'Regular -ar, -er, -ir verbs',
            exercises: ['Talk about your job', 'Discuss studies', 'Make plans'],
            culturalNote: 'Siesta culture is fading but lunch breaks are still long (2-3 hours) in some regions'
          }
        ]
      },
      {
        id: 2,
        title: 'Shopping & Money',
        lessons: [
          {
            id: 1,
            title: 'At the Store',
            vocabulary: ['tienda', 'comprar', 'vender', 'precio', 'caro', 'barato', 'descuento', 'pagar', 'tarjeta', 'efectivo'],
            grammar: 'Demonstratives (este, ese, aquel)',
            exercises: ['Shop for clothes', 'Negotiate prices', 'Return items'],
            culturalNote: 'Bargaining is common in markets but not in regular stores'
          }
        ]
      },
      {
        id: 3,
        title: 'Past Tense Introduction',
        lessons: [
          {
            id: 1,
            title: 'Preterite Tense Basics',
            vocabulary: ['ayer', 'anoche', 'la semana pasada', 'el año pasado', 'hace', 'entonces'],
            grammar: 'Regular preterite conjugations',
            exercises: ['Talk about yesterday', 'Narrate a simple story', 'Describe past events'],
            culturalNote: 'Spanish has two past tenses (preterite and imperfect) with distinct uses'
          }
        ]
      }
    ],
    B1: [
      {
        id: 1,
        title: 'Travel & Tourism',
        lessons: [
          {
            id: 1,
            title: 'At the Airport',
            vocabulary: ['vuelo', 'aeropuerto', 'pasaporte', 'equipaje', 'facturar', 'embarque', 'aduana', 'retraso'],
            grammar: 'Future tense with "ir a"',
            exercises: ['Check in for flight', 'Handle flight delays', 'Navigate airport'],
            culturalNote: 'Spain has excellent high-speed rail (AVE) as alternative to flying'
          },
          {
            id: 2,
            title: 'Hotels & Accommodation',
            vocabulary: ['hotel', 'habitación', 'reserva', 'recepción', 'llave', 'aire acondicionado', 'wifi'],
            grammar: 'Conditional mood for polite requests',
            exercises: ['Make a reservation', 'Check in/out', 'Report problems'],
            culturalNote: 'Hostales and pensiones offer budget accommodation beyond hotels'
          }
        ]
      },
      {
        id: 2,
        title: 'Health & Body',
        lessons: [
          {
            id: 1,
            title: 'At the Doctor',
            vocabulary: ['médico', 'enfermera', 'dolor', 'fiebre', 'receta', 'farmacia', 'medicina', 'síntoma'],
            grammar: 'Expressions with "doler" (to hurt)',
            exercises: ['Describe symptoms', 'Make appointment', 'Get prescription'],
            culturalNote: 'Spain has universal healthcare; pharmacies (farmacias) are widely available'
          }
        ]
      }
    ],
    B2: [
      {
        id: 1,
        title: 'Advanced Communication',
        lessons: [
          {
            id: 1,
            title: 'Expressing Opinions',
            vocabulary: ['creo que', 'pienso que', 'en mi opinión', 'estoy de acuerdo', 'no estoy de acuerdo', 'me parece que'],
            grammar: 'Subjunctive mood introduction',
            exercises: ['Debate topics', 'Express agreement/disagreement', 'Justify opinions'],
            culturalNote: 'Spanish speakers often have passionate discussions about football, politics, food'
          }
        ]
      }
    ],
    C1: [
      {
        id: 1,
        title: 'Nuanced Expression',
        lessons: [
          {
            id: 1,
            title: 'Idiomatic Expressions',
            vocabulary: ['estar en las nubes', 'costar un ojo de la cara', 'tomar el pelo', 'ser pan comido'],
            grammar: 'Complex subjunctive structures',
            exercises: ['Use idioms naturally', 'Understand regional variations', 'Master formal/informal register'],
            culturalNote: 'Spanish has rich regional variations with unique idioms per country'
          }
        ]
      }
    ],
    C2: [
      {
        id: 1,
        title: 'Native-Level Mastery',
        lessons: [
          {
            id: 1,
            title: 'Literary Language',
            vocabulary: ['Explore Spanish literature', 'Academic writing', 'Professional presentations'],
            grammar: 'All advanced structures including literary tenses',
            exercises: ['Read novels', 'Write essays', 'Give speeches'],
            culturalNote: 'Spanish literature includes Don Quixote, García Márquez, Cervantes, Lorca'
          }
        ]
      }
    ]
  },

  // Template for other languages (to be expanded)
  french: {
    A1: [
      {
        id: 1,
        title: 'Les Salutations (Greetings)',
        lessons: [
          {
            id: 1,
            title: 'Bonjour & Basic Greetings',
            vocabulary: ['Bonjour', 'Bonsoir', 'Au revoir', 'Salut', 'Ça va?', 'Merci', 'S\'il vous plaît'],
            grammar: 'Tu vs Vous (formal/informal)',
            exercises: ['Greet people', 'Use polite forms', 'Say goodbye'],
            culturalNote: 'French has formal (vous) and informal (tu) forms - very important culturally'
          },
          {
            id: 2,
            title: 'Se Présenter (Introducing Yourself)',
            vocabulary: ['Je m\'appelle', 'Je suis', 'J\'ai', 'ans', 'Je viens de', 'J\'habite à'],
            grammar: 'Present tense of être and avoir',
            exercises: ['Introduce yourself', 'Ask others\' names', 'Talk about nationality'],
            culturalNote: 'French people value proper pronunciation and will appreciate your efforts'
          }
        ]
      },
      {
        id: 2,
        title: 'Les Nombres (Numbers)',
        lessons: [
          {
            id: 1,
            title: 'Numbers 1-20',
            vocabulary: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'],
            grammar: 'Number pronunciation rules',
            exercises: ['Count objects', 'Give phone number', 'Say prices'],
            culturalNote: 'French numbers 70-99 are counted uniquely (soixante-dix = 60+10)'
          }
        ]
      }
    ],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  },

  amharic: {
    A1: [
      {
        id: 1,
        title: 'መሰረታዊ ሰላምታ (Basic Greetings)',
        lessons: [
          {
            id: 1,
            title: 'ሰላም - Saying Hello',
            vocabulary: ['ሰላም (Selam)', 'እንደምን አለህ? (Indemin aleh?)', 'ደህና ነኝ (Dehna negn)', 'እንደምን ነሽ? (Indemin nesh?)', 'ደህና ነኝ (Dehna negn)'],
            grammar: 'Gender forms in greetings (masculine/feminine)',
            exercises: ['Greet someone', 'Respond to greetings', 'Use appropriate gender forms'],
            culturalNote: 'Ethiopians have gender-specific greetings. Men and women are addressed differently.'
          },
          {
            id: 2,
            title: 'ስምህ ማን ነው? - Names & Introductions',
            vocabulary: ['ስሜ (sime)', 'ነው (new)', 'እባላለሁ (ɨbalalehu)', 'ከ... መጣሁ (ke...metahu)', 'ያስደስታል (yasdestaлекал)'],
            grammar: 'Subject pronouns and verb "to be"',
            exercises: ['Say your name', 'Ask others\' names', 'Tell where you\'re from'],
            culturalNote: 'Ethiopian names often have meanings (Abebe = "has grown", Tigist = "patience")'
          },
          {
            id: 3,
            title: 'Ge\'ez Script Basics',
            vocabulary: ['Learn the Fidel characters', 'Basic syllables: ሀ ለ ሐ መ', 'Vowel modifications'],
            grammar: 'Ge\'ez writing system fundamentals',
            exercises: ['Write your name', 'Read basic words', 'Practice character recognition'],
            culturalNote: 'Ge\'ez script has 231 characters - one of the oldest writing systems still in use'
          }
        ]
      },
      {
        id: 2,
        title: 'ቁጥሮች (Numbers)',
        lessons: [
          {
            id: 1,
            title: 'Numbers 1-10',
            vocabulary: ['አንድ (and)', 'ሁለት (hulet)', 'ሶስት (sost)', 'አራት (arat)', 'አምስት (amist)', 'ስድስት (sidist)', 'ሰባት (sebat)', 'ስምንት (simint)', 'ዘጠኝ (zetegn)', 'አስር (asir)'],
            grammar: 'Number formation patterns',
            exercises: ['Count objects', 'Say your age', 'Tell time'],
            culturalNote: 'Ethiopia uses a unique calendar (13 months) and time system (day starts at dawn)'
          }
        ]
      },
      {
        id: 3,
        title: 'ቤተሰብ (Family)',
        lessons: [
          {
            id: 1,
            title: 'Family Members',
            vocabulary: ['አባት (abat)', 'እናት (inat)', 'ወንድም (wendim)', 'እህት (ihit)', 'አያት (ayat)', 'ልጅ (lij)'],
            grammar: 'Possessive forms',
            exercises: ['Describe family', 'Talk about relationships', 'Use possessive pronouns'],
            culturalNote: 'Extended family is very important in Ethiopian culture'
          }
        ]
      }
    ],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  },

  afaan_oromo: {
    A1: [
      {
        id: 1,
        title: 'Nagaa (Greetings)',
        lessons: [
          {
            id: 1,
            title: 'Basic Greetings',
            vocabulary: ['Akkam jirta?', 'Akkam jirtu?', 'Nagaan', 'Fayyaa', 'Nagaatti', 'Maqaan koo'],
            grammar: 'Gender distinction in verbs',
            exercises: ['Greet people properly', 'Respond to greetings', 'Use correct gender forms'],
            culturalNote: 'Oromo greetings differ by gender and time of day'
          },
          {
            id: 2,
            title: 'Introductions',
            vocabulary: ['Maqaan koo...', 'Maqaan kee eenyu?', 'Eessaa dhufte?', 'Waggaan koo', 'Barsiisaa', 'Barataa'],
            grammar: 'Basic sentence structure (SOV)',
            exercises: ['Introduce yourself', 'Ask about others', 'State occupation'],
            culturalNote: 'Afaan Oromo is the 3rd most spoken language in Africa, with 50+ million speakers'
          }
        ]
      },
      {
        id: 2,
        title: 'Lakkoofsota (Numbers)',
        lessons: [
          {
            id: 1,
            title: 'Numbers 1-20',
            vocabulary: ['tokko', 'lama', 'sadi', 'afur', 'shan', 'jaha', 'torba', 'saddeet', 'sagal', 'kudhan'],
            grammar: 'Number usage',
            exercises: ['Count items', 'Say age', 'Tell time'],
            culturalNote: 'Oromo number system is decimal-based and straightforward'
          }
        ]
      }
    ],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  },

  // Placeholder structures for remaining languages
  german: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] },
  japanese: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] },
  italian: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] },
  portuguese: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] },
  chinese: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] },
  korean: { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] }
};

// Helper function to get curriculum for a specific language and level
export const getCurriculumForLevel = (language, level) => {
  return curriculum[language]?.[level] || [];
};

// Helper function to get all available levels for a language
export const getAvailableLevels = (language) => {
  if (!curriculum[language]) return [];
  return Object.keys(curriculum[language]).filter(
    level => curriculum[language][level].length > 0
  );
};

// Helper function to count total lessons
export const getTotalLessons = (language, level) => {
  const units = curriculum[language]?.[level] || [];
  return units.reduce((total, unit) => total + unit.lessons.length, 0);
};

// Progress tracking
export const calculateProgress = (language, level, completedLessons = []) => {
  const total = getTotalLessons(language, level);
  const completed = completedLessons.length;
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};
