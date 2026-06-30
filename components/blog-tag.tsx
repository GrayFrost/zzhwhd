"use client";

import { useRouter } from "next/navigation";

export const BlogTag = ({ tag }: { tag: string }) => {
  const router = useRouter();

  const goToBlogTagList = (path: string) => {
    router.push(path);
  };

  return (
    <span
      onClick={() => goToBlogTagList(`/blog/tags/${encodeURIComponent(tag)}`)}
      className="mr-2 inline-flex rounded border border-line px-2 py-1 text-xs font-bold text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent cursor-pointer pointer-events-auto"
    >
      #{tag}
    </span>
  );
};
