"use client";

import Link from "next/link";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

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
  // const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-12 md:space-y-5">
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
              className="inline-flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors duration-300 group"
            >
              <ArrowBigLeftDash className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Prev</span>
            </Link>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs font-black tracking-widest uppercase">
          <div className="w-10 h-10 rounded-full border border-brand-black/10 dark:border-brand-cream/10 flex items-center justify-center bg-brand-white/50 dark:bg-brand-black/50">
            {currentPage}
          </div>
          <span className="text-muted-foreground">/</span>
          <div className="w-10 h-10 rounded-full border border-brand-black/10 dark:border-brand-cream/10 flex items-center justify-center text-muted-foreground">
            {totalPages}
          </div>
        </div>

        <div className="flex-1 text-right">
          {nextPage && (
            <Link 
              href={`/${basePath}/page/${currentPage + 1}`} 
              rel="next"
              className="inline-flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors duration-300 group"
            >
              <span>Next</span>
              <ArrowBigRightDash className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
