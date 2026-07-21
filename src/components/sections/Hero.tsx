"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const TICKER_ITEMS = [
  "GridHunter",
  "Espaço Prime",
  "Costelão do Gaúcho",
  "Cheiro & Pão",
  "Lalay Pet Shop",
  "Pinheiro Escapamentos",
  "Casa da Mangueira",
];

const tickerText = TICKER_ITEMS.map((n) => `${n}  ·  `).join("") + TICKER_ITEMS.map((n) => `${n}  ·  `).join("");

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { t } = useApp();
  const { isLight, text } = useThemeTokens();
  const shouldReduce = useReducedMotion();
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        background: "var(--hero-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric warm gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(139,90,39,0.06), transparent)"
            : "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(200,147,90,0.05), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLight ? 0.025 : 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "192px 192px",
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Inner layout */}
      <div
        style={{
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Top bar */}
        <motion.div
          custom={0}
          variants={FADE_UP}
          initial={shouldReduce ? "visible" : "hidden"}
          animate="visible"
          style={{
            paddingTop: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: text.faint,
            }}
          >
            {t("hero.portfolio")} · <span ref={yearRef} />
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="pulse-dot" aria-hidden="true" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              {t("hero.available")}
            </span>
          </div>
        </motion.div>

        {/* Main name block */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "clamp(40px, 6vw, 64px)" }}>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              custom={1}
              variants={FADE_UP}
              initial={shouldReduce ? "visible" : "hidden"}
              animate="visible"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(4.5rem, 16vw, 14rem)",
                fontWeight: 100,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: text.primary,
                marginBottom: 0,
              }}
            >
              GUSTAVO
            </motion.h1>
          </div>

          {/* GOMES row with role label */}
          <div style={{ overflow: "hidden", position: "relative" }}>
            <motion.div
              custom={2}
              variants={FADE_UP}
              initial={shouldReduce ? "visible" : "hidden"}
              animate="visible"
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "8px 24px" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(4.5rem, 16vw, 14rem)",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "var(--accent)",
                  display: "block",
                }}
              >
                GOMES
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(10px, 1.2vw, 14px)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: text.muted,
                  paddingBottom: "clamp(6px, 1vw, 16px)",
                  whiteSpace: "nowrap",
                }}
              >
                Full-Stack Developer
              </span>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            custom={3}
            variants={FADE_UP}
            initial={shouldReduce ? "visible" : "hidden"}
            animate="visible"
            style={{ marginTop: "clamp(24px, 4vw, 40px)", marginBottom: "clamp(20px, 3vw, 32px)" }}
          >
            <div style={{ height: "1px", background: "var(--card-border)", width: "100%" }} />
          </motion.div>

          {/* Tagline + CTAs */}
          <motion.div
            custom={4}
            variants={FADE_UP}
            initial={shouldReduce ? "visible" : "hidden"}
            animate="visible"
            className="flex-col md:flex-row"
            style={{ display: "flex", gap: "clamp(20px, 4vw, 48px)", alignItems: "flex-start" }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "clamp(13px, 1.6vw, 17px)",
                  color: text.primary,
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                  marginBottom: "4px",
                }}
              >
                {t("hero.tagline1")}
              </p>
              <p
                style={{
                  fontSize: "clamp(12px, 1.4vw, 15px)",
                  color: text.muted,
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                {t("hero.tagline2")}
              </p>
            </div>

            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexShrink: 0 }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: text.primary,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  paddingBottom: "2px",
                  borderBottom: "1px solid var(--card-border)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderBottomColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderBottomColor = "var(--card-border)";
                  el.style.color = text.primary;
                }}
              >
                {t("hero.viewWork")}
              </a>
              <a
                href="https://wa.me/5575998596215"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: text.muted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = text.primary; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = text.muted; }}
              >
                WhatsApp ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          custom={5}
          variants={FADE_UP}
          initial={shouldReduce ? "visible" : "hidden"}
          animate="visible"
          style={{
            paddingBottom: "clamp(24px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "clamp(32px, 5vw, 56px)",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: text.faint,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
            }}
          >
            {t("hero.location")}
          </span>

          {/* Film-strip ticker */}
          <div
            style={{
              overflow: "hidden",
              maxWidth: "clamp(160px, 40vw, 400px)",
              maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            }}
            aria-hidden="true"
          >
            <span
              className="ticker-track"
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: text.faint,
                textTransform: "uppercase",
              }}
            >
              {tickerText}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
