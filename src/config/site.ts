/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║               SITE CONFIGURATION — Edit This File           ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  All personalizable content lives here. Change anything     ║
 * ║  in this file and the whole site updates automatically.     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─── PROFILE ───────────────────────────────────────────────────────────────
export const profile = {
  /** Your displayed name */
  name: "Gustavo Gomes",
  /** Full legal name (used in meta/SEO) */
  fullName: "Gustavo Vitor Boaventura Gomes",
  /** Short title shown below name in the hero */
  tagline: "Vibercorder & Content Creator",
  /** A short bio paragraph shown in the hero */
  bio: "Building things for the web and sharing the journey. Follow along for projects, content, and community vibes.",
  /** Show the green "Available for projects" badge? */
  availableForProjects: true,
  /** The letter shown inside the planet orb in the hero */
  orbLetter: "G",
} as const;

// ─── SITE META ─────────────────────────────────────────────────────────────
export const meta = {
  title: "Gustavo VBG — Developer & Content Creator",
  description:
    "Personal portfolio and creator hub of Gustavo Gomes — developer, content creator, and community builder.",
  /** URL of your site (no trailing slash) */
  siteUrl: "https://gustavogomes.vercel.app",
} as const;

// ─── NAVBAR ────────────────────────────────────────────────────────────────
export const navbar = {
  /** Brand name in the top-left */
  brand: "Gustavo VBG",
  /** Navigation links (add/remove freely) */
  links: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "My Sites", href: "#sites" },
    { label: "My Projects", href: "#projects" },
    { label: "Servers", href: "#servers" },
    { label: "Social Media", href: "#connect" },
  ],
  /** Top-right call-to-action button */
  cta: {
    label: "WhatsApp",
    href: "https://wa.me/5575998596215",
  },
} as const;

// ─── THEME ─────────────────────────────────────────────────────────────────
export const theme = {
  /** Main background colour */
  background: "#0a0b14",
  /** Primary accent (purple) */
  accent: "#7c3aed",
  /** Secondary accent (blue) */
  accentSecondary: "#2563eb",
  /** Gradient used for buttons / logo */
  gradientPrimary: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
} as const;

// ─── SOCIAL LINKS ──────────────────────────────────────────────────────────
// Also editable in: src/data/socials.ts
// Format: { id, platform, username, url, color, glowColor, description }
export const socialLinks = [
  {
    id: "discord",
    platform: "Discord",
    username: "_pujin_",
    url: "https://discord.com/users/1082744154544689212",
    color: "#5865F2",
    glowColor: "rgba(88,101,242,0.45)",
    description: "Chat & connect with me",
  },
  {
    id: "youtube",
    platform: "YouTube",
    username: "@nnijup",
    url: "https://www.youtube.com/@nnijup",
    color: "#FF0000",
    glowColor: "rgba(255,0,0,0.4)",
    description: "Videos & content",
  },
  {
    id: "instagram",
    platform: "Instagram",
    username: "@gustavo_vbg",
    url: "https://www.instagram.com/gustavo_vbg/",
    color: "#E1306C",
    glowColor: "rgba(225,48,108,0.4)",
    description: "Photos & stories",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    username: "+55 75 9985-96215",
    url: "https://wa.me/5575998596215",
    color: "#25D366",
    glowColor: "rgba(37,211,102,0.4)",
    description: "Message me directly",
  },
  {
    id: "github",
    platform: "GitHub",
    username: "gustavovitor2004",
    url: "https://github.com/gustavovitor2004",
    color: "#e2e8f0",
    glowColor: "rgba(226,232,240,0.25)",
    description: "Open source projects",
  },
] as const;

// ─── DISCORD SERVERS ───────────────────────────────────────────────────────
// Also editable in: src/data/servers.ts
// To add a server: copy one block, change the values, add a new entry.
// To remove a server: delete the block for that server.
export const discordServerConfig = [
  {
    id: "trophi",
    name: "Trophi",
    description: "O servidor oficial da Trophi. Comunidade, projetos e muito mais — venha fazer parte!",
    memberCount: "Em crescimento",
    inviteUrl: "https://discord.gg/5tMJDxH8vc",
    color: "#7c3aed",
    glowColor: "rgba(124,58,237,0.4)",
  },
] as const;

// ─── SIDEBAR QUICK LINKS ───────────────────────────────────────────────────
// The four shortcuts shown in the sidebar widget.
export const sidebarQuickLinks = [
  {
    id: "ql-links",
    label: "All Important Links",
    desc: "Explore Now",
    href: "/links",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
  },
  {
    id: "ql-downloads",
    label: "Downloads",
    desc: "Get Resources",
    href: "/links",
    gradient: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
  },
  {
    id: "ql-portfolio",
    label: "Portfolio",
    desc: "View My Work",
    href: "#projects",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
  },
  {
    id: "ql-blog",
    label: "Blog",
    desc: "Read Articles",
    href: "#",
    gradient: "linear-gradient(135deg, #059669 0%, #2563eb 100%)",
  },
] as const;

// ─── TOTAL COMMUNITY COUNT ─────────────────────────────────────────────────
/** Shown in the "Active" banner at the bottom of the My Servers widget */
export const totalCommunityMembers = "Em crescimento";
