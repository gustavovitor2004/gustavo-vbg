"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { profile, navbar } from "@/config/site";
import CosmicBackground from "@/components/CosmicBackground";

const floatingBadges = [
  { label: "React", top: "6%", left: "4%", delay: 0 },
  { label: "TypeScript", top: "10%", right: "4%", delay: 0.5 },
  { label: "Next.js", top: "46%", right: "0%", delay: 0.9 },
  { label: "Node.js", bottom: "18%", right: "4%", delay: 0.25 },
  { label: "Discord.js", bottom: "8%", left: "8%", delay: 0.7 },
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "5K+", label: "Community" },
  { value: "2+", label: "Years Coding" },
  { value: "5", label: "Platforms" },
];

function FloatBadge({
  label,
  delay,
  style,
}: {
  label: string;
  delay: number;
  style: React.CSSProperties;
}) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={style}
      animate={{ y: [-7, 7, -7] }}
      transition={{
        repeat: Infinity,
        duration: 3.5 + delay * 0.6,
        delay,
        ease: "easeInOut" as const,
      }}
    >
      <div
        style={{
          padding: "6px 13px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.13)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          fontSize: "11.5px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.8)",
          whiteSpace: "nowrap" as const,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "#050816" }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Twinkling starfield */}
        <CosmicBackground />

        {/* Grid */}
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />

        {/* Aurora sweep — top */}
        <div
          className="aurora absolute pointer-events-none"
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
            height: "320px",
            background: "linear-gradient(180deg, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.08) 60%, transparent 100%)",
            filter: "blur(40px)",
            transformOrigin: "center top",
          }}
        />

        {/* Purple nebula — top right */}
        <div
          className="orb"
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(147,51,234,0.28) 0%, rgba(79,70,229,0.12) 45%, transparent 70%)",
            top: "-25%",
            right: "-8%",
            filter: "blur(70px)",
            animationDuration: "10s",
          }}
        />

        {/* Cyan nebula — bottom left */}
        <div
          className="orb"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(37,99,235,0.1) 50%, transparent 70%)",
            bottom: "-5%",
            left: "-8%",
            filter: "blur(90px)",
            animationDuration: "13s",
            animationDelay: "2s",
          }}
        />

        {/* Magenta accent — center */}
        <div
          className="orb"
          style={{
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(217,70,239,0.13) 0%, transparent 70%)",
            top: "50%",
            left: "38%",
            filter: "blur(80px)",
            animationDuration: "9s",
            animationDelay: "4s",
          }}
        />

        {/* Teal accent — far right mid */}
        <div
          className="orb"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
            top: "35%",
            right: "5%",
            filter: "blur(70px)",
            animationDuration: "11s",
            animationDelay: "6s",
          }}
        />

        {/* Center vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(5,8,22,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 32px 100px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* ── Left: text ── */}
          <div style={{ flex: 1, maxWidth: "620px" }}>
            {/* Available badge */}
            {profile.availableForProjects && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px 6px 10px",
                    borderRadius: "9999px",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <span className="badge-pulse" style={{ display: "block", width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "rgba(134,239,172,0.9)", fontWeight: 600, letterSpacing: "0.02em" }}>
                    Available for Projects
                  </span>
                </div>
              </motion.div>
            )}

            {/* Name — big */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              style={{
                fontSize: "clamp(3.5rem, 7.5vw, 6rem)",
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#ffffff", display: "block" }}>
                {profile.name.split(" ")[0]}
              </span>
              <span
                style={{
                  background: "linear-gradient(130deg, #c4b5fd 0%, #818cf8 45%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                }}
              >
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                fontWeight: 500,
                color: "rgba(167,139,250,0.75)",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              {profile.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.8,
                maxWidth: "500px",
                marginBottom: "40px",
              }}
            >
              {profile.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}
            >
              <a
                href="#projects"
                className="btn-press"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  padding: "14px 32px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  boxShadow: "0 4px 32px rgba(124,58,237,0.5), 0 0 0 1px rgba(124,58,237,0.35)",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 40px rgba(124,58,237,0.65), 0 0 0 1px rgba(124,58,237,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 32px rgba(124,58,237,0.5), 0 0 0 1px rgba(124,58,237,0.35)";
                }}
              >
                View My Work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>

              <a
                href={navbar.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.72)",
                  padding: "14px 32px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.13)",
                  background: "rgba(255,255,255,0.04)",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.08)";
                  el.style.borderColor = "rgba(255,255,255,0.24)";
                  el.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.13)";
                  el.style.color = "rgba(255,255,255,0.72)";
                }}
              >
                {navbar.cta.label}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "28px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "0",
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ paddingRight: "28px", paddingBottom: "4px" }}>
                    <p style={{ fontSize: "24px", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.025em" }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.32)", marginTop: "4px", fontWeight: 500, letterSpacing: "0.02em" }}>
                      {stat.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.08)", marginRight: "28px" }} />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Social pills */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}
            >
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginRight: "4px" }}>
                Find me on
              </span>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${s.platform} — ${s.username}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}22`,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = `${s.color}28`;
                    el.style.borderColor = `${s.color}55`;
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = `0 6px 22px ${s.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = `${s.color}12`;
                    el.style.borderColor = `${s.color}22`;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <PlatformIcon id={s.id} size={14} className="text-white/55" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Planet ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" as const }}
            className="hidden lg:block shrink-0 relative"
            style={{ width: "440px", height: "440px" }}
          >
            {/* Floating badges */}
            {floatingBadges.map((b) => {
              const pos: React.CSSProperties = {};
              if (b.top !== undefined) pos.top = b.top;
              if (b.bottom !== undefined) pos.bottom = b.bottom;
              if (b.left !== undefined) pos.left = b.left;
              if (b.right !== undefined) pos.right = b.right;
              return <FloatBadge key={b.label} label={b.label} delay={b.delay} style={pos} />;
            })}

            {/* Outer ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-90px",
                background: "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Distant dust ring */}
            <div
              className="orbital-spin-rev absolute pointer-events-none"
              style={{
                inset: "-60px",
                border: "1px dashed rgba(6,182,212,0.15)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            {/* Back orbital ring — slow spin */}
            <div
              className="orbital-spin absolute pointer-events-none"
              style={{
                inset: "-45px",
                border: "1px solid rgba(167,139,250,0.22)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            {/* Middle ring — static tilt */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-28px",
                border: "1.5px solid rgba(6,182,212,0.28)",
                borderRadius: "50%",
                transform: "rotateX(72deg) rotateZ(-10deg)",
                zIndex: 1,
              }}
            />

            {/* Planet sphere */}
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, #6d28d9 0%, #3b0764 18%, #1e1060 38%, #0a0530 65%, #03021a 100%)",
                boxShadow:
                  "0 0 80px rgba(147,51,234,0.85), 0 0 160px rgba(147,51,234,0.3), 0 0 240px rgba(6,182,212,0.1), inset 0 0 60px rgba(109,40,217,0.3)",
                zIndex: 2,
              }}
            >
              {/* Surface highlight */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: "55%",
                  height: "45%",
                  top: "8%",
                  left: "12%",
                  background: "radial-gradient(ellipse, rgba(167,139,250,0.18) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
              <span
                style={{
                  fontSize: "110px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1,
                  position: "relative",
                  zIndex: 3,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                  textShadow: "0 0 40px rgba(167,139,250,0.7)",
                }}
              >
                {profile.orbLetter}
              </span>
            </div>

            {/* Front orbital ring — reverse slow spin */}
            <div
              className="orbital-spin-rev absolute pointer-events-none"
              style={{
                inset: "-18px",
                border: "2px solid rgba(167,139,250,0.35)",
                borderRadius: "50%",
                zIndex: 4,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2"
        style={{ transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase" }}>
          SCROLL
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(to bottom, rgba(124,58,237,0.7), transparent)",
          }}
          animate={{ scaleY: [0.25, 1, 0.25], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" as const }}
        />
      </motion.div>
    </section>
  );
}
