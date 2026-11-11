"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  // House,
  Newspaper,
  ChartColumnStacked,
  Tag,
  Package2,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export const BlogNav = () => {
  const pathname = usePathname();
  const linkClass =
    "block py-2 px-3 md:p-0 rounded transition-all duration-300 tracking-widest flex items-center gap-2 text-muted-foreground hover:text-accent";

  return (
    <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          首页
        </Link>
        <h1 className="flex space-x-2 font-bold text-xl">
          <Link
            href="/blog"
            className={twMerge(
              "flex items-center gap-2 transition-colors duration-300",
              pathname === "/blog" ? "text-accent" : "text-foreground hover:text-accent"
            )}
          >
            博客
          </Link>
        </h1>
      </div>
      <nav className="hidden w-full md:block md:w-auto px-4 z-40">
        <ul className="flex flex-col font-bold mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
          <Link
            href="/blog/archives"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/archives") ? "text-accent" : ""
            )}
          >
            归档
          </Link>
          <Link
            href="/blog/tags"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/tags") ? "text-accent" : ""
            )}
          >
            标签
          </Link>
          <Link
            href="/blog/categories"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/categories") ? "text-accent" : ""
            )}
          >
            分类
          </Link>
        </ul>
      </nav>
    </div>
  );
};
