"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { useApp } from "@/context/AppContext";

const CHANNELS = [
  { label: "WhatsApp", note: "+55 75 99859-6215", note2: "Usually replies within 1 hour", href: "https://wa.me/5575998596215" },
  { label: "GitHub", note: "@gustavovitor2004", note2: "Open source & project work", href: "https://github.com/gustavovitor2004" },
  { label: "Instagram", note: "@gustavo_vbg", note2: "DMs open", href: "https://www.instagram.com/gustavo_vbg/" },
  { label: "Discord", note: "Trophi.gg", note2: "Community server", href: "https://discord.gg/5tMJDxH8vc" },
];

function ChannelRow({ item, i }: { item: typeof CHANNELS[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const { text, surface } = useThemeTokens();

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + 0.07 * i, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(16px, 2.5vw, 24px) clamp(12px, 2vw, 20px)",
        borderBottom: `1px solid ${surface.border}`,
        background: hovered ? (surface.glass ?? "transparent") : "transparent",
        textDecoration: "none",
        transition: "background 0.15s",
      }}
    >
      <div>
        <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", fontWeight: 500, color: hovered ? "var(--text-primary)" : text.secondary, letterSpacing: "-0.01em", marginBottom: "3px", transition: "color 0.15s" }}>
          {item.label}
        </p>
        <p style={{ fontSize: "11px", color: text.faint, fontFamily: "'JetBrains Mono', monospace", marginBottom: "2px" }}>
          {item.note}
        </p>
        <p style={{ fontSize: "11px", color: text.faint }}>
          {item.note2}
        </p>
      </div>
      <svg
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke={hovered ? "var(--accent)" : text.faint}
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: "stroke 0.15s, transform 0.15s", transform: hovered ? "translate(2px,-2px)" : "none", flexShrink: 0 }}
        aria-hidden="true"
      >
        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
      </svg>
    </motion.a>
  );
}

export default function ContactPage() {
  const { text, surface } = useThemeTokens();
  const { t } = useApp();

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: "1000px", margin: "0 auto", padding: "clamp(96px, 14vw, 140px) clamp(20px, 5vw, 48px) clamp(64px, 10vw, 120px)" }}>

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} style={{ marginBottom: "48px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: text.faint, textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = text.faint; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
            Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px", fontFamily: "'JetBrains Mono', monospace" }}>
            {t("contact.label")}
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: text.primary, marginBottom: "24px" }}>
            {t("contact.h1")}<br />
            {t("contact.h2")}<br />
            <span style={{ color: "var(--accent)" }}>{t("contact.h3")}</span>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="pulse-dot" aria-hidden="true" />
            <span style={{ fontSize: "13px", color: text.muted }}>
              {t("footer.availability")} — {t("footer.location")}
            </span>
          </div>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{ borderTop: `1px solid ${surface.border}` }}
        >
          {CHANNELS.map((item, i) => (
            <ChannelRow key={item.label} item={item} i={i} />
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
