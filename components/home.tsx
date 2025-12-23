"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

interface NavItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

export function Home() {
  const navItems: NavItem[] = [
    {
      id: "blog",
      title: "个人博客",
      subtitle: "技术沉淀与深度思考的园地",
      href: "/blog",
    },
    {
      id: "life",
      title: "生活点滴",
      subtitle: "记录日常，捕捉那些微小的光芒",
      href: "/life",
    },
    {
      id: "project",
      title: "我的项目",
      subtitle: "创意实践与工程技术的结合",
      href: "/project",
    },
    {
      id: "gallery",
      title: "记忆长廊",
      subtitle: "时间定格，用影像讲述故事",
      href: "/photo-gallery",
    },
    {
      id: "about",
      title: "关于自我",
      subtitle: "行止由心，探寻生命的更多可能",
      href: "/about",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-16 px-4 sm:px-6">
      {/* 顶部欢迎区域 */}
      <header className="mb-16 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-yellow uppercase">
            Personal Portfolio & Blog
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream tracking-tighter leading-[1] sm:leading-[0.95]">
          静谧之旅 <br />
          <span className="text-brand-yellow">行止由心</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
          在这里，探索技术的深度，感悟生活的温度。
          以极简之笔，绘心中之画。
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
              bg-brand-beige dark:bg-brand-black/40
              border border-brand-black/5 dark:border-brand-cream/10
              group-hover:border-brand-yellow/50 transition-all duration-500
              flex flex-col justify-between min-h-[160px]
            `}>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-brand-black dark:text-brand-cream mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-base text-muted-foreground group-hover:text-brand-black dark:group-hover:text-brand-cream/80 transition-colors duration-300 max-w-[80%]">
                  {item.subtitle}
                </p>
              </div>
              
              <div className="flex justify-end items-center mt-6">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-black text-brand-cream group-hover:bg-brand-yellow group-hover:text-brand-black transition-all duration-500 transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </span>
              </div>

              {/* 背景装饰线 */}
              <div className="absolute bottom-0 right-0 w-32 h-32 -mr-8 -mb-8 bg-brand-yellow/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
            </div>
          </Link>
        ))}
      </nav>

      {/* 底部区域 */}
      <footer className="pt-12 border-t border-brand-black/10 dark:border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-4 bg-brand-black dark:bg-brand-cream rounded-full px-6 py-3 shadow-xl shadow-brand-black/10">
            <ThemeToggle />
            <div className="w-[1px] h-4 bg-brand-cream/20 dark:bg-brand-black/20" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cream dark:text-brand-black">Mode</span>
          </div>
          
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/30 dark:text-brand-cream/30">
            Design Philosophy
          </span>
          <span className="text-sm font-bold text-brand-black dark:text-brand-cream italic">
            "Simple is the ultimate sophistication."
          </span>
        </div>
      </footer>
    </div>
  );
}
