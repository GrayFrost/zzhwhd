"use client";

import Link from "next/link";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "@/hooks/use-window-width";
import { layouts } from "@/config/layout";
import ThemeToggle from "@/components/theme-toggle";
import Clock from "@/components/clock";
import { twMerge } from "tailwind-merge";
import { Socials } from "./socials";
import "../styles/sprite-animation.css";
export function Home() {
  const width = useWindowWidth();

  if (!width) return null;

  // const cardClass =
  //   "group bg-[#edf2f7] dark:bg-gray-700 border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] dark:bg-gray-800 border-0 border-solid border-[#e2e8f0] shadow-card";

  const cardClass =
    "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-1 p-4";

  // , "bg-[#ee7982]", "bg-[#f8cc49]", "bg-[#a3cbd3]", "bg-[#dabdeb]", "bg-[#707dff]", "bg-[#b4e78a]", "bg-[#f34f4e]", "bg-[#f79319]", "bg-[#77cfff]"

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
      <Link key="1" href="/blog" className={twMerge(cardClass)}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">蒜头蒜</h2>
        <p className="text-gray-600 dark:text-gray-300">个人博客</p>
      </Link>
      <Link key="2" className={twMerge(cardClass)} href="life">
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="3" className={twMerge(cardClass)} href="/project">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          我的项目
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <div key="social" className={twMerge(cardClass)}>
        <Socials />
      </div>
      <Link key="5" className={twMerge(cardClass)} href="/about">
        关于我
      </Link>

      <div key="6" className={twMerge(cardClass)}>
        <ThemeToggle />
      </div>
      <Link key="7" className={twMerge(cardClass)} href="/">
        <Clock />
      </Link>
      <Link key="8" className={twMerge(cardClass, 'relative p-0')} href="/">
        {/* <div className="sprite-renderer bee"></div> */}
        <div className="run flex items-end h-full hidden">
          <div className="bunny"></div>
          <div className="chicken"></div>
          <div className="radish"></div>
          <div className="rock1"></div>
          <div className="rock2"></div>
          <div className="rock3"></div>
          <div className="trunk"></div>
          {/* <div className="rino"></div> */}
          {/* <div className="chameleon"></div> */}
          {/* <div className="pig"></div> */}
        </div>
        <div className="fixed h-8 w-full left-0 right-0 bottom-0 overflow-hidden flex items-center">
          <div className="ground h-full w-[96px]"></div>
          <div className="ground h-full w-[96px]"></div>
          <div className="ground h-full w-[96px]"></div>
        </div>
      </Link>
      <Link key="9" className={twMerge(cardClass)} href="/">
        {/* <Link key="9" href="/" className="card"> */}
        hello world
      </Link>
    </Responsive>
  );
}
