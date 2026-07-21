"use client";

import { useEffect, useState } from "react";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const { isLight } = useThemeTokens();

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const h = el.scrollHeight - el.clientHeight;
      setPct(h > 0 ? (top / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (pct <= 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${pct}%`,
        background: "var(--accent)",
        zIndex: 99999,
        transition: "width 0.08s linear",
        transformOrigin: "left",
        pointerEvents: "none",
      }}
    />
  );
}
