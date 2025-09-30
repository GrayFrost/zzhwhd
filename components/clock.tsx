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

  // 生成12个小时刻度
  const hourMarkers = Array.from({ length: 12 }, (_, i) => {
    const hour = i === 0 ? 12 : i;
    const angle = (i * 30) - 90; // -90度让12点在顶部
    return { hour, angle };
  });


  return (
    <div className="w-full h-full">
      {/* Apple风格时钟 - 64px固定尺寸，支持暗色主题 */}
      <div className="
        w-16 h-16
        bg-white dark:bg-gray-800
        rounded-[14px]
        relative
        shadow-lg dark:shadow-gray-900/50
        border border-gray-200 dark:border-gray-600
        transition-all duration-200
      ">
        {/* 12小时数字刻度 */}
        {hourMarkers.map(({ hour, angle }) => {
          const radius = 24; // 适配64px固定尺寸的数字位置
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          
          return (
            <div
              key={hour}
              className="absolute top-1/2 left-1/2 text-black dark:text-white transition-colors duration-200"
              style={{
                transform: `translate(${x - 6}px, ${y - 6}px)`,
              }}
            >
              <div className="text-[10px] font-bold select-none w-3 h-3 flex items-center justify-center">
                {hour}
              </div>
            </div>
          );
        })}

        {/* 时针 - 64px尺寸优化，支持暗色主题 */}
        <div
          ref={hourRef}
          className="absolute w-full h-full flex justify-center items-start"
          style={{ transformOrigin: 'center' }}
        >
          <div className="
            w-1 h-5
            bg-gray-800 dark:bg-gray-200
            rounded-full
            mt-2
            transition-colors duration-200
          " />
        </div>

        {/* 分针 - 64px尺寸优化，支持暗色主题 */}
        <div
          ref={minRef}
          className="absolute w-full h-full flex justify-center items-start"
          style={{ transformOrigin: 'center' }}
        >
          <div className="
            w-0.5 h-6
            bg-gray-700 dark:bg-gray-300
            rounded-full
            mt-2
            transition-colors duration-200
          " />
        </div>

        {/* 秒针 - 保持红色，但在暗色主题下稍微调整 */}
        <div
          ref={secRef}
          className="absolute w-full h-full flex justify-center items-start"
          style={{ transformOrigin: 'center' }}
        >
          <div className="
            w-px h-6
            bg-red-500 dark:bg-red-400
            rounded-full
            mt-2
            transition-colors duration-200
          " />
        </div>

        {/* 中心圆点 */}
        <div className="
          absolute top-1/2 left-1/2 
          w-1.5 h-1.5
          bg-gray-800 dark:bg-gray-200
          rounded-full 
          transform -translate-x-1/2 -translate-y-1/2
          z-10
          transition-colors duration-200
        " />

      </div>
    </div>
  );
}
