"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { useApp } from "@/context/AppContext";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const statusConfig: Record<string, { bg: string; color: string; pulse?: boolean; label: string }> = {
  Online:   { bg: "rgba(16,185,129,0.15)",  color: "#34d399", pulse: true, label: "Online" },
  WIP:      { bg: "rgba(245,158,11,0.15)",  color: "#fbbf24", label: "In Progress" },
  Beta:     { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa", label: "Beta" },
  Finished: { bg: "rgba(124,58,237,0.15)",  color: "#a78bfa", label: "Finished" },
  Archived: { bg: "rgba(107,114,128,0.12)", color: "#9ca3af", label: "Archived" },
};

const bannerColors: Record<string, string> = {
  "project-1": "linear-gradient(140deg, rgba(124,58,237,0.7) 0%, rgba(6,182,212,0.45) 100%)",
  "project-2": "linear-gradient(140deg, rgba(37,99,235,0.7) 0%, rgba(124,58,237,0.45) 100%)",
  "project-3": "linear-gradient(140deg, rgba(219,39,119,0.7) 0%, rgba(124,58,237,0.45) 100%)",
  "project-4": "linear-gradient(140deg, rgba(6,182,212,0.7) 0%, rgba(37,99,235,0.45) 100%)",
  "project-5": "linear-gradient(140deg, rgba(5,150,105,0.7) 0%, rgba(6,182,212,0.45) 100%)",
  "project-6": "linear-gradient(140deg, rgba(234,88,12,0.7) 0%, rgba(219,39,119,0.45) 100%)",
};

const fallback = "linear-gradient(140deg, rgba(124,58,237,0.6), rgba(37,99,235,0.4))";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const { t, theme } = useApp();
  const isLight = theme === "light";

  const textPrimary  = isLight ? "#0a0b1a" : "#ffffff";
  const textMuted    = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.38)";
  const cardBg       = isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.025)";
  const cardBorder   = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)";
  const tagBg        = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)";
  const tagBorder    = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.08)";
  const tagColor     = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.42)";
  const iconBg       = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)";
  const iconBorder   = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.09)";
  const iconColor    = isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.55)";
  const hoverBorder  = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.13)";

  const status = statusConfig[project.status] ?? statusConfig.Archived;
  const bg = bannerColors[project.id] ?? fallback;

  return (
    <motion.div
      variants={item}
      className="card-shine group rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${cardBorder}`,
        height: "100%",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
      }}
      whileHover={{
        y: -5,
        boxShadow: isLight
          ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.1)"
          : "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = hoverBorder;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = cardBorder;
      }}
    >
      {/* Banner */}
      <div className="relative shrink-0" style={{ height: "164px", background: bg }}>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(5,8,22,0.25)", mixBlendMode: "multiply" }}
        />

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

        {/* Decorative initial */}
        <div
          className="absolute"
          style={{
            bottom: "-22px",
            left: "20px",
            fontSize: "80px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.05em",
          }}
        >
          {project.title[0]}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title */}
        <h3
          style={{ fontSize: "15px", fontWeight: 700, color: textPrimary, marginBottom: "8px", letterSpacing: "-0.01em", lineHeight: 1.3 }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "12.5px",
            color: textMuted,
            lineHeight: 1.65,
            marginBottom: "14px",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "18px" }}>
          {project.technologies.slice(0, 4).map((tech) => (
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
          {project.technologies.length > 4 && (
            <span
              style={{
                fontSize: "10px",
                padding: "3px 9px",
                borderRadius: "6px",
                background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)",
                color: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.28)",
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t("sites.github")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: iconBg,
                border: `1px solid ${iconBorder}`,
                color: iconColor,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)";
                el.style.color = isLight ? "#0a0b1a" : "#ffffff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = iconBg;
                el.style.color = iconColor;
              }}
            >
              <GithubIcon size={15} />
            </a>
          )}

          {(project.demoUrl || project.docsUrl) && (
            <a
              href={project.demoUrl ?? project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                height: "34px",
                borderRadius: "10px",
                background: "rgba(124,58,237,0.14)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#a78bfa",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(124,58,237,0.24)";
                el.style.color = "#c4b5fd";
                el.style.boxShadow = "0 0 18px rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(124,58,237,0.14)";
                el.style.color = "#a78bfa";
                el.style.boxShadow = "none";
              }}
            >
              {project.demoUrl ? t("sites.btn") : t("sites.docs")}
              <ExternalIcon size={12} />
            </a>
          )}

          {!project.githubUrl && !project.demoUrl && !project.docsUrl && (
            <span style={{ fontSize: "11px", color: isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
              {t("coming.soon")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const CATEGORIES = ["All", "Restaurant", "Bakery", "Pet Shop", "Automotive", "Events"];

export default function ProjectsSection() {
  const { t, theme } = useApp();
  const isLight = theme === "light";
  const [activeFilter, setActiveFilter] = useState("All");

  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="sites" style={{ padding: "100px 0 80px", position: "relative" }}>
      {/* Subtle section bg tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
              {t("sites.label")}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: textPrimary, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              {t("sites.title")}
            </h2>
          </div>
          <a
            href="https://github.com/gustavovitor2004"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 600,
              color: isLight ? "rgba(124,58,237,0.7)" : "rgba(167,139,250,0.75)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isLight ? "#7c3aed" : "#a78bfa"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isLight ? "rgba(124,58,237,0.7)" : "rgba(167,139,250,0.75)"; }}
          >
            {t("sites.github")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            const inactiveColor   = isLight ? "rgba(0,0,0,0.45)"  : "rgba(255,255,255,0.45)";
            const inactiveBg      = isLight ? "rgba(0,0,0,0.04)"  : "rgba(255,255,255,0.05)";
            const inactiveBorder  = isLight ? "rgba(0,0,0,0.08)"  : "rgba(255,255,255,0.08)";
            const hoverColor      = isLight ? "rgba(0,0,0,0.7)"   : "rgba(255,255,255,0.75)";
            const hoverBg         = isLight ? "rgba(0,0,0,0.07)"  : "rgba(255,255,255,0.09)";

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#fff" : inactiveColor,
                  background: isActive ? "rgba(124,58,237,0.22)" : inactiveBg,
                  border: isActive ? "1px solid rgba(124,58,237,0.45)" : `1px solid ${inactiveBorder}`,
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = hoverBg;
                    (e.currentTarget as HTMLButtonElement).style.color = hoverColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = inactiveBg;
                    (e.currentTarget as HTMLButtonElement).style.color = inactiveColor;
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={item} initial="hidden" animate="show">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
