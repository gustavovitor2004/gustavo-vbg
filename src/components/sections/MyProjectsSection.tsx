"use client";

import { motion, type Variants } from "framer-motion";
import { apps } from "@/data/apps";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const STATUS_STYLE: Record<string, { bg: string; color: string; pulse?: boolean; labelKey: string }> = {
  Online: { bg: "rgba(16,185,129,0.15)", color: "#34d399", pulse: true, labelKey: "projects.status.live" },
  Beta:   { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa", labelKey: "projects.status.beta" },
  WIP:    { bg: "rgba(245,158,11,0.15)",  color: "#fbbf24", labelKey: "projects.status.wip" },
};

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function MyProjectsSection() {
  const { t } = useApp();
  const { isLight, text, surface } = useThemeTokens();

  const textPrimary = text.primary;
  const textMuted = text.muted;
  const cardBg = surface.card;
  const cardBorder = surface.border;
  const tagBg = surface.border;
  const tagBorder = surface.border;
  const tagColor = text.muted;

  return (
    <section id="projects" style={{ padding: "100px 0 80px", position: "relative" }}>
      {/* Background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}
        >
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#06b6d4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
              {t("projects.label")}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: textPrimary, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              {t("projects.title")}
            </h2>
          </div>
        </motion.div>

        {/* App cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {apps.map((app) => {
            const status = STATUS_STYLE[app.status] ?? STATUS_STYLE.WIP;
            const taglineKey = `projects.app.${app.id}.tagline`;
            const descKey = `projects.app.${app.id}.description`;
            const tagline = t(taglineKey) === taglineKey ? app.tagline : t(taglineKey);
            const description = t(descKey) === descKey ? app.description : t(descKey);

            // Light mode: remap purple → emerald for accent/gradient/glow
            const isPurple = app.accentColor === "#7c3aed";
            const accent   = isLight && isPurple ? "#059669"                    : app.accentColor;
            const glow     = isLight && isPurple ? "rgba(5,150,105,0.38)"       : app.glowColor;
            const gradient = isLight && isPurple
              ? "linear-gradient(140deg, rgba(5,150,105,0.70) 0%, rgba(6,182,212,0.50) 100%)"
              : app.gradient;

            return (
              <motion.div
                key={app.id}
                variants={item}
                className="card-shine group rounded-2xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  height: "100%",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: isLight
                    ? `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px ${accent}22`
                    : `0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px ${accent}22`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}33`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = cardBorder;
                }}
              >
                {/* Banner */}
                <div
                  className="relative shrink-0"
                  style={{ height: "164px", background: gradient, overflow: "hidden" }}
                >
                  {/* Status badge */}
                  <span
                    className="absolute top-3 right-3 flex items-center gap-1.5 font-bold tracking-wide"
                    style={{
                      fontSize: "8.5px",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      background: status.bg,
                      color: status.color,
                      textTransform: "uppercase",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {status.pulse && (
                      <span
                        className="animate-pulse shrink-0"
                        style={{ display: "block", width: "5px", height: "5px", borderRadius: "50%", background: status.color }}
                      />
                    )}
                    {t(status.labelKey)}
                  </span>

                  {/* Emoji */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "56px",
                      opacity: 0.55,
                      userSelect: "none",
                    }}
                  >
                    {app.emoji}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Tagline chip */}
                  <span style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    background: `${accent}18`,
                    border: `1px solid ${accent}30`,
                    color: accent,
                    marginBottom: "10px",
                  }}>
                    {tagline}
                  </span>

                  {/* Title */}
                  <h3
                    style={{ fontSize: "16px", fontWeight: 700, color: textPrimary, marginBottom: "8px", letterSpacing: "-0.01em", lineHeight: 1.3 }}
                  >
                    {app.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: textMuted,
                      lineHeight: 1.65,
                      marginBottom: "14px",
                      flex: 1,
                    }}
                  >
                    {description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "18px" }}>
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "10px",
                          padding: "3px 9px",
                          borderRadius: "6px",
                          background: tagBg,
                          border: `1px solid ${tagBorder}`,
                          color: tagColor,
                          fontWeight: 500,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      height: "38px",
                      borderRadius: "11px",
                      background: `${accent}18`,
                      border: `1px solid ${accent}30`,
                      color: accent,
                      fontSize: "13px",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = `${accent}2e`;
                      el.style.boxShadow = `0 0 22px ${glow}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = `${accent}18`;
                      el.style.boxShadow = "none";
                    }}
                  >
                    {t("projects.btn")}
                    <ExternalIcon />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
