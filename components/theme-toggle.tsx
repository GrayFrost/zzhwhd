"use client";

import * as motion from "motion/react-client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function LayoutAnimation() {
  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: theme === "dark" ? "flex-end" : "flex-start",
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={{
          ...handle,
          backgroundColor: theme === "dark" ? "#4a4a4a" : "#6366f1",
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center" 
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4 text-blue-400" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}

// 更新样式参数
const container = {
  width: 72,
  height: 40,
  borderRadius: 20,
  cursor: "pointer",
  display: "flex",
  padding: 4,
};

const handle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
};
