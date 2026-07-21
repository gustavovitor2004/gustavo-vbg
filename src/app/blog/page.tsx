"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { useApp } from "@/context/AppContext";

const ARTICLES_PREVIEW = [
  {
    title: "Building a Real-Time Discord Bot with Node.js",
    excerpt: "Architecture decisions, challenges with thousands of users, and lessons about distributed systems.",
    category: "Development",
    readTime: "8 min read",
  },
  {
    title: "Designing Dark UIs That Don't Hurt Your Eyes",
    excerpt: "Contrast, typography choices, and subtle effects. What I've learned designing premium dark interfaces.",
    category: "Design",
    readTime: "5 min read",
  },
  {
    title: "Next.js 16: What Changed and What I Actually Think",
    excerpt: "Turbopack as default, new caching model, async APIs — running it in production for weeks.",
    category: "Development",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const { text, surface } = useThemeTokens();
  const { t } = useApp();

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(96px, 14vw, 140px) clamp(20px, 5vw, 48px) clamp(64px, 10vw, 120px)" }}>

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
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "clamp(48px, 8vw, 72px)" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'JetBrains Mono', monospace" }}>
            {t("blog.coming.title")}
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: text.primary, marginBottom: "16px" }}>
            {t("blog.coming.heading")}
          </h1>
          <p style={{ fontSize: "14px", color: text.muted, lineHeight: 1.6, maxWidth: "480px" }}>
            {t("blog.coming.desc")}
          </p>
        </motion.div>

        {/* Preview articles — teaser */}
        <div style={{ borderTop: `1px solid ${surface.border}` }}>
          {ARTICLES_PREVIEW.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
              style={{
                padding: "clamp(20px, 3vw, 28px) 0",
                borderBottom: `1px solid ${surface.border}`,
                opacity: 0.45,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "9px", fontWeight: 700, color: text.faint, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                  {article.category}
                </span>
                <span style={{ fontSize: "9px", color: text.faint, fontFamily: "'JetBrains Mono', monospace" }}>·</span>
                <span style={{ fontSize: "9px", color: text.faint, fontFamily: "'JetBrains Mono', monospace" }}>
                  {article.readTime}
                </span>
              </div>
              <p style={{ fontSize: "clamp(15px, 1.6vw, 18px)", fontWeight: 600, color: text.primary, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "8px" }}>
                {article.title}
              </p>
              <p style={{ fontSize: "13px", color: text.muted, lineHeight: 1.65 }}>
                {article.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
