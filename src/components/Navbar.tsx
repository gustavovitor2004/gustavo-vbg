"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Socials", id: "connect" },
  { label: "Projects", id: "projects" },
  { label: "Servers", id: "servers" },
  { label: "Links", id: "links", href: "/links" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
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
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,11,20,0.96)" : "rgba(10,11,20,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 2px 10px rgba(124,58,237,0.4)",
              }}
            >
              N
            </div>
            <span className="font-bold text-white text-sm tracking-tight">Gustavo VBG</span>
          </button>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              if (link.href) {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setActive(link.id)}
                    className="relative px-3.5 py-1.5 text-sm rounded-lg transition-colors duration-200"
                    style={{
                      color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full"
                        style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
                      />
                    )}
                  </Link>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="relative px-3.5 py-1.5 text-sm rounded-lg transition-colors duration-200"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <button
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-white rounded-xl shrink-0 transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              padding: "8px 18px",
              background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
              boxShadow: "0 0 20px rgba(124,58,237,0.35), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Get in Touch
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <span
              className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none" }}
            />
            <span
              className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-4 h-px bg-white/70 transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
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
              className="absolute top-16 left-4 right-4 rounded-2xl p-3 flex flex-col gap-1"
              style={{
                background: "rgba(10,11,20,0.97)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm transition-all"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm transition-all"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </button>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
