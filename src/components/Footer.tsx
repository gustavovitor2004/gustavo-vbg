"use client";

import Link from "next/link";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { profile, meta, navbar } from "@/config/site";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Community", href: "#servers" },
    { label: "All Links", href: "/links" },
  ],
  Connect: socials.slice(0, 4).map((s) => ({
    label: s.platform,
    href: s.url,
    external: true,
  })),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050816" }}>
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 40px" }}>
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="grid-cols-1 sm:grid-cols-3"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: 900,
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
                  flexShrink: 0,
                }}
              >
                {navbar.brand[0]}
              </div>
              <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "15px", letterSpacing: "-0.01em" }}>
                {navbar.brand}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.32)", lineHeight: 1.7, maxWidth: "220px", marginBottom: "20px" }}>
              {profile.tagline} — Building for the web and sharing the journey.
            </p>

            {/* Social icons row */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.platform}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "9px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = `${s.color}20`;
                    el.style.borderColor = `${s.color}35`;
                    el.style.color = s.color;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.4)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <PlatformIcon id={s.id} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.Navigation.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "13.5px",
                        color: "rgba(255,255,255,0.42)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)"; }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      style={{
                        fontSize: "13.5px",
                        color: "rgba(255,255,255,0.42)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)"; }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Connect
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.Connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: "13.5px",
                      color: "rgba(255,255,255,0.42)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.22)" }}>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)" }}>
            Built with{" "}
            <span style={{ color: "rgba(167,139,250,0.5)" }}>Next.js</span>
            {" "}·{" "}
            <span style={{ color: "rgba(167,139,250,0.5)"}}>TailwindCSS</span>
            {" "}·{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(167,139,250,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(167,139,250,0.5)"; }}
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
