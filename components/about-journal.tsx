"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-provider";
import {
  DevIcon,
  GithubIcon,
  GmailIcon,
  JianshuIcon,
  JuejinIcon,
  MediumIcon,
  ZhihuIcon,
} from "@/components/icons";

const socialIcons = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/GrayFrost",
    icon: <GithubIcon fill="currentColor" />,
  },
  {
    id: "juejin",
    label: "Juejin",
    url: "https://juejin.cn/user/3350967171680920",
    icon: <JuejinIcon />,
  },
  {
    id: "gmail",
    label: "Email",
    url: "mailto:garyfrost4321@gmail.com",
    icon: <GmailIcon fill="currentColor" />,
  },
  {
    id: "medium",
    label: "Medium",
    url: "https://medium.com/@garyfrost4321",
    icon: <MediumIcon />,
  },
  {
    id: "zhihu",
    label: "Zhihu",
    url: "https://www.zhihu.com/people/zzhui-92",
    icon: <ZhihuIcon />,
  },
  {
    id: "jianshu",
    label: "Jianshu",
    url: "https://www.jianshu.com/u/8e629fd1e3b0",
    icon: <JianshuIcon />,
  },
  {
    id: "devto",
    label: "Dev.to",
    url: "https://dev.to/frost_gary_90f3cf1699bd02",
    icon: <DevIcon />,
  },
];

export function AboutJournal() {
  const { t } = useLanguage();

  return (
    <PageShell
      kicker={t("about.kicker")}
      title={`${t("about.title")} / ${t("about.name")}`}
      description={t("about.description1")}
      meta="ZZH"
      maxWidth="wide"
      aside={
        <div>
          <div className="journal-label">{t("about.connect_title")}</div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {t("about.index_note")}
          </p>
        </div>
      }
    >
      <div className="space-y-6">
        <section className="journal-card p-5 sm:p-6">
          <p className="text-lg leading-8 text-foreground">{t("about.description2")}</p>
        </section>

        <section>
          <div className="journal-label mb-4">{t("about.connect_title")}</div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {socialIcons.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="journal-card surface-link flex min-h-28 flex-col items-center justify-center gap-3 p-4 text-center"
              >
                <span className="flex h-8 w-8 items-center justify-center text-foreground">
                  {social.icon}
                </span>
                <span className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
