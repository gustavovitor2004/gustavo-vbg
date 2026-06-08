"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { profile, navbar } from "@/config/site";
import CosmicBackground from "@/components/CosmicBackground";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function Hero() {
  const { t } = useApp();
  const { isLight, text, surface } = useThemeTokens();

  const textPrimary = text.primary;
  const textMuted = text.muted;
  const textDim = text.faint;
  const borderSub = surface.border;

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
        background: isLight ? "var(--hero-bg)" : "#030610",
      }}
    >
      {/* ── Galaxy background ── */}
      <CosmicBackground />

      {/* ── Content — centered overlay ── */}
      <div
        className="hero-content relative z-10 w-full flex flex-col items-center"
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
            color: textDim,
            marginBottom: "20px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {t("hero.label")}
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
                {t("hero.available")}
              </span>
            </div>
          </motion.div>
        )}

        {/* Name — large centered */}
        <motion.h1
          className="hero-name"
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
          <span style={{ color: textPrimary, display: "block" }}>
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
            color: isLight ? "#7c3aed" : "rgba(167,139,250,0.8)",
            marginBottom: "16px",
            letterSpacing: "0.02em",
          }}
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            fontSize: "15px",
            color: textMuted,
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "44px",
          }}
        >
          {t("hero.bio")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
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
            {t("hero.cta.work")}
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
              gap: "9px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ffffff",
              padding: "14px 34px",
              borderRadius: "9999px",
              border: "1px solid rgba(37,211,102,0.35)",
              background: "rgba(37,211,102,0.1)",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(37,211,102,0.18)";
              el.style.borderColor = "rgba(37,211,102,0.6)";
              el.style.boxShadow = "0 0 24px rgba(37,211,102,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(37,211,102,0.1)";
              el.style.borderColor = "rgba(37,211,102,0.35)";
              el.style.boxShadow = "none";
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ color: "#25d366", flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t("nav.whatsapp")}
          </a>
        </motion.div>

        {/* Stats row — centered */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "28px",
            borderTop: `1px solid ${borderSub}`,
            marginBottom: "24px",
            gap: "0",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {[
            { value: "5+", labelKey: "hero.stat.sites" },
            { value: "2+", labelKey: "hero.stat.years" },
          ].map((stat, i, arr) => (
            <div key={stat.labelKey} style={{ display: "flex", alignItems: "center" }}>
              <div
                className="hero-stat-item"
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
                    color: textPrimary,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: textDim,
                    marginTop: "4px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t(stat.labelKey)}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div
                  className="hero-stat-divider"
                  style={{
                    width: "1px",
                    height: "32px",
                    background: borderSub,
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
              color: textDim,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginRight: "4px",
            }}
          >
            {t("social.findon")}
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
              <PlatformIcon id={s.id} size={15} className={isLight ? "text-indigo-600/70" : "text-white/55"} />
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
            color: textDim,
            letterSpacing: "0.18em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {t("scroll")}
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
