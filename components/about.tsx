"use client";

import Link from "next/link";
import { useState } from "react";
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
  bgColor: string;
  borderColor?: string;
}

export function About() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socialIcons: SocialIcon[] = [
    {
      id: "github",
      label: "Github",
      url: "https://github.com/GrayFrost",
      icon: <GithubIcon fill="#fff" />,
      bgColor: "#1F2328",
    },
    {
      id: "juejin",
      label: "掘金",
      url: "https://juejin.cn/user/3350967171680920",
      icon: <JuejinIcon />,
      bgColor: "#1F80FF",
    },
    {
      id: "gmail",
      label: "邮箱",
      url: "mailto:garyfrost4321@gmail.com",
      icon: <GmailIcon fill="#fff" />,
      bgColor: "#EA4335",
    },
    {
      id: "medium",
      label: "Medium",
      url: "https://medium.com/@garyfrost4321",
      icon: <MediumIcon />,
      bgColor: "#000000",
    },
    {
      id: "zhihu",
      label: "知乎",
      url: "https://www.zhihu.com/people/zzhui-92",
      icon: <ZhihuIcon />,
      bgColor: "#1771F6",
    },
    {
      id: "jianshu",
      label: "简书",
      url: "https://www.jianshu.com/u/8e629fd1e3b0",
      icon: <JianshuIcon />,
      bgColor: "#EA6F5A",
    },
    {
      id: "devto",
      label: "Dev.to",
      url: "https://dev.to/frost_gary_90f3cf1699bd02",
      icon: <DevIcon />,
      bgColor: "#ffffff",
    },
  ];

  const SocialIconComponent = ({ socialIcon }: { socialIcon: SocialIcon }) => {
    const isHovered = hoveredId === socialIcon.id;

    const baseClasses = `
      relative group cursor-pointer overflow-hidden
      w-16 h-16
      transform transition-all duration-300 ease-out
      backdrop-blur-sm
      hover:z-10
      active:scale-95 active:duration-150
    `;

    // iOS风格的圆角 - 固定尺寸
    const cornerRadius = 'rounded-[14px]';
    
    // 阴影效果 - 固定样式，不随悬浮变化
    const shadowClass = 'shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]';

    const content = (
      <div 
        className={`${baseClasses} ${cornerRadius} ${shadowClass}`}
        onMouseEnter={() => setHoveredId(socialIcon.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* 背景颜色 */}
        <div className={`absolute inset-0`} style={{ backgroundColor: socialIcon.bgColor }} />
        
        {/* iOS风格的内部高光 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-white/25 via-white/10 to-transparent" />
        
        {/* 底部阴影效果 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* 内容区域 */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center">
          <div className="mb-1 w-8 h-8 flex items-center justify-center">
            {socialIcon.icon}
          </div>
          <div className="text-white drop-shadow-md">
            <div className="font-semibold leading-tight text-[10px]">
              {socialIcon.label}
            </div>
          </div>
        </div>

        {/* 按压效果的内部阴影 */}
        <div className="absolute inset-0 rounded-[inherit] opacity-0 group-active:opacity-100 bg-black/20 transition-opacity duration-150" />
      </div>
    );

    return (
      <Link href={socialIcon.url} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* 顶部介绍区域 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          关于我
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          前端开发工程师，热爱技术，喜欢分享
        </p>
        <div className="text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
          <p className="mb-4">
            👋 你好！我是一名前端开发工程师，专注于 React、Vue、TypeScript 等现代前端技术。
          </p>
          <p className="mb-4">
            🚀 热衷于探索新技术，喜欢在各个平台分享技术文章和开发经验。
          </p>
          <p>
            📫 欢迎通过以下方式与我联系和交流：
          </p>
        </div>
      </div>

      {/* 社交媒体图标网格 */}
      <div className="
        flex flex-wrap gap-4 justify-center items-center
        max-w-full mb-16
      ">
        {socialIcons.map((socialIcon) => (
          <SocialIconComponent key={socialIcon.id} socialIcon={socialIcon} />
        ))}
      </div>

      {/* 底部装饰 */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-400 dark:text-gray-500">
          <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-current opacity-40"></div>
          <div className="w-2 h-2 rounded-full bg-current opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
