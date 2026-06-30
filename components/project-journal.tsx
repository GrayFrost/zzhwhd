"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-provider";

const projects = [
  {
    id: "sveaflet",
    title: "Sveaflet",
    subtitle: "Leaflet + Svelte",
    descriptionKey: "project.sveaflet_description",
    href: "https://sveaflet.vercel.app",
    isExternal: true,
    iconPath: "/images/icons/sveaflet.png",
    tags: ["Svelte", "Leaflet", "Map"],
  },
  {
    id: "manga-view",
    title: "MangaView",
    subtitleKey: "project.manga_subtitle",
    descriptionKey: "project.manga_description",
    href: "/project/manga",
    isExternal: false,
    iconPath: "/images/icons/mangaview.png",
    tags: ["SwitfUI", "Macbook", "App"],
  },
];

export function ProjectJournal() {
  const { t } = useLanguage();

  return (
    <PageShell
      kicker={t("project.kicker")}
      title={t("project.title")}
      description={t("project.description")}
      meta={String(projects.length)}
      aside={
        <div>
          <div className="journal-label">{t("project.index_note")}</div>
          <div className="mt-4 space-y-2">
            {projects.map((project) => (
              <a key={project.id} href={`#${project.id}`} className="surface-link block text-sm font-bold">
                {project.title}
              </a>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const content = (
            <article id={project.id} className="journal-card surface-link flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-line bg-muted">
                  <Image
                    src={project.iconPath}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-line px-2 py-1 text-xs font-black text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex-1">
                <h2 className="text-3xl font-black text-foreground">{project.title}</h2>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-accent">
                  {project.subtitleKey ? t(project.subtitleKey) : project.subtitle}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {t(project.descriptionKey)}
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-black">
                {t("project.explore")}
                {project.isExternal && <ExternalLink className="h-4 w-4" />}
              </div>
            </article>
          );

          return project.isExternal ? (
            <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <Link key={project.id} href={project.href}>
              {content}
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}
