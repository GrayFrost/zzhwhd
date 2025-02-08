import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Pagination from "@/components/pagination";

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
  };

  return (
    <div className="mx-auto">
      <h1>博客文章分页</h1>
      <ul>
        {displayPosts.map((post) => {
          const { url, title } = post;
          return (
            <li key={url} className="py-4">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/${url}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {title}
                    </Link>
                  </h3>
                  {/* <div className="flex flex-wrap">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </div> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination {...pagination} />
    </div>
  );
};

export default Page;
