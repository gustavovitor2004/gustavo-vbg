"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "@/config/site";

const navLinks = navbar.links.map((l) => ({
  label: l.label,
  id: l.href.replace(/^#/, "").replace(/^\//, ""),
  href: l.href.startsWith("/") ? l.href : undefined,
}));

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (id: string, href?: string) => {
    setMenuOpen(false);
    setActive(id);
    if (!href) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "6px 8px 6px 14px",
            borderRadius: "9999px",
            background: scrolled
              ? "rgba(8,10,26,0.88)"
              : "rgba(8,10,26,0.55)",
            border: scrolled
              ? "1px solid rgba(124,58,237,0.22)"
              : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)"
              : "0 2px 20px rgba(0,0,0,0.35)",
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 shrink-0 mr-2"
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 2px 10px rgba(124,58,237,0.45)",
                fontSize: "12px",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              {navbar.brand[0]}
            </div>
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              const style: React.CSSProperties = {
                position: "relative",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                background: isActive ? "rgba(124,58,237,0.15)" : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.18s",
                textDecoration: "none",
              };

              if (link.href) {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setActive(link.id)}
                    style={style}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  style={style}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA pill button */}
          <a
            href={navbar.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 ml-2"
            style={{
              padding: "7px 16px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
              boxShadow: "0 2px 14px rgba(124,58,237,0.45)",
              textDecoration: "none",
              transition: "opacity 0.18s, transform 0.18s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            {navbar.cta.label}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-1 w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <span className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
            <span className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
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
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 rounded-2xl p-3 flex flex-col gap-1"
              style={{
                background: "rgba(8,10,26,0.97)",
                border: "1px solid rgba(124,58,237,0.18)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ y: -10, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </button>
                )
              )}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "4px", paddingTop: "8px" }}>
                <a
                  href={navbar.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                  onClick={() => setMenuOpen(false)}
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
