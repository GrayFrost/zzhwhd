import Link from "next/link";
import { GarlicImage } from "@/components/garlic";
import { House, ChartColumnStacked, Tag, Package2 } from "lucide-react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkClass =
    "block py-2 px-3 md:p-0 rounded text-heading md:hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent tracking-widest flex items-center gap-2";
  return (
    <div className="w-full">
      <div className="h-[174px] bg-[#f9fafb] flex items-center justify-center">
        <GarlicImage />
      </div>
      <div className="sticky top-0 bg-[#f9fafb] z-50 p-2">
        <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-0">
          <h1 className="space-x-2 font-bold">
            <Link href="/" className={linkClass}>
              <House />
              首页
            </Link>
          </h1>
          <nav className="hidden w-full md:block md:w-auto px-4 z-40">
            <ul className="flex flex-col font-bold mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <Link href="/blog/archives" className={linkClass}>
                <Package2 />
                归档
              </Link>
              <Link href="/blog/tags" className={linkClass}>
                <Tag /> 
                标签
              </Link>
              <Link href="/blog/categories" className={linkClass}>
                <ChartColumnStacked /> 
                分类
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {children}
    </div>
  );
}
