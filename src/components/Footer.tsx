"use client";

import Link from "next/link";
import { useRef } from "react";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/gustavovitor2004" },
  { label: "Instagram", href: "https://www.instagram.com/gustavo_vbg/" },
  { label: "Discord", href: "https://discord.gg/5tMJDxH8vc" },
];

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const UTIL_LINKS = [
  { label: "/now", href: "/now" },
  { label: "/uses", href: "/uses" },
];

export default function Footer() {
  const { t } = useApp();
  const { surface } = useThemeTokens();
  const yearRef = useRef(new Date().getFullYear());

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer style={{ borderTop: `1px solid ${surface.border}`, background: "var(--hero-bg)" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 80px) clamp(20px, 5vw, 48px) clamp(32px, 5vw, 48px)",
        }}
      >
        {/* Main grid */}
        <div
          className="grid-cols-1 md:grid-cols-3"
          style={{
            display: "grid",
            gap: "clamp(40px, 6vw, 80px)",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "22px",
                color: "var(--text-primary)",
                letterSpacing: "-0.04em",
                marginBottom: "4px",
                lineHeight: 1,
              }}
            >
              Gustavo Gomes
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginBottom: "24px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              Full-Stack Developer
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="pulse-dot" aria-hidden="true" />
              <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 500 }}>
                {t("footer.availability")}
              </span>
            </div>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-faint)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t("footer.location")} · GMT-3
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                color: "var(--text-faint)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: "18px",
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"; }}
                >
                  {item.label}
                </a>
              ))}
              {UTIL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "13px",
                    color: "var(--text-faint)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-faint)"; }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                color: "var(--text-faint)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: "18px",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"; }}
                >
                  {item.label}
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: `1px solid ${surface.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "var(--text-faint)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            © {yearRef.current} Gustavo Gomes · {t("footer.madeWith")} Next.js
          </p>
          <button
            onClick={scrollTop}
            aria-label={t("footer.backToTop")}
            style={{
              fontSize: "11px",
              color: "var(--text-faint)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-faint)"; }}
          >
            {t("footer.backToTop")}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
