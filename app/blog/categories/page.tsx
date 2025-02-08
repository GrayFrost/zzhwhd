import { allPosts } from "contentlayer/generated";
import Link from "next/link";

function getCategoryMap() {
  const map: Record<string, number> = {};
  for (const post of allPosts) {
    const category = post.category;
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

export default function Page() {
  // 列出所有的标签，和对应标签下文章的数量
  const entries = Object.entries(getCategoryMap());
  return (
    <div className="mx-auto">
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
