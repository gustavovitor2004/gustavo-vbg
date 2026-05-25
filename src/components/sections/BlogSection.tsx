"use client";

import { motion, type Variants } from "framer-motion";
import { articles } from "@/data/articles";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function CategoryBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "3px 10px",
        borderRadius: "9999px",
        background: `${color}18`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {label}
    </span>
  );
}

function ReadMoreArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function BlogSection() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.id !== featured.id).slice(0, 3);

  return (
    <section
      id="blog"
      style={{ padding: "100px 0 80px", position: "relative" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#3b82f6",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              BLOG & ARTICLES
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              From the Blog
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(147,197,253,0.75)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#93c5fd"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(147,197,253,0.75)"; }}
          >
            All Articles
            <ReadMoreArrow />
          </a>
        </motion.div>

        {/* Featured article — horizontal card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-shine"
          style={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            marginBottom: "28px",
            minHeight: "280px",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
          whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)", y: -3 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
          }}
        >
          {/* Banner */}
          <div
            className="shrink-0 hidden sm:block relative"
            style={{
              width: "340px",
              background: featured.gradient,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative letter */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-10px",
                fontSize: "180px",
                fontWeight: 900,
                color: "rgba(255,255,255,0.07)",
                lineHeight: 1,
                userSelect: "none",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.05em",
              }}
            >
              {featured.title[0]}
            </div>
            {/* Featured chip */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.14)",
                fontSize: "9px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                backdropFilter: "blur(8px)",
              }}
            >
              FEATURED
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
                <CategoryBadge label={featured.category} color={featured.categoryColor} />
                <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.28)", fontWeight: 500 }}>
                  {featured.publishedAt}
                </span>
                <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.22)" }}>·</span>
                <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.28)", fontWeight: 500 }}>
                  {featured.readTime}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.15rem, 2.2vw, 1.55rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  marginBottom: "14px",
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.75,
                  maxWidth: "600px",
                }}
              >
                {featured.excerpt}
              </p>
            </div>

            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ffffff",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  boxShadow: "0 4px 22px rgba(124,58,237,0.4)",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Read Article
                <ReadMoreArrow />
              </a>
              <div style={{ display: "flex", gap: "5px" }}>
                {featured.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {rest.map((article) => (
            <motion.a
              key={article.id}
              href="#"
              variants={item}
              className="card-shine group"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "18px",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
              }}
              whileHover={{ y: -5, boxShadow: "0 16px 50px rgba(0,0,0,0.5)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Banner */}
              <div
                className="relative shrink-0"
                style={{ height: "140px", background: article.gradient, overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "-8px",
                    fontSize: "100px",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                    userSelect: "none",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {article.title[0]}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <CategoryBadge label={article.category} color={article.categoryColor} />
                </div>

                <h3
                  style={{
                    fontSize: "14.5px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.35,
                    letterSpacing: "-0.015em",
                    marginBottom: "10px",
                    flex: 1,
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.65,
                    marginBottom: "18px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {article.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>
                      {article.publishedAt}
                    </span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)" }}>·</span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>
                      {article.readTime}
                    </span>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11.5px",
                      fontWeight: 600,
                      color: "rgba(167,139,250,0.7)",
                      transition: "color 0.2s",
                    }}
                    className="group-hover:opacity-100"
                  >
                    Read
                    <ReadMoreArrow />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
