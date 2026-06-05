"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, translations } from "@/i18n/translations";

type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  theme: Theme;
  toggleTheme: (e: React.MouseEvent) => void;
}

const AppContext = createContext<AppContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  theme: "dark",
  toggleTheme: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const t = (key: string): string =>
    translations[lang][key] ?? translations["en"][key] ?? key;

  const toggleTheme = (e: React.MouseEvent) => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;

    // View Transitions API for circle reveal
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <AppContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
