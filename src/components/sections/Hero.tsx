"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, rgba(22,14,58,0.97) 0%, rgba(14,10,42,0.98) 55%, rgba(9,9,22,0.97) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            top: "-15%",
            right: "22%",
            width: "380px",
            height: "380px",
            background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-30%",
            left: "0%",
            width: "260px",
            height: "260px",
            background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative flex items-center justify-between px-8 py-11 gap-6">
        {/* ── Left: content ── */}
        <div className="flex-1" style={{ maxWidth: "420px" }}>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-1.5 mb-4"
            style={{
              padding: "4px 12px 4px 8px",
              borderRadius: "9999px",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <span
              className="animate-pulse"
              style={{
                display: "block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "11px", color: "rgba(134,239,172,0.85)", fontWeight: 500 }}>
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.06 }}
            className="font-black leading-[1.06] text-white"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)" }}
          >
            Find Me{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #c4b5fd 15%, #818cf8 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Online
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.12 }}
            className="font-medium mt-1.5"
            style={{ fontSize: "13px", color: "rgba(167,139,250,0.65)" }}
          >
            Developer &amp; Content Creator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.18 }}
            className="mt-3 leading-relaxed"
            style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.38)", maxWidth: "340px" }}
          >
            Building things for the web and sharing the journey. Follow along for
            projects, content, and community vibes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.24 }}
            className="flex items-center gap-3 mt-6 flex-wrap"
          >
            <button
              className="flex items-center gap-2 font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
              style={{
                fontSize: "13px",
                padding: "10px 24px",
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                boxShadow: "0 4px 24px rgba(124,58,237,0.5)",
              }}
            >
              Explore
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button
              className="flex items-center gap-2 font-medium rounded-xl transition-all duration-200"
              style={{
                fontSize: "13px",
                padding: "10px 24px",
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
            >
              Learn More
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </button>
          </motion.div>

          {/* Quick social pill row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.32 }}
            className="flex items-center gap-2 mt-6 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", marginRight: "4px" }}>
              Find me on
            </span>
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.platform}
                className="flex items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  width: "30px",
                  height: "30px",
                  background: `${s.color}15`,
                  border: `1px solid ${s.color}25`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = `${s.color}28`;
                  el.style.borderColor = `${s.color}45`;
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = `${s.color}15`;
                  el.style.borderColor = `${s.color}25`;
                  el.style.transform = "translateY(0)";
                }}
              >
                <PlatformIcon id={s.id} size={13} className="text-white/55" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Planet ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" as const }}
          className="hidden sm:block shrink-0 relative"
          style={{ width: "210px", height: "210px" }}
        >
          {/* Outer glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "-50px",
              background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 60%)",
            }}
          />
          {/* Back ring */}
          <div
            className="absolute"
            style={{
              inset: "-26px",
              border: "1.5px solid rgba(124,58,237,0.2)",
              borderRadius: "50%",
              transform: "rotateX(72deg) rotateZ(30deg)",
              zIndex: 1,
            }}
          />
          {/* Sphere */}
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 36% 30%, #3d2090 0%, #1e1060 28%, #0e0838 58%, #060420 100%)",
              boxShadow: "0 0 42px rgba(124,58,237,0.65), 0 0 90px rgba(124,58,237,0.22), inset 0 0 32px rgba(124,58,237,0.18)",
              zIndex: 2,
            }}
          >
            <span
              className="font-black select-none"
              style={{ fontSize: "58px", color: "rgba(255,255,255,0.88)", lineHeight: 1, zIndex: 3, position: "relative" }}
            >
              G
            </span>
          </div>
          {/* Front ring */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-18px",
              border: "2px solid rgba(167,139,250,0.35)",
              borderRadius: "50%",
              transform: "rotateX(72deg) rotateZ(-8deg)",
              zIndex: 4,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
