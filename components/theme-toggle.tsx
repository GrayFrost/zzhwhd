"use client";

import * as motion from "motion/react-client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSwitch = () => {
    console.log('zzh theme', theme, resolvedTheme)
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full gap-2">
        <div className="h-10 w-16 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
        <div className="text-gray-500 dark:text-gray-400 text-[10px] font-medium">
          加载中...
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-2">      
      {/* iOS风格主题切换器 */}
      <button
        className={`
          relative inline-flex items-center h-10 w-16 rounded-full 
          transition-colors duration-300 ease-in-out focus:outline-none
          shadow-inner border-2
          ${isDark 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500' 
            : 'bg-gradient-to-r from-yellow-300 to-orange-300 border-yellow-400'
          }
        `}
        onClick={toggleSwitch}
        aria-label={`切换到${isDark ? '亮色' : '暗色'}模式`}
      >
        {/* 背景装饰 */}
        <div className={`
          absolute inset-0 rounded-full opacity-50
          ${isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-yellow-200 to-orange-200'}
        `} />
        
        {/* 滑块 */}
        <motion.div
          className={`
            relative inline-flex items-center justify-center
            h-7 w-7 rounded-full shadow-lg z-10
            ${isDark ? 'bg-gray-800' : 'bg-white'}
          `}
          initial={{
            x: isDark ? 32 : 4,
          }}
          animate={{
            x: isDark ? 32 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3
          }}
        >
          {/* 图标 */}
          {isDark ? (
            <Moon className="h-4 w-4 text-blue-300" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )}
        </motion.div>

        {/* 装饰性星星（暗色模式） */}
        {isDark && (
          <>
            <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" />
            <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </>
        )}
      </button>
      
    </div>
  );
}
