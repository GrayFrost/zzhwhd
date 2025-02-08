"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Back() {
  const pathname = usePathname();
  const router = useRouter();
  const onBack = () => {
    router.back();
  };

  if (pathname === "/") {
    return null;
  }
  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 text-rose-400"
      onClick={onBack}
    >
      back
    </div>
  );
}
