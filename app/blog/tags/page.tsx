import { getAllPosts, Post } from "@/api/posts";
import Link from "next/link";
import { tagConfigMap } from "@/config/tags";
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
  return (
    <div className="container max-w-3xl mx-auto py-12 px-6">    
      <div className="flex flex-wrap gap-3">
        {entries.map(([tag, count]) => {
          const TagIcon = tagConfigMap[tag];
          return (
            <div
              key={tag}
              className="inline-flex items-center border border-brand-black/5 dark:border-brand-cream/10 hover:border-brand-yellow/50 h-12 rounded-lg p-2 transition-colors duration-200"
            >
              <Link href={`/blog/tags/${tag}`}>
                <div className="flex items-center mr-2">
                  {TagIcon && (
                    <TagIcon
                      className={`fill-current text-brand-black/70 dark:text-brand-cream/70 hover:text-brand-yellow h-6 w-6 mr-2 transition-colors`}
                    />
                  )}
                  <span className="text-base text-brand-black dark:text-brand-cream hover:text-brand-yellow transition-colors">{tag}</span>
                </div>
              </Link>
              <span className="text-base text-muted-foreground">({count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
