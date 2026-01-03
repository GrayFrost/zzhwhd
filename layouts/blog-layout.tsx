import Link from "next/link";
import { Post } from "@/api/posts";
import Pagination from "@/components/pagination";
import { DateFormat } from "@/components/date-format";
import { BlogTag } from "@/components/blog-tag";

const POSTS_PER_PAGE = 10;

export default function BlogLayout({
  pageNumber,
  posts,
}: {
  pageNumber: number;
  posts: Post[];
}) {
  const allPosts = posts || [];
  const displayPosts = allPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog",
  };

  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      <div>
        {displayPosts.map((post) => {
          const { metadata, url } = post;
          const { title, date, tags, description } = metadata;
          return (
            <div
              key={url}
              className="max-w-4xl px-4 py-6 mx-auto rounded-xl cursor-pointer border border-transparent hover:border-brand-yellow/30 hover:bg-brand-yellow/10 dark:hover:bg-brand-yellow/15 group transition-all duration-300"
            >
              <Link href={`${url}`}>
                <div className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-brand-yellow transition-colors duration-300 tracking-wide">
                  {title}
                </div>
                <div className="flex justify-start items-center space-x-2 mt-2">
                  <DateFormat date={date} />
                  {tags.map((tag: string) => {
                    return <BlogTag key={tag} tag={tag} />;
                  })}
                </div>
                <p className="mt-3 text-muted-foreground text-sm leading-loose line-clamp-4 group-hover:text-brand-black dark:group-hover:text-brand-cream/80 transition-colors duration-300 tracking-wide">
                  {description}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination {...pagination} />
    </div>
  );
}
