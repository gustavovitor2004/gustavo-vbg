"use client";

import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.44, ease: "easeOut" as const } },
};

const statusConfig: Record<string, { bg: string; color: string; pulse?: boolean }> = {
  Online:   { bg: "rgba(16,185,129,0.15)",  color: "#34d399", pulse: true },
  WIP:      { bg: "rgba(245,158,11,0.15)",  color: "#fbbf24" },
  Beta:     { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa" },
  Finished: { bg: "rgba(124,58,237,0.15)", color: "#a78bfa" },
  Archived: { bg: "rgba(107,114,128,0.12)", color: "#9ca3af" },
};

const bannerGradient: Record<string, string> = {
  "project-1": "linear-gradient(135deg, rgba(124,58,237,0.55) 0%, rgba(6,182,212,0.35) 100%)",
  "project-2": "linear-gradient(135deg, rgba(37,99,235,0.55) 0%, rgba(124,58,237,0.35) 100%)",
  "project-3": "linear-gradient(135deg, rgba(219,39,119,0.55) 0%, rgba(124,58,237,0.35) 100%)",
  "project-4": "linear-gradient(135deg, rgba(6,182,212,0.55) 0%, rgba(37,99,235,0.35) 100%)",
  "project-5": "linear-gradient(135deg, rgba(5,150,105,0.55) 0%, rgba(6,182,212,0.35) 100%)",
  "project-6": "linear-gradient(135deg, rgba(234,88,12,0.55) 0%, rgba(219,39,119,0.35) 100%)",
};

const fallbackBanner = "linear-gradient(135deg, rgba(124,58,237,0.45), rgba(37,99,235,0.32))";

export default function ProjectsSection() {
  return (
    <section id="projects" className="pb-6">
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-white font-bold text-sm" style={{ letterSpacing: "-0.01em" }}>
          My Projects
        </h2>
        <Link
          href="/links"
          className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: "rgba(167,139,250,0.75)", textDecoration: "none" }}
        >
          View all projects
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => {
          const status = statusConfig[project.status] ?? statusConfig.Archived;
          const bg = bannerGradient[project.id] ?? fallbackBanner;

          return (
            <motion.div
              key={project.id}
              variants={item}
              className="group rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer",
                transition: "border-color 0.22s, box-shadow 0.22s, transform 0.22s",
              }}
              whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              {/* Banner */}
              <div className="relative" style={{ height: "118px", background: bg }}>
                {project.featured && (
                  <span
                    className="absolute top-2.5 left-2.5 font-bold uppercase tracking-wider"
                    style={{
                      fontSize: "9px",
                      padding: "3px 8px",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.13)",
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    FEATURED
                  </span>
                )}
                <span
                  className="absolute top-2.5 right-2.5 font-bold uppercase tracking-wider flex items-center gap-1"
                  style={{
                    fontSize: "9px",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    background: status.bg,
                    color: status.color,
                  }}
                >
                  {status.pulse && (
                    <span
                      className="animate-pulse"
                      style={{
                        display: "block",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: status.color,
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "14px 16px 16px" }}>
                <h3 className="text-white font-bold" style={{ fontSize: "13px", marginBottom: "5px" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "rgba(255,255,255,0.36)",
                    marginBottom: "12px",
                    lineHeight: 1.55,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "10px",
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.38)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
