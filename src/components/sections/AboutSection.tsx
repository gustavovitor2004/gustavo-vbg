"use client";

import { motion, type Variants } from "framer-motion";
import GitHubActivity from "@/components/GitHubActivity";
import { useApp } from "@/context/AppContext";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { profile } from "@/config/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SKILL_KEYS = ["python", "it", "discord", "web", "linux", "nextjs"] as const;
const SKILL_COLORS: Record<(typeof SKILL_KEYS)[number], { color: string; glow: string; icon: string }> = {
  python: { icon: "🐍", color: "#f59e0b", glow: "rgba(245,158,11,0.2)" },
  it: { icon: "🖥️", color: "#3b82f6", glow: "rgba(59,130,246,0.2)" },
  discord: { icon: "🤖", color: "#5865f2", glow: "rgba(88,101,242,0.2)" },
  web: { icon: "🌐", color: "#06b6d4", glow: "rgba(6,182,212,0.2)" },
  linux: { icon: "🐧", color: "#22c55e", glow: "rgba(34,197,94,0.2)" },
  nextjs: { icon: "⚡", color: "#a855f7", glow: "rgba(168,85,247,0.2)" },
};

const LANGUAGE_KEYS = ["pt", "en"] as const;
const LANGUAGE_META: Record<(typeof LANGUAGE_KEYS)[number], { pct: number; color: string }> = {
  pt: { pct: 100, color: "#22c55e" },
  en: { pct: 80, color: "#3b82f6" },
};

const STACK_GROUPS = [
  { key: "about.stack.frontend", color: "#7c3aed", pills: ["HTML5", "CSS3", "JavaScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { key: "about.stack.backend", color: "#06b6d4", pills: ["Node.js", "Discord.js v14", "Python", "PM2", "REST APIs"] },
  { key: "about.stack.automation", color: "#22c55e", pills: ["Python Scripts", "JS Automation", "Custom Clickers", "Workflow Tools"] },
  { key: "about.stack.infra", color: "#f59e0b", pills: ["Git", "GitHub", "Linux / Debian", "Ubuntu", "VPS", "Nginx", "VS Code"] },
] as const;

const EXPERIENCE_KEYS = ["freelance", "it", "trophi"] as const;
const EXPERIENCE_META: Record<(typeof EXPERIENCE_KEYS)[number], { color: string; bulletCount: number }> = {
  freelance: { color: "#7c3aed", bulletCount: 3 },
  it: { color: "#06b6d4", bulletCount: 3 },
  trophi: { color: "#a855f7", bulletCount: 3 },
};

export default function AboutSection() {
  const { t } = useApp();
  const { text, surface } = useThemeTokens();

  const stats = [
    { value: "5+", labelKey: "about.stat.sites", color: "#a78bfa" },
    { value: "2+", labelKey: "about.stat.it", color: "#60a5fa" },
    { value: "5th", labelKey: "about.stat.semester", color: "#34d399" },
    { value: "200%", labelKey: "about.stat.automation", color: "#f59e0b" },
  ];

  return (
    <section id="about" style={{ padding: "100px 0 80px", position: "relative" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 60% at 80% 40%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "56px" }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#a855f7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            {t("about.label")}
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: text.primary, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            {t("about.title")}
          </h2>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start", marginBottom: "64px" }}
          className="about-grid"
        >
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: "15px", color: text.muted, lineHeight: 1.9, marginBottom: "20px" }}>
              {t("about.bio.p1", { name: profile.name, semester: t("about.bio.semester") })}
            </p>

            <p style={{ fontSize: "15px", color: text.muted, lineHeight: 1.9, marginBottom: "20px" }}>
              {t("about.bio.p2", { years: "2+" })}
            </p>

            <p style={{ fontSize: "15px", color: text.faint, lineHeight: 1.9, marginBottom: "32px" }}>
              {t("about.bio.p3", { brand: "Trophi.gg" })}
            </p>

            <div style={{ padding: "24px", borderRadius: "16px", background: surface.card, border: `1px solid ${surface.border}` }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: text.faint, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
                {t("about.lang.title")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {LANGUAGE_KEYS.map((langKey) => {
                  const meta = LANGUAGE_META[langKey];
                  return (
                    <div key={langKey}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: text.primary }}>{t(`about.lang.${langKey}.name`)}</span>
                        <span style={{ fontSize: "11px", color: text.faint }}>{t(`about.lang.${langKey}.level`)}</span>
                      </div>
                      <div style={{ height: "4px", borderRadius: "9999px", background: surface.border }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${meta.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
                          style={{ height: "100%", borderRadius: "9999px", background: meta.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div className="about-quick-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
              {stats.map((s) => (
                <div key={s.labelKey} style={{ padding: "20px", borderRadius: "14px", background: surface.card, border: `1px solid ${surface.border}`, textAlign: "center" }}>
                  <p style={{ fontSize: "26px", fontWeight: 900, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: "10.5px", color: text.faint, marginTop: "6px", lineHeight: 1.4, fontWeight: 500 }}>{t(s.labelKey)}</p>
                </div>
              ))}
            </div>

            <div style={{ padding: "20px 24px", borderRadius: "14px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{ fontSize: "22px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📍</span>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
                  {t("about.currently")}
                </p>
                <p style={{ fontSize: "13.5px", color: text.muted, lineHeight: 1.6 }}>
                  {t("about.currently.text").split("Trophi.gg")[0]}
                  <strong style={{ color: "var(--accent-highlight)" }}>Trophi.gg</strong>
                  {t("about.currently.text").split("Trophi.gg")[1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILL_KEYS.map((key) => {
            const meta = SKILL_COLORS[key];
            return (
              <motion.div
                key={key}
                variants={item}
                className="card-shine"
                style={{ padding: "22px 24px", borderRadius: "16px", background: surface.card, border: `1px solid ${surface.border}`, display: "flex", alignItems: "flex-start", gap: "16px", transition: "border-color 0.25s, box-shadow 0.25s" }}
                whileHover={{ y: -3, boxShadow: `0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px ${meta.color}22` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.color}30`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = surface.border; }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: meta.glow, border: `1px solid ${meta.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                  {meta.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "13.5px", fontWeight: 700, color: text.primary, marginBottom: "5px", letterSpacing: "-0.01em" }}>
                    {t(`about.skill.${key}.title`)}
                  </p>
                  <p style={{ fontSize: "12px", color: text.faint, lineHeight: 1.6 }}>{t(`about.skill.${key}.desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <GitHubActivity />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginTop: "64px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#a855f7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            {t("about.stack.label")}
          </p>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: text.primary, marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {t("about.stack.title")}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {STACK_GROUPS.map((group) => (
              <div key={group.key}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: group.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {t(group.key)}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      style={{ padding: "5px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: 500, color: text.muted, background: `${group.color}12`, border: `1px solid ${group.color}25`, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.01em", transition: "background 0.2s, color 0.2s", cursor: "default" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = `${group.color}22`;
                        el.style.color = text.onAccent;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = `${group.color}12`;
                        el.style.color = text.muted;
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }} style={{ marginTop: "64px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#06b6d4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            {t("about.exp.label")}
          </p>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: text.primary, marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {t("about.exp.title")}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {EXPERIENCE_KEYS.map((key) => {
              const meta = EXPERIENCE_META[key];
              const bullets = Array.from({ length: meta.bulletCount }, (_, i) => t(`exp.${key}.bullet.${i}`));
              return (
                <div
                  key={key}
                  className="card-shine"
                  style={{ padding: "24px 28px", borderRadius: "16px", background: surface.card, border: `1px solid ${surface.border}`, borderLeft: `3px solid ${meta.color}`, transition: "box-shadow 0.25s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px ${meta.color}22`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 700, color: text.primary, letterSpacing: "-0.01em" }}>{t(`exp.${key}.role`)}</p>
                      <p style={{ fontSize: "12px", color: meta.color, fontWeight: 600, marginTop: "2px" }}>{t(`exp.${key}.co`)}</p>
                    </div>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: text.faint, padding: "3px 10px", borderRadius: "9999px", background: surface.border, border: `1px solid ${surface.border}`, whiteSpace: "nowrap", fontFamily: "'JetBrains Mono', monospace" }}>
                      {t(`exp.${key}.period`)}
                    </span>
                  </div>
                  <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "0", listStyle: "none" }}>
                    {bullets.map((b, bi) => (
                      <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: text.muted, lineHeight: 1.6 }}>
                        <span style={{ color: meta.color, flexShrink: 0, marginTop: "4px", fontSize: "8px" }}>▶</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
