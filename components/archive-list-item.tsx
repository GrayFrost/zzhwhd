import { Post } from "@/api/posts";
import Link from "next/link";
import { BlogTag } from "@/components/blog-tag";
import { LocalizedDate } from "@/components/localized-date";
export const ArchiveListItem = ({ post }: { post: Post }) => {
  const { url, metadata } = post;
  const { date, title, tags } = metadata;
  return (
    <Link
      className="surface-link grid gap-3 py-4 sm:grid-cols-[96px_1fr_auto] sm:items-center"
      href={url}
    >
      <LocalizedDate
        date={date}
        compact
        className="text-sm font-black text-muted-foreground tabular-nums"
      />
      <div className="font-bold text-lg text-foreground">
        {title}
      </div>
      <div className="flex flex-wrap sm:justify-end">
        {tags?.map((tag: string) => {
          return <BlogTag key={tag} tag={tag} />;
        })}
      </div>
    </Link>
  );
};
