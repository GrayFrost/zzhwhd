"use client";

import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-provider";

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
  const { t } = useLanguage();
  const latestGalleryYear = useMemo(
    () => Math.max(...gallery.map((item) => item.year)),
    []
  );
  const [currentYear, setCurrentYear] = useState(latestGalleryYear);

  const years = useMemo(() => {
    return gallery
      .map((item) => item.year)
      .sort((a, b) => b - a);
  }, []);

  const currentYearPhotos = gallery.find((item) => item.year === currentYear);

  return (
    <PageShell
      kicker={t("gallery.kicker")}
      title={t("gallery.title")}
      description={t("gallery.description")}
      meta={String(currentYear)}
      aside={
        <div>
          <div className="journal-label">{t("gallery.year_index")}</div>
          <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto lg:flex-col">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setCurrentYear(year)}
                  className={twMerge(
                    "h-11 shrink-0 rounded-md border px-4 text-sm font-black transition-all duration-300",
                    currentYear === year
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card/70 text-muted-foreground hover:border-accent hover:text-accent"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
        </div>
      }
    >
          <div className="space-y-20">
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
                      <h3 className="text-2xl font-black tracking-tight text-foreground uppercase">
                        {monthMap[monthItem.month]}
                      </h3>
                      <div className="flex-1 h-[1px] bg-line" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {monthItem.images.map((img, idx) => (
                        <motion.div
                          key={img.url}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group relative overflow-hidden rounded-lg border border-line bg-card shadow-sm"
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
                          
                          <div className="absolute inset-0 bg-foreground/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 pointer-events-none">
                            <p className="text-background text-sm font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              {img.description || t("gallery.captured_moment")}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                ))}
                {!currentYearPhotos && (
                  <div className="journal-card p-8 text-muted-foreground">
                    {t("gallery.empty")}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
    </PageShell>
  );
}
