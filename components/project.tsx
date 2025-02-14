"use client";

import Link from "next/link";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "@/hooks/use-window-width";

const layouts = {
  lg: [
    { i: "sveaflet", x: 0, y: 0, w: 1, h: 1 },
    { i: "manga-view", x: 1, y: 0, w: 1, h: 1 },
  ],
  md: [
    { i: "sveaflet", x: 0, y: 0, w: 1, h: 1 },
    { i: "manga-view", x: 1, y: 0, w: 1, h: 1 },
  ],
  sm: [
    { i: "sveaflet", x: 0, y: 0, w: 1, h: 1 },
    { i: "manga-view", x: 1, y: 0, w: 1, h: 1 },
  ],
  xs: [
    { i: "sveaflet", x: 0, y: 0, w: 1, h: 1 },
    { i: "manga-view", x: 0, y: 1, w: 1, h: 1 },
  ],
  xxs: [
    { i: "sveaflet", x: 0, y: 0, w: 1, h: 1 },
    { i: "manga-view", x: 0, y: 1, w: 1, h: 1 },
  ],
};

export function Project() {
  const width = useWindowWidth();

  if (!width) return null;

  const cardClass =
    "group bg-white dark:bg-gray-700 border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";

  return (
    <Responsive
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      className="layout w-full h-full"
      cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
      layouts={layouts}
      isDraggable={false}
      isResizable={false}
      width={width}
      margin={[16, 16]}
    >
      <Link
        key="sveaflet"
        href="https://sveaflet.vercel.app"
        className={cardClass}
      >
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          Sveaflet
        </h2>
        <p className="text-gray-600 dark:text-gray-300">leaflet + svelte</p>
      </Link>
      <Link key="manga-view" href="/project/manga" className={cardClass}>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          MangaView
        </h2>
        <p className="text-gray-600 dark:text-gray-300">图片阅读器</p>
      </Link>
    </Responsive>
  );
}
