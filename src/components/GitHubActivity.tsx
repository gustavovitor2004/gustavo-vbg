"use client";

import { useApp } from "@/context/AppContext";

export default function GitHubActivity() {
  const { t } = useApp();

  return (
    <div
      style={{
        marginTop: "56px",
        padding: "28px 32px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "11px",
              background: "rgba(124,58,237,0.18)",
              border: "1px solid rgba(124,58,237,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(167,139,250,0.9)">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>
              {t("about.github.label").replace("GITHUB ACTIVITY", "GitHub Activity").replace("ATIVIDADE NO GITHUB", "Atividade no GitHub").replace("ACTIVIDAD EN GITHUB", "Actividad en GitHub")}
            </p>
            <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>
              {t("about.github.title")}
            </p>
          </div>
        </div>
        <a
          href="https://github.com/gustavovitor2004"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "5px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(167,139,250,0.85)",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.25)",
            textDecoration: "none",
            fontFamily: "'JetBrains Mono', monospace",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.22)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.12)"; }}
        >
          @gustavovitor2004
        </a>
      </div>

      {/* Chart — ghchart.rshah.org with purple palette */}
      <div style={{ overflow: "hidden", borderRadius: "10px" }}>
        <img
          src="https://ghchart.rshah.org/7c3aed/gustavovitor2004"
          alt="GitHub Contribution Chart"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "brightness(1.1) contrast(1.05)",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
