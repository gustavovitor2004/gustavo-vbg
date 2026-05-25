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
  tagline: "Developer & Content Creator",
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
  /** URL of your site once deployed (no trailing slash) */
  siteUrl: "https://gustavo-vbg.vercel.app",
} as const;

// ─── NAVBAR ────────────────────────────────────────────────────────────────
export const navbar = {
  /** Brand name in the top-left */
  brand: "Gustavo VBG",
  /** Navigation links (add/remove freely) */
  links: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Servers", href: "#servers" },
    { label: "Links", href: "/links" },
  ],
  /** Top-right call-to-action button */
  cta: {
    label: "Get in Touch",
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
    username: "gustavo.vbg",
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
    id: "main-community",
    name: "YourName Community",
    description: "The main hub for everything I create. Hang out, get support, and vibe with the community.",
    memberCount: "2,400+",
    /**
     * Get your invite link at: discord.com → your server → Invite People → Copy link
     */
    inviteUrl: "https://discord.gg/yourserver",
    /** Hex colour for the server icon background */
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.4)",
  },
  {
    id: "dev-hub",
    name: "Dev & Coding Hub",
    description: "For developers and programmers of all levels. Share code, ask questions, and level up.",
    memberCount: "1,800+",
    inviteUrl: "https://discord.gg/devhub",
    color: "#3b82f6",
    glowColor: "rgba(59,130,246,0.4)",
  },
  {
    id: "gaming",
    name: "Gaming Zone",
    description: "Play games, find teammates, and compete in community tournaments. All games welcome!",
    memberCount: "950+",
    inviteUrl: "https://discord.gg/gamingzone",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    id: "creative",
    name: "Creative Studio",
    description: "A space for designers, artists, and content creators. Share your work, get feedback.",
    memberCount: "720+",
    inviteUrl: "https://discord.gg/creativestudio",
    color: "#ec4899",
    glowColor: "rgba(236,72,153,0.4)",
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
export const totalCommunityMembers = "5,870+";
