"use client";

import { motion, type Variants } from "framer-motion";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" as const } },
};

// Split into two rows so both fill full width (3 + remainder)
const ROW1_COUNT = 3;

function SocialCard({ social }: { social: (typeof socials)[0] }) {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={item}
      className="flex items-center gap-3 rounded-xl"
      style={{
        padding: "11px 13px",
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = "rgba(255,255,255,0.06)";
        el.style.borderColor = `${social.color}45`;
        el.style.boxShadow = `0 4px 22px ${social.glowColor}`;
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = "rgba(255,255,255,0.03)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Platform icon */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: `${social.color}18`,
          border: `1px solid ${social.color}30`,
        }}
      >
        <PlatformIcon id={social.id} size={17} className="text-white/70" />
      </div>

      {/* Platform info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold truncate" style={{ fontSize: "12.5px", lineHeight: 1.3 }}>
          {social.platform}
        </p>
        <p className="truncate" style={{ fontSize: "11px", color: "rgba(255,255,255,0.32)", marginTop: "2px" }}>
          {social.username}
        </p>
      </div>

      {/* Arrow */}
      <svg
        className="shrink-0"
        style={{ color: "rgba(255,255,255,0.22)", transition: "color 0.2s" }}
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
    </motion.a>
  );
}

export default function ConnectSection() {
  const row1 = socials.slice(0, ROW1_COUNT);
  const row2 = socials.slice(ROW1_COUNT);

  return (
    <section id="connect">
      <h2 className="text-white font-bold text-sm mb-3" style={{ letterSpacing: "-0.01em" }}>
        Connect With Me
      </h2>

      <motion.div
        className="flex flex-col gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Row 1 — always 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {row1.map((s) => (
            <SocialCard key={s.id} social={s} />
          ))}
        </div>

        {/* Row 2 — splits evenly for remaining items */}
        {row2.length > 0 && (
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${row2.length}, 1fr)`,
            }}
          >
            {row2.map((s) => (
              <SocialCard key={s.id} social={s} />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
