"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon?: React.ReactNode;
  gradient?: string;
  bgColor?: string;
  isExternal?: boolean;
}

export function Project() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "sveaflet",
      title: "Sveaflet",
      subtitle: "leaflet + svelte",
      href: "https://sveaflet.vercel.app",
      gradient: "from-green-500 to-blue-600",
      isExternal: true,
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            src="/images/icons/sveaflet.png"
            alt="Sveaflet"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>
      )
    },
    {
      id: "manga-view",
      title: "MangaView",
      subtitle: "图片阅读器",
      href: "/project/manga",
      gradient: "from-purple-500 to-pink-600",
      isExternal: false,
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            src="/images/icons/mangaview.png"
            alt="MangaView"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>
      )
    }
  ];

  const ProjectCard = ({ project }: { project: ProjectItem }) => {
    const isHovered = hoveredId === project.id;

    const baseClasses = `
      relative group cursor-pointer overflow-hidden
      w-32 h-32
      transform transition-all duration-300 ease-out
      backdrop-blur-sm
      hover:z-10
      active:scale-95 active:duration-150
    `;

    // iOS风格的圆角
    const cornerRadius = 'rounded-[20px]';
    
    // 阴影效果
    const shadowClass = 'shadow-[0_6px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.4)]';

    const content = (
      <div 
        className={`${baseClasses} ${cornerRadius} ${shadowClass}`}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* 背景渐变 */}
        <div className={`
          absolute inset-0 
          ${project.gradient ? `bg-gradient-to-br ${project.gradient}` : ''}
          ${project.bgColor ? `bg-[${project.bgColor}]` : ''}
          ${!project.gradient && !project.bgColor ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800' : ''}
        `} />
        
        {/* iOS风格的内部高光 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-white/25 via-white/10 to-transparent" />
        
        {/* 底部阴影效果 */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* 内容区域 */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-3">
          {project.icon && (
            <div className="mb-2">
              {project.icon}
            </div>
          )}
          <div className="text-white drop-shadow-md">
            <div className="font-semibold leading-tight text-sm mb-1">
              {project.title}
            </div>
            <div className="text-xs opacity-90 leading-tight">
              {project.subtitle}
            </div>
          </div>
        </div>

        {/* 按压效果的内部阴影 */}
        <div className="absolute inset-0 rounded-[inherit] opacity-0 group-active:opacity-100 bg-black/20 transition-opacity duration-150" />
      </div>
    );

    if (project.isExternal) {
      return (
        <a 
          href={project.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={project.href}>
        {content}
      </Link>
    );
  };

  return (
    <div className="
      flex flex-wrap gap-6 justify-center items-center
      max-w-full
    ">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
