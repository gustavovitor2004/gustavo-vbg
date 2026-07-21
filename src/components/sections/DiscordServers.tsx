"use client";

import { motion } from "framer-motion";
import { discordServers } from "@/data/servers";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function DiscordServers() {
  const { isLight } = useThemeTokens();
  const server = discordServers[0];
  if (!server) return null;

  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";
  const discordBlue = "#5865F2";

  return (
    <section
      id="servers"
      style={{
        padding: "120px 0",
        borderTop: `1px solid ${border}`,
        background: "var(--page-bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: discordBlue, marginBottom: "16px" }}>
              Community
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: t1, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "20px" }}>
              {server.name}
            </h2>
            <p style={{ fontSize: "15px", color: t2, lineHeight: 1.75, maxWidth: "380px", marginBottom: "32px" }}>
              {server.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span className="pulse-dot" style={{ background: "#22c55e" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: t2, letterSpacing: "0.06em" }}>
                {server.memberCount} members online
              </span>
            </div>

            <a
              href={server.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                background: discordBlue,
                padding: "12px 24px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {/* Discord icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.014.043.031.057a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
              </svg>
              Join Server
            </a>
          </motion.div>

          {/* Right: server card (minimal) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              border: `1px solid ${border}`,
              background: isLight ? "#FFFFFF" : "#111111",
              padding: "40px",
            }}
          >
            {/* Top stripe */}
            <div style={{ height: "2px", background: discordBlue, marginBottom: "32px", opacity: 0.8 }} />

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: discordBlue,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  flexShrink: 0,
                  fontFamily: "var(--font-mono)",
                }}
              >
                ✦
              </div>
              <div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: t1, letterSpacing: "-0.01em" }}>{server.name}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: t2, letterSpacing: "0.06em", marginTop: "3px" }}>
                  {server.memberCount} members
                </p>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: t2, lineHeight: 1.7, marginBottom: "24px" }}>
              {server.description}
            </p>

            <div style={{ height: "1px", background: border }} />

            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-faint)", letterSpacing: "0.06em", marginTop: "20px" }}>
              discord.gg/{server.name.toLowerCase().replace(/\s/g, "")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
