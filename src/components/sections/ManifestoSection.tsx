"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { projects } from "@/data/projects";

const TECH = [
  "Next.js", "TypeScript", "React", "Node.js",
  "TailwindCSS", "Framer Motion", "Vercel", "Git",
  "HTML5 & CSS3", "Python", "JavaScript",
];

export default function ManifestoSection() {
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="about"
      style={{
        background: "var(--hero-bg)",
        borderTop: `1px solid ${surface.border}`,
        borderBottom: `1px solid ${surface.border}`,
        padding: "clamp(80px, 12vw, 140px) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 48px)",
        }}
      >
        <div
          className="flex-col md:flex-row"
          style={{
            display: "flex",
            gap: "clamp(48px, 8vw, 96px)",
            alignItems: "flex-start",
          }}
        >
          {/* Left column */}
          <div style={{ flex: "1 1 55%" }}>
            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              style={{
                fontSize: "10px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "clamp(24px, 4vw, 36px)",
              }}
            >
              {t("about.section.label")}
            </motion.p>

            {/* Statement */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" as const }}
              style={{ marginBottom: "clamp(24px, 4vw, 36px)" }}
            >
              <p
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  color: text.primary,
                  marginBottom: "4px",
                }}
              >
                {t("about.section.s1")}
              </p>
              <p
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  color: text.muted,
                }}
              >
                {t("about.section.s2")}
              </p>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: text.muted,
                  lineHeight: 1.75,
                  marginBottom: "16px",
                  maxWidth: "520px",
                }}
              >
                {t("about.section.p1")}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: text.muted,
                  lineHeight: 1.75,
                  marginBottom: "24px",
                  maxWidth: "520px",
                }}
              >
                {t("about.section.p2")}
              </p>
              <Link
                href="/now"
                className="arrow-link"
                style={{ color: text.muted }}
              >
                {t("about.section.nowLink")}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right column */}
          <div style={{ flex: "1 1 40%" }}>
            {/* Stats */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" as const }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1px",
                background: surface.border,
                marginBottom: "clamp(32px, 5vw, 48px)",
              }}
            >
              {[
                { num: `${projects.length}+`, labelKey: "about.section.statSites" },
                { num: "2+", labelKey: "about.section.statYears" },
                { num: "1", labelKey: "about.section.statVibe" },
              ].map(({ num, labelKey }) => (
                <div
                  key={labelKey}
                  style={{
                    background: "var(--card-bg)",
                    padding: "clamp(16px, 3vw, 24px) clamp(12px, 2vw, 20px)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 800,
                      color: text.primary,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {num}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: text.faint,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {t(labelKey)}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Stack label */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" as const }}
            >
              <p
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: text.faint,
                  marginBottom: "14px",
                }}
              >
                {t("about.section.stackLabel")}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {TECH.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: text.muted,
                      padding: "4px 10px",
                      border: `1px solid ${surface.border}`,
                      transition: "color 0.15s, border-color 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.color = "var(--accent)";
                      el.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.color = text.muted;
                      el.style.borderColor = surface.border;
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
