"use client";

import { motion, type Variants } from "framer-motion";
import { discordServers } from "@/data/servers";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const sItem: Variants = {
  hidden: { opacity: 0, x: 14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.36, ease: "easeOut" as const } },
};

const serverIconMap: Record<string, string> = {
  "main-community": "⚡",
  "dev-hub": "</>",
  "gaming": "🎮",
  "creative": "✦",
};

const quickLinks = [
  {
    id: "ql-links",
    label: "All Important Links",
    desc: "Explore Now",
    href: "/links",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: "ql-downloads",
    label: "Downloads",
    desc: "Get Resources",
    href: "/links",
    gradient: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    id: "ql-portfolio",
    label: "Portfolio",
    desc: "View My Work",
    href: "#projects",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    id: "ql-blog",
    label: "Blog",
    desc: "Read Articles",
    href: "#",
    gradient: "linear-gradient(135deg, #059669 0%, #2563eb 100%)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* ── My Servers ── */}
      <div
        id="servers"
        className="rounded-2xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 22px",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-bold" style={{ fontSize: "13px" }}>My Servers</h3>
          <button
            className="font-semibold rounded-lg transition-opacity hover:opacity-75"
            style={{ fontSize: "11px", padding: "5px 12px", color: "#a78bfa", background: "rgba(124,58,237,0.12)" }}
          >
            View all
          </button>
        </div>

        <motion.div
          className="flex flex-col gap-3.5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {discordServers.map((server) => {
            const iconText = serverIconMap[server.id] ?? server.name[0];
            const smallFont = iconText.length > 2;
            return (
              <motion.div key={server.id} variants={sItem} className="flex items-center gap-3">
                <div
                  className="shrink-0 flex items-center justify-center rounded-xl text-white font-black"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: server.color,
                    fontSize: smallFont ? "10px" : "18px",
                    boxShadow: `0 3px 12px ${server.glowColor}`,
                  }}
                >
                  {iconText}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate" style={{ fontSize: "12.5px", lineHeight: 1.25 }}>
                    {server.name}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.32)", marginTop: "2px" }}>
                    {server.memberCount} Members
                  </p>
                </div>
                <a
                  href={server.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-white font-bold rounded-lg transition-all duration-200 hover:opacity-85 hover:scale-[1.03]"
                  style={{
                    fontSize: "11px",
                    padding: "7px 15px",
                    background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                    boxShadow: "0 2px 14px rgba(124,58,237,0.38)",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Join
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total members banner */}
        <div
          className="mt-5 rounded-xl flex items-center justify-between"
          style={{ padding: "10px 14px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div>
            <p className="text-white font-black" style={{ fontSize: "18px", lineHeight: 1 }}>5,870+</p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>total members</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span style={{ fontSize: "11px", color: "#34d399" }}>Active</span>
          </div>
        </div>
      </div>

      {/* ── Quick Links ── */}
      <div
        className="rounded-2xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 22px",
        }}
      >
        <h3 className="text-white font-bold mb-4" style={{ fontSize: "13px" }}>Quick Links</h3>

        <div className="flex flex-col gap-0.5">
          {quickLinks.map((ql) => (
            <Link
              key={ql.id}
              href={ql.href}
              className="group flex items-center gap-3 rounded-xl transition-colors duration-200"
              style={{ padding: "10px 10px", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.045)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
              }
            >
              <div
                className="shrink-0 flex items-center justify-center rounded-xl text-white"
                style={{ width: "38px", height: "38px", background: ql.gradient }}
              >
                {ql.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold" style={{ fontSize: "12.5px", lineHeight: 1.25 }}>
                  {ql.label}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.32)", marginTop: "2px" }}>
                  {ql.desc}
                </p>
              </div>
              <svg
                className="shrink-0 transition-opacity duration-200 group-hover:opacity-50"
                style={{ color: "rgba(255,255,255,0.2)" }}
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
