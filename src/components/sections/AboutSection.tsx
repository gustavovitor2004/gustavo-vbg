"use client";

import { motion, type Variants } from "framer-motion";
import GitHubActivity from "@/components/GitHubActivity";
import { useApp } from "@/context/AppContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const skills = [
  {
    icon: "🐍",
    title: "Python & JS Automation",
    desc: "Custom scripts, clickers and tools that boost operational efficiency by 200%+",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: "🖥️",
    title: "IT Support & Infrastructure",
    desc: "2+ years of remote technical support, system optimisation and infrastructure management",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    icon: "🤖",
    title: "Discord Bot Development",
    desc: "discord.js v14 — moderation, economy, custom commands and community automation",
    color: "#5865f2",
    glow: "rgba(88,101,242,0.2)",
  },
  {
    icon: "🌐",
    title: "Static Website Creation",
    desc: "Responsive landing pages in HTML5/CSS3 with advanced SEO and high-conversion design",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    icon: "🐧",
    title: "Linux / VPS Setup",
    desc: "Debian/Ubuntu server configuration, PM2 process management and deployment pipelines",
    color: "#22c55e",
    glow: "rgba(34,197,94,0.2)",
  },
  {
    icon: "⚡",
    title: "Next.js & TypeScript",
    desc: "Modern React apps with TypeScript, Tailwind CSS and Framer Motion animations",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.2)",
  },
];

const languages = [
  { lang: "Portuguese", level: "Native / Fluent", pct: 100, color: "#22c55e" },
  { lang: "English", level: "Professional Working Proficiency", pct: 80, color: "#3b82f6" },
];

export default function AboutSection() {
  const { t, theme } = useApp();
  const isLight = theme === "light";
  const textPrimary = isLight ? "#0a0b1a" : "#ffffff";
  const textMuted = isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";

  return (
    <section
      id="about"
      style={{ padding: "100px 0 80px", position: "relative" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 80% 40%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "56px" }}
        >
          <p style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#a855f7",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            {t("about.label")}
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 900,
            color: textPrimary,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}>
            {t("about.title")}
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
            marginBottom: "64px",
          }}
          className="about-grid"
        >
          {/* Left — bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: "15px",
              color: isLight ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)",
              lineHeight: 1.9,
              marginBottom: "20px",
            }}>
              Hey — I&apos;m <span style={{ color: "#c4b5fd", fontWeight: 700 }}>Gustavo Gomes</span>, a Systems Analysis and Development student currently in my{" "}
              <span style={{ color: "#c4b5fd", fontWeight: 700 }}>5th semester</span>, based in Brazil.
              I love turning ideas into products — whether that&apos;s a fast landing page for a local business,
              a Discord bot that automates an entire community, or a Python script that cuts repetitive work in half.
            </p>

            <p style={{
              fontSize: "15px",
              color: textMuted,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}>
              I have <span style={{ color: "#93c5fd", fontWeight: 600 }}>2+ years of experience as an IT Support Technician</span>,
              handling remote technical support, system optimisation and infrastructure for real clients.
              That background gave me a deep appreciation for reliability, performance, and clear communication.
            </p>

            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.9,
              marginBottom: "32px",
            }}>
              My sweet spot is <span style={{ color: "#86efac", fontWeight: 600 }}>automation and scripting</span> —
              using Python and JavaScript to build custom tools that genuinely move the needle.
              I also run my own community,{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Trophi.gg</span>, where I experiment with bots,
              events and community-building at scale.
            </p>

            {/* Languages */}
            <div style={{
              padding: "24px",
              borderRadius: "16px",
              background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.025)",
              border: isLight ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{
                fontSize: "10px",
                fontWeight: 700,
                color: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.28)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                {t("about.lang.title")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {languages.map((l) => (
                  <div key={l.lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: textPrimary }}>{l.lang}</span>
                      <span style={{ fontSize: "11px", color: isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>{l.level}</span>
                    </div>
                    <div style={{ height: "4px", borderRadius: "9999px", background: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
                        style={{ height: "100%", borderRadius: "9999px", background: l.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {/* Quick stats */}
            <div className="about-quick-stats" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "8px",
            }}>
              {[
                { value: "5+", label: "Client Sites Delivered", color: "#a78bfa" },
                { value: "2+", label: "Years IT Support", color: "#60a5fa" },
                { value: "5th", label: "ADS Semester", color: "#34d399" },
                { value: "200%", label: "Efficiency via Automation", color: "#f59e0b" },
              ].map((s) => (
                <div key={s.label} style={{
                  padding: "20px",
                  borderRadius: "14px",
                  background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.025)",
                  border: isLight ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.07)",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: "26px", fontWeight: 900, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "10.5px", color: isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.35)", marginTop: "6px", lineHeight: 1.4, fontWeight: 500 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Currently */}
            <div style={{
              padding: "20px 24px",
              borderRadius: "14px",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}>
              <span style={{ fontSize: "22px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📍</span>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
                  {t("about.currently")}
                </p>
                <p style={{ fontSize: "13.5px", color: isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {t("about.currently.text").split("Trophi.gg")[0]}
                  <strong style={{ color: "#c4b5fd" }}>Trophi.gg</strong>
                  {t("about.currently.text").split("Trophi.gg")[1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Skills grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="card-shine"
              style={{
                padding: "22px 24px",
                borderRadius: "16px",
                background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.025)",
                border: isLight ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              whileHover={{ y: -3, boxShadow: `0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px ${skill.color}22` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.07)";
              }}
            >
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: skill.glow,
                border: `1px solid ${skill.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}>
                {skill.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13.5px", fontWeight: 700, color: textPrimary, marginBottom: "5px", letterSpacing: "-0.01em" }}>
                  {skill.title}
                </p>
                <p style={{ fontSize: "12px", color: isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── GitHub Activity ── */}
        <GitHubActivity />

        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginTop: "64px" }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#a855f7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            {t("about.stack.label")}
          </p>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: textPrimary, marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {t("about.stack.title")}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {[
              {
                label: "Frontend & Web",
                color: "#7c3aed",
                pills: ["HTML5", "CSS3", "JavaScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
              },
              {
                label: "Backend & Bots",
                color: "#06b6d4",
                pills: ["Node.js", "Discord.js v14", "Python", "PM2", "REST APIs"],
              },
              {
                label: "Automation & Scripting",
                color: "#22c55e",
                pills: ["Python Scripts", "JS Automation", "Custom Clickers", "Workflow Tools"],
              },
              {
                label: "Infrastructure & Tools",
                color: "#f59e0b",
                pills: ["Git", "GitHub", "Linux / Debian", "Ubuntu", "VPS", "Nginx", "VS Code"],
              },
            ].map((group) => (
              <div key={group.label}>
                <p style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: group.color,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}>
                  {group.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      style={{
                        padding: "5px 14px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.72)",
                        background: `${group.color}12`,
                        border: `1px solid ${group.color}25`,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.01em",
                        transition: "background 0.2s, color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = `${group.color}22`;
                        el.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = `${group.color}12`;
                        el.style.color = isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.72)";
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ marginTop: "64px" }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#06b6d4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            {t("about.exp.label")}
          </p>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: textPrimary, marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {t("about.exp.title")}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                role: "Freelance Web Developer",
                company: "Self-employed",
                period: "2024 – Present",
                color: "#7c3aed",
                bullets: [
                  "Built 5+ responsive landing pages for local businesses (restaurants, automotive, pet shops, events)",
                  "Delivered high-conversion designs with WhatsApp CTA integration and advanced SEO",
                  "Full project lifecycle: client briefing → design → code → deployment on Vercel",
                ],
              },
              {
                role: "IT Support Technician",
                company: "Remote — 2+ years",
                period: "2022 – Present",
                color: "#06b6d4",
                bullets: [
                  "Remote technical support and system optimisation for end users",
                  "Infrastructure management and troubleshooting across Linux/Windows environments",
                  "Built automation scripts in Python and JavaScript to improve operational efficiency by 200%+",
                ],
              },
              {
                role: "Community Manager & Bot Developer",
                company: "Trophi.gg",
                period: "2023 – Present",
                color: "#a855f7",
                bullets: [
                  "Founded and manage a growing Discord community (Trophi.gg)",
                  "Developed custom Discord bots using discord.js v14 for moderation and automation",
                  "Community strategy, events management and member engagement",
                ],
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="card-shine"
                style={{
                  padding: "24px 28px",
                  borderRadius: "16px",
                  background: isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.025)",
                  border: isLight ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${exp.color}`,
                  transition: "box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px ${exp.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: textPrimary, letterSpacing: "-0.01em" }}>{exp.role}</p>
                    <p style={{ fontSize: "12px", color: exp.color, fontWeight: 600, marginTop: "2px" }}>{exp.company}</p>
                  </div>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
                    border: isLight ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.08)",
                    whiteSpace: "nowrap",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {exp.period}
                  </span>
                </div>
                <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "0", listStyle: "none" }}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: "4px", fontSize: "8px" }}>▶</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
