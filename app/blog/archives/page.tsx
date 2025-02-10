import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import Pagination from "@/components/pagination";

const POSTS_PER_PAGE = 10;

interface Archive {
  year: string;
  posts: Post[];
}

function getArchiveList(pageNumber: number): Archive[] {
  const displayPosts = allPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice((pageNumber - 1) * POSTS_PER_PAGE, pageNumber * POSTS_PER_PAGE);
  const archiveList: Archive[] = [];
  for (const post of displayPosts) {
    const year = post.date.slice(0, 4);
    const archive = archiveList.find((archive) => archive.year === year);
    if (archive) {
      archive.posts.push(post);
    } else {
      archiveList.push({ year, posts: [post] });
    }
  }
  return archiveList;
}

export default function Page() {
  const pageNumber = 1;
  const displayPosts = getArchiveList(pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: 'blog/archives'
  };
  // 所有文章按时间排序，同时按年份拆分

  return (
    <div className="container max-w-5xl mx-auto p-4 md:p-6">
      文章归档
      {displayPosts.map((archive) => (
        <div key={archive.year}>
          <h2 className="text-xl font-bold my-4">{archive.year}</h2>
          <ul className="list-disc pl-6">
            {archive.posts.map((post) => (
              <li key={post.url}>
                <Link href={post.url}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Pagination {...pagination} />
    </div>
  );
}
