"use client";

import { Check, Monitor, Moon, Palette, Sun } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { useSiteTheme } from "@/components/theme-provider";
import type { ThemeMode } from "@/config/themes";

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
  const { t } = useLanguage();
  const {
    mounted,
    mode,
    paletteId,
    palettes,
    resolvedMode,
    setMode,
    setPaletteId,
  } = useSiteTheme();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modeOptions: Array<{
    id: ThemeMode;
    icon: typeof Sun;
    label: string;
  }> = [
    { id: "light", icon: Sun, label: t("theme.light") },
    { id: "dark", icon: Moon, label: t("theme.dark") },
    { id: "system", icon: Monitor, label: t("theme.system") },
  ];

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-card/80 text-foreground transition hover:border-accent hover:text-accent"
        aria-label={t("theme.open")}
        aria-haspopup="dialog"
        aria-expanded={mounted && isOpen}
        aria-controls={panelId}
      >
        <Palette className="h-5 w-5" aria-hidden="true" />
      </button>

      {mounted && isOpen && (
        <div
          id={panelId}
          role="dialog"
          aria-label={t("theme.title")}
          className="absolute right-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-line bg-card p-4 text-card-foreground shadow-card"
        >
          <div className="border-b border-line pb-3">
            <div className="journal-label">{t("theme.title")}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t("theme.description")}</p>
          </div>

          <fieldset className="mt-4">
            <legend className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
              {t("theme.palette")}
            </legend>
            <div className="mt-2 space-y-2">
              {palettes.map((palette) => {
                const isSelected = palette.id === paletteId;
                const previewTokens = palette[resolvedMode];

                return (
                  <button
                    key={palette.id}
                    type="button"
                    onClick={() => setPaletteId(palette.id)}
                    className={`w-full rounded-md border p-3 text-left transition ${
                      isSelected
                        ? "border-accent bg-accent/10"
                        : "border-line bg-background/40 hover:border-accent"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-black">{t(palette.labelKey)}</span>
                      {isSelected && <Check className="h-4 w-4 text-accent" aria-hidden="true" />}
                    </span>
                    <span
                      className="mt-3 flex h-7 overflow-hidden rounded border border-line"
                      aria-hidden="true"
                    >
                      {palette.preview.map((token, index) => (
                        <span
                          key={token}
                          className={index === 0 || index === 1 ? "flex-[1.4]" : "flex-1"}
                          style={{ backgroundColor: previewTokens[token] }}
                        />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-4">
            <legend className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
              {t("theme.mode")}
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {modeOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = mode === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setMode(option.id)}
                    className={`inline-flex min-h-16 flex-col items-center justify-center gap-1 rounded-md border px-2 py-2 text-xs font-bold transition ${
                      isSelected
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-line bg-background/40 text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
}
