import { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('sahyadri_lang');
      return saved === 'hi' || saved === 'mr' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('sahyadri_lang', lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let cur = TRANSLATIONS[lang] || TRANSLATIONS.en;
    for (const k of keys) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, k)) {
        cur = cur[k];
      } else {
        // fallback to English
        let fallback = TRANSLATIONS.en;
        for (const fk of keys) {
          fallback = fallback ? fallback[fk] : undefined;
        }
        return fallback ?? path;
      }
    }
    return cur;
  };

  const pick = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] || value.en || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
