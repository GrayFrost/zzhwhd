"use client";

import dayjs from "dayjs";
import { useLanguage } from "@/components/language-provider";

export function LocalizedDate({
  date,
  className = "",
  compact = false,
}: {
  date: string;
  className?: string;
  compact?: boolean;
}) {
  const { locale } = useLanguage();
  const format =
    locale === "zh"
      ? compact
        ? "MM 月 DD 日"
        : "YYYY 年 MM 月 DD 日"
      : compact
        ? "MMM D"
        : "MMM D, YYYY";

  return (
    <time dateTime={date} className={className}>
      {dayjs(date).format(format)}
    </time>
  );
}
