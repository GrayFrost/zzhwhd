"use client";

import { useLanguage } from './language-provider';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-4 bg-brand-black dark:bg-brand-cream rounded-full px-6 py-3 shadow-xl shadow-brand-black/10">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLocale('zh')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
            locale === 'zh'
              ? 'bg-brand-yellow text-brand-black'
              : 'text-brand-cream dark:text-brand-black hover:bg-brand-yellow/20'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setLocale('en')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
            locale === 'en'
              ? 'bg-brand-yellow text-brand-black'
              : 'text-brand-cream dark:text-brand-black hover:bg-brand-yellow/20'
          }`}
        >
          EN
        </button>
      </div>
      <div className="w-[1px] h-4 bg-brand-cream/20 dark:bg-brand-black/20" />
      <span className="text-xs font-bold uppercase tracking-widest text-brand-cream dark:text-brand-black">
        {t('footer.language')}
      </span>
    </div>
  );
}
