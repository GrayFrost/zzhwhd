"use client";

import Link from "next/link";
import { Post } from "@/api/posts";
import Pagination from "@/components/pagination";
import { BlogTag } from "@/components/blog-tag";
import { BlogContentFrame } from "@/components/blog-content-frame";
import { LocalizedDate } from "@/components/localized-date";
import { useLanguage } from "@/components/language-provider";

const POSTS_PER_PAGE = 10;

export default function BlogLayout({
  pageNumber,
  posts,
}: {
  pageNumber: number;
  posts: Post[];
}) {
  const { t } = useLanguage();
  const allPosts = posts || [];
  const displayPosts = allPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog",
  };

  return (
    <BlogContentFrame
      sidebarTitle={t("common.index")}
      sidebarStats={[
        { label: t("blog.all_posts"), value: allPosts.length },
        { label: t("common.latest"), value: pageNumber },
      ]}
    >
      <div className="journal-card divide-y divide-line">
        {displayPosts.map((post) => {
          const { metadata, url } = post;
          const { title, date, tags, description } = metadata;
          return (
            <article key={url} className="group">
              <Link href={`${url}`} className="surface-link block p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
                  <LocalizedDate date={date} />
                  <div className="flex flex-wrap gap-2">
                    {tags?.map((tag: string) => {
                      return <BlogTag key={tag} tag={tag} />;
                    })}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-foreground group-hover:text-accent">
                  {title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </Link>
            </article>
          );
        })}
      </div>
      <Pagination {...pagination} />
    </BlogContentFrame>
  );
}
