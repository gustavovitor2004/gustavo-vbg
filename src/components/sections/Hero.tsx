"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { profile, navbar } from "@/config/site";
import CosmicBackground from "@/components/CosmicBackground";

const stats = [
  { value: "5+", label: "Sites entregues" },
  { value: "2+", label: "Anos de código" },
  { value: "5", label: "Plataformas" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#030610",
      }}
    >
      {/* ── Galaxy background ── */}
      <CosmicBackground />

      {/* ── Content — centered overlay ── */}
      <div
        className="relative z-10 w-full flex flex-col items-center"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "140px 32px 100px",
          textAlign: "center",
        }}
      >
        {/* Collection label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "20px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          DEVELOPER · 2025
        </motion.p>

        {/* Available badge */}
        {profile.availableForProjects && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            style={{ display: "inline-flex", marginBottom: "28px" }}
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
              <span
                className="badge-pulse"
                style={{
                  display: "block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(134,239,172,0.9)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Available for Projects
              </span>
            </div>
          </motion.div>
        )}

        {/* Name — large centered */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(3.2rem, 8.5vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>
            {profile.name.split(" ")[0]}
          </span>
          <span
            style={{
              background:
                "linear-gradient(130deg, #c4b5fd 0%, #818cf8 40%, #67e8f9 100%)",
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 500,
            color: "rgba(167,139,250,0.8)",
            marginBottom: "16px",
            letterSpacing: "0.02em",
          }}
        >
          {profile.tagline}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "44px",
          }}
        >
          {profile.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
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
              padding: "14px 34px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              boxShadow:
                "0 4px 32px rgba(124,58,237,0.55), 0 0 0 1px rgba(124,58,237,0.3)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 8px 40px rgba(124,58,237,0.7), 0 0 0 1px rgba(124,58,237,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow =
                "0 4px 32px rgba(124,58,237,0.55), 0 0 0 1px rgba(124,58,237,0.3)";
            }}
          >
            View My Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
              color: "rgba(255,255,255,0.7)",
              padding: "14px 34px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.09)";
              el.style.borderColor = "rgba(255,255,255,0.28)";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderColor = "rgba(255,255,255,0.14)";
              el.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            {navbar.cta.label}
          </a>
        </motion.div>

        {/* Stats row — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            marginBottom: "24px",
            gap: "0",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingLeft: i === 0 ? 0 : "28px",
                  paddingRight: "28px",
                  paddingBottom: "4px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 900,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "4px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "32px",
                    background: "rgba(255,255,255,0.07)",
                    marginRight: "0",
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Social pills — centered */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.2)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginRight: "4px",
            }}
          >
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
                width: "36px",
                height: "36px",
                borderRadius: "50%",
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
              <PlatformIcon id={s.id} size={15} className="text-white/55" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2"
        style={{
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span
          style={{
            fontSize: "9px",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.18em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(to bottom, rgba(124,58,237,0.7), transparent)",
          }}
          animate={{ scaleY: [0.25, 1, 0.25], opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut" as const,
          }}
        />
      </motion.div>
    </section>
  );
}
