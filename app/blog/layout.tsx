import Link from "next/link";
import { GarlicImage } from "@/components/garlic";
import { BlogNav } from '@/components/blog-nav';
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full">
      <div className="h-[174px] bg-[#f9fafb] dark:bg-[#1f2937] flex items-center justify-center">
        <Link href="/blog">
          <GarlicImage />
        </Link>
      </div>
      <div className="sticky top-0 bg-[#f9fafb] dark:bg-[#1f2937] z-50 p-2">
        <BlogNav />
      </div>

      {children}
    </div>
  );
}
