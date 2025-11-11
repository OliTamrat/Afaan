# Testing Guide: Romanization & Audio Features

## ✅ Features Now Live

Your Afaan language learning platform now has full romanization and audio support!

## 🧪 How to Test

### Step 1: Open the App
The dev server is already running at: **http://localhost:3000**

If not open, navigate to that URL in your browser.

### Step 2: Test Amharic Romanization

1. **Select Language**
   - Click the language dropdown in the header
   - Select "Amharic (አማርኛ)"

2. **Open Flashcards**
   - Click the "📚 Flashcards" button in the Quick Actions section (sidebar)
   - OR click "📚 Flashcards" in the empty state

3. **What You Should See:**
   ```
   ┌─────────────────────────────────────┐
   │      [🔊 Listen] (Blue button)      │
   ├─────────────────────────────────────┤
   │                                     │
   │            ሰላም                      │  (Large Amharic text)
   │                                     │
   │   ┌────────────────────────┐        │
   │   │  Pronunciation:        │        │  (Blue box)
   │   │      Selam             │        │
   │   └────────────────────────┘        │
   │                                     │
   │   📖 (Amharic)                      │
   │   Click card to flip • Click 🔊     │
   └─────────────────────────────────────┘

   Card 1 of 15              Greetings
   ```

4. **Test Audio**
   - Click the blue "🔊 Listen" button at the top
   - You should hear the word pronounced
   - (Note: Browser TTS quality varies by browser)

5. **Test Card Flipping**
   - Click anywhere on the card
   - It should flip to show "Hello/Peace"
   - Click again to flip back

6. **Test Difficulty Rating**
   - When on the English side, you'll see 3 buttons:
     - "Hard 😰" (red)
     - "Good 😊" (yellow)
     - "Easy 😎" (green)
   - Click any button to move to the next card

### Step 3: Test Other Languages

Try these languages to see romanization in action:

**Japanese:**
- Select "Japanese (日本語)"
- Open flashcards
- See: こんにちは → "Konnichiwa"

**Chinese:**
- Select "Chinese (中文)"
- Open flashcards
- See: 你好 → "Nǐ hǎo"

**Korean:**
- Select "Korean (한국어)"
- Open flashcards
- See: 안녕하세요 → "Annyeonghaseyo"

**Afaan Oromo:**
- Already uses Latin script
- But romanization field is supported for consistency

### Step 4: Test Dark Mode

1. Click the moon/sun icon in the header
2. The app should switch to dark mode
3. Check that the romanization box looks good:
   - Should have gray background
   - Blue text should be readable
   - Border should be visible

## 📊 What to Check

### ✅ Visual Elements
- [ ] Blue "🔊 Listen" button appears at top
- [ ] Romanization box appears for Amharic (and other non-Latin scripts)
- [ ] Text is large and readable (5xl size)
- [ ] Instructions appear: "Click card to flip • Click speaker to hear"
- [ ] Category label shows at bottom ("Greetings", "Food", etc.)
- [ ] Card counter shows (e.g., "Card 1 of 15")

### ✅ Audio Features
- [ ] Listen button is clickable
- [ ] Audio plays when clicked (browser TTS)
- [ ] Button has hover effect (darker blue on hover)
- [ ] Scale animation on hover

### ✅ Romanization Display
- [ ] Only appears for non-Latin scripts (Amharic, Japanese, Chinese, Korean)
- [ ] Does NOT appear for Spanish, French, German, Italian, Portuguese
- [ ] Shows correct romanization (matches data or auto-transliteration)
- [ ] Blue box is styled properly
- [ ] Text is readable (2xl size)

### ✅ Interactions
- [ ] Click card to flip (shows English)
- [ ] Click card again to flip back
- [ ] Difficulty buttons appear after flipping
- [ ] Clicking difficulty button moves to next card
- [ ] Hover effects work on all buttons

### ✅ Responsive Design
- [ ] Works on desktop
- [ ] Try resizing browser window (should adapt)
- [ ] Text remains readable at all sizes

## 🐛 Troubleshooting

### Audio Not Working
**Problem:** Click listen button but no sound

**Possible Causes:**
1. Browser doesn't support TTS (try Chrome/Edge)
2. System volume is muted
3. Browser needs permission (check browser settings)

**Solution:**
- Use Chrome or Edge for best TTS support
- Check system audio settings
- Try refreshing the page

### Romanization Not Showing
**Problem:** No pronunciation box for Amharic

**Check:**
1. Are you on the front of the card? (Romanization only shows on front)
2. Did you select a non-Latin script language?
3. Open browser console (F12) and check for errors

**Debug:**
```javascript
// In browser console:
console.log(needsTransliteration('amharic')); // Should return true
```

### Card Not Flipping
**Problem:** Click doesn't flip the card

**Solution:**
- Try clicking directly on the text
- Check browser console for errors
- Refresh the page

## 📸 Expected Appearance

### Amharic Flashcard (Front)
```
🔊 Listen (blue button)

        ሰላም

    ┌──────────────┐
    │ Pronunciation: │
    │     Selam     │
    └──────────────┘

    📖 (Amharic)
    Click card to flip
```

### Amharic Flashcard (Back)
```
    Hello/Peace

    ✅ (English Translation)
    Click card to flip

    Hard 😰  Good 😊  Easy 😎
```

## 🎯 Success Criteria

All tests pass if:
1. ✅ Romanization appears for Amharic words
2. ✅ Audio button plays pronunciation
3. ✅ Card flips when clicked
4. ✅ All 15 Amharic cards have romanization
5. ✅ Dark mode works properly
6. ✅ No console errors

## 📝 Report Issues

If something doesn't work:
1. Open browser console (F12)
2. Look for error messages (red text)
3. Take a screenshot
4. Note which browser you're using
5. Note which language/card has the issue

## 🎉 Next Steps After Testing

Once everything works:
1. **Push to GitHub:**
   ```bash
   cd "OneDrive/Documents/GitHub/Afaan"
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Import the Afaan repository
   - Click Deploy
   - Your app will be live!

3. **Share with others:**
   - Send them the Vercel URL
   - They can start learning with romanization!

---

**Happy Testing! 🧪**

Remember: The goal is to help people learn languages even if they can't read the script yet!
