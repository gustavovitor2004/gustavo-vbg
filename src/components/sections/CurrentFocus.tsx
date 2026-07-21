"use client";

import { motion, type Variants } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

interface FocusCard {
  label: string;
  title: string;
  desc: string;
  accent: string;
  glow: string;
  icon: string;
  link?: string;
  badge?: string;
}

const FOCUS: FocusCard[] = [
  {
    label: "Building",
    title: "GridHunter",
    desc: "Full SaaS platform — automation, analytics and seamless UX. From idea to production, independently.",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.35)",
    icon: "⚙",
    link: "https://gridhunter.vercel.app",
    badge: "In Progress",
  },
  {
    label: "Learning",
    title: "TypeScript Patterns",
    desc: "Type-level programming, conditional types and system architecture for scalable codebases.",
    accent: "#0891b2",
    glow: "rgba(8,145,178,0.35)",
    icon: "◈",
  },
  {
    label: "Based in",
    title: "Bahia, Brazil",
    desc: "GMT-3 · Available for remote work worldwide. Freelancing and building products for global clients.",
    accent: "#059669",
    glow: "rgba(5,150,105,0.35)",
    icon: "◎",
  },
];

function FocusItem({ card }: { card: FocusCard }) {
  const { isLight, text, surface } = useThemeTokens();

  const accent = isLight && card.accent === "#7c3aed" ? "#059669" : card.accent;
  const glow   = isLight && card.accent === "#7c3aed" ? "rgba(5,150,105,0.32)" : card.glow;

  return (
    <motion.div
      variants={item}
      style={{
        position: "relative",
        padding: "28px 28px 24px",
        borderRadius: "16px",
        background: surface.card,
        border: `1px solid ${surface.border}`,
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      whileHover={{
        y: -3,
        boxShadow: isLight
          ? `0 12px 40px rgba(0,0,0,0.09), 0 0 0 1px ${accent}20`
          : `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${accent}20`,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}35`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = surface.border; }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: glow,
          filter: "blur(40px)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <p
        style={{
          fontSize: "10px",
          fontWeight: 700,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: "14px",
        }}
      >
        {card.label}
      </p>

      {/* Icon + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: `${accent}15`,
            border: `1px solid ${accent}28`,
            fontSize: "17px",
            color: accent,
            flexShrink: 0,
          }}
        >
          {card.icon}
        </span>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: text.primary,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {card.title}
        </h3>
        {card.badge && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "9px",
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: "9999px",
              background: "rgba(16,185,129,0.13)",
              color: "#34d399",
              border: "1px solid rgba(16,185,129,0.25)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{ display: "block", width: "5px", height: "5px", borderRadius: "50%", background: "#34d399" }}
              className="animate-pulse"
            />
            {card.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: "12.5px", color: text.muted, lineHeight: 1.7, marginBottom: card.link ? "16px" : 0 }}>
        {card.desc}
      </p>

      {/* Optional link */}
      {card.link && (
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "11.5px",
            fontWeight: 600,
            color: accent,
            textDecoration: "none",
            transition: "opacity 0.18s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          Open project
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export default function CurrentFocus() {
  const { isLight, text } = useThemeTokens();
  const accent = isLight ? "#047857" : "#7c3aed";

  return (
    <section style={{ padding: "80px 0 80px", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "40px" }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, color: accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
            Right now
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: text.primary, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            Current Focus
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FOCUS.map((card) => (
            <FocusItem key={card.label} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
