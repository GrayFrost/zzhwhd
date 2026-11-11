import { getAllPosts, Post } from "@/api/posts";
import { TaxonomyIndex } from "@/components/taxonomy-views";

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
  return <TaxonomyIndex type="categories" entries={entries.map(([name, count]) => ({ name, count, href: `/blog/categories/${encodeURIComponent(name)}` }))} />;
}
