"use client";

import Link from "next/link";
import { BookOpen, BriefcaseBusiness, Images, Map, PencilLine } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LocalizedDate } from "@/components/localized-date";

interface RecentPost {
  title: string;
  description: string;
  date: string;
  href: string;
}

const sectionCards = [
  {
    key: "writing",
    href: "/blog",
    icon: PencilLine,
    color: "text-blueprint",
    navKey: "blog",
  },
  {
    key: "making",
    href: "/project",
    icon: BriefcaseBusiness,
    color: "text-moss",
    navKey: "project",
  },
  {
    key: "moving",
    href: "/life",
    icon: Map,
    color: "text-accent",
    navKey: "life",
  },
];

export function HomeJournal({ recentPosts }: { recentPosts: RecentPost[] }) {
  const { t } = useLanguage();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-10">
        <aside className="journal-card h-fit p-4 lg:sticky lg:top-24">
          <div className="journal-label">{t("home.note_label")}</div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{t("home.note")}</p>
          <div className="mt-5 grid grid-cols-3 gap-2 lg:grid-cols-1">
            {[
              ["01", t("nav.blog")],
              ["02", t("nav.project")],
              ["03", t("nav.life")],
            ].map(([code, label]) => (
              <div key={code} className="rounded-md border border-line bg-card/70 p-3">
                <div className="text-xs font-black text-accent">{code}</div>
                <div className="mt-1 truncate text-sm font-bold">{label}</div>
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0">
          <header className="border-b border-line pb-8">
            <h1 className="journal-title max-w-4xl text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
              {t("home.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {t("home.description")}
            </p>
          </header>

          <section className="grid gap-4 py-8 md:grid-cols-3" aria-label={t("home.sections")}>
            {sectionCards.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="journal-card surface-link group flex min-h-44 flex-col justify-between p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="journal-label">{t(`nav.${item.navKey}`)}</div>
                      <h2 className="mt-3 text-2xl font-black text-foreground group-hover:text-accent">
                        {t(`home.${item.key}`)}
                      </h2>
                    </div>
                    <Icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-sm leading-6 text-muted-foreground">
                    {t(`home.${item.key}_note`)}
                  </p>
                </Link>
              );
            })}
          </section>

          <section className="journal-card p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="journal-label">{t("common.latest")}</div>
                <h2 className="mt-1 text-2xl font-black">{t("home.recent_posts")}</h2>
              </div>
              <Link
                href="/blog"
                className="surface-link inline-flex h-10 items-center gap-2 rounded-md border border-line px-3 text-sm font-bold"
              >
                <BookOpen className="h-4 w-4" />
                {t("common.view_all")}
              </Link>
            </div>
            <div className="divide-y divide-line">
              {recentPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="surface-link grid gap-2 py-4 md:grid-cols-[120px_1fr]"
                >
                  <LocalizedDate
                    date={post.date}
                    compact
                    className="text-sm font-black text-muted-foreground"
                  />
                  <div>
                    <h3 className="font-black text-foreground">{post.title}</h3>
                    {post.description && (
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/photo-gallery" className="journal-card surface-link flex items-center justify-between p-5">
              <div>
                <div className="journal-label">{t("nav.gallery")}</div>
                <p className="mt-2 text-sm text-muted-foreground">{t("nav.gallery_subtitle")}</p>
              </div>
              <Images className="h-6 w-6 text-blueprint" />
            </Link>
            <Link href="/about" className="journal-card surface-link flex items-center justify-between p-5">
              <div>
                <div className="journal-label">{t("nav.about")}</div>
                <p className="mt-2 text-sm text-muted-foreground">{t("nav.about_subtitle")}</p>
              </div>
              <BookOpen className="h-6 w-6 text-moss" />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
