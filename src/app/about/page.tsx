"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const TIMELINE = [
  { year: "2021", title: "IT Support Technician", body: "Joined Data7 Tecnologia as a remote IT support technician. Spent two years debugging systems, maintaining infrastructure, and talking to real users daily. This shaped my instinct for reliability and clear communication." },
  { year: "2022", title: "First website", body: "Built my first client website after hours, purely out of curiosity. Saw that great design + fast page = more enquiries for local businesses. Decided to pursue web development seriously." },
  { year: "2023", title: "Freelance + Community", body: "Began taking on freelance web projects. Founded Trophi.gg, a Discord community for developers and gamers. Built custom bots using discord.js to automate moderation and events." },
  { year: "2024", title: "Scaling the craft", body: "Delivered multiple high-conversion landing pages for local businesses across Bahia. Transitioned from HTML/CSS to Next.js and TypeScript. Started building a SaaS product from scratch." },
  { year: "2025", title: "GridHunter + this portfolio", body: "Launched GridHunter, a SaaS platform built and deployed independently. Rebuilt this portfolio from the ground up — no template, no AI-generated layout, every detail intentional." },
];

const STACK = [
  { label: "Frontend", items: ["Next.js 16", "React", "TypeScript", "TailwindCSS v4", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Python", "REST APIs", "discord.js v14"] },
  { label: "Tooling", items: ["Git", "Vercel", "ESLint", "VS Code"] },
  { label: "Design", items: ["Figma", "CSS Grid & Flexbox", "CSS Custom Properties"] },
];

export default function AboutPage() {
  const { text, surface } = useThemeTokens();

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(96px, 14vw, 140px) clamp(20px, 5vw, 48px) clamp(64px, 10vw, 120px)" }}>

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
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px", fontFamily: "'JetBrains Mono', monospace" }}>
            About
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: text.primary, marginBottom: "24px" }}>
            Full-Stack Developer<br />
            <span style={{ color: text.muted, fontWeight: 300 }}>from Bahia, Brazil.</span>
          </h1>
          <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: text.muted, lineHeight: 1.7, maxWidth: "560px" }}>
            I build products that people use — from landing pages to SaaS platforms.
            Started in IT support, moved to full-stack development, always independent.
          </p>
        </motion.div>

        <div style={{ height: "1px", background: surface.border, marginBottom: "clamp(56px, 8vw, 96px)" }} />

        {/* Journey */}
        <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const }} style={{ marginBottom: "clamp(64px, 10vw, 112px)" }}>
          <p style={{ fontSize: "9px", fontWeight: 700, color: text.faint, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "36px", fontFamily: "'JetBrains Mono', monospace" }}>
            Timeline
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TIMELINE.map(({ year, title, body }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "24px",
                  padding: "clamp(20px, 3vw, 28px) 0",
                  borderBottom: `1px solid ${surface.border}`,
                }}
              >
                <span style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: "var(--accent)", paddingTop: "4px" }}>
                  {year}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: text.primary, marginBottom: "8px", letterSpacing: "-0.01em" }}>{title}</p>
                  <p style={{ fontSize: "13.5px", color: text.muted, lineHeight: 1.7 }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const }} style={{ marginBottom: "clamp(64px, 10vw, 112px)" }}>
          <p style={{ fontSize: "9px", fontWeight: 700, color: text.faint, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "36px", fontFamily: "'JetBrains Mono', monospace" }}>
            Technical Stack
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "clamp(20px, 3vw, 32px)" }}>
            {STACK.map(({ label, items }) => (
              <div key={label}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: text.faint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'JetBrains Mono', monospace" }}>
                  {label}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {items.map((item) => (
                    <span key={item} style={{ fontSize: "13px", color: text.secondary, letterSpacing: "-0.01em" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const }}>
          <p style={{ fontSize: "9px", fontWeight: 700, color: text.faint, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "24px", fontFamily: "'JetBrains Mono', monospace" }}>
            How I work
          </p>
          <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, lineHeight: 1.5, letterSpacing: "-0.02em", color: text.primary, maxWidth: "620px" }}>
            I ship fast without cutting corners. Every project gets the same attention — from the architecture decision to the pixel on the last button.
          </p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
