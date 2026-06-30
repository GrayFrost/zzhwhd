"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, messages } from '../i18n/request';

interface LanguageContextType {
  locale: Locale;
  messages: typeof messages.zh;
  setLocale: (locale: Locale) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // 从 localStorage 读取语言偏好
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string, values?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = messages[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value !== "string") {
      value = keys.reduce<any>((current, k) => current?.[k], messages[defaultLocale]);
    }

    if (typeof value !== "string") {
      return key;
    }

    if (!values) {
      return value;
    }

    return Object.entries(values).reduce(
      (result, [name, replacement]) =>
        result.replaceAll(`{${name}}`, String(replacement)),
      value
    );
  };

  const value = {
    locale,
    messages: messages[locale],
    setLocale,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
