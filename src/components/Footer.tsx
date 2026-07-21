"use client";

import Link from "next/link";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const LINKS = [
  { label: "GitHub",    href: "https://github.com/gustavovitor2004", external: true },
  { label: "Discord",   href: "https://discord.com/users/1082744154544689212", external: true },
  { label: "Instagram", href: "https://www.instagram.com/gustavo_vbg/", external: true },
  { label: "/now",      href: "/now", external: false },
  { label: "/uses",     href: "/uses", external: false },
];

export default function Footer() {
  const { isLight } = useThemeTokens();
  const t2     = "var(--text-muted)";
  const border = "var(--card-border)";
  const accent = "var(--accent)";

  return (
    <footer
      style={{
        borderTop: `1px solid ${border}`,
        background: isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.01)",
        padding: "28px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Left */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Gustavo Gomes
        </p>

        {/* Right: links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          {LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: t2,
                  textDecoration: "none",
                  transition: "color 0.15s",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t2; }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: t2,
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t2; }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
