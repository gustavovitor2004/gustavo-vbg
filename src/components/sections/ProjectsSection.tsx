"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import type { ProjectStatus } from "@/data/projects";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const STATUS_STYLE: Record<ProjectStatus, { bg: string; color: string; pulse?: boolean; labelKey: string }> = {
  Online:   { bg: "rgba(16,185,129,0.15)",  color: "#34d399", pulse: true, labelKey: "sites.status.online" },
  WIP:      { bg: "rgba(245,158,11,0.15)",  color: "#fbbf24", labelKey: "sites.status.wip" },
  Beta:     { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa", labelKey: "sites.status.beta" },
  Finished: { bg: "rgba(124,58,237,0.15)",  color: "#a78bfa", labelKey: "sites.status.finished" },
  Archived: { bg: "rgba(107,114,128,0.12)", color: "#9ca3af", labelKey: "sites.status.archived" },
};

const CATEGORY_FILTERS = [
  { id: "all", key: null },
  { id: "restaurant", key: "sites.category.restaurant" },
  { id: "bakery", key: "sites.category.bakery" },
  { id: "petshop", key: "sites.category.petshop" },
  { id: "automotive", key: "sites.category.automotive" },
  { id: "events", key: "sites.category.events" },
] as const;

/**
 * Per-project visual identity:
 *
 *  fallback   → CSS gradient used when the thumbnail image is absent
 *              (matches each brand's colour palette)
 *  overlay    → Semi-transparent gradient OVER the photo for text legibility
 *  accent     → Colour used on the decorative watermark letter
 *
 * To swap in a real screenshot, place the image at the path stored in
 * projects.ts (e.g. /public/projects/costelao.png) and it will appear
 * automatically — the overlay ensures titles stay readable regardless.
 */
const BANNER_DATA: Record<string, { fallback: string; overlay: string; accent: string }> = {
  /* 1 — Steakhouse: deep red, dark brown, warm amber */
  "costelao-do-gaucho": {
    fallback: "linear-gradient(150deg, #5a1212 0%, #3b1a08 50%, #1e0c04 100%)",
    overlay:  "linear-gradient(180deg, rgba(30,8,4,0.18) 0%, rgba(10,4,2,0.62) 100%)",
    accent:   "#C67C0A",
  },
  /* 2 — Bakery: coffee brown, warm beige, golden yellow */
  "cheiro-e-pao": {
    fallback: "linear-gradient(150deg, #6b4417 0%, #44280a 50%, #281605 100%)",
    overlay:  "linear-gradient(180deg, rgba(32,18,6,0.18) 0%, rgba(16,9,3,0.62) 100%)",
    accent:   "#D4A855",
  },
  /* 3 — Pet Shop: sky blue, soft purple, teal */
  "lalay-petshop": {
    fallback: "linear-gradient(150deg, #0e538f 0%, #6d28d9 50%, #0e7490 100%)",
    overlay:  "linear-gradient(180deg, rgba(10,30,80,0.18) 0%, rgba(40,10,80,0.60) 100%)",
    accent:   "#67E8F9",
  },
  /* 4 — Automotive: graphite black, industrial orange */
  "pinheiro-escapamentos": {
    fallback: "linear-gradient(150deg, #18181c 0%, #0d0d12 50%, #2c1800 100%)",
    overlay:  "linear-gradient(180deg, rgba(10,10,12,0.22) 0%, rgba(120,45,0,0.60) 100%)",
    accent:   "#F97316",
  },
  /* 5 — Events venue: forest green, golden, warm wood */
  "casa-da-mangueira": {
    fallback: "linear-gradient(150deg, #0f4d1e 0%, #1e3d10 50%, #3d2c08 100%)",
    overlay:  "linear-gradient(180deg, rgba(8,35,14,0.18) 0%, rgba(40,28,5,0.62) 100%)",
    accent:   "#C8A830",
  },
};

const FALLBACK_BANNER = {
  fallback: "linear-gradient(150deg, rgba(124,58,237,0.6) 0%, rgba(37,99,235,0.4) 100%)",
  overlay:  "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 100%)",
  accent:   "#a78bfa",
};

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
  const { t } = useApp();
  const { isLight, text, surface } = useThemeTokens();

  const textPrimary  = text.primary;
  const textMuted    = text.muted;
  const cardBg       = surface.card;
  const cardBorder   = surface.border;
  const tagBg        = surface.border;
  const tagBorder    = surface.border;
  const tagColor     = text.muted;
  const iconBg       = surface.border;
  const iconBorder   = surface.border;
  const iconColor    = text.faint;
  const hoverBorder  = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.13)";

  const status = STATUS_STYLE[project.status] ?? STATUS_STYLE.Archived;
  const banner = BANNER_DATA[project.id] ?? FALLBACK_BANNER;

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
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          height: "164px",
          /* Brand-identity gradient — visible while image loads or when absent */
          background: banner.fallback,
        }}
      >
        {/*
         * Thumbnail image
         * ─────────────────────────────────────────────────────────────
         * Path format: /projects/<slug>.png  (served from /public/)
         * e.g. /public/projects/costelao.png
         *
         * Replace with a real screenshot or mockup at any time.
         * onError hides the <img> so the gradient fallback shows cleanly.
         */}
        <img
          src={project.thumbnail}
          alt=""
          aria-hidden="true"
          draggable={false}
          loading="lazy"
          decoding="async"
          className="project-thumb"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease",
            opacity: 1,
          }}
          onLoad={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
          onError={(e) => {
            /* Screenshot unavailable → hide and let the identity gradient show */
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Colour-identity overlay for text legibility & brand feel */}
        <div
          className="absolute inset-0"
          style={{ background: banner.overlay }}
        />

        {/* Subtle top vignette — keeps the status badge readable */}
        <div
          className="absolute inset-x-0 top-0"
          style={{ height: "60px", background: "linear-gradient(to bottom, rgba(0,0,0,0.28), transparent)" }}
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
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: `1px solid ${status.color}30`,
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

        {/* Decorative watermark initial */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            bottom: "-22px",
            left: "20px",
            fontSize: "80px",
            fontWeight: 900,
            color: banner.accent,
            opacity: 0.12,
            lineHeight: 1,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.05em",
          }}
        >
          {project.title[0]}
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title */}
        <h3 style={{ fontSize: "15px", fontWeight: 700, color: textPrimary, marginBottom: "8px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
          {project.title}
        </h3>

        {/* Description — 2-line clamp */}
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
          {t(`sites.project.${project.id}.description`)}
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
                el.style.color = text.primary;
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
            <span style={{ fontSize: "11px", color: text.faint, fontStyle: "italic", opacity: 0.7 }}>
              {t("coming.soon")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useApp();
  const { isLight, text } = useThemeTokens();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => {
        const filter = CATEGORY_FILTERS.find((f) => f.id === activeFilter);
        return filter?.key && p.categoryKey === filter.key;
      });

  return (
    <section id="sites" style={{ padding: "100px 0 80px", position: "relative" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
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
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: text.primary, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
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
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeFilter === cat.id;
            const inactiveColor  = text.muted;
            const inactiveBg     = isLight ? "rgba(0,0,0,0.04)"  : "rgba(255,255,255,0.05)";
            const inactiveBorder = isLight ? "rgba(0,0,0,0.08)"  : "rgba(255,255,255,0.08)";
            const hoverBg        = isLight ? "rgba(0,0,0,0.07)"  : "rgba(255,255,255,0.09)";
            const hoverColor     = text.primary;
            const label          = cat.key ? t(cat.key) : t("sites.filter.all");

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
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
                {label}
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
