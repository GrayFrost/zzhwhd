"use client";

import * as motion from "motion/react-client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function SiteLanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="inline-flex h-10 items-center rounded-md border border-line bg-card/80 p-1">
      <span className="sr-only">{t("footer.language")}</span>
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`h-8 min-w-10 rounded px-2 text-xs font-black transition ${
          locale === "zh"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        }`}
        aria-pressed={locale === "zh"}
      >
        中
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`h-8 min-w-10 rounded px-2 text-xs font-black transition ${
          locale === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}

export function SiteThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-md border border-line bg-card/80" />;
  }

  const isDark = resolvedTheme === "dark";
  const nextMode = isDark ? t("footer.light") : t("footer.dark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-card/80 text-foreground transition hover:border-accent hover:text-accent"
      aria-label={t("footer.toggle_theme", { mode: nextMode })}
    >
      <motion.span
        className="inline-flex"
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
