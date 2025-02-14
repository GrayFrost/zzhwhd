"use client";

import dayjs from "dayjs";
export const DateFormat = ({ date }: { date: string }) => {
  return (
    <time className="text-xs">{dayjs(date).format("YYYY 年 MM 月 DD 日")}</time>
  );
};
