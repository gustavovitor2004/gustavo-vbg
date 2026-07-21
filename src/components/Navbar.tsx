"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { smoothScrollTo } from "@/lib/smoothScroll";

const SECTION_IDS = ["hero", "work", "about", "community", "contact"];

const LANGS = [
  { code: "en" as const, label: "EN" },
  { code: "pt" as const, label: "PT" },
  { code: "es" as const, label: "ES" },
];

export default function Navbar() {
  const { lang, setLang, t, toggleTheme } = useApp();
  const { isLight, surface } = useThemeTokens();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const activeSection = useScrollSpy(isHome ? SECTION_IDS : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  type NavItem = { label: string; anchor?: string; href?: string };
  const navItems: NavItem[] = [
    { label: t("nav.work"), anchor: "work" },
    { label: t("nav.about"), anchor: "about" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), anchor: "contact" },
  ];

  function getHref(item: NavItem): string {
    if (item.href) return item.href;
    return isHome ? `#${item.anchor}` : `/#${item.anchor}`;
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) {
    if (item.anchor && isHome) {
      e.preventDefault();
      smoothScrollTo(item.anchor);
    }
    setMobileOpen(false);
  }

  function isActive(item: NavItem): boolean {
    if (item.href) return pathname === item.href;
    return !!item.anchor && activeSection === item.anchor;
  }

  const navBg = scrolled
    ? isLight
      ? "rgba(245,241,235,0.88)"
      : "rgba(9,9,9,0.88)"
    : "transparent";

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = "0"; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = "-40px"; }}
        style={{
          position: "absolute",
          top: "-40px",
          left: 0,
          background: "var(--accent)",
          color: "var(--text-on-accent)",
          padding: "8px 16px",
          zIndex: 10001,
          fontSize: "13px",
          fontWeight: 600,
          textDecoration: "none",
          transition: "top 0.2s",
        }}
      >
        {t("aria.skipToContent")}
      </a>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "56px",
          zIndex: 1000,
          background: navBg,
          backdropFilter: scrolled ? "blur(12px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px) saturate(1.4)" : "none",
          borderBottom: scrolled ? `1px solid ${surface.border}` : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <nav
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 48px)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "17px",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            GG
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2px" }}>
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <a
                  key={item.label}
                  href={getHref(item)}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--text-primary)" : "var(--text-muted)",
                    textDecoration: "none",
                    position: "relative",
                    transition: "color 0.2s",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  }}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "1px",
                        left: "14px",
                        right: "14px",
                        height: "1px",
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {/* Language dropdown */}
            <div ref={langRef} style={{ position: "relative" }}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                aria-label={`Language: ${lang.toUpperCase()}`}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                style={{
                  padding: "6px 10px",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
              >
                {lang.toUpperCase()}
              </button>
              {langOpen && (
                <div
                  role="listbox"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    right: 0,
                    background: surface.card,
                    border: `1px solid ${surface.border}`,
                    minWidth: "72px",
                    zIndex: 100,
                  }}
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      role="option"
                      aria-selected={l.code === lang}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "10px",
                        fontWeight: l.code === lang ? 700 : 500,
                        color: l.code === lang ? "var(--accent)" : "var(--text-muted)",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.08em",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        if (l.code !== lang) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        if (l.code !== lang) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label={t("aria.toggleTheme")}
              style={{
                padding: "6px 8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
            >
              {isLight ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? t("aria.closeMenu") : t("aria.openMenu")}
              aria-expanded={mobileOpen}
              style={{
                padding: "6px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                marginLeft: "2px",
              }}
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--page-bg)",
            display: "flex",
            flexDirection: "column",
            padding: "76px clamp(20px, 6vw, 48px) 48px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <a
                  key={item.label}
                  href={getHref(item)}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    padding: "18px 0",
                    fontSize: "clamp(2rem, 9vw, 3rem)",
                    fontWeight: 800,
                    color: active ? "var(--accent)" : "var(--text-primary)",
                    textDecoration: "none",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    borderBottom: `1px solid ${surface.border}`,
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div style={{ marginTop: "auto", display: "flex", gap: "12px", alignItems: "center" }}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  padding: "4px 8px",
                  fontSize: "11px",
                  fontWeight: l.code === lang ? 700 : 500,
                  color: l.code === lang ? "var(--accent)" : "var(--text-faint)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
