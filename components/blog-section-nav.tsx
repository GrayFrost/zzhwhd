"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Archive, Folder, List, Tags } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/language-provider";

const links = [
  { href: "/blog", label: "blog.all_posts", icon: List, match: "posts" },
  { href: "/blog/archives", label: "blog.archives", icon: Archive },
  { href: "/blog/tags", label: "blog.tags", icon: Tags },
  { href: "/blog/categories", label: "blog.categories", icon: Folder },
];

export function BlogSectionNav({
  variant = "bar",
}: {
  variant?: "bar" | "sidebar";
}) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isSidebar = variant === "sidebar";

  return (
    <div
      className={twMerge(
        !isSidebar && "border-b border-line bg-background/90 backdrop-blur-md",
        !isSidebar && isBlogPage && "sticky top-0 z-30"
      )}
    >
      <nav
        className={twMerge(
          "scrollbar-hide flex gap-2 overflow-x-auto",
          isSidebar
            ? "flex-col"
            : "mx-auto max-w-4xl px-4 py-3 sm:px-6"
        )}
        aria-label={t("blog.title")}
      >
        {links.map((item) => {
          const Icon = item.icon;
          const active =
            item.match === "posts"
              ? pathname === "/blog" || pathname.startsWith("/blog/page/")
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={twMerge(
                "surface-link inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-line bg-card/70 px-3 text-sm font-bold text-muted-foreground",
                isSidebar && "w-full justify-start",
                active && "border-accent bg-accent text-accent-foreground hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {t(item.label)}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
