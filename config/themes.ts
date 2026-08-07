export const THEME_STORAGE_KEY = "palette";
export const DEFAULT_PALETTE_ID = "original";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedThemeMode = Exclude<ThemeMode, "system">;

export interface ThemeTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  line: string;
}

export type ThemePreviewToken = keyof Pick<
  ThemeTokens,
  | "background"
  | "foreground"
  | "card"
  | "muted"
  | "accent"
  | "accentForeground"
>;

export interface ThemePalette {
  id: string;
  labelKey: string;
  preview: readonly ThemePreviewToken[];
  light: ThemeTokens;
  dark: ThemeTokens;
}

export const themePalettes = [
  {
    id: "original",
    labelKey: "theme.original",
    preview: ["background", "card", "muted", "foreground", "accent"],
    light: {
      background: "#f4f1e8",
      foreground: "#202124",
      card: "#fbfaf5",
      cardForeground: "#202124",
      muted: "#e3e0d8",
      mutedForeground: "#68665f",
      accent: "#d7a92f",
      accentForeground: "#202124",
      line: "rgba(32, 33, 36, 0.14)",
    },
    dark: {
      background: "#202124",
      foreground: "#f4f1e8",
      card: "#292a2c",
      cardForeground: "#f4f1e8",
      muted: "#37383a",
      mutedForeground: "#bbb6aa",
      accent: "#d7a92f",
      accentForeground: "#202124",
      line: "rgba(244, 241, 232, 0.16)",
    },
  },
  {
    id: "american-retro",
    labelKey: "theme.american_retro",
    preview: ["background", "card", "muted", "foreground", "accent"],
    light: {
      background: "#f7f3e6",
      foreground: "#285a71",
      card: "#fbf8ef",
      cardForeground: "#285a71",
      muted: "#e8cfa9",
      mutedForeground: "#425e6a",
      accent: "#cfda5a",
      accentForeground: "#183b4b",
      line: "rgba(40, 90, 113, 0.18)",
    },
    dark: {
      background: "#183b4b",
      foreground: "#fce4c0",
      card: "#285a71",
      cardForeground: "#fce4c0",
      muted: "#214c5e",
      mutedForeground: "#d8c7ab",
      accent: "#cfda5a",
      accentForeground: "#183b4b",
      line: "rgba(252, 228, 192, 0.18)",
    },
  },
  {
    id: "venice-blue",
    labelKey: "theme.venice_blue",
    preview: ["background", "card", "muted", "foreground", "accent"],
    light: {
      background: "#f5eedd",
      foreground: "#16587b",
      card: "#fbf8ef",
      cardForeground: "#16587b",
      muted: "#d8e5eb",
      mutedForeground: "#3f6377",
      accent: "#84b3ce",
      accentForeground: "#103f59",
      line: "rgba(22, 88, 123, 0.18)",
    },
    dark: {
      background: "#0f3f59",
      foreground: "#f5eedd",
      card: "#16587b",
      cardForeground: "#f5eedd",
      muted: "#245f7e",
      mutedForeground: "#c7d8de",
      accent: "#84b3ce",
      accentForeground: "#0f3f59",
      line: "rgba(245, 238, 221, 0.18)",
    },
  },
  {
    id: "taro-pudding",
    labelKey: "theme.taro_pudding",
    preview: ["background", "card", "muted", "foreground", "accent"],
    light: {
      background: "#fcfbf7",
      foreground: "#4b4052",
      card: "#faeecd",
      cardForeground: "#4b4052",
      muted: "#ede8ed",
      mutedForeground: "#71657a",
      accent: "#c3b3d4",
      accentForeground: "#352d3c",
      line: "#dacadd",
    },
    dark: {
      background: "#2f2835",
      foreground: "#faeecd",
      card: "#3a3141",
      cardForeground: "#f5f0f5",
      muted: "#4b3f53",
      mutedForeground: "#d9ccde",
      accent: "#c3b3d4",
      accentForeground: "#2f2835",
      line: "rgba(218, 202, 221, 0.24)",
    },
  },
  {
    id: "midnight-plum",
    labelKey: "theme.midnight_plum",
    preview: ["card", "muted", "accent", "foreground", "accentForeground"],
    light: {
      background: "#fffaf7",
      foreground: "#773344",
      card: "#f5e9e2",
      cardForeground: "#773344",
      muted: "#e3b5a4",
      mutedForeground: "#773344",
      accent: "#d44d5c",
      accentForeground: "#160029",
      line: "rgba(119, 51, 68, 0.22)",
    },
    dark: {
      background: "#160029",
      foreground: "#f5e9e2",
      card: "#2b0c35",
      cardForeground: "#f5e9e2",
      muted: "#773344",
      mutedForeground: "#e3b5a4",
      accent: "#d44d5c",
      accentForeground: "#160029",
      line: "rgba(227, 181, 164, 0.24)",
    },
  },
] as const satisfies readonly ThemePalette[];

export type ThemePaletteId = (typeof themePalettes)[number]["id"];

const tokenCssNames: Record<keyof ThemeTokens, string> = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  line: "--line",
};

export function isThemePaletteId(value: unknown): value is ThemePaletteId {
  return themePalettes.some((palette) => palette.id === value);
}

function tokensToCss(tokens: ThemeTokens) {
  return Object.entries(tokenCssNames)
    .map(([token, cssName]) => `  ${cssName}: ${tokens[token as keyof ThemeTokens]};`)
    .join("\n");
}

export function buildThemePaletteCss() {
  return themePalettes
    .flatMap((palette) => [
      `html[data-palette="${palette.id}"] {\n${tokensToCss(palette.light)}\n}`,
      `html[data-palette="${palette.id}"].dark {\n${tokensToCss(palette.dark)}\n}`,
    ])
    .join("\n\n");
}

export function buildThemePaletteBootScript() {
  const paletteIds = JSON.stringify(themePalettes.map((palette) => palette.id));
  const storageKey = JSON.stringify(THEME_STORAGE_KEY);
  const fallback = JSON.stringify(DEFAULT_PALETTE_ID);

  return `(function(){try{var ids=${paletteIds};var saved=localStorage.getItem(${storageKey});document.documentElement.dataset.palette=ids.indexOf(saved)>-1?saved:${fallback};}catch(e){document.documentElement.dataset.palette=${fallback};}})();`;
}
