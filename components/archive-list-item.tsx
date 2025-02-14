import { Post } from "contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";
import { BlogTag } from "@/components/blog-tag";
export const ArchiveListItem = ({ post }: { post: Post }) => {
  const { date, title, url, tags } = post;
  return (
    <Link
      className="flex max-w-4xl px-2 py-6 mx-auto rounded-lg cursor-pointer hover:bg-[#f9fafb] group dark:hover:bg-[#1f2937]"
      href={url}
    >
      <span>{dayjs(date).format("MM月DD日")}</span>
      <div>{title}</div>
      <div>
        {tags.map((tag) => {
          return <BlogTag key={tag} tag={tag} />;
        })}
      </div>
    </Link>
  );
};
