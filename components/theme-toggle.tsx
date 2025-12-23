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
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return <div className="w-14 h-8 bg-brand-black/10 dark:bg-brand-cream/10 rounded-full animate-pulse" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleSwitch}
      className={`
        relative inline-flex items-center h-8 w-14 rounded-full 
        transition-all duration-500 ease-in-out focus:outline-none
        border-2
        ${isDark 
          ? 'bg-brand-black border-brand-cream/20' 
          : 'bg-brand-cream border-brand-black/10'
        }
      `}
      aria-label={`切换到${isDark ? '亮色' : '暗色'}模式`}
    >
      <motion.div
        className={`
          relative inline-flex items-center justify-center
          h-6 w-6 rounded-full shadow-md z-10
          ${isDark ? 'bg-brand-cream text-brand-black' : 'bg-brand-black text-brand-yellow'}
        `}
        initial={false}
        animate={{
          x: isDark ? 24 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <Sun className="h-3.5 w-3.5" />
        )}
      </motion.div>
    </button>
  );
}
