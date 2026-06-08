"use client";

import { motion, type Variants } from "framer-motion";
import { discordServers } from "@/data/servers";
import { useApp } from "@/context/AppContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" as const } },
};

const serverIconMap: Record<string, string> = {
  trophi: "✦",
};

function ServerCard({ server }: { server: (typeof discordServers)[0] }) {
  const { t, theme } = useApp();
  const isLight = theme === "light";

  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";
  const textMuted   = isLight ? "rgba(0,0,0,0.5)"  : "rgba(255,255,255,0.35)";
  const textDesc    = isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.36)";
  const cardBg      = isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.026)";
  const cardBorder  = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)";

  const iconText = serverIconMap[server.id] ?? server.name[0];
  const smallFont = iconText.length > 2;

  return (
    <motion.div
      variants={item}
      className="card-shine group"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        overflow: "hidden",
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
      }}
      whileHover={{
        y: -4,
        boxShadow: isLight
          ? `0 16px 50px rgba(0,0,0,0.12), 0 0 0 1px ${server.color}22`
          : `0 16px 50px rgba(0,0,0,0.5), 0 0 0 1px ${server.color}22`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${server.color}30`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = cardBorder;
      }}
    >
      {/* Top color strip */}
      <div style={{ height: "3px", background: server.color, opacity: 0.65 }} />

      <div style={{ padding: "22px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
          {/* Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: server.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: smallFont ? "11px" : "22px",
              fontWeight: 900,
              color: "#ffffff",
              flexShrink: 0,
              boxShadow: `0 4px 16px ${server.glowColor}`,
              fontFamily: smallFont ? "'JetBrains Mono', monospace" : "inherit",
            }}
          >
            {iconText}
          </div>

          {/* Name + member count */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: textPrimary,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}
            >
              {server.name}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  display: "block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
                className="animate-pulse"
              />
              <span style={{ fontSize: "12px", color: textMuted, fontWeight: 500 }}>
                {server.memberCount} {t("servers.members")}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "12.5px",
            color: textDesc,
            lineHeight: 1.65,
            marginBottom: "18px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {server.description}
        </p>

        {/* Join button */}
        <a
          href={server.inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
            width: "100%",
            padding: "11px 0",
            borderRadius: "11px",
            background: `${server.color}1a`,
            border: `1px solid ${server.color}30`,
            color: server.color,
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = `${server.color}28`;
            el.style.boxShadow = `0 0 20px ${server.glowColor}`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = `${server.color}1a`;
            el.style.boxShadow = "none";
          }}
        >
          {/* Discord icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.014.043.031.057a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
          </svg>
          {t("servers.join")}
        </a>
      </div>
    </motion.div>
  );
}

export default function DiscordServers() {
  const { t, theme } = useApp();
  const isLight = theme === "light";
  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";
  const textSub     = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)";

  return (
    <section id="servers" style={{ padding: "100px 0 80px", position: "relative" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 40%, rgba(88,101,242,0.08) 0%, transparent 70%)",
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
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#5865F2",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {t("servers.label")}
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
              {t("servers.title")}
            </h2>
          </div>
          <p style={{ fontSize: "13px", color: textSub }}>
            {t("servers.subtitle")}
          </p>
        </motion.div>

        {/* Single server — centered */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "100%", maxWidth: "520px" }}>
            {discordServers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
