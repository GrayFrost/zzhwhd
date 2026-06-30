"use client";

import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-xs text-muted-foreground sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="journal-label">{t("footer.design_philosophy")}</div>
          <p className="mt-2 max-w-xl text-sm leading-6">{t("footer.quote")}</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <span>© {year} Gary Frost</span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-link"
          >
            {t("footer.license")}
          </a>
          <span>{t("footer.made_by")}</span>
        </div>
      </div>
    </footer>
  );
}
