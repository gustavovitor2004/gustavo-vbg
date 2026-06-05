"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import type { Lang } from "@/i18n/translations";

// Section IDs to watch
const SECTION_IDS = ["home", "about", "sites", "projects", "servers", "connect"];

// Maps each section id to its translation key
const NAV_KEYS: Record<string, string> = {
  home: "nav.home",
  about: "nav.about",
  sites: "nav.sites",
  projects: "nav.projects",
  servers: "nav.servers",
  connect: "nav.social",
};

const SECTION_HREFS: Record<string, string | undefined> = {
  home: undefined, about: undefined, sites: undefined,
  projects: undefined, servers: undefined, connect: undefined,
};

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Scroll state
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scrollspy
  useEffect(() => {
    const ratios: Record<string, number> = {};
    SECTION_IDS.forEach((id) => (ratios[id] = 0));
    const pickMostVisible = () => {
      let best = "", bestRatio = 0;
      SECTION_IDS.forEach((id) => { if (ratios[id] > bestRatio) { bestRatio = ratios[id]; best = id; } });
      if (best) setActive(best);
    };
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { ratios[e.target.id] = e.intersectionRatio; }); pickMostVisible(); },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), rootMargin: "-20% 0px -20% 0px" }
    );
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false); setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isLight = theme === "light";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="pointer-events-auto"
          style={{
            display: "flex", alignItems: "center", gap: "2px",
            padding: "5px 6px 5px 12px", borderRadius: "9999px",
            background: scrolled
              ? (isLight ? "rgba(255,255,255,0.92)" : "rgba(6,8,22,0.92)")
              : (isLight ? "rgba(255,255,255,0.75)" : "rgba(6,8,22,0.6)"),
            border: scrolled
              ? (isLight ? "1px solid rgba(124,58,237,0.25)" : "1px solid rgba(124,58,237,0.28)")
              : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
            boxShadow: scrolled ? "0 4px 36px rgba(0,0,0,0.35)" : "0 2px 20px rgba(0,0,0,0.3)",
            transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
          }}
        >
          {/* Logo */}
          <button onClick={() => handleNav("home")} style={{ display: "flex", alignItems: "center", gap: "7px", marginRight: "6px", background: "none", border: "none", cursor: "pointer", padding: "2px", flexShrink: 0 }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)", boxShadow: "0 2px 12px rgba(124,58,237,0.5)", fontSize: "13px", fontWeight: 900, color: "#fff", flexShrink: 0 }}>G</div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" style={{ position: "relative" }}>
            {SECTION_IDS.map((id) => {
              const isActive = active === id;
              const label = t(NAV_KEYS[id]);
              const href = SECTION_HREFS[id];
              const style: React.CSSProperties = { position: "relative", padding: "6px 12px", borderRadius: "9999px", fontSize: "13px", background: "transparent", border: "none", cursor: "pointer", outline: "none", textDecoration: "none", display: "inline-flex", alignItems: "center" };
              const inner = (
                <>
                  {isActive && (
                    <motion.span layoutId="nav-active-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      style={{ position: "absolute", inset: 0, borderRadius: "9999px", background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.3)", zIndex: 0 }} />
                  )}
                  <span style={{ position: "relative", zIndex: 1, transition: "color 0.2s", color: isActive ? (isLight ? "#5b21b6" : "#fff") : (isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.48)"), fontWeight: isActive ? 600 : 400 }}>{label}</span>
                </>
              );
              if (href) return <Link key={id} href={href} onClick={() => setActive(id)} style={style}>{inner}</Link>;
              return <button key={id} onClick={() => handleNav(id)} style={style}>{inner}</button>;
            })}
          </nav>

          {/* ── Desktop controls ── */}
          <div className="hidden md:flex items-center gap-1 ml-2">
            {/* Resume download */}
            <a
              href="/gustavo-resume.pdf"
              download="Gustavo_Gomes_Resume.pdf"
              title={t("nav.resume")}
              style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "9999px", fontSize: "12px", fontWeight: 600, color: "rgba(167,139,250,0.9)", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", textDecoration: "none", transition: "background 0.2s, box-shadow 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(124,58,237,0.2)"; el.style.boxShadow = "0 0 16px rgba(124,58,237,0.3)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(124,58,237,0.1)"; el.style.boxShadow = "none"; }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              CV
            </a>

            {/* Language picker */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "6px 10px", borderRadius: "9999px", fontSize: "12px", fontWeight: 700, color: isLight ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)"; }}
              >
                <span>{LANGS.find(l => l.code === lang)?.flag}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>{lang.toUpperCase()}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "none" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: isLight ? "rgba(255,255,255,0.97)" : "rgba(6,8,22,0.97)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "14px", padding: "6px", minWidth: "110px", backdropFilter: "blur(28px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", zIndex: 100 }}
                  >
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", padding: "7px 12px", borderRadius: "9px", fontSize: "12px", fontWeight: l.code === lang ? 700 : 500, color: l.code === lang ? "#a78bfa" : (isLight ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"), background: l.code === lang ? "rgba(124,58,237,0.15)" : "transparent", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.15s" }}
                      >
                        <span style={{ fontSize: "14px" }}>{l.flag}</span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={isLight ? t("theme.dark") : t("theme.light")}
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "background 0.2s, transform 0.2s", flexShrink: 0 }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(255,255,255,0.14)"; el.style.transform = "scale(1.1)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(255,255,255,0.07)"; el.style.transform = "scale(1)"; }}
            >
              {isLight ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isLight ? "#5b21b6" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/5575998596215" target="_blank" rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 ml-1"
              style={{ padding: "7px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: 600, color: "#fff", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.35)", textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.2s, border-color 0.2s" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(37,211,102,0.25)"; el.style.borderColor = "rgba(37,211,102,0.6)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(37,211,102,0.15)"; el.style.borderColor = "rgba(37,211,102,0.35)"; }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ color: "#25d366", flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger ml-2"
            style={{ width: "32px", height: "32px", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", flexShrink: 0 }}>
            <span style={{ display: "block", width: "14px", height: "1.5px", background: "rgba(255,255,255,0.75)", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translateY(4.5px)" : "none" }} />
            <span style={{ display: "block", width: "14px", height: "1.5px", background: "rgba(255,255,255,0.75)", borderRadius: "2px", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "14px", height: "1.5px", background: "rgba(255,255,255,0.75)", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-4.5px)" : "none" }} />
          </button>
        </motion.div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} onClick={() => setMenuOpen(false)} />
            <motion.div style={{ position: "absolute", top: "72px", left: "12px", right: "12px", borderRadius: "20px", padding: "10px", display: "flex", flexDirection: "column", gap: "2px", background: "rgba(6,8,22,0.97)", border: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(28px)" }}
              initial={{ y: -10, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -10, opacity: 0, scale: 0.97 }} transition={{ duration: 0.2, ease: "easeOut" as const }}>
              {SECTION_IDS.map((id) => (
                <button key={id} onClick={() => handleNav(id)}
                  style={{ padding: "10px 16px", borderRadius: "12px", fontSize: "14px", color: active === id ? "#fff" : "rgba(255,255,255,0.6)", background: active === id ? "rgba(124,58,237,0.15)" : "transparent", border: "none", cursor: "pointer", textAlign: "left", fontWeight: active === id ? 600 : 400 }}>
                  {t(NAV_KEYS[id])}
                </button>
              ))}
              {/* Mobile controls */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "6px", paddingTop: "8px", display: "flex", gap: "8px", flexWrap: "wrap", padding: "10px 16px" }}>
                {/* Resume */}
                <a href="/gustavo-resume.pdf" download="Gustavo_Gomes_Resume.pdf"
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "12px", fontSize: "13px", fontWeight: 600, color: "#a78bfa", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", textDecoration: "none" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {t("nav.resume")}
                </a>
                {/* Lang + Theme */}
                <div style={{ display: "flex", gap: "8px" }}>
                  {LANGS.map((l) => (
                    <button key={l.code} onClick={() => setLang(l.code)}
                      style={{ padding: "8px 10px", borderRadius: "10px", fontSize: "11px", fontWeight: l.code === lang ? 700 : 500, color: l.code === lang ? "#a78bfa" : "rgba(255,255,255,0.4)", background: l.code === lang ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}>
                      {l.flag} {l.label}
                    </button>
                  ))}
                  <button onClick={toggleTheme}
                    style={{ padding: "8px 10px", borderRadius: "10px", fontSize: "11px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}>
                    {isLight ? "🌙" : "☀️"}
                  </button>
                </div>
              </div>
              {/* WhatsApp */}
              <a href="https://wa.me/5575998596215" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "11px 16px", borderRadius: "12px", fontSize: "14px", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)", textDecoration: "none", margin: "2px 0 0" }}>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
