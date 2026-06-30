import { BlogSectionNav } from "@/components/blog-section-nav";
// import ClickSpark from "@/animations/ClickSpark/ClickSpark";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <BlogSectionNav />
      {children}
    </div>
  );
}
