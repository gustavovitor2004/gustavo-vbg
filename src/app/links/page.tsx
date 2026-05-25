"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import LinkCard from "@/components/ui/LinkCard";
import { links, linkCategories } from "@/data/links";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function LinksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = links.filter((l) => {
    const matchCategory = activeCategory === "All" || l.category === activeCategory;
    const matchSearch =
      !search ||
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-[#030712] text-white">
        {/* Background */}
        <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="fixed top-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="fixed bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />

        <div className="relative max-w-2xl mx-auto px-4 py-16">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-4xl font-black text-white mx-auto mb-4 shadow-glow-purple animate-float">
              ✦
            </div>

            <h1 className="text-3xl font-black text-white mb-2">
              <span className="gradient-text">YourName</span>
            </h1>
            <p className="text-white/50 mb-1">Developer & Creator</p>
            <div className="flex items-center justify-center gap-2 text-xs text-white/30">
              <span className="badge-pulse w-1.5 h-1.5 rounded-full bg-green-400 relative" />
              <span>Available for collaboration</span>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search links..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full glass border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white/80 placeholder-white/25 focus:border-purple-500/40 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* Category filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {linkCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-glow-purple"
                    : "glass border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
                <span className="ml-1 text-[10px] opacity-60">
                  ({cat === "All" ? links.length : links.filter((l) => l.category === cat).length})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Links grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              className="flex flex-col gap-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filtered.length > 0 ? (
                filtered.map((link) => (
                  <motion.div key={link.id} variants={item}>
                    <LinkCard link={link} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="text-center text-white/30 py-12 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No links found.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <motion.div
            className="text-center mt-12 text-white/20 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© {new Date().getFullYear()} YourName</p>
            <Link href="/" className="hover:text-white/50 transition-colors">
              View full portfolio →
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
