"use client";

import { motion, type Variants } from "framer-motion";

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
            ABOUT ME
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}>
            Who I Am
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
              color: "rgba(255,255,255,0.75)",
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
              color: "rgba(255,255,255,0.55)",
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
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Languages
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {languages.map((l) => (
                  <div key={l.lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{l.lang}</span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{l.level}</span>
                    </div>
                    <div style={{ height: "4px", borderRadius: "9999px", background: "rgba(255,255,255,0.07)" }}>
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
            <div style={{
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
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: "26px", fontWeight: 900, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.35)", marginTop: "6px", lineHeight: 1.4, fontWeight: 500 }}>
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
                  Currently
                </p>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  Studying ADS (5th semester) · Building <strong style={{ color: "#c4b5fd" }}>Trophi.gg</strong> · Open to freelance &amp; collaborations
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
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              whileHover={{ y: -3, boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${skill.color}22` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
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
                <p style={{ fontSize: "13.5px", fontWeight: 700, color: "#ffffff", marginBottom: "5px", letterSpacing: "-0.01em" }}>
                  {skill.title}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
