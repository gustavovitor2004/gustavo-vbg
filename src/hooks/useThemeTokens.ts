"use client";

import { useApp } from "@/context/AppContext";

export function useThemeTokens() {
  const { theme } = useApp();
  const isLight = theme === "light";

  return {
    isLight,
    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      muted: "var(--text-muted)",
      faint: "var(--text-faint)",
      onAccent: "var(--text-on-accent)",
    },
    surface: {
      page: "var(--page-bg)",
      hero: "var(--hero-bg)",
      card: "var(--card-bg)",
      border: "var(--card-border)",
      glass: "var(--glass-bg)",
      glassBorder: "var(--glass-border)",
    },
  };
}
