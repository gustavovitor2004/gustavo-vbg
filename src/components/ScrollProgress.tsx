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
        background: isLight
          ? "linear-gradient(90deg, #059669, #0891b2)"
          : "linear-gradient(90deg, #7c3aed, #67e8f9)",
        zIndex: 99999,
        transition: "width 0.08s linear",
        transformOrigin: "left",
        pointerEvents: "none",
      }}
    />
  );
}
