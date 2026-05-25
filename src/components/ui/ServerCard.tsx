"use client";

import { useState } from "react";
import { DiscordIcon } from "@/components/ui/PlatformIcon";
import type { DiscordServer } from "@/data/servers";

export default function ServerCard({ server }: { server: DiscordServer }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card-shine rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? server.color + "30" : "rgba(255,255,255,0.07)"}`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px ${server.color}12`
          : "0 4px 20px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Banner */}
      <div
        className="relative h-20 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${server.color}18, ${server.color}06)` }}
      >
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${server.glowColor}, transparent 65%)`,
            opacity: hovered ? 0.35 : 0.1,
          }}
        />

        {/* Status badges */}
        <div className="absolute top-2.5 right-3 flex gap-1.5">
          {server.verified && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-[#8b9cf8]"
              style={{ background: "rgba(88,101,242,0.2)", border: "1px solid rgba(88,101,242,0.25)" }}
            >
              ✓ Verified
            </span>
          )}
          {server.featured && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-amber-300"
              style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.2)" }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Server icon */}
        <div
          className="absolute -bottom-5 left-4 w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${server.color}50, ${server.color}25)`,
            border: "3px solid #030712",
            boxShadow: hovered ? `0 0 16px ${server.glowColor}` : "none",
          }}
        >
          {server.name.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="pt-9 px-4 pb-4 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-2.5">
          <div>
            <h3 className="font-semibold text-white text-base leading-snug mb-1">{server.name}</h3>
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{
                background: `${server.color}15`,
                color: server.color,
                border: `1px solid ${server.color}25`,
              }}
            >
              {server.category}
            </span>
          </div>
          {server.onlineCount && (
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/80 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {server.onlineCount}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed mb-3 flex-1">
          {server.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {server.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded font-mono text-white/30"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: members + join */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="text-xs text-white/35">
            <span className="font-semibold text-white/55">{server.memberCount}</span> members
          </div>

          <a
            href={server.inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: hovered ? server.color : `${server.color}18`,
              color: hovered ? "#fff" : server.color,
              border: `1px solid ${server.color}35`,
            }}
          >
            <DiscordIcon size={12} />
            Join
          </a>
        </div>
      </div>
    </div>
  );
}
