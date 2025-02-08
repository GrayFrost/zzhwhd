import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

function getTagMap() {
  const tagMap: Record<string, number> = {};
  allPosts.forEach((post: Post) => {
    post.tags.forEach((tag) => {
      if (!tagMap[tag]) {
        tagMap[tag] = 0;
      }
      tagMap[tag]++;
    });
  });
  return tagMap;
}

export default function Page() {
  // 列出所有的标签，和对应标签下文章的数量
  const entries = Object.entries(getTagMap());
  return <div>
    文章标签
    <div>
      {entries.map(([tag, count]) => (
        <div key={tag}>
          <Link href={`/blog/tags/${tag}`}>{tag}</Link>
          <span>({count})</span>
        </div>
      ))}
    </div>
  </div>
}