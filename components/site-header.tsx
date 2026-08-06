"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BriefcaseBusiness, Images, Map, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/language-provider";
import { SiteLanguageSwitcher, SiteThemeToggle } from "@/components/site-controls";

const navItems = [
  { key: "blog", href: "/blog", icon: BookOpen },
  { key: "life", href: "/life", icon: Map },
  { key: "project", href: "/project", icon: BriefcaseBusiness },
  { key: "gallery", href: "/photo-gallery", icon: Images },
  { key: "about", href: "/about", icon: UserRound },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, t } = useLanguage();
  const [hiddenForReading, setHiddenForReading] = useState(false);
  const usesReadingHeader =
    pathname === "/blog" ||
    pathname.startsWith("/blog/") ||
    pathname === "/life";

  useEffect(() => {
    if (!usesReadingHeader) {
      setHiddenForReading(false);
      return;
    }

    const updateHeaderVisibility = () => {
      setHiddenForReading(window.scrollY > 72);
    };

    updateHeaderVisibility();
    window.addEventListener("scroll", updateHeaderVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderVisibility);
    };
  }, [usesReadingHeader, pathname]);

  return (
    <header
      className={twMerge(
        "sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md transition-transform duration-300 ease-out",
        hiddenForReading && "-translate-y-full pointer-events-none"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="pixel-signature flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-2xl text-background">
              <span
                className={locale === "zh" ? "pixel-signature-cjk" : undefined}
                lang={locale === "zh" ? "zh-CN" : "en"}
              >
                {t("common.site_initial")}
              </span>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black uppercase tracking-[0.14em] text-foreground">
                {t("common.site_name")}
              </span>
              <span className="block truncate text-xs text-muted-foreground">
                {t("common.site_tagline")}
              </span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <SiteLanguageSwitcher />
            <SiteThemeToggle />
          </div>
        </div>
        <nav className="scrollbar-hide flex gap-2 overflow-x-auto pb-1" aria-label={t("common.primary_navigation")}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/blog"
                ? pathname.startsWith("/blog")
                : pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={twMerge(
                  "surface-link inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-line bg-card/70 px-3 text-sm font-bold text-muted-foreground",
                  active && "border-accent bg-accent text-accent-foreground hover:text-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{t(`nav.${item.key}`)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
