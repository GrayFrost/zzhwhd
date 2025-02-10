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
  const displayPosts = await getArchiveList(pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog/archives",
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1>归档博客文章分页</h1>
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
};

export default Page;
