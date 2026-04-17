import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'pl' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (pl: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('whitevent-lang');
    return stored === 'en' ? 'en' : 'pl';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('whitevent-lang', newLang);
  };

  const t = (pl: string, en: string) => (lang === 'pl' ? pl : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
