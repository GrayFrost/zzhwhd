"use client";

import { useRouter } from "next/navigation";

export const BlogTag = ({ tag }: { tag: string }) => {
  const router = useRouter();

  const goToBlogTagList = (path: string) => {
    router.push(path);
  };

  return (
    <span
      onClick={() => goToBlogTagList(`/blog/tags/${tag}`)}
      className="text-xs font-bold mx-2 text-brand-yellow hover:text-brand-black dark:hover:text-brand-cream transition-colors duration-300 cursor-pointer pointer-events-auto"
    >
      #{tag}
    </span>
  );
};
