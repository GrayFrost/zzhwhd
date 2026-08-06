"use client";

import { ReactNode } from "react";
import { BlogSectionNav } from "@/components/blog-section-nav";

interface BlogSidebarStat {
  label: string;
  value: string | number;
}

interface BlogContentFrameProps {
  children: ReactNode;
  sidebarTitle: string;
  sidebarStats?: BlogSidebarStat[];
}

export function BlogContentFrame({
  children,
  sidebarTitle,
  sidebarStats = [],
}: BlogContentFrameProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,820px)] lg:justify-center lg:gap-10">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <BlogSectionNav variant="sidebar" />
          <div className="journal-card p-4 text-sm text-muted-foreground">
            <div className="journal-label">{sidebarTitle}</div>
            {sidebarStats.length > 0 && (
              <div className="mt-4 space-y-2">
                {sidebarStats.map((stat) => (
                  <div key={stat.label} className="flex justify-between gap-3">
                    <span>{stat.label}</span>
                    <span className="font-black text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        <section className="min-w-0">{children}</section>
      </div>
    </main>
  );
}
