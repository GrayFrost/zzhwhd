"use client";

import { ReactNode } from "react";
import { TableOfContents } from "@/components/table-of-contents";
import { LocalizedDate } from "@/components/localized-date";
import { useLanguage } from "@/components/language-provider";

interface PostArticleChromeProps {
  title: string;
  date?: string;
  minutes: number;
  toc: any[];
  children: ReactNode;
}

export function PostArticleChrome({
  title,
  date,
  minutes,
  toc,
  children,
}: PostArticleChromeProps) {
  const { t } = useLanguage();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,760px)_220px] lg:gap-8">
        <aside className="journal-card h-fit p-4 text-sm text-muted-foreground lg:sticky lg:top-24">
          <div className="space-y-3">
            {date && (
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground">
                  {t("blog.published_at")}
                </div>
                <LocalizedDate date={date} className="mt-1 block font-black text-foreground" />
              </div>
            )}
            <div>
              <div className="text-xs font-bold uppercase text-muted-foreground">
                {t("blog.reading_time")}
              </div>
              <div className="mt-1 font-black text-foreground">
                {minutes} {t("blog.minute")}
              </div>
            </div>
          </div>
        </aside>

        <article className="journal-card min-w-0 p-5 sm:p-8">
          <header className="mb-8 border-b border-line pb-8">
            <h1 className="journal-title text-3xl leading-tight text-foreground md:text-5xl">
              {title}
            </h1>
          </header>
          <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blueprint dark:prose-a:text-blueprint">
            {children}
          </div>
        </article>

        <aside className="hidden lg:block">
          {toc.length > 0 && <TableOfContents nodes={toc} />}
        </aside>
      </div>
    </main>
  );
}
