"use client";

import Link from "next/link";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "@/hooks/use-window-width";
import { layouts } from "@/config/layout";
import ThemeToggle from "@/components/theme-toggle";
import Clock from "@/components/clock";
import { twMerge } from "tailwind-merge";

import SplitText from "@/animations/SplitText/SplitText";

export function Home() {
  const width = useWindowWidth();

  if (!width) return null;

  const cardClass =
    "group bg-[#edf2f7] dark:bg-gray-700 border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] dark:bg-gray-800 border-0 border-solid border-[#e2e8f0] shadow-card";

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
      {/* <Link key="manga" href="/manga" className={cardClass}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          漫画阅读器
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          专为 macOS 设计的漫画阅读应用
        </p>
      </Link> */}
      <Link key="1" href="/blog" className={twMerge(cardClass)}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">蒜头蒜</h2>
        <p className="text-gray-600 dark:text-gray-300">个人博客</p>
      </Link>
      <Link key="2" className={twMerge(cardClass)} href="life">
        <SplitText
          text="Hello, Tailwind!"
          className="text-2xl font-semibold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="3" className={twMerge(cardClass)} href="/project">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          我的项目
        </h2>
        <p className="text-gray-600 dark:text-gray-300">hello world</p>
      </Link>
      <Link key="4" className={twMerge(cardClass)} href="/about">
        {/* <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        /> */}
        关于我
      </Link>
      <div key="5" className={twMerge(cardClass)}>
        <div>github</div>
        <div>juejin</div>
        <div>邮箱</div>
      </div>

      <div key="6" className={twMerge(cardClass)}>
        <ThemeToggle />
      </div>
      <Link key="7" className={twMerge(cardClass)} href="/">
        <Clock />
      </Link>
      <Link key="8" className={twMerge(cardClass)} href="/">
        hello world
      </Link>
      <Link key="9" className={twMerge(cardClass)} href="/">
        {/* <Link key="9" href="/" className="card"> */}
        hello world
      </Link>
    </Responsive>
  );
}
