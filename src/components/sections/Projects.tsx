"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import type { ProjectStatus } from "@/data/projects";

const statuses: (ProjectStatus | "All")[] = ["All", "Online", "WIP", "Beta", "Finished", "Archived"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectStatus | "All">("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionTitle
          badge="PORTFOLIO"
          title="My Projects"
          subtitle="A collection of tools, apps, and experiments I've built — some polished, some in progress."
        />

        {/* Filter tabs — centered with w-full flex justify-center */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className="text-sm font-medium transition-all duration-200"
              style={{
                padding: "6px 16px",
                borderRadius: "9999px",
                background:
                  filter === status
                    ? "rgba(124,58,237,0.85)"
                    : "rgba(255,255,255,0.05)",
                border:
                  filter === status
                    ? "1px solid rgba(139,92,246,0.4)"
                    : "1px solid rgba(255,255,255,0.09)",
                color: filter === status ? "#fff" : "rgba(255,255,255,0.5)",
                boxShadow:
                  filter === status
                    ? "0 0 14px rgba(124,58,237,0.3)"
                    : "none",
              }}
            >
              {status}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          key={filter}
        >
          {filtered.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "rgba(255,255,255,0.25)" }}>
            <p>No projects with this status yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
