"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Clock from "@/components/clock";
// import { Socials } from "./socials";
// import { SpriteAnimation } from "./sprite-animation";

interface AppIcon {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ReactNode;
  gradient?: string;
  bgColor?: string;
  component?: React.ReactNode;
}

export function Home() {

  const appIcons: AppIcon[] = [
    {
      id: "blog",
      title: "个人博客",
      href: "/blog",
      gradient: "from-blue-500 to-purple-600",
      icon: (
        <div className="text-3xl font-bold text-white">📝</div>
      )
    },
    {
      id: "life",
      title: "生活",
      href: "/life",
      gradient: "from-green-400 to-blue-500",
      icon: (
        <div className="text-3xl">🌱</div>
      )
    },
    {
      id: "project",
      title: "我的项目",
      href: "/project",
      bgColor: "#FFC90D",
      icon: (
        <div className="text-3xl">🚀</div>
      )
    },
    {
      id: "about",
      title: "关于我",
      href: "/about", 
      gradient: "from-purple-400 to-pink-400",
      icon: (
        <div className="text-3xl">👨‍💻</div>
      )
    },
    {
      id: "gallery",
      title: "记忆长廊",
      href: "/photo-gallery",
      gradient: "from-yellow-400 to-orange-500",
      icon: (
        <div className="text-3xl">📸</div>
      )
    },
    {
      id: "theme",
      title: "主题",
      href: "#",
      gradient: "from-gray-400 to-gray-600",
      component: <ThemeToggle />,
    },
    {
      id: "clock",
      title: "时钟",
      href: "/",
      gradient: "from-indigo-400 to-cyan-400",
      component: <Clock />,
    },
    // {
    //   id: "sprite",
    //   title: "精灵",
    //   href: "/",
    //   gradient: "from-pink-400 to-red-400",
    //   component: <SpriteAnimation />,
    //   size: "large"
    // },
    // {
    //   id: "social",
    //   title: "社交",
    //   href: "#",
    //   gradient: "from-teal-400 to-blue-500",
    //   component: <Socials />,
    //   size: "large"
    // }
  ];

  const AppIconComponent = ({ icon, onClick }: { icon: AppIcon; onClick?: () => void }) => {

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
        onClick={onClick}
      >
        {/* 背景渐变 */}
        <div className={`
          absolute inset-0 
          ${icon.gradient ? `bg-gradient-to-br ${icon.gradient}` : ''}
          ${icon.bgColor ? `bg-[${icon.bgColor}]` : ''}
          ${!icon.gradient && !icon.bgColor ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800' : ''}
        `} />
        
        {/* iOS风格的内部高光 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-white/25 via-white/10 to-transparent" />
        
        {/* 底部阴影效果 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* 内容区域 - 无内边距 */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center">
          {icon.component ? (
            <div className="w-full h-full flex items-center justify-center">
              {icon.component}
            </div>
          ) : (
            <>
              {icon.icon && (
                <div className="mb-1">
                  {icon.icon}
                </div>
              )}
              <div className="text-white drop-shadow-md">
                <div className="font-semibold leading-tight text-xs">
                  {icon.title}
                </div>
                {icon.subtitle && (
                  <div className="text-[10px] opacity-90 mt-0.5 leading-tight">
                    {icon.subtitle}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* 按压效果的内部阴影 */}
        <div className="absolute inset-0 rounded-[inherit] opacity-0 group-active:opacity-100 bg-black/20 transition-opacity duration-150" />
      </div>
    );

    if (icon.href && icon.href !== "#") {
      return (
        <Link href={icon.href}>
          {content}
        </Link>
      );
    }

    return content;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* 顶部欢迎区域 */}
      <div className="text-center mb-12">

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          静谧之旅 —— 行止由心
        </p>
      </div>

      {/* 应用图标网格 - 固定64px尺寸布局 */}
      <div className="
        flex flex-wrap gap-4 justify-center items-center
        max-w-full
      ">
        {appIcons.map((icon) => (
          <AppIconComponent key={icon.id} icon={icon} />
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
