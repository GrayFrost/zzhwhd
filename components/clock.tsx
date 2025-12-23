"use client";

import { useEffect, useRef } from "react";

const deg = 6;

export default function Clock() {
  const timerID = useRef<NodeJS.Timeout | null>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timerID.current = setInterval(setClock, 1000);
    setClock();

    return () => {
      if (timerID.current) {
        clearInterval(timerID.current);
      }
    };
  }, []);

  function setClock() {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    if (hourRef.current) {
      hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    }
    if (minRef.current) {
      minRef.current.style.transform = `rotateZ(${mm}deg)`;
    }
    if (secRef.current) {
      secRef.current.style.transform = `rotateZ(${ss}deg)`;
    }
  }

  return (
    <div className="
      w-16 h-16
      bg-brand-white dark:bg-brand-black/40
      rounded-2xl
      relative
      border border-brand-black/5 dark:border-brand-cream/10
      transition-all duration-300
      shadow-sm
    ">
      {/* 刻度 */}
      {[0, 90, 180, 270].map((angle) => (
        <div
          key={angle}
          className="absolute top-1/2 left-1/2 w-[1px] h-full py-1"
          style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
        >
          <div className="w-[1px] h-1.5 bg-brand-black/10 dark:bg-brand-cream/10 rounded-full" />
        </div>
      ))}

      {/* 时针 */}
      <div
        ref={hourRef}
        className="absolute w-full h-full flex justify-center items-center"
        style={{ transformOrigin: 'center' }}
      >
        <div className="w-1 h-4 bg-brand-black dark:bg-brand-cream rounded-full mb-4" />
      </div>

      {/* 分针 */}
      <div
        ref={minRef}
        className="absolute w-full h-full flex justify-center items-center"
        style={{ transformOrigin: 'center' }}
      >
        <div className="w-0.5 h-6 bg-brand-black/60 dark:bg-brand-cream/60 rounded-full mb-6" />
      </div>

      {/* 秒针 */}
      <div
        ref={secRef}
        className="absolute w-full h-full flex justify-center items-center"
        style={{ transformOrigin: 'center' }}
      >
        <div className="w-px h-6 bg-brand-yellow rounded-full mb-6" />
      </div>

      {/* 中心圆点 */}
      <div className="
        absolute top-1/2 left-1/2 
        w-1 h-1
        bg-brand-black dark:bg-brand-cream
        rounded-full 
        transform -translate-x-1/2 -translate-y-1/2
        z-10
      " />
    </div>
  );
}
