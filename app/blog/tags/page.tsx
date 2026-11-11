import { getAllPosts, Post } from "@/api/posts";
import { TaxonomyIndex } from "@/components/taxonomy-views";
function getTagMap(allPosts: Post[]) {
  const tagMap: Record<string, number> = {};
  allPosts.forEach((post: Post) => {
    post.metadata.tags?.forEach((tag: string) => {
      if (!tagMap[tag]) {
        tagMap[tag] = 0;
      }
      tagMap[tag]++;
    });
  });
  return tagMap;
}

export default async function Page() {
  const { posts } = await getAllPosts();
  // 列出所有的标签，和对应标签下文章的数量
  const entries = Object.entries(getTagMap(posts));
  return <TaxonomyIndex type="tags" entries={entries.map(([name, count]) => ({ name, count, href: `/blog/tags/${encodeURIComponent(name)}` }))} />;
}
