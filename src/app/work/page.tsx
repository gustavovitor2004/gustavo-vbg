"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { projects } from "@/data/projects";
import { useApp } from "@/context/AppContext";

export default function WorkPage() {
  const { text, surface } = useThemeTokens();
  const { t } = useApp();

  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(96px, 14vw, 140px) clamp(20px, 5vw, 48px) clamp(64px, 10vw, 120px)" }}>

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
          <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'JetBrains Mono', monospace" }}>
            {t("work.label")}
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: text.primary, marginBottom: "16px" }}>
            {t("work.heading")}
          </h1>
          <p style={{ fontSize: "14px", color: text.muted, lineHeight: 1.6, maxWidth: "480px" }}>
            {t("work.description")}
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" as const }}
              style={{
                border: `1px solid ${surface.border}`,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = surface.border; }}
            >
              {/* Screenshot */}
              <div style={{ height: "200px", background: "var(--card-bg)", overflow: "hidden", position: "relative" }}>
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  fill
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div style={{ padding: "clamp(16px, 2vw, 24px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px", gap: "12px" }}>
                  <h2 style={{ fontSize: "16px", fontWeight: 600, color: text.primary, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    {project.title}
                  </h2>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      textDecoration: "none",
                      flexShrink: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Visit
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "10px",
                        color: text.faint,
                        fontFamily: "'JetBrains Mono', monospace",
                        padding: "3px 7px",
                        border: `1px solid ${surface.border}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
