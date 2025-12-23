"use client";

import Link from "next/link";
import {
  JuejinIcon,
  JianshuIcon,
  GithubIcon,
  GmailIcon,
  ZhihuIcon,
  DevIcon,
  MediumIcon,
} from "./icons";

interface SocialIcon {
  id: string;
  label: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export function About() {

  const socialIcons: SocialIcon[] = [
    {
      id: "github",
      label: "Github",
      url: "https://github.com/GrayFrost",
      icon: <GithubIcon fill="currentColor" />,
      color: "#1F2328",
    },
    {
      id: "juejin",
      label: "掘金",
      url: "https://juejin.cn/user/3350967171680920",
      icon: <JuejinIcon />,
      color: "#1F80FF",
    },
    {
      id: "gmail",
      label: "邮箱",
      url: "mailto:garyfrost4321@gmail.com",
      icon: <GmailIcon fill="currentColor" />,
      color: "#EA4335",
    },
    {
      id: "medium",
      label: "Medium",
      url: "https://medium.com/@garyfrost4321",
      icon: <MediumIcon />,
      color: "#000000",
    },
    {
      id: "zhihu",
      label: "知乎",
      url: "https://www.zhihu.com/people/zzhui-92",
      icon: <ZhihuIcon />,
      color: "#1771F6",
    },
    {
      id: "jianshu",
      label: "简书",
      url: "https://www.jianshu.com/u/8e629fd1e3b0",
      icon: <JianshuIcon />,
      color: "#EA6F5A",
    },
    {
      id: "devto",
      label: "Dev.to",
      url: "https://dev.to/frost_gary_90f3cf1699bd02",
      icon: <DevIcon />,
      color: "#000000",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 顶部介绍区域 */}
      <header className="mb-24 space-y-8">
        <h1 className="text-4xl md:text-7xl font-black text-brand-black dark:text-brand-cream tracking-tight italic">
          HELLO, I'M <span className="text-brand-yellow">ZHIHUI.</span>
        </h1>
        
        <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
          <p>
            一名前端开发工程师，沉迷于构建优雅的用户界面与流畅的交互体验。
          </p>
          <p>
            热衷于开源社区，在掘金、Medium、知乎等平台分享技术见解与生活感悟。
            我相信技术的终极意义在于服务生活，让复杂变得简单。
          </p>
        </div>
      </header>

      {/* 社交媒体列表 - 简约风格 */}
      <section className="mb-24">
        <h2 className="text-xs font-black tracking-[0.4em] uppercase text-brand-black/30 dark:text-brand-cream/30 mb-10">
          Connect with me
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socialIcons.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-brand-white dark:bg-brand-black/40 border border-brand-black/5 dark:border-brand-cream/10 hover:border-brand-yellow/50 transition-all duration-500"
            >
              <div className="text-brand-black dark:text-brand-cream group-hover:text-brand-yellow transition-colors duration-300 w-8 h-8 flex items-center justify-center mb-4">
                {social.icon}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground group-hover:text-brand-black dark:group-hover:text-brand-cream transition-colors duration-300">
                {social.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 底部装饰 */}
      <div className="pt-12 border-t border-brand-black/5 dark:border-brand-cream/5 flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-muted-foreground">
        <span>Curiosity Driven</span>
        <div className="flex space-x-2">
          <div className="w-1 h-1 bg-brand-yellow rounded-full"></div>
          <div className="w-1 h-1 bg-brand-yellow rounded-full opacity-50"></div>
          <div className="w-1 h-1 bg-brand-yellow rounded-full opacity-20"></div>
        </div>
        <span>Code with Passion</span>
      </div>
    </div>
  );
}
