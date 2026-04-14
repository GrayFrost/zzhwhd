"use client";

import Link from "next/link";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  iconPath?: string;
  isExternal?: boolean;
  tags: string[];
}

export function Project() {

  const projects: ProjectItem[] = [
    {
      id: "sveaflet",
      title: "Sveaflet",
      subtitle: "Leaflet + Svelte",
      description: "一个为 Svelte 开发者打造的轻量级 Leaflet 地图组件库，提供声明式的地图开发体验。",
      href: "https://sveaflet.vercel.app",
      isExternal: true,
      iconPath: "/images/icons/sveaflet.png",
      tags: ["Svelte", "Leaflet", "OSS"]
    },
    {
      id: "manga-view",
      title: "MangaView",
      subtitle: "图片阅读器",
      description: "极致纯净的漫画与图片阅读体验，支持多种格式与自定义布局，让阅读回归本质。",
      href: "/project/manga",
      isExternal: false,
      iconPath: "/images/icons/mangaview.png",
      tags: ["React", "Reader", "Product"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => {
        const CardContent = (
          <div className={`
            group relative h-full p-8 rounded-[2rem]
            bg-brand-white dark:bg-brand-black/40
            border border-brand-black/5 dark:border-brand-cream/10
            hover:border-brand-yellow transition-all duration-500
            flex flex-col
          `}>
            <div className="flex items-start justify-between mb-8">
              {project.iconPath && (
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-brand-black/5">
                  <Image
                    src={project.iconPath}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-black/5 dark:bg-brand-cream/5 text-muted-foreground group-hover:text-brand-yellow transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-black text-brand-black dark:text-brand-cream mb-2 group-hover:text-brand-yellow transition-colors italic tracking-tighter">
                {project.title}
              </h2>
              <h3 className="text-sm font-bold text-brand-yellow/80 mb-4 tracking-wide uppercase">
                {project.subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex items-center text-sm font-black tracking-widest uppercase group-hover:text-brand-yellow transition-colors">
              <span>Explore Project</span>
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        );

        if (project.isExternal) {
          return (
            <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              {CardContent}
            </a>
          );
        }

        return (
          <Link key={project.id} href={project.href} className="block h-full">
            {CardContent}
          </Link>
        );
      })}
    </div>
  );
}
