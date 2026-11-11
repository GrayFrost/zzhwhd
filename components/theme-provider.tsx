"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from "next-themes";
import {
  DEFAULT_PALETTE_ID,
  isThemePaletteId,
  themePalettes,
  THEME_STORAGE_KEY,
  type ResolvedThemeMode,
  type ThemeMode,
  type ThemePaletteId,
} from "@/config/themes";

interface PaletteContextValue {
  mounted: boolean;
  paletteId: ThemePaletteId;
  setPaletteId: (paletteId: ThemePaletteId) => void;
}

const PaletteContext = createContext<PaletteContextValue | undefined>(undefined);

function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [paletteId, setPaletteIdState] = useState<ThemePaletteId>(DEFAULT_PALETTE_ID);

  useEffect(() => {
    const savedPalette = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextPalette = isThemePaletteId(savedPalette)
      ? savedPalette
      : DEFAULT_PALETTE_ID;

    document.documentElement.dataset.palette = nextPalette;
    setPaletteIdState(nextPalette);
    setMounted(true);
  }, []);

  const setPaletteId = useCallback((nextPalette: ThemePaletteId) => {
    const validPalette = isThemePaletteId(nextPalette)
      ? nextPalette
      : DEFAULT_PALETTE_ID;

    document.documentElement.dataset.palette = validPalette;
    window.localStorage.setItem(THEME_STORAGE_KEY, validPalette);
    setPaletteIdState(validPalette);
  }, []);

  const value = useMemo(
    () => ({ mounted, paletteId, setPaletteId }),
    [mounted, paletteId, setPaletteId]
  );

  return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <PaletteProvider>{children}</PaletteProvider>
    </NextThemesProvider>
  );
}

export function useSiteTheme() {
  const paletteContext = useContext(PaletteContext);
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (!paletteContext) {
    throw new Error("useSiteTheme must be used within ThemeProvider");
  }

  const mode: ThemeMode =
    theme === "light" || theme === "dark" || theme === "system" ? theme : "system";
  const resolvedMode: ResolvedThemeMode = resolvedTheme === "dark" ? "dark" : "light";

  return {
    ...paletteContext,
    palettes: themePalettes,
    mode,
    resolvedMode,
    setMode: (nextMode: ThemeMode) => setTheme(nextMode),
  };
}
