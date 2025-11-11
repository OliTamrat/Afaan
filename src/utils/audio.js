// Audio utilities for text-to-speech and speech recognition

// Text-to-Speech with improved quality
export const speak = (text, language = 'es-ES', rate = 0.85, pitch = 1.0) => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Language mapping
    const languageMap = {
      spanish: 'es-ES',
      french: 'fr-FR',
      german: 'de-DE',
      japanese: 'ja-JP',
      italian: 'it-IT',
      portuguese: 'pt-PT',
      chinese: 'zh-CN',
      korean: 'ko-KR',
      afaan_oromo: 'en-US', // Fallback to English
      amharic: 'am-ET',
      english: 'en-US'
    };

    utterance.lang = languageMap[language] || language;

    // Improved settings for more natural speech
    utterance.rate = rate; // Slower = more natural (default 0.85)
    utterance.pitch = pitch; // Natural pitch
    utterance.volume = 1.0;

    // Try to select a better voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetLang = languageMap[language] || language;

    // Find voices matching the language
    const matchingVoices = voices.filter(voice =>
      voice.lang.startsWith(targetLang.split('-')[0])
    );

    if (matchingVoices.length > 0) {
      // Prefer voices with "premium", "enhanced", "natural" in the name
      const premiumVoice = matchingVoices.find(v =>
        v.name.toLowerCase().includes('premium') ||
        v.name.toLowerCase().includes('enhanced') ||
        v.name.toLowerCase().includes('natural') ||
        v.name.toLowerCase().includes('google')
      );

      // Or prefer female voices (often sound better)
      const femaleVoice = matchingVoices.find(v =>
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('woman') ||
        v.name.toLowerCase().includes('zira') ||
        v.name.toLowerCase().includes('samantha')
      );

      utterance.voice = premiumVoice || femaleVoice || matchingVoices[0];
    }

    return new Promise((resolve, reject) => {
      utterance.onend = resolve;
      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        reject(error);
      };

      // Small delay to ensure voices are loaded
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 100);
    });
  } else {
    console.warn('Speech synthesis not supported');
    return Promise.reject(new Error('Speech synthesis not supported'));
  }
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const isSpeechSynthesisSupported = () => {
  return 'speechSynthesis' in window;
};

// Speech Recognition
export class SpeechRecognitionManager {
  constructor() {
    this.recognition = null;
    this.isListening = false;

    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
    } else if ('SpeechRecognition' in window) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
    }
  }

  isSupported() {
    return this.recognition !== null;
  }

  start(language = 'es-ES', onResult, onEnd, onError) {
    if (!this.recognition) {
      console.warn('Speech recognition not supported');
      return false;
    }

    if (this.isListening) {
      this.stop();
    }

    const languageMap = {
      spanish: 'es-ES',
      french: 'fr-FR',
      german: 'de-DE',
      japanese: 'ja-JP',
      italian: 'it-IT',
      portuguese: 'pt-PT',
      chinese: 'zh-CN',
      korean: 'ko-KR',
      afaan_oromo: 'en-US',
      amharic: 'am-ET',
    };

    this.recognition.lang = languageMap[language] || language;

    this.recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');

      const isFinal = event.results[event.results.length - 1].isFinal;

      if (onResult) {
        onResult(transcript, isFinal);
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (onError) onError(event.error);
    };

    try {
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      return false;
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  getIsListening() {
    return this.isListening;
  }
}

// Audio playback for pronunciation examples
export const playAudioFile = (url) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    audio.onended = resolve;
    audio.onerror = reject;
    audio.play().catch(reject);
  });
};
