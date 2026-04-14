"use client";

import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { Footer } from "@/components/footer";

const monthMap: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
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
    <div className="bg-background text-foreground w-full min-h-screen transition-colors duration-700">
      <main className="container max-w-7xl mx-auto py-16 md:py-24 px-6">
        {/* 顶部标题 */}
        <header className="mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-brand-black dark:text-brand-cream tracking-tight italic">
            MEMORY <span className="text-brand-yellow">GALLERY.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium">
            时间定格，用影像讲述每一个珍贵的瞬间。
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* 左侧年份导航 */}
          <aside className="md:w-32 flex-shrink-0">
            <div className="sticky top-24 flex md:flex-col gap-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setCurrentYear(year)}
                  className={twMerge(
                    "px-6 py-3 rounded-xl text-lg font-black tracking-tighter transition-all duration-500 border text-center flex-shrink-0",
                    currentYear === year
                      ? "bg-brand-yellow text-brand-black border-brand-yellow scale-105 shadow-xl shadow-brand-yellow/30 z-10"
                      : "bg-brand-white dark:bg-brand-black/40 border-brand-black/5 dark:border-brand-cream/10 text-muted-foreground hover:border-brand-yellow/50 hover:bg-brand-beige dark:hover:bg-brand-black/60"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </aside>

          {/* 右侧照片内容 */}
          <div className="flex-1 space-y-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentYear}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-20"
              >
                {currentYearPhotos?.months.map((monthItem) => (
                  <section key={monthItem.month} className="space-y-8">
                    <div className="flex items-center space-x-6">
                      <h3 className="text-2xl font-black italic tracking-tight text-brand-black dark:text-brand-cream uppercase">
                        {monthMap[monthItem.month]}
                      </h3>
                      <div className="flex-1 h-[1px] bg-brand-black/5 dark:bg-brand-cream/5" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {monthItem.images.map((img, idx) => (
                        <motion.div
                          key={img.url}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group relative rounded-[2rem] overflow-hidden bg-brand-white dark:bg-brand-black/40 border border-brand-black/5 dark:border-brand-cream/10 shadow-sm"
                        >
                          <div className="aspect-w-4 aspect-h-3 w-full">
                            <Image
                              src={img.url}
                              alt={img.description || "Gallery image"}
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={idx < 6}
                            />
                          </div>
                          
                          {/* 悬浮遮罩 */}
                          <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 pointer-events-none">
                            <p className="text-brand-cream text-sm font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              {img.description || "Captured Moment"}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
