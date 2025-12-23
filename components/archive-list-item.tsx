import { Post } from "@/api/posts";
import dayjs from "dayjs";
import Link from "next/link";
import { BlogTag } from "@/components/blog-tag";
export const ArchiveListItem = ({ post }: { post: Post }) => {
  const { url, metadata } = post;
  const { date, title, tags } = metadata;
  return (
    <Link
      className="flex items-center space-x-6 max-w-4xl px-4 py-6 mx-auto rounded-xl cursor-pointer hover:bg-brand-beige dark:hover:bg-brand-black/40 group transition-all duration-300 border border-transparent hover:border-brand-black/5 dark:hover:border-brand-cream/5"
      href={url}
    >
      <span className="text-sm font-bold text-muted-foreground group-hover:text-brand-yellow transition-colors duration-300 tabular-nums">
        {dayjs(date).format("MM/DD")}
      </span>
      <div className="flex-1 font-bold text-lg group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </div>
      <div className="hidden sm:flex">
        {tags.map((tag: string) => {
          return <BlogTag key={tag} tag={tag} />;
        })}
      </div>
    </Link>
  );
};
