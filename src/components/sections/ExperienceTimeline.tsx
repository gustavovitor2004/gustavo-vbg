"use client";

import { motion, type Variants } from "framer-motion";
import { useThemeTokens } from "@/hooks/useThemeTokens";

interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
  accent: string;
}

const TIMELINE: TimelineEntry[] = [
  {
    period: "2024 — Present",
    title: "Full-Stack Developer & Founder",
    org: "Freelance · Remote",
    desc: "Building SaaS products and client sites independently. From architecture to deployment — solo, end-to-end. GridHunter and multiple landing pages shipped for clients in Brazil and abroad.",
    tags: ["Next.js", "TypeScript", "Vercel", "TailwindCSS"],
    accent: "#7c3aed",
  },
  {
    period: "2023 — 2024",
    title: "Frontend Developer",
    org: "Self-taught projects · Bahia, Brazil",
    desc: "Transitioned from IT support into web development. Built first portfolio sites, learned React and modern CSS. Shipped real client work within the first year.",
    tags: ["React", "JavaScript", "CSS3", "HTML5"],
    accent: "#0891b2",
  },
  {
    period: "2021 — 2023",
    title: "IT Support & Optimization",
    org: "Local Clients · Bahia, Brazil",
    desc: "Provided advanced IT support: hardware repair, network setup, system optimization. Developed strong problem-solving and client communication skills that carry directly into software work.",
    tags: ["Hardware", "Networking", "Windows", "Linux"],
    accent: "#059669",
  },
];

const lineVariant: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.1, ease: "easeOut" as const, delay: 0.2 },
  },
};

const entryVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ExperienceTimeline() {
  const { isLight, text, surface } = useThemeTokens();
  const accentLabel = isLight ? "#047857" : "#7c3aed";

  return (
    <section style={{ padding: "80px 0 40px", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "52px" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: accentLabel,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Career
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 900,
              color: text.primary,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "720px" }}>
          {/* Vertical line */}
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              position: "absolute",
              left: "7px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: isLight
                ? "linear-gradient(180deg, #059669 0%, #0891b2 100%)"
                : "linear-gradient(180deg, #7c3aed 0%, #22d3ee 100%)",
              transformOrigin: "top",
              opacity: 0.4,
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.14 }}
          >
            {TIMELINE.map((entry, i) => {
              const accent = isLight && entry.accent === "#7c3aed" ? "#059669" : entry.accent;

              return (
                <motion.div
                  key={i}
                  variants={entryVariant}
                  style={{
                    position: "relative",
                    paddingLeft: "34px",
                    paddingBottom: i < TIMELINE.length - 1 ? "44px" : 0,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "6px",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: accent,
                      border: `2px solid ${isLight ? "#f0fdf4" : "#09080f"}`,
                      boxShadow: `0 0 0 3px ${accent}30`,
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      padding: "22px 24px",
                      borderRadius: "14px",
                      background: surface.card,
                      border: `1px solid ${surface.border}`,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}35`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = surface.border;
                    }}
                  >
                    {/* Period */}
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: accent,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {entry.period}
                    </p>

                    {/* Title + org */}
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 800,
                        color: text.primary,
                        letterSpacing: "-0.01em",
                        marginBottom: "3px",
                      }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        color: text.muted,
                        fontWeight: 500,
                        marginBottom: "12px",
                      }}
                    >
                      {entry.org}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "13px",
                        color: text.faint,
                        lineHeight: 1.7,
                        marginBottom: "16px",
                      }}
                    >
                      {entry.desc}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "10.5px",
                            fontWeight: 600,
                            padding: "3px 10px",
                            borderRadius: "9999px",
                            background: `${accent}12`,
                            border: `1px solid ${accent}22`,
                            color: accent,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
