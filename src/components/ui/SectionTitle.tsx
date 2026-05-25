"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  accentColor = "text-purple-400",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" as const }}
      style={{ textAlign: "center", marginBottom: "3rem" }}
    >
      {/* Badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase ${accentColor}`}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "6px 12px",
            borderRadius: "9999px",
          }}
        >
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2
        className="font-bold text-white tracking-tight"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-white/45 leading-relaxed"
          style={{
            fontSize: "0.9375rem",
            maxWidth: "480px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
