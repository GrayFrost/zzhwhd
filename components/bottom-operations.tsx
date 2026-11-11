"use client";

import { usePathname, useRouter } from "next/navigation";
import { House, ArrowBigLeft, ArrowBigUp, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
export default function BottomOperations() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const onBack = () => {
    router.back();
  };
  const onUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  if (pathname === "/") {
    return null;
  }
  const iconWrapClass =
    "flex items-center justify-center w-11 h-11 rounded-full border border-accent/30 bg-card/80 text-foreground shadow-card backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent";
  return (
    <div className="fixed bottom-24 right-4 z-20">
      <div className="flex flex-col gap-3">
        <Link href="/" className={iconWrapClass}>
          <House />
        </Link>
        <div className={iconWrapClass}>
          {theme === "dark" ? (
            <div
              onClick={() => {
                setTheme("light");
              }}
            >
              <Sun />
            </div>
          ) : (
            <div
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Moon />
            </div>
          )}
        </div>
        <div className={iconWrapClass} onClick={onBack}>
          <ArrowBigLeft />
        </div>
        <div className={iconWrapClass} onClick={onUp}>
          <ArrowBigUp />
        </div>
      </div>
    </div>
  );
}
