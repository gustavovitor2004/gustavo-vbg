"use client";

import { useState } from "react";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import type { Social } from "@/data/socials";

export default function SocialCard({ social }: { social: Social }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative h-full flex flex-col rounded-2xl p-5 transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`
            : `rgba(255,255,255,0.04)`,
          border: `1px solid ${hovered ? social.color + "35" : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px ${social.color}15`
            : "0 2px 12px rgba(0,0,0,0.25)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Top row: icon + platform label */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: hovered
                ? `${social.color}20`
                : "rgba(255,255,255,0.06)",
              color: social.color === "#ffffff" ? "rgba(255,255,255,0.85)" : social.color,
            }}
          >
            <PlatformIcon id={social.id} size={19} />
          </div>

          {/* External link arrow */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0"
            style={{
              background: hovered ? `${social.color}18` : "transparent",
              color: hovered ? social.color : "rgba(255,255,255,0.2)",
              transform: hovered ? "translate(1px, -1px)" : "none",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 11L11 2M11 2H5M11 2V8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Platform name */}
        <p
          className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-1 transition-colors duration-300"
          style={{ color: hovered ? social.color : "rgba(255,255,255,0.35)" }}
        >
          {social.platform}
        </p>

        {/* Username */}
        <p className="font-semibold text-white text-sm mb-1.5 leading-snug">
          {social.username}
        </p>

        {/* Description */}
        <p className="text-xs text-white/40 leading-relaxed flex-1">
          {social.description}
        </p>

        {/* Followers badge at bottom */}
        {social.followers && (
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <span className="text-xs text-white/35 font-mono">
              {social.followers}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}
