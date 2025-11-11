# Flashcard Component Update Guide

This guide shows how to update the flashcard rendering in `src/App.jsx` to include romanization and enhanced audio features.

## Location

File: `src/App.jsx`
Line: Approximately 1066-1110 (search for `exerciseType === 'flashcard'`)

## Current Code (TO REPLACE)

```jsx
{exerciseType === 'flashcard' && exercisesData[selectedLanguage]?.flashcards && (
  <div className="text-center">
    <div
      className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-12 mb-6 cursor-pointer hover:scale-105 transition-transform min-h-[300px] flex items-center justify-center"
      onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
    >
      <div>
        <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {showFlashcardAnswer
            ? exercisesData[selectedLanguage].flashcards[flashcardIndex].back
            : exercisesData[selectedLanguage].flashcards[flashcardIndex].front
          }
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {showFlashcardAnswer ? '(English)' : `(${languages[selectedLanguage].name})`}
        </p>
      </div>
    </div>
    {showFlashcardAnswer && (
      <div className="flex justify-center space-x-4">
        <button onClick={() => nextFlashcard(2)} className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600">
          Hard 😰
        </button>
        <button onClick={() => nextFlashcard(3)} className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600">
          Good 😊
        </button>
        <button onClick={() => nextFlashcard(5)} className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600">
          Easy 😎
        </button>
      </div>
    )}
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      Card {flashcardIndex + 1} of {exercisesData[selectedLanguage].flashcards.length}
    </p>
  </div>
)}
```

## New Enhanced Code (REPLACEMENT)

```jsx
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
```

## Key Changes Explained

### 1. **Audio Button (NEW)**
```jsx
<button onClick={() => { ... }}>
  <Volume2 className="h-5 w-5" />
  <span>🔊 Listen</span>
</button>
```
- Prominent blue button at the top
- Speaks the current card's text
- Uses browser's built-in text-to-speech

### 2. **Romanization Box (NEW)**
```jsx
{!showFlashcardAnswer && needsTransliteration(selectedLanguage) && (
  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-300">
    <p className="text-sm text-gray-600 mb-1">Pronunciation:</p>
    <p className="text-2xl font-semibold text-blue-600">
      {exercisesData[selectedLanguage].flashcards[flashcardIndex].romanization ||
       transliterate(...)}
    </p>
  </div>
)}
```
- Shows automatically for Amharic, Chinese, Japanese, Korean
- Displays phonetic spelling (e.g., ሰላም → Selam)
- Falls back to automatic transliteration if not in data

### 3. **Larger Text**
- Changed from `text-4xl` to `text-5xl`
- More readable for complex scripts

### 4. **Better Visual Hierarchy**
- Added category label at bottom
- Improved spacing and colors
- Added helpful instructions ("Click card to flip...")

## Step-by-Step Update Instructions

### Option 1: Manual Edit in VS Code

1. Open `src/App.jsx`
2. Press `Ctrl+F` and search for: `exerciseType === 'flashcard'`
3. Scroll to find the flashcard rendering section (around line 1066)
4. Select from `{exerciseType === 'flashcard'...` to the matching closing `)}`
5. Replace with the "New Enhanced Code" above
6. Save the file
7. The dev server will auto-reload

### Option 2: Find and Replace

1. Copy the "Current Code" section above
2. Open `src/App.jsx`
3. Use Find & Replace (Ctrl+H)
4. Paste "Current Code" in the Find box
5. Paste "New Enhanced Code" in the Replace box
6. Click "Replace"

### Option 3: Using sed (Command Line)

**⚠️ Create a backup first!**

```bash
cd OneDrive/Documents/GitHub/Afaan
cp src/App.jsx src/App.jsx.backup
```

Then manually edit since sed multiline replacement is complex.

## Verification

After updating, test:

1. **Refresh browser** (if it didn't auto-reload)
2. **Select Amharic** from language dropdown
3. **Click Flashcards** button
4. **Verify you see:**
   - Blue "🔊 Listen" button at top
   - Large Amharic text (ሰላም)
   - Blue romanization box showing "Selam"
   - Instructions at bottom
5. **Click Listen button** - should hear pronunciation
6. **Click card** - should flip to show English

## Troubleshooting

### Import Error
If you see: `needsTransliteration is not defined`

**Fix:** Add this import at the top of `App.jsx` (around line 12):
```javascript
import { transliterate, needsTransliteration } from './utils/transliteration';
```

### Audio Not Working
- Check browser console for errors
- Ensure HTTPS in production (required for speech synthesis)
- Try Chrome/Edge (best support)

### Romanization Not Showing
- Verify the import is correct
- Check that language is in supported list
- Look for errors in browser console

## Screenshots

### Before:
- Small text (4xl)
- No pronunciation guide
- No audio button
- Basic layout

### After:
- Large text (5xl)
- Romanization box with pronunciation
- Prominent audio button
- Better spacing and instructions
- Category labels

## Additional Enhancements

Want to customize further?

### Change Colors:
```jsx
// Romanization box
className="... bg-white"
// Change to your preferred color
className="... bg-yellow-50"
```

### Adjust Text Size:
```jsx
// Main text
className="text-5xl ..."
// Make larger/smaller
className="text-6xl ..." // or text-4xl
```

### Auto-play Audio:
Add this after showing the card:
```jsx
useEffect(() => {
  if (audioEnabled && !showFlashcardAnswer) {
    handleSpeakMessage(exercisesData[selectedLanguage].flashcards[flashcardIndex].front, selectedLanguage);
  }
}, [flashcardIndex, showFlashcardAnswer]);
```

---

**Questions?** Check `FEATURES_ADDED.md` or open an issue on GitHub!
