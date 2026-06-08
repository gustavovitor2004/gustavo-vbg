"use client";

import { motion, type Variants } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { useApp } from "@/context/AppContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const buttonLabel: Record<string, string> = {
  discord:   "Open Chat",
  youtube:   "Subscribe",
  instagram: "Follow",
  whatsapp:  "Message",
  github:    "Follow",
  twitter:   "Follow",
  twitch:    "Subscribe",
  email:     "Send Email",
};

function SocialCard({ social }: { social: (typeof socials)[0] }) {
  const { theme } = useApp();
  const isLight = theme === "light";

  const textPrimary  = isLight ? "#0a0b1a" : "#ffffff";
  const textUsername = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.38)";
  const textDesc     = isLight ? "rgba(0,0,0,0.38)" : "rgba(255,255,255,0.25)";
  const cardBg       = isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.026)";
  const cardBorder   = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)";
  const hoverBg      = isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.05)";

  const label = buttonLabel[social.id] ?? "Visit";

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={item}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "22px 24px",
        borderRadius: "18px",
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderLeft: `3px solid ${social.color}55`,
        textDecoration: "none",
        cursor: "pointer",
        transition: "background 0.22s, border-color 0.22s, box-shadow 0.22s, transform 0.22s",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{
        y: -4,
        boxShadow: isLight
          ? `0 16px 48px rgba(0,0,0,0.1), 0 0 0 1px ${social.color}20`
          : `0 16px 48px ${social.glowColor}, 0 0 0 1px ${social.color}20`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = hoverBg;
        el.style.borderColor = `${social.color}40`;
        el.style.borderLeftColor = social.color;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = cardBg;
        el.style.borderColor = cardBorder;
        el.style.borderLeftColor = `${social.color}55`;
      }}
    >
      {/* Background color wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 0% 50%, ${social.color}06 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: `${social.color}18`,
          border: `1px solid ${social.color}28`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ color: social.color }}><PlatformIcon id={social.id} size={22} /></span>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "14.5px", fontWeight: 700, color: textPrimary, lineHeight: 1.2, marginBottom: "3px" }}>
          {social.platform}
        </p>
        <p style={{ fontSize: "12px", color: textUsername, marginBottom: "4px", fontWeight: 500 }}>
          {social.username}
        </p>
        <p style={{ fontSize: "11.5px", color: textDesc, lineHeight: 1.4, fontStyle: "italic" }}>
          {social.description}
        </p>
      </div>

      {/* CTA button */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "8px 16px",
          borderRadius: "10px",
          background: `${social.color}18`,
          border: `1px solid ${social.color}30`,
          color: social.color,
          fontSize: "12px",
          fontWeight: 700,
          whiteSpace: "nowrap" as const,
          transition: "background 0.2s",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </motion.a>
  );
}

export default function ConnectSection() {
  const { t, theme } = useApp();
  const isLight = theme === "light";
  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";

  const row1 = socials.slice(0, 3);
  const row2 = socials.slice(3);

  return (
    <section id="connect" style={{ padding: "100px 0 80px", position: "relative" }}>
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#ec4899",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {t("social.label")}
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 900,
              color: textPrimary,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            {t("social.title")}
          </h2>
        </motion.div>

        {/* Row 1 — 3 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ marginBottom: "16px" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {row1.map((s) => (
            <SocialCard key={s.id} social={s} />
          ))}
        </motion.div>

        {/* Row 2 — remaining cards */}
        {row2.length > 0 && (
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${row2.length}, 1fr)`,
              gap: "16px",
            }}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {row2.map((s) => (
              <SocialCard key={s.id} social={s} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
