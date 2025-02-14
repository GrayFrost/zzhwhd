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
      className="text-xs font-semibold mx-2 text-rose-700 hover:text-heading pointer-events-auto"
    >
      #{tag}
    </span>
  );
};
