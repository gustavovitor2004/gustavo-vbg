"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";

interface UsesItem {
  name: string;
  desc: string;
  link?: string;
}

interface UsesCategory {
  label: string;
  icon: string;
  items: UsesItem[];
}

const USES: UsesCategory[] = [
  {
    label: "Languages & Frameworks",
    icon: "◈",
    items: [
      { name: "TypeScript", desc: "Primary language for everything. Types = fewer surprises.", link: "https://typescriptlang.org" },
      { name: "Next.js (App Router)", desc: "Full-stack React framework. Server components + RSC + easy deploys.", link: "https://nextjs.org" },
      { name: "TailwindCSS v4", desc: "Utility-first CSS. Fast iteration, consistent spacing.", link: "https://tailwindcss.com" },
      { name: "Framer Motion", desc: "Animation library for React. Clean API, great results.", link: "https://framer.com/motion" },
    ],
  },
  {
    label: "Tooling",
    icon: "⚙",
    items: [
      { name: "VS Code", desc: "Primary editor. Fast, extensible and has every extension I need.", link: "https://code.visualstudio.com" },
      { name: "Git + GitHub", desc: "Version control and remote hosting. Always.", link: "https://github.com" },
      { name: "Vercel", desc: "Deployment platform. Push-to-deploy with edge functions.", link: "https://vercel.com" },
      { name: "Bun", desc: "JavaScript runtime and package manager. Noticeably faster than npm.", link: "https://bun.sh" },
    ],
  },
  {
    label: "Design",
    icon: "◎",
    items: [
      { name: "Figma", desc: "UI design and prototyping. Industry standard for a reason.", link: "https://figma.com" },
      { name: "Lucide Icons", desc: "Clean, consistent open-source icon set for React.", link: "https://lucide.dev" },
      { name: "thum.io", desc: "Screenshot-as-a-service for project thumbnails.", link: "https://thum.io" },
    ],
  },
  {
    label: "Productivity",
    icon: "✦",
    items: [
      { name: "Claude Code (CLI)", desc: "AI coding assistant integrated directly in the terminal.", link: "https://claude.ai/code" },
      { name: "Windows 10", desc: "Primary OS. Works well with everything I need.", },
      { name: "Notion", desc: "Notes, planning and project tracking.", link: "https://notion.so" },
    ],
  },
];

function CategoryBlock({ cat, delay }: { cat: UsesCategory; delay: number }) {
  const { isLight, text, surface } = useThemeTokens();
  const accent = isLight ? "#047857" : "#7c3aed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {/* Category header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: `${accent}13`,
            border: `1px solid ${accent}22`,
            fontSize: "13px",
            color: accent,
            flexShrink: 0,
          }}
        >
          {cat.icon}
        </span>
        <h2 style={{ fontSize: "13px", fontWeight: 800, color: text.primary, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {cat.label}
        </h2>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: "14px", overflow: "hidden", border: `1px solid ${surface.border}` }}>
        {cat.items.map((item, i) => (
          <div
            key={item.name}
            style={{
              padding: "16px 20px",
              background: surface.card,
              borderBottom: i < cat.items.length - 1 ? `1px solid ${surface.border}` : "none",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "13.5px", fontWeight: 700, color: text.primary, marginBottom: "3px", letterSpacing: "-0.01em" }}>
                {item.name}
              </p>
              <p style={{ fontSize: "12.5px", color: text.faint, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: `${accent}10`,
                  border: `1px solid ${accent}20`,
                  color: accent,
                  flexShrink: 0,
                  transition: "background 0.18s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}22`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}10`; }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function UsesPage() {
  const { isLight, text } = useThemeTokens();
  const accent = isLight ? "#047857" : "#7c3aed";

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "120px 32px 80px" }}>
        {/* Back */}
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
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
            /uses
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: text.primary, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "16px" }}>
            What I use
          </h1>
          <p style={{ fontSize: "14px", color: text.muted, lineHeight: 1.7, maxWidth: "480px" }}>
            Tools, languages and software that are part of my daily workflow. A living document — updated when something changes.
          </p>
        </motion.div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {USES.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} delay={0.06 * i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
