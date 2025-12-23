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
      <div
        id="blog-hero"
        className="h-[174px] bg-brand-cream/30 dark:bg-brand-black/20 flex items-center justify-center border-b border-brand-black/5 dark:border-brand-cream/5"
      >
          <Link href="/blog" className="transition-transform duration-500 hover:scale-105">
            <GarlicImage />
          </Link>
        </div>
        <div className="sticky top-0 bg-background/80 backdrop-blur-md z-50 p-2 border-b border-brand-black/5 dark:border-brand-cream/5">
          <BlogNav />
        </div>

        {children}
      {/* </ClickSpark> */}
    </div>
  );
}
