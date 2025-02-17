import { getAllPosts, Post } from "@/api/posts";
import Link from "next/link";

function getCategoryMap(allPosts: Post[]) {
  const map: Record<string, number> = {};
  for (const post of allPosts) {
    const category = post.metadata?.category;
    if (!category) {
      continue;
    }
    if (!map[category]) {
      map[category] = 0;
    }
    map[category]++;
  }
  return map;
}

export default async function Page() {
  const { posts } = await getAllPosts();
  // 列出所有的标签，和对应标签下文章的数量
  const entries = Object.entries(getCategoryMap(posts));
  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      {entries.map(([category, count]) => (
        <Link
          key={category}
          href={`/blog/categories/${category}`}
          className="flex max-w-4xl px-2 py-6 mx-auto rounded-lg cursor-pointer hover:bg-[#f9fafb] group dark:hover:bg-[#1f2937]"
        >
          {category}
          <span>({count})</span>
        </Link>
      ))}
    </div>
  );
}
