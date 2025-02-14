import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Pagination from "@/components/pagination";
import { DateFormat } from '@/components/date-format';
import { BlogTag } from "@/components/blog-tag";

const POSTS_PER_PAGE = 10;

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const Page = async ({ params }: { params: { page: string } }) => {
  const { page } = await params;
  const pageNumber = parseInt(page);

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
          const { url, title, date, tags } = post;
          return (
            <div
              key={url}
              className="max-w-4xl px-2 sm:px-4 py-6 mx-auto rounded-lg cursor-pointer sm:hover:bg-[#f9fafb] group"
            >
              <Link href={`${url}`}>
                <div className="text-xl font-bold text-heading group-hover:text-slate-700 group-hover:dark:text-white tracking-wide">
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
};

export default Page;
