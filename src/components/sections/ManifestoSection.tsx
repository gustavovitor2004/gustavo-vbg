"use client";

import { motion } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const STATS = [
  { value: "7+", label: "Sites shipped" },
  { value: "2+", label: "Years building" },
  { value: "1",  label: "SaaS product" },
];

export default function ManifestoSection() {
  const { isLight } = useThemeTokens();

  const accent = "var(--accent)";
  const t1     = "var(--text-primary)";
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";
  const bg2    = isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.02)";

  return (
    <section
      id="manifesto"
      style={{
        padding: "120px 0",
        background: bg2,
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
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
          {/* Left: editorial text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: "32px" }}
            >
              About
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 300,
                color: t1,
                lineHeight: 1.45,
                letterSpacing: "-0.02em",
                marginBottom: "32px",
              }}
            >
              I build products on the internet.
              <br />
              <span style={{ color: t2 }}>
                From architecture to deployment, independently.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p style={{ fontSize: "15px", fontWeight: 400, color: t2, lineHeight: 1.8 }}>
                I started in IT support in 2021 — debugging systems, fixing networks,
                talking to real clients. That foundation shaped how I build software:
                with precision, empathy, and a bias toward shipping.
              </p>
              <p style={{ fontSize: "15px", fontWeight: 400, color: t2, lineHeight: 1.8 }}>
                Today I&apos;m a full-stack developer building SaaS products and
                conversion-focused websites. Based in Bahia, Brazil, working with
                clients worldwide.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              href="/now"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "32px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: t1,
                textDecoration: "none",
                borderBottom: `1px solid ${border}`,
                paddingBottom: "3px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = accent; el.style.borderColor = accent; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = t1; el.style.borderColor = border; }}
            >
              What I&apos;m doing now →
            </motion.a>
          </div>

          {/* Right: stats + skills */}
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1px",
                background: border,
                border: `1px solid ${border}`,
                marginBottom: "48px",
              }}
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: "28px 24px",
                    background: isLight ? "#FFFFFF" : "#141414",
                  }}
                >
                  <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: t1, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {value}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 500, color: t2, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "8px" }}>
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "20px" }}>
                Core Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["TypeScript", "Next.js", "React", "TailwindCSS", "Vercel", "Framer Motion", "HTML5", "CSS3"].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "5px 12px",
                      border: `1px solid ${border}`,
                      color: t2,
                      letterSpacing: "0.02em",
                      transition: "border-color 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = accent; el.style.color = t1; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = border; el.style.color = t2; }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
