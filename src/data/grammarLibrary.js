// Comprehensive Grammar Library for Language Learning
// Organized by language and CEFR levels (A1-C2)

export const grammarLibrary = {
  spanish: {
    // A1 LEVEL - BEGINNER
    a1: [
      {
        id: 'es-a1-1',
        title: 'Subject Pronouns (Pronombres Personales)',
        level: 'A1',
        description: 'Learn the basic subject pronouns used in Spanish',
        content: {
          explanation: 'Spanish has different pronouns for different persons. Unlike English, pronouns are often omitted because the verb ending tells you who is doing the action.',
          rules: [
            'Yo = I (first person singular)',
            'Tú = You (informal, singular)',
            'Él/Ella/Usted = He/She/You (formal, singular)',
            'Nosotros/Nosotras = We (plural)',
            'Vosotros/Vosotras = You all (informal, Spain)',
            'Ellos/Ellas/Ustedes = They/You all (formal or Latin America)'
          ],
          examples: [
            { spanish: 'Yo hablo español', english: 'I speak Spanish' },
            { spanish: 'Tú comes pan', english: 'You eat bread' },
            { spanish: 'Ella es estudiante', english: 'She is a student' },
            { spanish: 'Nosotros vivimos aquí', english: 'We live here' }
          ],
          tips: [
            'Pronouns are often dropped: "Hablo español" = "I speak Spanish"',
            'Use "tú" with friends and family, "usted" with strangers and elders',
            'In Latin America, "ustedes" is used instead of "vosotros"'
          ]
        },
        exercises: [
          {
            question: '¿___ hablas inglés?',
            options: ['Yo', 'Tú', 'Él', 'Nosotros'],
            correct: 'Tú',
            explanation: 'The verb "hablas" is second person singular (you informal)'
          },
          {
            question: '___ somos amigos',
            options: ['Yo', 'Tú', 'Nosotros', 'Ellos'],
            correct: 'Nosotros',
            explanation: 'The verb "somos" is first person plural (we)'
          }
        ]
      },
      {
        id: 'es-a1-2',
        title: 'Present Tense: Regular -AR Verbs',
        level: 'A1',
        description: 'Conjugate regular verbs ending in -ar',
        content: {
          explanation: 'Most Spanish verbs end in -ar, -er, or -ir. To conjugate -ar verbs in present tense, remove -ar and add the appropriate ending.',
          rules: [
            'Yo: -o (hablo)',
            'Tú: -as (hablas)',
            'Él/Ella/Usted: -a (habla)',
            'Nosotros: -amos (hablamos)',
            'Vosotros: -áis (habláis)',
            'Ellos/Ellas/Ustedes: -an (hablan)'
          ],
          examples: [
            { spanish: 'Yo hablo español todos los días', english: 'I speak Spanish every day' },
            { spanish: 'Tú cantas muy bien', english: 'You sing very well' },
            { spanish: 'Nosotros estudiamos juntos', english: 'We study together' },
            { spanish: 'Ellos trabajan en la oficina', english: 'They work in the office' }
          ],
          commonVerbs: [
            'hablar (to speak)',
            'estudiar (to study)',
            'trabajar (to work)',
            'cantar (to sing)',
            'bailar (to dance)',
            'comprar (to buy)',
            'cocinar (to cook)',
            'escuchar (to listen)'
          ],
          tips: [
            'The ending tells you who is doing the action',
            'Pronouns can be omitted: "Hablo" means "I speak"',
            'Pay attention to accent marks in vosotros form: habláis'
          ]
        },
        exercises: [
          {
            question: 'Yo ___ (estudiar) español',
            options: ['estudio', 'estudias', 'estudia', 'estudian'],
            correct: 'estudio',
            explanation: 'First person singular of estudiar is "estudio"'
          },
          {
            question: 'Ellas ___ (cantar) en el coro',
            options: ['canto', 'cantas', 'canta', 'cantan'],
            correct: 'cantan',
            explanation: 'Third person plural of cantar is "cantan"'
          }
        ]
      },
      {
        id: 'es-a1-3',
        title: 'Present Tense: Regular -ER and -IR Verbs',
        level: 'A1',
        description: 'Conjugate regular verbs ending in -er and -ir',
        content: {
          explanation: 'Verbs ending in -er and -ir follow similar patterns. Remove the ending and add the conjugation.',
          rules: [
            '-ER verbs (comer): como, comes, come, comemos, coméis, comen',
            '-IR verbs (vivir): vivo, vives, vive, vivimos, vivís, viven',
            'Note: -er and -ir verbs have identical endings except in nosotros and vosotros forms'
          ],
          examples: [
            { spanish: 'Yo como ensalada', english: 'I eat salad' },
            { spanish: 'Tú vives en Madrid', english: 'You live in Madrid' },
            { spanish: 'Nosotros bebemos agua', english: 'We drink water' },
            { spanish: 'Ellos escriben cartas', english: 'They write letters' }
          ],
          commonVerbs: [
            '-ER: comer (eat), beber (drink), leer (read), aprender (learn), correr (run)',
            '-IR: vivir (live), escribir (write), abrir (open), recibir (receive)'
          ],
          tips: [
            'Notice -er and -ir are almost identical',
            'Only nosotros/vosotros forms differ between -er and -ir'
          ]
        },
        exercises: [
          {
            question: 'Nosotros ___ (comer) pizza',
            options: ['como', 'comes', 'comemos', 'comen'],
            correct: 'comemos',
            explanation: 'First person plural of comer is "comemos"'
          }
        ]
      },
      {
        id: 'es-a1-4',
        title: 'Ser vs. Estar (To Be)',
        level: 'A1',
        description: 'Learn when to use ser and estar',
        content: {
          explanation: 'Spanish has two verbs for "to be": ser (permanent states) and estar (temporary states/location)',
          rules: [
            'SER conjugation: soy, eres, es, somos, sois, son',
            'ESTAR conjugation: estoy, estás, está, estamos, estáis, están',
            'Use SER for: identity, origin, profession, characteristics, time, relationships',
            'Use ESTAR for: location, emotions, temporary conditions, progressive tenses'
          ],
          examples: [
            { spanish: 'Yo soy estudiante', english: 'I am a student', note: '(SER - profession)' },
            { spanish: 'Tú eres de México', english: 'You are from Mexico', note: '(SER - origin)' },
            { spanish: 'Él está cansado', english: 'He is tired', note: '(ESTAR - temporary state)' },
            { spanish: 'Nosotros estamos en la escuela', english: 'We are at school', note: '(ESTAR - location)' },
            { spanish: 'Ella es inteligente', english: 'She is intelligent', note: '(SER - characteristic)' },
            { spanish: 'Ellos están felices', english: 'They are happy', note: '(ESTAR - emotion)' }
          ],
          tips: [
            'Remember: SER = essence/permanent, ESTAR = state/temporary',
            'Location always uses ESTAR (Estoy en casa)',
            'Some adjectives change meaning: ser aburrido (boring) vs estar aburrido (bored)'
          ]
        },
        exercises: [
          {
            question: 'Yo ___ médico',
            options: ['soy', 'estoy'],
            correct: 'soy',
            explanation: 'Use SER for professions'
          },
          {
            question: 'Tú ___ en el parque',
            options: ['eres', 'estás'],
            correct: 'estás',
            explanation: 'Use ESTAR for location'
          }
        ]
      },
      {
        id: 'es-a1-5',
        title: 'Definite and Indefinite Articles',
        level: 'A1',
        description: 'Learn el, la, los, las, un, una, unos, unas',
        content: {
          explanation: 'Spanish articles must match the gender (masculine/feminine) and number (singular/plural) of the noun.',
          rules: [
            'Definite (the): el (m.sing.), la (f.sing.), los (m.pl.), las (f.pl.)',
            'Indefinite (a/an): un (m.sing.), una (f.sing.), unos (m.pl.), unas (f.pl.)',
            'Use definite articles when referring to specific things',
            'Use indefinite articles when referring to non-specific things'
          ],
          examples: [
            { spanish: 'el libro', english: 'the book', note: '(masculine singular)' },
            { spanish: 'la casa', english: 'the house', note: '(feminine singular)' },
            { spanish: 'los gatos', english: 'the cats', note: '(masculine plural)' },
            { spanish: 'las flores', english: 'the flowers', note: '(feminine plural)' },
            { spanish: 'un perro', english: 'a dog', note: '(masculine)' },
            { spanish: 'una manzana', english: 'an apple', note: '(feminine)' }
          ],
          tips: [
            'Most nouns ending in -o are masculine, -a are feminine',
            'Exceptions: el día (day), la mano (hand), el agua (water - feminine but uses el)',
            'Plural: add -s to vowels, -es to consonants'
          ]
        },
        exercises: [
          {
            question: '___ casa (the house)',
            options: ['el', 'la', 'los', 'las'],
            correct: 'la',
            explanation: 'Casa is feminine singular, so use "la"'
          }
        ]
      },
      {
        id: 'es-a1-6',
        title: 'Gender of Nouns',
        level: 'A1',
        description: 'Understanding masculine and feminine nouns',
        content: {
          explanation: 'All Spanish nouns have a gender: masculine or feminine. This affects articles and adjectives.',
          rules: [
            'Usually -o ending = masculine (el libro)',
            'Usually -a ending = feminine (la casa)',
            'Many exceptions exist and must be memorized',
            'Some nouns have both forms: el chico/la chica (boy/girl)'
          ],
          examples: [
            { spanish: 'el hombre', english: 'the man', note: '(masculine)' },
            { spanish: 'la mujer', english: 'the woman', note: '(feminine)' },
            { spanish: 'el estudiante / la estudiante', english: 'the student', note: '(can be both)' }
          ],
          commonExceptions: [
            'el día (day)', 'el mapa (map)', 'el problema (problem)',
            'la mano (hand)', 'la foto (photo)', 'la moto (motorcycle)'
          ],
          tips: [
            'Learn the article with the noun: "el libro" not just "libro"',
            'Words ending in -ción, -sión, -dad, -tad are usually feminine',
            'Words ending in -ma (from Greek) are often masculine'
          ]
        }
      }
    ],

    // A2 LEVEL - ELEMENTARY
    a2: [
      {
        id: 'es-a2-1',
        title: 'Preterite Tense: Regular Verbs',
        level: 'A2',
        description: 'Past tense for completed actions',
        content: {
          explanation: 'The preterite tense describes completed actions in the past. It\'s used for actions that happened once or have a clear beginning/end.',
          rules: [
            '-AR verbs: -é, -aste, -ó, -amos, -asteis, -aron',
            '-ER/-IR verbs: -í, -iste, -ió, -imos, -isteis, -ieron',
            'Nosotros form of -AR and -IR verbs looks the same as present tense - use context!'
          ],
          examples: [
            { spanish: 'Yo hablé con mi madre ayer', english: 'I spoke with my mother yesterday' },
            { spanish: 'Tú comiste pizza anoche', english: 'You ate pizza last night' },
            { spanish: 'Ella escribió una carta', english: 'She wrote a letter' },
            { spanish: 'Nosotros viajamos a España', english: 'We traveled to Spain' }
          ],
          timeExpressions: [
            'ayer (yesterday)',
            'anoche (last night)',
            'la semana pasada (last week)',
            'el año pasado (last year)',
            'hace dos días (two days ago)'
          ],
          tips: [
            'Use preterite for specific completed events',
            'Accent marks are crucial: hablo (I speak) vs habló (he/she spoke)',
            'Different from imperfect tense (which we\'ll learn later)'
          ]
        },
        exercises: [
          {
            question: 'Yo ___ (hablar) con Juan ayer',
            options: ['hablé', 'hablaba', 'hablo', 'hablaré'],
            correct: 'hablé',
            explanation: 'Preterite first person: hablé'
          }
        ]
      },
      {
        id: 'es-a2-2',
        title: 'Imperfect Tense',
        level: 'A2',
        description: 'Past tense for ongoing/habitual actions',
        content: {
          explanation: 'The imperfect tense describes ongoing, repeated, or habitual actions in the past, or states of being.',
          rules: [
            '-AR verbs: -aba, -abas, -aba, -ábamos, -abais, -aban',
            '-ER/-IR verbs: -ía, -ías, -ía, -íamos, -íais, -ían',
            'Only 3 irregular verbs: ser (era), ir (iba), ver (veía)'
          ],
          examples: [
            { spanish: 'Cuando era niño, jugaba al fútbol', english: 'When I was a child, I used to play soccer' },
            { spanish: 'Todos los días comíamos juntos', english: 'Every day we would eat together' },
            { spanish: 'Mientras estudiaba, sonó el teléfono', english: 'While I was studying, the phone rang' }
          ],
          uses: [
            'Habitual actions in the past (I used to...)',
            'Ongoing actions in the past (I was -ing)',
            'Descriptions in the past (It was sunny)',
            'Age in the past (Tenía 10 años)',
            'Time in the past (Eran las tres)'
          ],
          tips: [
            'Imperfect = background info, preterite = main events',
            'Keywords: siempre (always), todos los días (every day), mientras (while)'
          ]
        }
      },
      {
        id: 'es-a2-3',
        title: 'Reflexive Verbs',
        level: 'A2',
        description: 'Verbs where the subject does the action to themselves',
        content: {
          explanation: 'Reflexive verbs indicate the subject performs an action on themselves. They use reflexive pronouns (me, te, se, nos, os, se).',
          rules: [
            'me = myself',
            'te = yourself',
            'se = himself/herself/yourself (formal)/themselves',
            'nos = ourselves',
            'os = yourselves',
            'Pronouns go before conjugated verbs or attached to infinitives'
          ],
          examples: [
            { spanish: 'Yo me levanto a las 7', english: 'I wake up at 7', note: '(lit: I wake myself up)' },
            { spanish: 'Tú te lavas las manos', english: 'You wash your hands' },
            { spanish: 'Ella se viste rápidamente', english: 'She gets dressed quickly' },
            { spanish: 'Nosotros nos acostamos tarde', english: 'We go to bed late' }
          ],
          commonReflexiveVerbs: [
            'levantarse (to get up)',
            'lavarse (to wash oneself)',
            'vestirse (to get dressed)',
            'acostarse (to go to bed)',
            'ducharse (to shower)',
            'peinarse (to comb one\'s hair)',
            'llamarse (to be called/named)',
            'sentirse (to feel)'
          ],
          tips: [
            'Some verbs change meaning when reflexive: dormir (to sleep) vs dormirse (to fall asleep)',
            'With infinitives: Voy a levantarme OR Me voy a levantar'
          ]
        }
      },
      {
        id: 'es-a2-4',
        title: 'Direct Object Pronouns',
        level: 'A2',
        description: 'Replace direct objects with pronouns',
        content: {
          explanation: 'Direct object pronouns replace nouns that receive the action directly. They help avoid repetition.',
          rules: [
            'me = me',
            'te = you (informal)',
            'lo = him/it (m.)',
            'la = her/it (f.)',
            'nos = us',
            'os = you all (informal)',
            'los = them (m.)',
            'las = them (f.)',
            'Pronouns go before conjugated verbs'
          ],
          examples: [
            { spanish: 'Veo el libro → Lo veo', english: 'I see the book → I see it' },
            { spanish: 'Compro las manzanas → Las compro', english: 'I buy the apples → I buy them' },
            { spanish: 'Te llamo mañana', english: 'I\'ll call you tomorrow' },
            { spanish: 'Nos invitaron a la fiesta', english: 'They invited us to the party' }
          ],
          tips: [
            'Pronouns agree in gender and number with the noun they replace',
            'With infinitives: Voy a verlo OR Lo voy a ver',
            'With commands: ¡Cómelo! (Eat it!)'
          ]
        }
      },
      {
        id: 'es-a2-5',
        title: 'Indirect Object Pronouns',
        level: 'A2',
        description: 'To whom or for whom something is done',
        content: {
          explanation: 'Indirect object pronouns show to whom or for whom an action is done.',
          rules: [
            'me = to/for me',
            'te = to/for you',
            'le = to/for him/her/you (formal)',
            'nos = to/for us',
            'os = to/for you all',
            'les = to/for them/you all',
            'Go before conjugated verbs'
          ],
          examples: [
            { spanish: 'Le doy el libro (a Juan)', english: 'I give him the book / I give the book to Juan' },
            { spanish: 'Me gusta el chocolate', english: 'Chocolate is pleasing to me = I like chocolate' },
            { spanish: 'Te compré un regalo', english: 'I bought you a gift / I bought a gift for you' },
            { spanish: 'Nos escriben cartas', english: 'They write letters to us' }
          ],
          commonVerbs: [
            'dar (to give)',
            'decir (to tell)',
            'escribir (to write)',
            'enviar (to send)',
            'gustar (to be pleasing to)',
            'comprar (to buy)',
            'mostrar (to show)'
          ],
          tips: [
            'Use "a + person" for clarification: Le doy el libro a María',
            'Gustar works backwards: Me gusta = It is pleasing to me'
          ]
        }
      },
      {
        id: 'es-a2-6',
        title: 'Comparatives and Superlatives',
        level: 'A2',
        description: 'Comparing things and expressing extremes',
        content: {
          explanation: 'Use comparatives to compare two things, and superlatives to express the extreme (most/least).',
          rules: [
            'Comparative: más/menos + adjective + que',
            'Superlative: el/la/los/las + más/menos + adjective + de',
            'Equality: tan + adjective + como',
            'Irregular forms: mejor (better), peor (worse), mayor (older), menor (younger)'
          ],
          examples: [
            { spanish: 'María es más alta que Juan', english: 'María is taller than Juan' },
            { spanish: 'Este libro es menos interesante que ese', english: 'This book is less interesting than that one' },
            { spanish: 'Pedro es tan inteligente como Ana', english: 'Pedro is as intelligent as Ana' },
            { spanish: 'Este es el mejor restaurante de la ciudad', english: 'This is the best restaurant in the city' },
            { spanish: 'Ella es la más rápida del equipo', english: 'She is the fastest on the team' }
          ],
          irregularForms: [
            'bueno → mejor (good → better)',
            'malo → peor (bad → worse)',
            'viejo → mayor (old → older)',
            'joven → menor (young → younger)'
          ],
          tips: [
            'Don\'t use más with mejor, peor, mayor, menor',
            'Use "de" after superlatives: el más grande de España'
          ]
        }
      }
    ],

    // B1 LEVEL - INTERMEDIATE
    b1: [
      {
        id: 'es-b1-1',
        title: 'Present Subjunctive: Formation',
        level: 'B1',
        description: 'Introduction to the subjunctive mood',
        content: {
          explanation: 'The subjunctive is a mood (not a tense) used to express doubt, desire, emotion, possibility, or hypothetical situations. It\'s very common in Spanish.',
          rules: [
            'Formation: Take yo form, drop -o, add opposite endings',
            '-AR verbs: -e, -es, -e, -emos, -éis, -en',
            '-ER/-IR verbs: -a, -as, -a, -amos, -áis, -an',
            'Irregular stems: haber→haya, saber→sepa, ir→vaya, ser→sea'
          ],
          examples: [
            { spanish: 'Espero que hables español', english: 'I hope that you speak Spanish' },
            { spanish: 'Dudo que venga mañana', english: 'I doubt that he\'ll come tomorrow' },
            { spanish: 'Es importante que estudies', english: 'It\'s important that you study' },
            { spanish: 'Quiero que me ayudes', english: 'I want you to help me' }
          ],
          triggers: [
            'Desire: querer, desear, preferir',
            'Emotion: alegrarse, temer, sorprender',
            'Doubt: dudar, no creer, no estar seguro',
            'Impersonal expressions: es necesario, es posible, es importante'
          ],
          tips: [
            'Usually appears after "que"',
            'If same subject, use infinitive: Quiero hablar (not Quiero que hable)',
            'Practice recognizing the triggers'
          ]
        }
      },
      {
        id: 'es-b1-2',
        title: 'Por vs. Para',
        level: 'B1',
        description: 'Mastering these tricky prepositions',
        content: {
          explanation: 'Both mean "for" but are used in different contexts. Por focuses on cause/exchange/duration, while para focuses on purpose/destination/deadline.',
          rules: [
            'POR: reason, duration, exchange, movement through, passive voice, expressions',
            'PARA: purpose, destination, recipient, deadline, comparison'
          ],
          porUses: [
            { use: 'Reason/cause', example: 'Lo hice por ti (I did it because of you)' },
            { use: 'Duration', example: 'Estudié por dos horas (I studied for two hours)' },
            { use: 'Exchange', example: 'Pagué $10 por el libro (I paid $10 for the book)' },
            { use: 'Movement through', example: 'Caminamos por el parque (We walked through the park)' },
            { use: 'Means', example: 'Hablé por teléfono (I spoke by phone)' }
          ],
          paraUses: [
            { use: 'Purpose', example: 'Estudio para aprender (I study in order to learn)' },
            { use: 'Destination', example: 'Salgo para Madrid (I leave for Madrid)' },
            { use: 'Recipient', example: 'Este regalo es para ti (This gift is for you)' },
            { use: 'Deadline', example: 'Es para mañana (It\'s for tomorrow)' },
            { use: 'Comparison', example: 'Para un niño, es inteligente (For a child, he\'s smart)' }
          ],
          commonExpressions: [
            'por favor (please)',
            'por ejemplo (for example)',
            'por supuesto (of course)',
            'para siempre (forever)',
            'para nada (not at all)'
          ],
          tips: [
            'Por = motivation/cause behind action',
            'Para = goal/purpose of action',
            'When in doubt, ask: Why? (por) or What for? (para)'
          ]
        }
      },
      {
        id: 'es-b1-3',
        title: 'Future Tense',
        level: 'B1',
        description: 'Talking about future events',
        content: {
          explanation: 'The future tense is used to talk about events that will happen. Unlike English, Spanish uses the infinitive + endings.',
          rules: [
            'Formation: infinitive + -é, -ás, -á, -emos, -éis, -án',
            'Same endings for -AR, -ER, and -IR verbs',
            'Irregular stems: habr- (haber), dir- (decir), har- (hacer), podr- (poder), pondr- (poner), querr- (querer), sabr- (saber), saldr- (salir), tendr- (tener), vendr- (venir)'
          ],
          examples: [
            { spanish: 'Mañana hablaré con ella', english: 'Tomorrow I will speak with her' },
            { spanish: 'El año próximo viajaremos a España', english: 'Next year we will travel to Spain' },
            { spanish: 'Tendré tiempo después', english: 'I will have time later' },
            { spanish: '¿Vendrás a la fiesta?', english: 'Will you come to the party?' }
          ],
          alternatives: [
            'Ir + a + infinitive: Voy a hablar (I\'m going to speak) - more common in speech',
            'Present tense with future meaning: Mañana hablo con ella (Tomorrow I\'ll speak with her)'
          ],
          tips: [
            'Future tense also expresses probability: Serán las tres (It must be 3 o\'clock)',
            'Irregular stems must be memorized',
            'In conversation, "ir a + infinitive" is more common'
          ]
        }
      },
      {
        id: 'es-b1-4',
        title: 'Conditional Tense',
        level: 'B1',
        description: 'Expressing what would happen',
        content: {
          explanation: 'The conditional tense expresses what would happen under certain conditions, or to make polite requests.',
          rules: [
            'Formation: infinitive + -ía, -ías, -ía, -íamos, -íais, -ían',
            'Same irregular stems as future tense',
            'Used for hypothetical situations, polite requests, and probability in the past'
          ],
          examples: [
            { spanish: 'Yo hablaría con ella, pero está ocupada', english: 'I would speak with her, but she\'s busy' },
            { spanish: 'Me gustaría un café, por favor', english: 'I would like a coffee, please' },
            { spanish: '¿Podrías ayudarme?', english: 'Could you help me?' },
            { spanish: 'Dijo que vendría', english: 'He said he would come' }
          ],
          uses: [
            'Hypothetical actions: Viajaría más si tuviera dinero (I would travel more if I had money)',
            'Polite requests: ¿Podrías cerrar la puerta? (Could you close the door?)',
            'Probability in past: Serían las tres (It was probably 3 o\'clock)',
            'Reported speech: Dijo que llegaría tarde (He said he would arrive late)'
          ],
          tips: [
            'Often used with si clauses: Si tuviera tiempo, iría (If I had time, I would go)',
            'Same irregular stems as future: habr-, dir-, har-, etc.'
          ]
        }
      },
      {
        id: 'es-b1-5',
        title: 'Imperative (Commands)',
        level: 'B1',
        description: 'Giving orders and instructions',
        content: {
          explanation: 'Commands are used to tell someone to do (or not to do) something. Formation varies between affirmative and negative.',
          rules: [
            'Tú affirmative: use él/ella present tense form',
            'Tú negative: use tú subjunctive form + no',
            'Usted: use usted subjunctive form',
            'Nosotros: use nosotros subjunctive form',
            'Vosotros affirmative: infinitive - r + d',
            'Pronouns attach to affirmative commands, go before negative'
          ],
          examples: [
            { spanish: '¡Habla español!', english: 'Speak Spanish!' },
            { spanish: '¡No hables tan rápido!', english: 'Don\'t speak so fast!' },
            { spanish: 'Cómelo', english: 'Eat it' },
            { spanish: 'No lo comas', english: 'Don\'t eat it' },
            { spanish: 'Levántese, por favor', english: 'Get up, please (formal)' }
          ],
          irregularTu: [
            'decir → di (say)',
            'hacer → haz (do/make)',
            'ir → ve (go)',
            'poner → pon (put)',
            'salir → sal (leave)',
            'ser → sé (be)',
            'tener → ten (have)',
            'venir → ven (come)'
          ],
          tips: [
            'Add accent marks when attaching pronouns: Dámelo (Give it to me)',
            'Irregular tú commands must be memorized',
            'For nosotros, can also use "vamos a + infinitive"'
          ]
        }
      }
    ],

    // B2 LEVEL - UPPER-INTERMEDIATE
    b2: [
      {
        id: 'es-b2-1',
        title: 'Imperfect Subjunctive',
        level: 'B2',
        description: 'Past subjunctive for hypothetical situations',
        content: {
          explanation: 'The imperfect subjunctive is used when the main clause is in the past, or for contrary-to-fact situations.',
          rules: [
            'Formation: preterite ellos form → drop -ron → add endings',
            'Endings: -ra, -ras, -ra, -ramos, -rais, -ran',
            'Alternative: -se, -ses, -se, -semos, -seis, -sen (less common)',
            'Same triggers as present subjunctive, but in past context'
          ],
          examples: [
            { spanish: 'Dudaba que él viniera', english: 'I doubted that he would come' },
            { spanish: 'Si tuviera dinero, viajaría', english: 'If I had money, I would travel' },
            { spanish: 'Esperaba que estudiaras', english: 'I hoped that you would study' },
            { spanish: 'Como si fuera fácil', english: 'As if it were easy' }
          ],
          uses: [
            'After past tense main clauses: Quería que vinieras',
            'Si clauses (contrary to fact): Si fuera rico...',
            'Como si: Habla como si supiera todo',
            'Polite requests: Quisiera un café (I would like a coffee)'
          ],
          tips: [
            'Irregular preterite stems carry over: tener→tuviera, ser→fuera, ir→fuera',
            'Very common in si clauses with conditional'
          ]
        }
      },
      {
        id: 'es-b2-2',
        title: 'Present Perfect Subjunctive',
        level: 'B2',
        description: 'Expressing completed actions in subjunctive',
        content: {
          explanation: 'Used when the main clause triggers subjunctive and refers to a completed action.',
          rules: [
            'Formation: haya/hayas/haya/hayamos/hayáis/hayan + past participle',
            'Past participle: -AR → -ado, -ER/-IR → -ido',
            'Irregular participles: hecho, dicho, visto, escrito, puesto, vuelto, abierto, muerto'
          ],
          examples: [
            { spanish: 'Espero que hayas estudiado', english: 'I hope you have studied' },
            { spanish: 'Dudo que haya llegado', english: 'I doubt that he has arrived' },
            { spanish: 'Es posible que lo hayan visto', english: 'It\'s possible they have seen it' },
            { spanish: 'Me alegra que hayas venido', english: 'I\'m glad you have come' }
          ],
          tips: [
            'Used when action may have been completed',
            'Follows same triggers as present subjunctive',
            'Past participle never changes form'
          ]
        }
      },
      {
        id: 'es-b2-3',
        title: 'Passive Voice with Ser',
        level: 'B2',
        description: 'Expressing actions done to the subject',
        content: {
          explanation: 'The passive voice emphasizes the action rather than who performs it.',
          rules: [
            'Formation: ser (conjugated) + past participle',
            'Past participle agrees with subject in gender/number',
            'Agent (who does action) introduced with "por"',
            'Less common than active voice in Spanish'
          ],
          examples: [
            { spanish: 'La casa fue construida en 1950', english: 'The house was built in 1950' },
            { spanish: 'Los libros fueron escritos por Cervantes', english: 'The books were written by Cervantes' },
            { spanish: 'El coche será reparado mañana', english: 'The car will be repaired tomorrow' },
            { spanish: 'Las cartas son entregadas cada día', english: 'The letters are delivered every day' }
          ],
          alternatives: [
            'Se passive: Se habla español (Spanish is spoken)',
            'Active voice with subject: Construyeron la casa en 1950'
          ],
          tips: [
            'Passive with ser emphasizes action/result',
            'Se passive is more common in Spanish',
            'Past participle must agree: La casa fue construida, Los libros fueron escritos'
          ]
        }
      },
      {
        id: 'es-b2-4',
        title: 'Se Passive and Impersonal Se',
        level: 'B2',
        description: 'Using "se" to avoid mentioning the subject',
        content: {
          explanation: 'Se constructions are very common in Spanish to express general actions without specifying who performs them.',
          rules: [
            'Passive se: Se + verb (3rd person) + object',
            'Impersonal se: Se + verb (3rd person singular)',
            'Verb agrees with object in passive se',
            'Use singular verb in impersonal se'
          ],
          examples: [
            { spanish: 'Se habla español aquí', english: 'Spanish is spoken here', note: '(passive)' },
            { spanish: 'Se venden casas', english: 'Houses are sold / Houses for sale', note: '(passive)' },
            { spanish: 'Se come bien en este restaurante', english: 'One eats well in this restaurant', note: '(impersonal)' },
            { spanish: 'Se prohibe fumar', english: 'Smoking is prohibited', note: '(impersonal)' }
          ],
          differences: [
            'Passive se: action done to something specific → Se venden casas (plural verb)',
            'Impersonal se: general action → Se come bien (singular verb)'
          ],
          tips: [
            'Very common on signs and instructions',
            'Avoids specifying "people" or "someone"',
            'More natural than passive with ser'
          ]
        }
      }
    ],

    // C1 LEVEL - ADVANCED
    c1: [
      {
        id: 'es-c1-1',
        title: 'Pluperfect Subjunctive',
        level: 'C1',
        description: 'Expressing hypothetical past actions',
        content: {
          explanation: 'Used for actions that would have happened in the past under different conditions.',
          rules: [
            'Formation: hubiera/hubieras/hubiera/hubiéramos/hubierais/hubieran + past participle',
            'Alternative: hubiese form (less common)',
            'Used in si clauses for impossible past situations'
          ],
          examples: [
            { spanish: 'Si hubiera sabido, habría venido', english: 'If I had known, I would have come' },
            { spanish: 'Ojalá hubiéramos estudiado más', english: 'I wish we had studied more' },
            { spanish: 'Dudaba que hubieran llegado a tiempo', english: 'I doubted they had arrived on time' }
          ],
          tips: [
            'Often paired with conditional perfect: habría + participle',
            'Expresses regret or hypothetical past scenarios'
          ]
        }
      },
      {
        id: 'es-c1-2',
        title: 'Advanced Uses of Subjunctive',
        level: 'C1',
        description: 'Nuanced subjunctive in complex sentences',
        content: {
          explanation: 'Mastering subjunctive in adverbial clauses, relative clauses, and subtle contexts.',
          rules: [
            'After "aunque" when outcome is uncertain',
            'After time conjunctions (cuando, después de que) for future/uncertain events',
            'In relative clauses when antecedent is unknown or doesn\'t exist',
            'After "para que", "sin que", "antes de que", "con tal de que"'
          ],
          examples: [
            { spanish: 'Aunque llueva, iremos', english: 'Even if it rains, we\'ll go' },
            { spanish: 'Cuando llegues, llámame', english: 'When you arrive, call me' },
            { spanish: 'Busco un libro que explique la gramática', english: 'I\'m looking for a book that explains grammar (don\'t know if it exists)' },
            { spanish: 'Lo haré para que entiendas', english: 'I\'ll do it so that you understand' }
          ],
          tips: [
            'Indicative = known/certain, Subjunctive = unknown/uncertain',
            'Time conjunctions use subjunctive for future, indicative for past/present'
          ]
        }
      }
    ],

    // C2 LEVEL - MASTERY
    c2: [
      {
        id: 'es-c2-1',
        title: 'Literary Tenses and Archaisms',
        level: 'C2',
        description: 'Understanding formal and literary Spanish',
        content: {
          explanation: 'Advanced tenses and forms used in literature and formal writing.',
          rules: [
            'Preterite perfecto (literary past): hube, hubiste, hubo...',
            'Future subjunctive: hablare, hablares... (archaic, found in legal texts)',
            'Vosotros usage and regional variations'
          ],
          examples: [
            { spanish: 'Hubo terminado cuando llegaste', english: 'I had finished when you arrived (literary)' },
            { spanish: 'Si esto fuere cierto', english: 'If this were true (legal/formal)' }
          ]
        }
      }
    ]
  },

  french: {
    a1: [
      {
        id: 'fr-a1-1',
        title: 'Articles définis et indéfinis',
        level: 'A1',
        description: 'Definite and indefinite articles in French',
        content: {
          explanation: 'French articles must agree with the gender and number of nouns.',
          rules: [
            'Definite: le (m.), la (f.), l\' (before vowel), les (plural)',
            'Indefinite: un (m.), une (f.), des (plural)',
            'Partitive: du (m.), de la (f.), de l\' (vowel), des (plural) - "some"'
          ],
          examples: [
            { french: 'le livre', english: 'the book' },
            { french: 'la maison', english: 'the house' },
            { french: 'un chat', english: 'a cat' },
            { french: 'une pomme', english: 'an apple' },
            { french: 'Je mange du pain', english: 'I eat (some) bread' }
          ],
          tips: [
            'Memorize noun gender as you learn vocabulary',
            'Partitive articles express quantities: "some" or "any"'
          ]
        }
      },
      {
        id: 'fr-a1-2',
        title: 'Present tense: Regular verbs',
        level: 'A1',
        description: 'Conjugating -er, -ir, and -re verbs',
        content: {
          explanation: 'French verbs are grouped by their infinitive endings: -er, -ir, -re.',
          rules: [
            '-ER verbs (parler): -e, -es, -e, -ons, -ez, -ent',
            '-IR verbs (finir): -is, -is, -it, -issons, -issez, -issent',
            '-RE verbs (vendre): -s, -s, -, -ons, -ez, -ent'
          ],
          examples: [
            { french: 'Je parle français', english: 'I speak French' },
            { french: 'Tu finis le travail', english: 'You finish the work' },
            { french: 'Il vend sa voiture', english: 'He sells his car' },
            { french: 'Nous aimons la musique', english: 'We love music' }
          ],
          commonVerbs: [
            '-ER: parler, aimer, manger, travailler, étudier',
            '-IR: finir, choisir, réussir, grandir',
            '-RE: vendre, attendre, répondre, descendre'
          ]
        }
      }
    ],
    a2: [
      {
        id: 'fr-a2-1',
        title: 'Passé Composé',
        level: 'A2',
        description: 'Past tense with avoir and être',
        content: {
          explanation: 'The passé composé is used for completed actions in the past. It uses avoir or être + past participle.',
          rules: [
            'Most verbs use avoir: J\'ai mangé (I ate)',
            'Movement/change verbs use être: Je suis allé (I went)',
            'Reflexive verbs use être: Je me suis lavé (I washed myself)',
            'With être, participle agrees with subject'
          ],
          examples: [
            { french: 'J\'ai mangé une pomme', english: 'I ate an apple' },
            { french: 'Elle est allée à Paris', english: 'She went to Paris' },
            { french: 'Nous sommes arrivés hier', english: 'We arrived yesterday' },
            { french: 'Ils se sont levés tôt', english: 'They woke up early' }
          ],
          etreVerbs: [
            'aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, retourner, tomber, devenir',
            'Mnemonic: DR & MRS VANDERTRAMP'
          ]
        }
      }
    ]
  },

  afaan_oromo: {
    a1: [
      {
        id: 'om-a1-1',
        title: 'Basic Sentence Structure',
        level: 'A1',
        description: 'Subject-Object-Verb word order',
        content: {
          explanation: 'Afaan Oromo follows SOV (Subject-Object-Verb) word order, unlike English (SVO).',
          rules: [
            'Subject comes first',
            'Object comes second',
            'Verb comes last',
            'Example: Ana kitaaba barreessa = I book write (I write a book)'
          ],
          examples: [
            { oromo: 'Ani Afaan Oromoo nan dubba', english: 'I speak Afaan Oromo', note: '(I Oromo-language speak)' },
            { oromo: 'Isheen kitaaba dubbisti', english: 'She reads a book', note: '(She book reads)' },
            { oromo: 'Nuti nyaata nyaanna', english: 'We eat food', note: '(We food eat)' }
          ],
          tips: [
            'Verb always comes at the end',
            'Adjectives come before nouns',
            'Practice thinking in SOV order'
          ]
        }
      },
      {
        id: 'om-a1-2',
        title: 'Personal Pronouns',
        level: 'A1',
        description: 'Subject pronouns in Afaan Oromo',
        content: {
          explanation: 'Learn the basic pronouns used in Afaan Oromo.',
          rules: [
            'Ani = I',
            'Ati = You (singular)',
            'Inni = He',
            'Isheen = She',
            'Nuti = We',
            'Isaan = They/You (plural, formal)'
          ],
          examples: [
            { oromo: 'Ani barsiisaa dha', english: 'I am a teacher' },
            { oromo: 'Ati barattuu dha', english: 'You are a student' },
            { oromo: 'Isheen obboleettii koo ti', english: 'She is my sister' }
          ]
        }
      }
    ]
  },

  amharic: {
    a1: [
      {
        id: 'am-a1-1',
        title: 'Amharic Script Basics',
        level: 'A1',
        description: 'Introduction to Ge\'ez/Fidel alphabet',
        content: {
          explanation: 'Amharic uses the Ge\'ez script (Fidel), where each character represents a consonant-vowel combination.',
          rules: [
            'Base characters modify for different vowel sounds',
            '7 vowel forms for each consonant',
            'Read left to right',
            'No capital letters'
          ],
          examples: [
            { amharic: 'ለ', romanization: 'le', english: 'base form' },
            { amharic: 'ሉ', romanization: 'lu', english: 'u vowel' },
            { amharic: 'ላ', romanization: 'la', english: 'a vowel' },
            { amharic: 'ሰላም', romanization: 'selam', english: 'peace/hello' }
          ],
          tips: [
            'Learn basic characters first: ሀ, ለ, መ, ረ, ሰ',
            'Practice vowel modifications',
            'Start with common words'
          ]
        }
      },
      {
        id: 'am-a1-2',
        title: 'Basic Greetings and Copula',
        level: 'A1',
        description: 'Essential greetings and "to be" verb',
        content: {
          explanation: 'Learn essential greetings and the copula (to be) in Amharic.',
          rules: [
            'ነው (new) = is (masculine)',
            'ናት (nat) = is (feminine)',
            'ናቸው (nachew) = are (plural)',
            'Gender agreement is important'
          ],
          examples: [
            { amharic: 'እሱ ተማሪ ነው', romanization: 'Isu temari new', english: 'He is a student' },
            { amharic: 'እሷ ሐኪም ናት', romanization: 'Iswa hakim nat', english: 'She is a doctor' },
            { amharic: 'እነሱ መምህራን ናቸው', romanization: 'Inesu memhiran nachew', english: 'They are teachers' }
          ],
          greetings: [
            { amharic: 'ሰላም', english: 'Hello/Peace' },
            { amharic: 'እንደምን ነህ?', english: 'How are you? (m)' },
            { amharic: 'እንደምን ነሽ?', english: 'How are you? (f)' },
            { amharic: 'አመሰግናለሁ', english: 'Thank you' }
          ]
        }
      }
    ]
  }
};

// Helper functions to retrieve grammar lessons

export const getGrammarByLanguage = (language) => {
  return grammarLibrary[language] || {};
};

export const getGrammarByLevel = (language, level) => {
  const languageGrammar = grammarLibrary[language];
  if (!languageGrammar) return [];
  return languageGrammar[level.toLowerCase()] || [];
};

export const getAllGrammarLessons = (language) => {
  const languageGrammar = grammarLibrary[language];
  if (!languageGrammar) return [];

  return Object.values(languageGrammar).flat();
};

export const getGrammarLesson = (language, lessonId) => {
  const allLessons = getAllGrammarLessons(language);
  return allLessons.find(lesson => lesson.id === lessonId);
};

// Get lesson count by language
export const getGrammarLessonCount = (language) => {
  return getAllGrammarLessons(language).length;
};

// Get all available levels for a language
export const getAvailableLevels = (language) => {
  const languageGrammar = grammarLibrary[language];
  if (!languageGrammar) return [];
  return Object.keys(languageGrammar).map(level => level.toUpperCase());
};
