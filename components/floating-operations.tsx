"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowUp, Home } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function FloatingOperations() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  if (pathname === "/") {
    return null;
  }

  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-md border border-line bg-card/90 text-foreground shadow-card backdrop-blur transition hover:border-accent hover:text-accent";

  return (
    <div className="fixed bottom-5 right-4 z-[1000] flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <Link href="/" className={buttonClass} aria-label={t("common.home")}>
        <Home className="h-5 w-5" />
      </Link>
      <button
        type="button"
        className={buttonClass}
        aria-label={t("common.back")}
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        className={buttonClass}
        aria-label={t("common.back_to_top")}
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
