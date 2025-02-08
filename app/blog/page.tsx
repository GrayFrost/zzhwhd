import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Pagination from "@/components/pagination";
// import { getMDXComponent } from "next-contentlayer2/hooks";

const POSTS_PER_PAGE = 10;

export default function Page() {
  const pageNumber = 1;
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
      <div className="text-black dark:text-white">
        <h1>博客</h1>
        <Link href="/blog/archives">归档</Link>
        <Link href="/blog/tags">标签</Link>
        <Link href="/blog/categories">分类</Link>
      </div>

      <ul>
        {displayPosts.map((post) => {
          const { url, title } = post;
          return (
            <li key={url} className="py-4">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`${url}`}
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
}
