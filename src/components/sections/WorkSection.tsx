"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

type WorkEntry = {
  n: string;
  titleKey: string;
  typeKey: string;
  year: string;
  url?: string;
  featured?: boolean;
};

const WORK: WorkEntry[] = [
  { n: "01", titleKey: "GridHunter", typeKey: "work.type.saas", year: "2025", url: "https://gridhunter.vercel.app", featured: true },
  { n: "02", titleKey: "Espaço Prime", typeKey: "work.type.landing", year: "2024", url: "https://espacoprime-whatsappgustavo-75998596215.vercel.app" },
  { n: "03", titleKey: "Costelão do Gaúcho", typeKey: "work.type.restaurant", year: "2024", url: "https://costelaodogaucho-whatsappgustavo-75998596215.vercel.app/" },
  { n: "04", titleKey: "Cheiro & Pão", typeKey: "work.type.bakery", year: "2024", url: "https://cheiro-e-pao-whatsappgustavo-75998596215.vercel.app/" },
  { n: "05", titleKey: "Lalay Pet Shop", typeKey: "work.type.petshop", year: "2024", url: "https://lalaypetshop-whatsappgustavo-75998596215.vercel.app/" },
  { n: "06", titleKey: "Pinheiro Escapamentos", typeKey: "work.type.automotive", year: "2024", url: "https://pinheiroescapamentos-whatsappgustavo-75998596215.vercel.app/" },
  { n: "07", titleKey: "Casa da Mangueira Eventos", typeKey: "work.type.events", year: "2024", url: "https://casadamangueiraeventos-whatsappgustavo-75998596215.vercel.app/" },
];

function WorkRow({ entry, i }: { entry: WorkEntry; i: number }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();

  const Row = (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr auto auto 32px",
        alignItems: "center",
        gap: "clamp(8px, 2vw, 24px)",
        padding: "clamp(14px, 2vw, 20px) 0",
        borderBottom: `1px solid ${surface.border}`,
        background: hovered ? (surface.glass ?? "transparent") : "transparent",
        transition: "background 0.15s",
        cursor: entry.url ? "pointer" : "default",
      }}
    >
      {/* Index */}
      <span
        style={{
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          color: hovered ? "var(--accent)" : text.faint,
          transition: "color 0.15s",
          userSelect: "none",
        }}
      >
        {entry.n}
      </span>

      {/* Title + badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
        <span
          style={{
            fontSize: "clamp(13px, 1.4vw, 16px)",
            fontWeight: 500,
            color: hovered ? "var(--text-primary)" : text.secondary,
            transition: "color 0.15s",
            letterSpacing: "-0.01em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {entry.titleKey}
        </span>
        {entry.featured && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              padding: "2px 6px",
              flexShrink: 0,
            }}
          >
            {t("work.featured")}
          </span>
        )}
      </div>

      {/* Type — hidden on small screens */}
      <span
        className="hidden md:block"
        style={{
          fontSize: "12px",
          color: text.faint,
          fontFamily: "'JetBrains Mono', monospace",
          whiteSpace: "nowrap",
          transition: "color 0.15s",
        }}
      >
        {t(entry.typeKey)}
      </span>

      {/* Year */}
      <span
        style={{
          fontSize: "12px",
          color: text.faint,
          fontFamily: "'JetBrains Mono', monospace",
          whiteSpace: "nowrap",
        }}
      >
        {entry.year}
      </span>

      {/* Arrow */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {entry.url && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={hovered ? "var(--accent)" : text.faint}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.15s, transform 0.15s", transform: hovered ? "translate(2px,-2px)" : "none" }}
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        )}
      </div>
    </motion.div>
  );

  if (entry.url) {
    return (
      <a href={entry.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {Row}
      </a>
    );
  }
  return Row;
}

export default function WorkSection() {
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="work"
      style={{
        padding: "clamp(80px, 12vw, 140px) 0",
        borderTop: `1px solid ${surface.border}`,
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 48px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "10px",
            }}
          >
            {t("work.label")}
          </p>
          <div className="flex-col md:flex-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                color: text.primary,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
              }}
            >
              {t("work.heading")}
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: text.muted,
                maxWidth: "340px",
                lineHeight: 1.6,
                textAlign: "right",
              }}
              className="hidden md:block"
            >
              {t("work.description")}
            </p>
          </div>
        </motion.div>

        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr auto auto 32px",
            gap: "clamp(8px, 2vw, 24px)",
            paddingBottom: "12px",
            borderBottom: `1px solid ${surface.border}`,
          }}
        >
          {[t("work.col.index"), t("work.col.project"), t("work.col.type"), t("work.col.year"), ""].map((h, i) => (
            <span
              key={i}
              className={i === 2 ? "hidden md:block" : ""}
              style={{
                fontSize: "9px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: text.faint,
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div>
          {WORK.map((entry, i) => (
            <WorkRow key={entry.n} entry={entry} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
