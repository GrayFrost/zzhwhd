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
    "block py-2 px-3 md:p-0 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent tracking-widest flex items-center gap-2 dark:text-[#c6c6c6]";
  console.log("zzh current pathname", pathname);
  return (
    <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-0">
      <h1 className="flex space-x-2 font-bold">
        {/* <Link href="/" className={linkClass}>
          <House />
          首页
        </Link> */}
        <Link
          href="/blog"
          className={twMerge(
            linkClass,
            pathname === "/blog" ? "text-rose-700" : ""
          )}
        >
          <Newspaper /> 首页
        </Link>
      </h1>
      <nav className="hidden w-full md:block md:w-auto px-4 z-40">
        <ul className="flex flex-col font-bold mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <Link
            href="/blog/archives"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/archives") ? "text-rose-700" : ""
            )}
          >
            <Package2 />
            归档
          </Link>
          <Link
            href="/blog/tags"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/tags") ? "text-rose-700" : ""
            )}
          >
            <Tag />
            标签
          </Link>
          <Link
            href="/blog/categories"
            className={twMerge(
              linkClass,
              pathname.includes("/blog/categories") ? "text-rose-700" : ""
            )}
          >
            <ChartColumnStacked />
            分类
          </Link>
        </ul>
      </nav>
    </div>
  );
};
