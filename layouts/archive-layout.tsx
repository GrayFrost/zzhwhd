import { Post } from "@/api/posts";
import dayjs from 'dayjs';
import Pagination from "@/components/pagination";
import { ArchiveListItem } from "@/components/archive-list-item";

const POSTS_PER_PAGE = 10;

interface Archive {
  year: string;
  posts: Post[];
}

function getArchiveList(allPosts: Post[], pageNumber: number): Archive[] {
  const displayPosts = allPosts
    .sort((a, b) => {
      return dayjs(b.metadata.date).valueOf() - dayjs(a.metadata.date).valueOf()
    })
    .slice((pageNumber - 1) * POSTS_PER_PAGE, pageNumber * POSTS_PER_PAGE);
  const archiveList: Archive[] = [];
  for (const post of displayPosts) {
    const year = dayjs(post.metadata.date).format('YYYY');
    const archive = archiveList.find((archive) => archive.year === year);
    if (archive) {
      archive.posts.push(post);
    } else {
      archiveList.push({ year, posts: [post] });
    }
  }
  return archiveList;
}

export default function Page({ pageNumber, posts: allPosts }: { pageNumber: number, posts: Post[] }) {
  const displayPosts = getArchiveList(allPosts, pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog/archives",
  };
  // 所有文章按时间排序，同时按年份拆分

  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      {displayPosts.map((archive) => (
        <div key={archive.year}>
          <h2 className="text-xl font-bold my-4">{archive.year}</h2>
          <div className="list-disc pl-6">
            {archive.posts.map((post) => (
              // <li key={post.url}>
              //   <Link href={post.url}>{post.title}</Link>
              // </li>
              <ArchiveListItem post={post} key={post.url} />
            ))}
          </div>
        </div>
      ))}
      <Pagination {...pagination} />
    </div>
  );
}
