import Link from "next/link";
import { Post } from "contentlayer/generated";
import Pagination from "@/components/pagination";
import { DateFormat } from "@/components/date-format";
import { BlogTag } from "@/components/blog-tag";
// import { getMDXComponent } from "next-contentlayer2/hooks";

export default function BlogLayout({
  displayPosts,
  pagination,
}: {
  displayPosts: Post[];
  pagination: {
    currentPage: number;
    totalPages: number;
    basePath: string;
  };
}) {
  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      <div>
        {displayPosts.map((post) => {
          const { url, title, date, tags } = post;
          return (
            <div
              key={url}
              className="max-w-4xl px-2 py-6 mx-auto rounded-lg cursor-pointer hover:bg-[#f9fafb] group dark:hover:bg-[#1f2937]"
            >
              <Link href={`${url}`}>
                <div className="text-xl font-bold text-heading group-hover:text-slate-700 group-hover:dark:text-white tracking-wide dark:text-[#c6c6c6]">
                  {title}
                </div>
                <div className="flex  justify-start items-center space-x-2 mt-2">
                  <DateFormat date={date} />
                  {tags.map((tag) => {
                    return <BlogTag key={tag} tag={tag} />;
                  })}
                </div>
                <p className="mt-3 text-muted dark:text-gray-400/90 text-sm leading-loose line-clamp-4 group-hover:sm:text-heading tracking-wide"></p>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination {...pagination} />
    </div>
  );
}
