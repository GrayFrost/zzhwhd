"use client";

import Link from "next/link";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "@/hooks/use-window-width";
import { layouts } from "@/config/layout";
import ThemeToggle from "@/components/theme-toggle";
import Clock from '@/components/clock';
export function Home() {
  const width = useWindowWidth();

  if (!width) return null;

  const cardClass =
    "group dark:bg-gray-700 border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";

  return (
    <Responsive
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      className="layout w-full h-full"
      cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
      layouts={layouts}
      isDraggable={false}
      isResizable={false}
      width={width}
      margin={[16, 16]}
    >
      {/* <Link key="manga" href="/manga" className={cardClass}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          漫画阅读器
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          专为 macOS 设计的漫画阅读应用
        </p>
      </Link> */}
      <Link key="1" href="/blog" className={`${cardClass} bg-[#ee7982]`}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">蒜头蒜</h2>
        <p className="text-gray-600 dark:text-gray-300">个人博客</p>
      </Link>
      <Link key="2" className={`${cardClass} bg-[#f8cc49]`} href="life">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          生活日记
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="3" className={`${cardClass} bg-[#a3cbd3]`} href="/project">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          我的项目
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <div key="4" className={`${cardClass} bg-[#dabdeb]`}>
        <ThemeToggle />
      </div>
      <div key="5" className={`${cardClass} bg-[#707dff]`}>
        <div>github</div>
        <div>juejin</div>
        <div>邮箱</div>
      </div>
      <Link key="6" href="/about" className={`${cardClass} bg-[#b4e78a]`}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">关于我</h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="7" className={`${cardClass} bg-[#f34f4e]`} href="/">
        <Clock />
      </Link>
      <Link key="8" className={`${cardClass} bg-[#f79319]`} href="/">
        hello world
      </Link>
      <Link key="9" className={`${cardClass} bg-[#77cfff]`} href="/">
        hello world
      </Link>
    </Responsive>
  );
}
