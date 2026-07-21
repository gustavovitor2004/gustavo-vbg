"use client";

import Link from "next/link";
import { socials } from "@/data/socials";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { profile, navbar } from "@/config/site";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function Footer() {
  const { t } = useApp();
  const { isLight, text, surface } = useThemeTokens();
  const year = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { labelKey: "nav.home", href: "#home" },
      { labelKey: "nav.projects", href: "#projects" },
      { labelKey: "nav.servers", href: "#servers" },
      { labelKey: "footer.link.allLinks", href: "/links" },
    ],
    connect: socials.slice(0, 4).map((s) => ({
      label: s.platform,
      href: s.url,
      external: true,
    })),
  };

  return (
    <footer style={{ position: "relative", borderTop: `1px solid ${surface.border}`, background: surface.page }}>
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{ transform: "translateX(-50%)", width: "600px", height: "1px", background: isLight ? "linear-gradient(90deg, transparent, rgba(5,150,105,0.35), transparent)" : "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 40px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12" style={{ marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 900, color: "#ffffff", boxShadow: "0 4px 16px rgba(124,58,237,0.4)", flexShrink: 0 }}>
                {navbar.brand[0]}
              </div>
              <span style={{ fontWeight: 800, color: text.primary, fontSize: "15px", letterSpacing: "-0.01em" }}>
                {navbar.brand}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: text.muted, lineHeight: 1.7, maxWidth: "220px", marginBottom: "20px" }}>
              {t("hero.tagline")} — {t("footer.taglineSuffix")}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.platform}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "9px", background: surface.border, border: `1px solid ${surface.border}`, color: text.faint, textDecoration: "none", transition: "all 0.2s", flexShrink: 0 }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = `${s.color}20`;
                    el.style.borderColor = `${s.color}35`;
                    el.style.color = s.color;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = surface.border;
                    el.style.borderColor = surface.border;
                    el.style.color = text.faint;
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <PlatformIcon id={s.id} size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: text.faint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              {t("footer.navigation")}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.navigation.map((link) => (
                <li key={link.labelKey}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} style={{ fontSize: "13.5px", color: text.muted, textDecoration: "none", transition: "color 0.2s", display: "inline-block" }}>
                      {t(link.labelKey)}
                    </Link>
                  ) : (
                    <a href={link.href} style={{ fontSize: "13.5px", color: text.muted, textDecoration: "none", transition: "color 0.2s", display: "inline-block" }}>
                      {t(link.labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: text.faint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              {t("footer.connect")}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13.5px", color: text.muted, textDecoration: "none", transition: "color 0.2s", display: "inline-block" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ height: "1px", background: surface.border, marginBottom: "24px" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12.5px", color: text.faint }}>
            {t("footer.rights", { year, name: profile.name })}
          </p>
          <p style={{ fontSize: "12px", color: text.faint }}>
            {t("footer.builtWith")}{" "}
            <span style={{ color: isLight ? "#047857" : "rgba(167,139,250,0.85)" }}>Next.js</span>
            {" "}·{" "}
            <span style={{ color: isLight ? "#047857" : "rgba(167,139,250,0.85)" }}>TailwindCSS</span>
            {" "}·{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: isLight ? "#047857" : "rgba(167,139,250,0.85)", textDecoration: "none" }}>
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
