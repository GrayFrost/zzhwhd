"use client";

import Link from "next/link";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "../hooks/use-window-width";
import { layouts } from "../config/layout";
import ThemeToggle from "@/components/theme-toggle";
export function Home() {
  const width = useWindowWidth();

  if (!width) return null;

  const cardClass =
    "group bg-white dark:bg-gray-700 border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";

  return (
    <Responsive
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      className="layout w-full h-full"
      cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
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
      <Link key="blog" href="/blog" className={cardClass}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">蒜头蒜</h2>
        <p className="text-gray-600 dark:text-gray-300">个人博客</p>
      </Link>
      <Link
        key="tree-diagram" // todo
        className={cardClass}
        href="life"
      >
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          生活日记
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="project" className={cardClass} href="/project">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          我的项目
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <div key="setting" className={cardClass}>
        <ThemeToggle />
      </div>
      <div key="social-media" className={cardClass}>
        <div>github</div>
        <div>juejin</div>
        <div>邮箱</div>
      </div>
      <Link key="about" href="/about" className={cardClass}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">关于我</h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
    </Responsive>
  );
}
