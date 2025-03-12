"use client";

import { useState, useMemo } from "react";
import localFont from "next/font/local";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Fonts from https://www.dafont.com/thaleahfat.font
const pixelFont = localFont({ src: "../../public/fonts/ThaleahFat.ttf" });

export default function Page() {
  const [currentYear, setCurrentYear] = useState(dayjs().year());

  const years = useMemo(() => {
    const arr = [];
    const oldestYear = 2024;
    const latestYear = dayjs().year();
    for (let i = latestYear; i >= oldestYear; i--) {
      arr.push(i);
    }
    return arr;
  }, []);

  return (
    <div
      className={`${pixelFont.className} bg-[#E2CF9A] dark:bg-[#1c050f] text-[#1c050f] dark:text-white w-full min-h-screen`}
    >
      <div className="w-full h-[174px] flex items-center justify-center text-[70px] stroke-color">
        Photo Gallery
      </div>
      <div className="flex sticky top-0">
        <div className="w-[200px] flex-shrink-0">
          {years.map((year) => {
            return (
              <motion.div
                key={year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  backgroundColor:
                    currentYear === year ? "#7886B4" : "transparent",
                }}
                transition={{ duration: 0.3, type: "spring" }}
                className={twMerge(
                  "w-full h-12 flex items-center justify-start px-3 text-[30px] cursor-pointer"
                )}
                onClick={() => setCurrentYear(year)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {year}
              </motion.div>
            );
          })}
        </div>
        <div className="flex-1 ml-3">
          <h2 className="text-[50px]">2025 Years</h2>
          <h3 className="text-[40px]"> Dec </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <div className="h-[196px] bg-slate-500">1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <h3 className="text-[40px]"> Nov </h3>
          <h3 className="text-[40px]"> Oct </h3>
          <h3 className="text-[40px]"> Sep </h3>
          <h3 className="text-[40px]"> Aug </h3>
          <h3 className="text-[40px]"> Jul </h3>
          <h3 className="text-[40px]"> Jun </h3>
          <h3 className="text-[40px]"> May </h3>
          <h3 className="text-[40px]"> Apr </h3>
          <h3 className="text-[40px]"> Mar </h3>
          <h3 className="text-[40px]"> Feb </h3>
          <h3 className="text-[40px]"> Jan </h3>
        </div>
      </div>
    </div>
  );
}
