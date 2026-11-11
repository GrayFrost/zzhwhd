"use client";

import Link from "next/link";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  basePath,
}: PaginationProps) {
  const { t } = useLanguage();
  // const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-8 md:space-y-5">
      <nav className="flex items-center justify-between">
        <div className="flex-1">
          {prevPage && (
            <Link
              href={
                currentPage - 1 === 1
                  ? `/${basePath}/`
                  : `/${basePath}/page/${currentPage - 1}`
              }
              rel="prev"
              className="surface-link inline-flex h-10 items-center gap-2 rounded-md border border-line bg-card/70 px-3 text-sm font-bold"
            >
              <ArrowBigLeftDash className="h-4 w-4" />
              <span>{t("blog.prev")}</span>
            </Link>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs font-black tracking-widest uppercase">
          <div className="w-10 h-10 rounded-md border border-line flex items-center justify-center bg-card/80">
            {currentPage}
          </div>
          <span className="text-muted-foreground">/</span>
          <div className="w-10 h-10 rounded-md border border-line flex items-center justify-center text-muted-foreground">
            {totalPages}
          </div>
        </div>

        <div className="flex-1 text-right">
          {nextPage && (
            <Link 
              href={`/${basePath}/page/${currentPage + 1}`} 
              rel="next"
              className="surface-link inline-flex h-10 items-center gap-2 rounded-md border border-line bg-card/70 px-3 text-sm font-bold"
            >
              <span>{t("blog.next")}</span>
              <ArrowBigRightDash className="h-4 w-4" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
