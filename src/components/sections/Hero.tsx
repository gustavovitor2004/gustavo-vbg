"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const ease = "easeOut" as const;

export default function Hero() {
  const { isLight } = useThemeTokens();
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) yearRef.current.textContent = String(new Date().getFullYear());
  }, []);

  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        background: isLight ? "var(--hero-bg)" : "#090909",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle noise texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")"
            : "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
          pointerEvents: "none",
        }}
      />

      {/* TOP ROW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "80px 48px 0",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: t2, textTransform: "uppercase" }}>
            Portfolio
          </span>
          <span ref={yearRef} style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.06em" }}>
            2025
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="pulse-dot" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: accent, textTransform: "uppercase" }}>
            Available for work
          </span>
        </div>
      </motion.div>

      {/* CENTER — massive editorial type */}
      <div
        style={{
          padding: "0 40px",
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* GUSTAVO — ultralight */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(64px, 14.5vw, 200px)",
            fontWeight: 100,
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
            color: t1,
            userSelect: "none",
            margin: 0,
          }}
        >
          GUSTAVO
        </motion.h1>

        {/* GOMES + role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.48, ease }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(64px, 14.5vw, 200px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: accent,
              userSelect: "none",
            }}
          >
            GOMES
          </span>

          <div style={{ paddingBottom: "clamp(8px, 1.5vw, 20px)", paddingRight: "8px", textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(10px, 1.1vw, 14px)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: t2,
                textTransform: "uppercase",
                lineHeight: 1.6,
              }}
            >
              Full-Stack<br />Developer
            </p>
          </div>
        </motion.div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          style={{ height: "1px", background: border, marginTop: "clamp(24px, 4vw, 48px)", transformOrigin: "left" }}
        />

        {/* Tagline row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(14px, 1.6vw, 20px)",
              fontWeight: 300,
              color: t2,
              letterSpacing: "-0.01em",
              lineHeight: 1.5,
              maxWidth: "540px",
            }}
          >
            Building digital products that matter.
            <br />
            <span style={{ color: "var(--text-faint)" }}>From architecture to deployment, independently.</span>
          </p>

          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <a
              href="#work"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: t1,
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: `1px solid ${border}`,
                paddingBottom: "3px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = accent; el.style.color = accent; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = border; el.style.color = t1; }}
            >
              View Work
            </a>
            <a
              href="https://wa.me/5575998596215"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: t2,
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t1; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t2; }}
            >
              WhatsApp ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0 48px 36px",
        }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em" }}>
          Bahia · Brazil · GMT-3
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--text-faint)", fontSize: "12px", lineHeight: 1 }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
