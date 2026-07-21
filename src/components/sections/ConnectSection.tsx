"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const LINKS = [
  { label: "WhatsApp", note: "+55 75 99859-6215", href: "https://wa.me/5575998596215" },
  { label: "GitHub", note: "@gustavovitor2004", href: "https://github.com/gustavovitor2004" },
  { label: "Instagram", note: "@gustavo_vbg", href: "https://www.instagram.com/gustavo_vbg/" },
  { label: "Discord", note: "Trophi.gg", href: "https://discord.gg/5tMJDxH8vc" },
];

function LinkRow({ item, i }: { item: typeof LINKS[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const { text, surface } = useThemeTokens();

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.08 * i, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(14px, 2vw, 20px) clamp(12px, 2vw, 20px)",
        borderBottom: `1px solid ${surface.border}`,
        background: hovered ? (surface.glass ?? "transparent") : "transparent",
        textDecoration: "none",
        transition: "background 0.15s",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "clamp(14px, 1.4vw, 16px)",
            fontWeight: 500,
            color: hovered ? "var(--text-primary)" : text.secondary,
            letterSpacing: "-0.01em",
            marginBottom: "2px",
            transition: "color 0.15s",
          }}
        >
          {item.label}
        </p>
        <p
          style={{
            fontSize: "11px",
            color: text.faint,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {item.note}
        </p>
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? "var(--accent)" : text.faint}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.15s, transform 0.15s", transform: hovered ? "translate(2px,-2px)" : "none", flexShrink: 0 }}
        aria-hidden="true"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </motion.a>
  );
}

export default function ConnectSection() {
  const { t } = useApp();
  const { text, surface } = useThemeTokens();
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px, 12vw, 140px) 0",
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
        <div
          className="flex-col md:flex-row"
          style={{
            display: "flex",
            gap: "clamp(48px, 8vw, 96px)",
            alignItems: "flex-start",
          }}
        >
          {/* Left — headline */}
          <div style={{ flex: "1 1 45%" }}>
            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              style={{
                fontSize: "10px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "clamp(24px, 4vw, 40px)",
              }}
            >
              {t("contact.label")}
            </motion.p>

            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" as const }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: text.primary,
                  marginBottom: 0,
                }}
              >
                <span style={{ display: "block" }}>{t("contact.h1")}</span>
                <span style={{ display: "block" }}>{t("contact.h2")}</span>
                <span style={{ display: "block", color: "var(--accent)" }}>{t("contact.h3")}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" as const }}
              style={{
                fontSize: "14px",
                color: text.muted,
                lineHeight: 1.7,
                marginTop: "clamp(24px, 4vw, 36px)",
                maxWidth: "380px",
              }}
            >
              {t("contact.body")}
            </motion.p>
          </div>

          {/* Right — links */}
          <div style={{ flex: "1 1 50%" }}>
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" as const }}
              style={{ borderTop: `1px solid ${surface.border}` }}
            >
              {LINKS.map((item, i) => (
                <LinkRow key={item.label} item={item} i={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
