"use client";

import { motion, useReducedMotion } from "framer-motion";
import { discordServers } from "@/data/servers";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const DISCORD_BLUE = "#5865F2";

export default function DiscordServers() {
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();
  const server = discordServers[0];

  return (
    <section
      id="community"
      style={{
        padding: "clamp(64px, 10vw, 112px) 0",
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
        <motion.div
          initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex-col md:flex-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {/* Left */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: DISCORD_BLUE,
                marginBottom: "12px",
              }}
            >
              {t("community.label")}
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                color: text.primary,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              {server.name}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="pulse-dot" aria-hidden="true" />
              <span
                style={{
                  fontSize: "12px",
                  color: text.faint,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {server.memberCount} {t("community.online")}
              </span>
            </div>
          </div>

          {/* Right — CTA */}
          <div>
            <a
              href={server.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: DISCORD_BLUE,
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              <svg width="18" height="18" viewBox="0 0 71 55" fill="#FFFFFF" aria-hidden="true">
                <path d="M60.1 4.9A58.5 58.5 0 0 0 45.8.8a40.3 40.3 0 0 0-1.8 3.7 54 54 0 0 0-16.3 0A39.3 39.3 0 0 0 26 .8 58.4 58.4 0 0 0 11.6 5C1.7 19.6-1 33.8.3 47.8a58.9 58.9 0 0 0 18 9.1 44 44 0 0 0 3.8-6.2 38.4 38.4 0 0 1-6-2.9c.5-.4 1-.7 1.5-1.1a41.8 41.8 0 0 0 35.8 0c.5.4 1 .7 1.5 1.1a38.2 38.2 0 0 1-6 2.9 43.8 43.8 0 0 0 3.8 6.2 58.7 58.7 0 0 0 18-9.1C72 31.7 68.1 17.6 60.1 4.9ZM23.7 39.5c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.4 3.2 6.4 7.2s-2.9 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.4 3.2 6.4 7.2-2.8 7.2-6.4 7.2Z" />
              </svg>
              {t("community.cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
