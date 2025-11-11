// Audio utilities for text-to-speech and speech recognition

// Text-to-Speech
export const speak = (text, language = 'es-ES', rate = 1.0, pitch = 1.0) => {
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
    };

    utterance.lang = languageMap[language] || language;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1.0;

    return new Promise((resolve, reject) => {
      utterance.onend = resolve;
      utterance.onerror = reject;
      window.speechSynthesis.speak(utterance);
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
