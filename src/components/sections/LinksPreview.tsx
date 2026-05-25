"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { links } from "@/data/links";
import LinkCard from "@/components/ui/LinkCard";
import SectionTitle from "@/components/ui/SectionTitle";

const featured = links.filter((l) => l.featured).slice(0, 6);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function LinksPreview() {
  const categoryCount = new Set(links.map((l) => l.category)).size;

  return (
    <section id="links" className="py-24 px-4 sm:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionTitle
          badge="LINKS"
          title="Quick Links"
          subtitle="Everything in one place — socials, projects, downloads, and more."
          accentColor="text-cyan-400"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featured.map((link) => (
            <motion.div key={link.id} variants={item}>
              <LinkCard link={link} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — explicitly centered */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="/links"
            className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              padding: "12px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #0891b2, #7c3aed)",
              boxShadow: "0 0 0 1px rgba(6,182,212,0.3), 0 4px 20px rgba(6,182,212,0.15)",
            }}
          >
            View Full Link Hub
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.28)" }}>
            {links.length} links across {categoryCount} categories
          </p>
        </motion.div>
      </div>
    </section>
  );
}
