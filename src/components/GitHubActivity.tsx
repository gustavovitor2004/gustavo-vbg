"use client";

import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function GitHubActivity() {
  const { t } = useApp();
  const { isLight, text, surface } = useThemeTokens();

  // ── Chart: switch URL + filter per theme ────────────────────────────────
  // Light mode: green chart (#059669) renders correctly on light bg — no filter
  // Dark mode:  purple chart (#7c3aed) + invert+hue-rotate for dark canvas
  const chartSrc = isLight
    ? "https://ghchart.rshah.org/059669/gustavovitor2004"
    : "https://ghchart.rshah.org/7c3aed/gustavovitor2004";
  const chartFilter = isLight
    ? "none"
    : "invert(1) hue-rotate(180deg) saturate(1.3) brightness(0.88)";

  // ── Header accent: emerald in light, purple in dark ─────────────────────
  const iconBg     = isLight ? "rgba(5,150,105,0.12)"  : "rgba(124,58,237,0.18)";
  const iconBorder = isLight ? "1px solid rgba(5,150,105,0.28)" : "1px solid rgba(124,58,237,0.3)";
  const iconFill   = isLight ? "rgba(4,120,87,0.85)"   : "rgba(167,139,250,0.9)";
  const linkColor  = isLight ? "#047857"               : "rgba(167,139,250,0.85)";
  const linkBg     = isLight ? "rgba(5,150,105,0.10)"  : "rgba(124,58,237,0.12)";
  const linkBorder = isLight ? "1px solid rgba(5,150,105,0.25)" : "1px solid rgba(124,58,237,0.25)";
  const linkHoverBg = isLight ? "rgba(5,150,105,0.20)" : "rgba(124,58,237,0.22)";

  return (
    <div
      style={{
        marginTop: "56px",
        padding: "28px 32px",
        borderRadius: "20px",
        background: surface.card,
        border: `1px solid ${surface.border}`,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Icon box */}
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "11px",
              background: iconBg,
              border: iconBorder,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={iconFill}>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: text.primary, lineHeight: 1.2 }}>
              {t("about.github.label")}
            </p>
            <p style={{ fontSize: "11.5px", color: text.faint, marginTop: "2px" }}>
              {t("about.github.title")}
            </p>
          </div>
        </div>

        {/* Profile link pill */}
        <a
          href="https://github.com/gustavovitor2004"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "5px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 600,
            color: linkColor,
            background: linkBg,
            border: linkBorder,
            textDecoration: "none",
            fontFamily: "'JetBrains Mono', monospace",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = linkHoverBg; }}
          onMouseLeave={(e)  => { (e.currentTarget as HTMLAnchorElement).style.background = linkBg; }}
        >
          @gustavovitor2004
        </a>
      </div>

      {/* Chart */}
      <div
        style={{
          overflow: "hidden",
          borderRadius: "10px",
          background: "var(--chart-bg, transparent)",
        }}
      >
        <img
          src={chartSrc}
          alt="GitHub Contribution Chart"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            // Light: green chart — no filter needed (cells already readable)
            // Dark:  purple chart — invert+hue-rotate to work on dark canvas
            filter: chartFilter,
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
