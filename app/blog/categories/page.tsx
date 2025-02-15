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
      文章分类
      <div>
        {entries.map(([category, count]) => (
          <div key={category}>
            <Link href={`/blog/categories/${category}`}>{category}</Link>
            <span>({count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
