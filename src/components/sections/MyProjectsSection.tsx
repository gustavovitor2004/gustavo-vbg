"use client";

import { motion, type Variants } from "framer-motion";
import { apps } from "@/data/apps";
import { useApp } from "@/context/AppContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const statusConfig: Record<string, { bg: string; color: string; pulse?: boolean; label: string }> = {
  Online: { bg: "rgba(16,185,129,0.15)", color: "#34d399", pulse: true, label: "Live" },
  Beta:   { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa", label: "Beta" },
  WIP:    { bg: "rgba(245,158,11,0.15)",  color: "#fbbf24", label: "In Progress" },
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
  const { t, theme } = useApp();
  const isLight = theme === "light";

  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";
  const textMuted   = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.38)";
  const cardBg      = isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.025)";
  const cardBorder  = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)";
  const tagBg       = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)";
  const tagBorder   = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.08)";
  const tagColor    = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.42)";

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
            const status = statusConfig[app.status] ?? statusConfig.WIP;
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
                    ? `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px ${app.accentColor}22`
                    : `0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px ${app.accentColor}22`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${app.accentColor}33`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = cardBorder;
                }}
              >
                {/* Banner */}
                <div
                  className="relative shrink-0"
                  style={{ height: "164px", background: app.gradient, overflow: "hidden" }}
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
                    {status.label}
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
                    background: `${app.accentColor}18`,
                    border: `1px solid ${app.accentColor}30`,
                    color: app.accentColor,
                    marginBottom: "10px",
                  }}>
                    {app.tagline}
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
                    {app.description}
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
                      background: `${app.accentColor}18`,
                      border: `1px solid ${app.accentColor}30`,
                      color: app.accentColor,
                      fontSize: "13px",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = `${app.accentColor}2e`;
                      el.style.boxShadow = `0 0 22px ${app.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = `${app.accentColor}18`;
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
