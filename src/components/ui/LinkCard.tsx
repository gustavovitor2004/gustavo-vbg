"use client";

import { useState } from "react";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import type { LinkItem } from "@/data/links";

const FALLBACK_ICONS: Record<string, string> = {
  bot: "⬡",
  book: "≡",
  users: "⊕",
  code: "</>",
  download: "↓",
  package: "◻",
  mail: "✉",
  link: "⇗",
};

function LinkIcon({ icon, color }: { icon: string; color: string }) {
  const platformIds = ["discord", "youtube", "github", "twitter", "tiktok", "twitch", "spotify", "instagram"];
  if (platformIds.includes(icon)) {
    return <PlatformIcon id={icon} size={16} />;
  }
  return <span className="text-sm font-mono leading-none">{FALLBACK_ICONS[icon] ?? "⇗"}</span>;
}

export default function LinkCard({ link }: { link: LinkItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="card-shine rounded-xl px-4 py-3 flex items-center gap-3.5 transition-all duration-200"
        style={{
          background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? link.color + "30" : "rgba(255,255,255,0.07)"}`,
          backdropFilter: "blur(12px)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 30px rgba(0,0,0,0.4)` : "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {/* Icon */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: hovered ? `${link.color}18` : "rgba(255,255,255,0.05)",
            color: link.color === "#ffffff" ? "rgba(255,255,255,0.7)" : link.color,
          }}
        >
          <LinkIcon icon={link.icon} color={link.color} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white/85 text-sm truncate leading-tight">{link.title}</p>
          <p className="text-white/35 text-xs truncate mt-0.5">{link.description}</p>
        </div>

        {/* Badge */}
        {link.badge && (
          <span
            className="text-[10px] px-2 py-0.5 rounded font-medium flex-shrink-0 whitespace-nowrap"
            style={{
              background: `${link.color}15`,
              color: link.color === "#ffffff" ? "rgba(255,255,255,0.6)" : link.color,
              border: `1px solid ${link.color}25`,
            }}
          >
            {link.badge}
          </span>
        )}

        {/* Arrow */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          className="flex-shrink-0 transition-all duration-200"
          style={{
            color: hovered ? link.color : "rgba(255,255,255,0.2)",
            transform: hovered ? "translate(1px, -1px)" : "none",
          }}
        >
          <path
            d="M2 11L11 2M11 2H5M11 2V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}
