"use client";

import { usePathname, useRouter } from "next/navigation";
import { House, ArrowBigLeft, ArrowBigUp } from "lucide-react";
import Link from "next/link";
export default function BottomOperations() {
  const pathname = usePathname();
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  const onUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  if (pathname === "/") {
    return null;
  }
  const iconWrapClass =
    "flex items-center justify-center w-10 h-10 bg-slate-300 opacity-30 hover:opacity-100 cursor-pointer rounded-full";
  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex flex-col gap-2">
        <Link href="/" className={iconWrapClass}>
          <House />
        </Link>
        <div className={iconWrapClass} onClick={onBack}>
          <ArrowBigLeft />
        </div>
        <div className={iconWrapClass} onClick={onUp}>
          <ArrowBigUp />
        </div>
      </div>
    </div>
  );
}
