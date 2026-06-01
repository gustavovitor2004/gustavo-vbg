"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "@/config/site";

// Section IDs to watch (only hash-based links)
const SECTION_IDS = ["home", "projects", "blog", "servers"];

const navLinks = navbar.links.map((l) => ({
  label: l.label,
  id: l.href.replace(/^#/, "").replace(/^\//, ""),
  href: l.href.startsWith("/") ? l.href : undefined,
}));

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Scroll state (background change) ──────────────────────────────────────
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // ── Scrollspy — Intersection Observer ─────────────────────────────────────
  // Strategy: track which section has the highest intersection ratio at any
  // given moment. Most-visible section wins. Falls back to topmost visible
  // when ratios are equal (e.g. on very tall sections).
  useEffect(() => {
    // Map: sectionId → current intersection ratio
    const ratios: Record<string, number> = {};
    SECTION_IDS.forEach((id) => (ratios[id] = 0));

    // Pick the section with the highest visible ratio.
    // Tiebreak: topmost section in the DOM wins (lower index = higher priority).
    const pickMostVisible = () => {
      let best = "";
      let bestRatio = 0;
      SECTION_IDS.forEach((id) => {
        if (ratios[id] > bestRatio) {
          bestRatio = ratios[id];
          best = id;
        }
      });
      if (best) setActive(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });
        pickMostVisible();
      },
      {
        // 21 thresholds from 0 to 1 in 0.05 steps — gives smooth updates
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
        // Shrink the observation zone: only count the middle 60 % of viewport.
        // Sections outside this band count as 0 % visible.
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Click navigation ───────────────────────────────────────────────────────
  const handleNav = (id: string) => {
    setMenuOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Floating pill */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="pointer-events-auto"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "5px 6px 5px 12px",
            borderRadius: "9999px",
            background: scrolled
              ? "rgba(6, 8, 22, 0.92)"
              : "rgba(6, 8, 22, 0.6)",
            border: scrolled
              ? "1px solid rgba(124,58,237,0.28)"
              : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: scrolled
              ? "0 4px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,58,237,0.08)"
              : "0 2px 20px rgba(0,0,0,0.4)",
            transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
          }}
        >
          {/* Brand logo */}
          <button
            onClick={() => handleNav("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              marginRight: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 2px 12px rgba(124,58,237,0.5)",
                fontSize: "13px",
                fontWeight: 900,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {navbar.brand[0]}
            </div>
          </button>

          {/* Desktop links — with Framer Motion sliding active pill */}
          <nav
            className="hidden md:flex items-center"
            style={{ position: "relative" }}
          >
            {navLinks.map((link) => {
              const isActive = active === link.id;

              const inner = (
                <>
                  {/* Sliding background pill — layoutId makes it animate between items */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        background: "rgba(124,58,237,0.18)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span
                    style={{
                      position: "relative",
                      zIndex: 1,
                      transition: "color 0.2s",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.48)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {link.label}
                  </span>
                </>
              );

              const sharedStyle: React.CSSProperties = {
                position: "relative",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                overflow: "visible",
              };

              if (link.href) {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setActive(link.id)}
                    style={sharedStyle}
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  style={sharedStyle}
                >
                  {inner}
                </button>
              );
            })}
          </nav>

          {/* CTA — WhatsApp */}
          <a
            href={navbar.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5"
            style={{
              marginLeft: "6px",
              padding: "7px 16px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              background: "rgba(37,211,102,0.15)",
              border: "1px solid rgba(37,211,102,0.35)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(37,211,102,0.25)";
              el.style.borderColor = "rgba(37,211,102,0.6)";
              el.style.boxShadow = "0 0 18px rgba(37,211,102,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(37,211,102,0.15)";
              el.style.borderColor = "rgba(37,211,102,0.35)";
              el.style.boxShadow = "none";
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" style={{ color: "#25d366", flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {navbar.cta.label}
          </a>

          {/* Mobile hamburger — visível APENAS em mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden ml-2"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1.5px",
                background: "rgba(255,255,255,0.75)",
                borderRadius: "2px",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(45deg) translateY(4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1.5px",
                background: "rgba(255,255,255,0.75)",
                borderRadius: "2px",
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1.5px",
                background: "rgba(255,255,255,0.75)",
                borderRadius: "2px",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(-45deg) translateY(-4.5px)" : "none",
              }}
            />
          </button>
        </motion.div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Panel */}
            <motion.div
              style={{
                position: "absolute",
                top: "72px",
                left: "12px",
                right: "12px",
                borderRadius: "20px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                background: "rgba(6,8,22,0.97)",
                border: "1px solid rgba(124,58,237,0.2)",
                backdropFilter: "blur(28px)",
              }}
              initial={{ y: -10, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
            >
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      background: active === link.id ? "rgba(124,58,237,0.15)" : "transparent",
                      transition: "background 0.15s",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      color: active === link.id ? "#fff" : "rgba(255,255,255,0.6)",
                      background: active === link.id ? "rgba(124,58,237,0.15)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s, color 0.15s",
                    }}
                  >
                    {link.label}
                  </button>
                )
              )}
              {/* CTA */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "6px", paddingTop: "8px" }}>
                <a
                  href={navbar.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#fff",
                    background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                    textDecoration: "none",
                  }}
                >
                  {navbar.cta.label}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
