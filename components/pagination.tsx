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
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            <ArrowBigLeftDash />
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            <ArrowBigLeftDash />
          </Link>
        )}
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 px-2 bg-[#f9fafb] rounded-sm flex items-center justify-center">
            {currentPage}
          </div>
          /
          <div className="h-6 px-2 bg-[#f9fafb] rounded-sm flex items-center justify-center">
            {totalPages}
          </div>
        </div>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            <ArrowBigRightDash />
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            <ArrowBigRightDash />
          </Link>
        )}
      </nav>
    </div>
  );
}
