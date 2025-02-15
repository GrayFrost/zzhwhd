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
    <div className="container max-w-3xl mx-auto p-4 md:p-6">    
      <div className="flex flex-wrap gap-3">
        {entries.map(([tag, count]) => {
          const TagIcon = tagConfigMap[tag];
          return (
            <div
              key={tag}
              className="inline-flex items-center border hover:border-primary-500 dark:hover:border-primary-400 h-12 rounded-lg p-2 transition-colors duration-200"
            >
              <Link href={`/blog/tags/${tag}`}>
                <div className="flex items-center mr-2">
                  {TagIcon && (
                    <TagIcon
                      className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6 mr-2`}
                    />
                  )}
                  <span className="text-base hover:text-primary-500 dark:hover:text-primary-400">{tag}</span>
                </div>
              </Link>
              <span className="text-base text-gray-500 dark:text-gray-400">({count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
