"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";

interface NowItem {
  emoji: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
}

const NOW: NowItem[] = [
  {
    emoji: "⚙",
    title: "Building GridHunter",
    body: "Full SaaS platform for automation and analytics. Currently working on the core dashboard, data pipeline, and onboarding flow. Aiming for public beta before end of 2025.",
    link: { label: "gridhunter.vercel.app", href: "https://gridhunter.vercel.app" },
  },
  {
    emoji: "◈",
    title: "Learning TypeScript deeply",
    body: "Going beyond basic typing into conditional types, mapped types, and template literal types. Also studying system-design patterns to write more scalable codebases.",
  },
  {
    emoji: "⬡",
    title: "Freelancing",
    body: "Taking on selected web projects — landing pages, SaaS MVPs and performance audits. Based in Bahia, Brazil, available remotely worldwide (GMT-3).",
  },
  {
    emoji: "◎",
    title: "Reading",
    body: "Currently: 'The Pragmatic Programmer' by David Thomas & Andrew Hunt. Previous: 'Clean Code' by Robert C. Martin.",
  },
];

function NowCard({ item, i }: { item: NowItem; i: number }) {
  const { text, surface } = useThemeTokens();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * i, ease: "easeOut" }}
      style={{
        padding: "28px",
        borderRadius: "16px",
        background: surface.card,
        border: `1px solid ${surface.border}`,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = surface.border; }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: "color-mix(in srgb, var(--accent) 10%, transparent)",
            border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
            fontSize: "18px",
            color: "var(--accent)",
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          {item.emoji}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: "15px", fontWeight: 800, color: text.primary, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            {item.title}
          </h2>
          <p style={{ fontSize: "13.5px", color: text.faint, lineHeight: 1.75, marginBottom: item.link ? "12px" : 0 }}>
            {item.body}
          </p>
          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
            >
              {item.link.label}
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function NowPage() {
  const { text } = useThemeTokens();

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "120px 32px 80px" }}>
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} style={{ marginBottom: "40px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: text.muted, textDecoration: "none", fontWeight: 500 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
            /now
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: text.primary, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "16px" }}>
            What I&apos;m doing now
          </h1>
          <p style={{ fontSize: "14px", color: text.muted, lineHeight: 1.7, maxWidth: "480px" }}>
            A snapshot of what occupies my time and attention right now. Updated periodically.
            Inspired by{" "}
            <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
              nownownow.com
            </a>.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {NOW.map((item, i) => (
            <NowCard key={item.title} item={item} i={i} />
          ))}
        </div>

        {/* Last updated */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ fontSize: "12px", color: text.faint, marginTop: "48px", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Last updated: July 2025 · Bahia, Brazil
        </motion.p>
      </main>
      <Footer />
    </div>
  );
}
