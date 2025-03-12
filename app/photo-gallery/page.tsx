"use client";

import { useState, useMemo } from "react";
import localFont from "next/font/local";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/config/gallery";

// Fonts from https://www.dafont.com/thaleahfat.font
const pixelFont = localFont({ src: "../../public/fonts/ThaleahFat.ttf" });

const monthMap: Record<number, string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

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

  const currentYearPhotos = gallery.find((item) => item.year === currentYear);

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
        <div className="flex-1 ml-3 mr-4">
          <h2 className="text-[50px]">{currentYear} Years</h2>
          <AnimatePresence mode="wait">
            {currentYearPhotos && (
              <motion.div
                key={currentYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentYearPhotos.months.map((monthItem) => {
                  return (
                    <motion.div
                      key={monthItem.month}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-[40px]">{monthMap[monthItem.month]}</h3>
                      <motion.div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                      >
                        {monthItem.images.map((images) => (
                          <motion.div
                            key={images.url}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="bg-[#7886B4] rounded-lg"
                          >
                            <div className="aspect-w-16 aspect-h-9 rounded-lg">
                              <Image
                                src={images.url}
                                alt="photo"
                                className="rounded-lg"
                                fill={true}
                                objectFit="cover"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
