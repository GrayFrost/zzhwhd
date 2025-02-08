import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { tagConfigMap } from "../../../config/tags";
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
  return (
    <div>
      文章标签
      <div className="flex gap-2">
        {entries.map(([tag, count]) => {
          const TagIcon = tagConfigMap[tag];
          return (
            <div key={tag} className="inline-flex items-center border h-12 rounded-lg p-2">
              <Link href={`/blog/tags/${tag}`}>
                <div className="flex items-center">
                  {TagIcon && (
                    <TagIcon
                      className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8`}
                    />
                  )}
                  {tag}
                </div>
              </Link>
              <span>({count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
