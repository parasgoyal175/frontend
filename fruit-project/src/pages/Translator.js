import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
];

export default function TranslationPage() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=${sourceLang}|${targetLang}`
      );
      
      
      const data = await response.json();

      // Set the translated text
      if (data.responseData) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        setTranslatedText('Translation failed.');
      }
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('An error occurred during translation.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Translation Tool</h1>
      <div className="form-group">
        <label htmlFor="sourceText">Text to translate</label>
        <textarea
          id="sourceText"
          placeholder="Enter text to translate"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          className="textarea"
        />
      </div>
      <div className="form-group">
        <label htmlFor="sourceLang">From</label>
        <select id="sourceLang" value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="targetLang">To</label>
        <select id="targetLang" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="translatedText">Translation</label>
        <textarea
          id="translatedText"
          placeholder="Translation will appear here"
          value={translatedText}
          readOnly
          className="textarea"
        />
      </div>
      <button onClick={handleTranslate} disabled={isLoading || !sourceText}>
        {isLoading ? 'Translating...' : 'Translate'}
      </button>
    </div>
  );
}