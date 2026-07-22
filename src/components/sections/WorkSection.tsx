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
  githubUrl?: string;
  featured?: boolean;
};

const WORK: WorkEntry[] = [
  {
    n: "01",
    titleKey: "Dra. Paloma Almeida",
    typeKey: "work.type.legal",
    year: "2025",
    url: "https://advpalmeida.vercel.app",
    githubUrl: "https://github.com/gustavovitor2004/apalomabarros",
  },
];

function WorkRow({ entry, i }: { entry: WorkEntry; i: number }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => entry.url && window.open(entry.url, "_blank", "noopener,noreferrer")}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr auto auto auto",
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

      {/* Icons */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
        {entry.githubUrl && (
          <a
            href={entry.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              color: hovered ? text.primary : text.faint,
              transition: "color 0.15s",
            }}
            aria-label="View on GitHub"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
        {entry.url && (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ display: "flex" }}
            aria-label={`Visit ${entry.titleKey}`}
          >
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
          </a>
        )}
      </div>
    </motion.div>
  );
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
            gridTemplateColumns: "48px 1fr auto auto auto",
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
