"use client";

import Link from "next/link";
import { useLanguage } from './language-provider';
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";

interface NavItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

export function Home() {
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    {
      id: "blog",
      title: t('nav.blog'),
      subtitle: t('nav.blog_subtitle'),
      href: "/blog",
    },
    {
      id: "life",
      title: t('nav.life'),
      subtitle: t('nav.life_subtitle'),
      href: "/life",
    },
    {
      id: "project",
      title: t('nav.project'),
      subtitle: t('nav.project_subtitle'),
      href: "/project",
    },
    {
      id: "gallery",
      title: t('nav.gallery'),
      subtitle: t('nav.gallery_subtitle'),
      href: "/photo-gallery",
    },
    {
      id: "about",
      title: t('nav.about'),
      subtitle: t('nav.about_subtitle'),
      href: "/about",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-16 px-4 sm:px-6">
      {/* 顶部欢迎区域 */}
      <header className="mb-16 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-[1] sm:leading-[0.95]">
          {t('hero.title')} <br />
          <span className="text-accent">{t('hero.subtitle')}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
          {t('hero.description')}
        </p>
      </header>

      {/* 导航网格 */}
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {navItems.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative overflow-hidden"
          >
            <div className={`
              p-8 h-full rounded-3xl
              bg-card/80
              border border-line
              group-hover:border-accent/50 transition-all duration-500
              flex flex-col justify-between min-h-[160px]
            `}>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 max-w-[80%]">
                  {item.subtitle}
                </p>
              </div>
              
              <div className="flex justify-end items-center mt-6">
                <div className="relative">
                  {/* 按钮中心扩散效果 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out pointer-events-none" />

                  <span className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </nav>

      {/* 底部区域 */}
      <footer className="pt-12 border-t border-line flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-4 bg-foreground text-background rounded-full px-6 py-3 shadow-card">
            <ThemeToggle />
            <div className="w-[1px] h-4 bg-background/20" />
            <span className="text-xs font-bold uppercase tracking-widest text-background">Mode</span>
          </div>

          <LanguageSwitcher />
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            {t('footer.design_philosophy')}
          </span>
          <span className="text-sm font-bold text-foreground italic">
            {t('footer.quote')}
          </span>
        </div>
      </footer>
    </div>
  );
}
