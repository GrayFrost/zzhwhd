import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

interface Archive {
  year: string;
  posts: Post[];
}

function getArchiveList(): Archive[] {
  const archiveList: Archive[] = [];
  for (const post of allPosts) {
    const year = post.date.slice(0, 4);
    const archive = archiveList.find((archive) => archive.year === year);
    if (archive) {
      archive.posts.push(post);
    } else {
      archiveList.push({ year, posts: [post] });
    }
  }
  return archiveList.sort((a, b) => b.year.localeCompare(a.year));
}

export default function Page() {
  // 所有文章按时间排序，同时按年份拆分
  const archiveList = getArchiveList();
  return <div className="container max-w-3xl mx-auto p-4 md:p-6">
    文章归档
    <div>
      {archiveList.map((archive) => (
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
    </div>
  </div>
}