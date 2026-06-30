"use client";

import Link from "next/link";
import { Hash, Folder } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { BlogTag } from "@/components/blog-tag";
import { LocalizedDate } from "@/components/localized-date";
import { useLanguage } from "@/components/language-provider";
import { tagConfigMap } from "@/config/tags";

interface TaxonomyEntry {
  name: string;
  count: number;
  href: string;
}

interface TermPost {
  title: string;
  date: string;
  href: string;
  tags: string[];
}

export function TaxonomyIndex({
  type,
  entries,
}: {
  type: "tags" | "categories";
  entries: TaxonomyEntry[];
}) {
  const { t } = useLanguage();
  const title = type === "tags" ? t("blog.tags") : t("blog.categories");

  return (
    <PageShell
      kicker={t("blog.kicker")}
      title={title}
      description={t("blog.description")}
      meta={`${entries.length} ${title}`}
      maxWidth="reading"
      aside={
        <div>
          <div className="journal-label">{title}</div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {t("blog.all_posts")}
          </p>
        </div>
      }
    >
      <div className="journal-card grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
        {entries.map((entry) => {
          const TagIcon = type === "tags" ? tagConfigMap[entry.name] : undefined;
          const FallbackIcon = type === "tags" ? Hash : Folder;

          return (
            <Link
              key={entry.href}
              href={entry.href}
              className="surface-link flex min-h-20 items-center justify-between rounded-md border border-line bg-background/40 p-4"
            >
              <span className="flex min-w-0 items-center gap-3">
                {TagIcon ? (
                  <TagIcon className="h-6 w-6 shrink-0 fill-current text-accent" />
                ) : (
                  <FallbackIcon className="h-5 w-5 shrink-0 text-accent" />
                )}
                <span className="truncate font-black">{entry.name}</span>
              </span>
              <span className="text-sm font-bold text-muted-foreground">{entry.count}</span>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}

export function TermPostList({
  type,
  term,
  posts,
}: {
  type: "tag" | "category";
  term: string;
  posts: TermPost[];
}) {
  const { t } = useLanguage();
  const title = type === "tag" ? t("blog.tag_posts") : t("blog.category_posts");

  return (
    <PageShell
      kicker={t("blog.kicker")}
      title={term}
      description={title}
      meta={`${posts.length} ${t("blog.post_count")}`}
      maxWidth="reading"
      aside={
        <div>
          <div className="journal-label">{title}</div>
          <p className="mt-3 break-words text-lg font-black text-foreground">{term}</p>
        </div>
      }
    >
      <div className="journal-card divide-y divide-line">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="surface-link block p-5">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <LocalizedDate date={post.date} className="text-xs font-bold text-muted-foreground" />
              <div className="flex flex-wrap">
                {post.tags.map((tag) => (
                  <BlogTag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <h2 className="text-xl font-black text-foreground">{post.title}</h2>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
