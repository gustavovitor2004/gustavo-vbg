"use client";

import { useState } from "react";
import { GitHubIcon } from "@/components/ui/PlatformIcon";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

const techIcons: Record<string, string> = {
  "Node.js": "⚡",
  "React": "⚛",
  "TypeScript": "TS",
  "Next.js": "▲",
  "Fastify": "⚡",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card-shine rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.07)"}`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.12)"
          : "0 4px 20px rgba(0,0,0,0.35)",
      }}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Icon */}
        <div className="relative z-10 text-4xl opacity-50 font-mono font-bold">
          {techIcons[project.technologies[0]] ?? "◈"}
        </div>

        {/* Badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {project.featured ? (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-purple-200 tracking-wide"
              style={{ background: "rgba(109,40,217,0.6)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              Featured
            </span>
          ) : (
            <span />
          )}
          <Badge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-base mb-2 leading-snug">{project.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded font-mono text-white/35"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/55 hover:text-white/90 transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <GitHubIcon size={12} /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "rgba(109,40,217,0.7)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              ↗ Demo
            </a>
          )}
          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-400/80 hover:text-cyan-300 transition-all duration-200"
              style={{ background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.15)" }}
            >
              ≡ Docs
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-400/80 hover:text-emerald-300 transition-all duration-200"
              style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.15)" }}
            >
              ↓ Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
