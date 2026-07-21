"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

interface WorkEntry {
  index: string;
  title: string;
  type: string;
  year: string;
  url?: string;
  featured?: boolean;
}

const WORK: WorkEntry[] = [
  { index: "01", title: "GridHunter",            type: "SaaS Platform",    year: "2024", url: "https://gridhunter.vercel.app", featured: true },
  { index: "02", title: "Espaço Prime",           type: "Landing Page",     year: "2024", url: "https://espacoprime-whatsappgustavo-75998596215.vercel.app" },
  { index: "03", title: "Costelão do Gaúcho",     type: "Restaurant Site",  year: "2024", url: "https://costelaodogaucho-whatsappgustavo-75998596215.vercel.app" },
  { index: "04", title: "Cheiro & Pão",           type: "Bakery Site",      year: "2024", url: "https://cheiro-e-pao-whatsappgustavo-75998596215.vercel.app" },
  { index: "05", title: "Lalay Pet Shop",         type: "Pet Shop Site",    year: "2024", url: "https://lalaypetshop-whatsappgustavo-75998596215.vercel.app" },
  { index: "06", title: "Pinheiro Escapamentos",  type: "Automotive Site",  year: "2024", url: "https://pinheiroescapamentos-whatsappgustavo-75998596215.vercel.app" },
  { index: "07", title: "Casa da Mangueira",      type: "Events Site",      year: "2024", url: "https://casadamangueiraeventos-whatsappgustavo-75998596215.vercel.app" },
];

function WorkRow({ entry, i }: { entry: WorkEntry; i: number }) {
  const { isLight } = useThemeTokens();
  const [hovered, setHovered] = useState(false);

  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";
  const rowBg  = hovered ? (isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.025)") : "transparent";

  const row = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr auto auto 32px",
        alignItems: "center",
        gap: "24px",
        padding: "22px 0",
        borderBottom: `1px solid ${border}`,
        background: rowBg,
        transition: "background 0.2s",
        cursor: entry.url ? "pointer" : "default",
      }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          color: hovered ? accent : "var(--text-faint)",
          letterSpacing: "0.06em",
          transition: "color 0.2s",
        }}
      >
        {entry.index}
      </span>

      {/* Title */}
      <span
        style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: hovered ? 500 : 400,
          color: hovered ? t1 : "var(--text-secondary, var(--text-primary))",
          letterSpacing: "-0.01em",
          transition: "color 0.2s, font-weight 0.1s",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {entry.title}
        {entry.featured && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: accent,
              border: `1px solid var(--accent-dim)`,
              padding: "2px 7px",
              opacity: 0.9,
            }}
          >
            Featured
          </span>
        )}
      </span>

      {/* Type */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          color: t2,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
        className="hidden md:block"
      >
        {entry.type}
      </span>

      {/* Year */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          color: "var(--text-faint)",
          letterSpacing: "0.06em",
        }}
      >
        {entry.year}
      </span>

      {/* Arrow */}
      <motion.span
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.15 }}
        style={{
          color: hovered ? accent : "var(--text-faint)",
          fontSize: "16px",
          lineHeight: 1,
          transition: "color 0.2s",
        }}
      >
        →
      </motion.span>
    </motion.div>
  );

  if (entry.url) {
    return (
      <a href={entry.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {row}
      </a>
    );
  }
  return row;
}

export default function WorkSection() {
  const { isLight } = useThemeTokens();
  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const border = "var(--card-border)";

  return (
    <section id="work" style={{ padding: "120px 0 80px", background: "var(--page-bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: "12px" }}>
              Selected Work
            </p>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 800,
                color: t1,
                letterSpacing: "-0.035em",
                lineHeight: 1,
              }}
            >
              Projects
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.04em", maxWidth: "280px", lineHeight: 1.6, textAlign: "right" }}>
            Client websites, SaaS products and experiments built from 2023 onwards.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr auto auto 32px",
            alignItems: "center",
            gap: "24px",
            paddingBottom: "12px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)" }}>#</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)" }}>Project</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)" }} className="hidden md:block">Type</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)" }}>Year</span>
          <span />
        </motion.div>

        {/* Rows */}
        <div>
          {WORK.map((entry, i) => (
            <WorkRow key={entry.index} entry={entry} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
