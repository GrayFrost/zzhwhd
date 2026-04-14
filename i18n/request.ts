// Client-side only i18n configuration
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

// Import messages for client-side use
import zhMessages from '../messages/zh.json';
import enMessages from '../messages/en.json';

export const messages = {
  zh: zhMessages,
  en: enMessages,
} as const;
