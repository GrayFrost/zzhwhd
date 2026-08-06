"use client";

import { useLanguage } from './language-provider';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-4 bg-foreground text-background rounded-full px-6 py-3 shadow-card">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLocale('zh')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
            locale === 'zh'
              ? 'bg-accent text-accent-foreground'
              : 'text-background hover:bg-accent/20'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setLocale('en')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
            locale === 'en'
              ? 'bg-accent text-accent-foreground'
              : 'text-background hover:bg-accent/20'
          }`}
        >
          EN
        </button>
      </div>
      <div className="w-[1px] h-4 bg-background/20" />
      <span className="text-xs font-bold uppercase tracking-widest text-background">
        {t('footer.language')}
      </span>
    </div>
  );
}
