import Link from "next/link";
import { GarlicImage } from "@/components/garlic";
import { BlogNav } from "@/components/blog-nav";
// import ClickSpark from "@/animations/ClickSpark/ClickSpark";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      {/* <ClickSpark
        sparkColor="#e87373"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      > */}
        <div className="h-[174px] bg-[#f9fafb] dark:bg-[#1f2937] flex items-center justify-center">
          <Link href="/blog">
            <GarlicImage />
          </Link>
        </div>
        <div className="sticky top-0 bg-[#f9fafb] dark:bg-[#1f2937] z-50 p-2">
          <BlogNav />
        </div>

        {children}
      {/* </ClickSpark> */}
    </div>
  );
}
