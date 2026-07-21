"use client";

import { motion } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const LINKS = [
  { label: "WhatsApp",  url: "https://wa.me/5575998596215",                 note: "+55 75 9985-96215" },
  { label: "GitHub",    url: "https://github.com/gustavovitor2004",          note: "gustavovitor2004" },
  { label: "Instagram", url: "https://www.instagram.com/gustavo_vbg/",      note: "@gustavo_vbg" },
  { label: "Discord",   url: "https://discord.com/users/1082744154544689212", note: "_pujin_" },
];

export default function ConnectSection() {
  const { isLight } = useThemeTokens();
  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";

  return (
    <section
      id="connect"
      style={{
        padding: "120px 0 140px",
        background: "var(--page-bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: headline */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: "32px" }}
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: t1,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{ fontSize: "15px", color: t2, lineHeight: 1.75, maxWidth: "360px" }}
            >
              Open for freelance projects and collaborations.
              Reach out through any of the channels on the right.
            </motion.p>
          </div>

          {/* Right: links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div style={{ borderTop: `1px solid ${border}` }}>
              {LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 0",
                    borderBottom: `1px solid ${border}`,
                    textDecoration: "none",
                    transition: "background 0.15s",
                    gap: "16px",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-faint)", fontWeight: 500, letterSpacing: "0.06em", minWidth: "20px" }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: t1, letterSpacing: "-0.01em" }}>
                      {link.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: t2 }}>
                      {link.note}
                    </span>
                    <span style={{ color: accent, fontSize: "14px" }}>↗</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
