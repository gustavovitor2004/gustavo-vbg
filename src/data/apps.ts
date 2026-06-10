export interface App {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: "Online" | "Beta" | "WIP";
  demoUrl: string;
  githubUrl?: string;
  gradient: string;
  accentColor: string;
  glowColor: string;
  emoji: string;
}

export const apps: App[] = [
  {
    id: "espacoprime",
    title: "Espaço Prime",
    tagline: "Landing Page",
    description:
      "Business landing page for Espaço Prime with WhatsApp contact integration. Clean, conversion-focused layout built and deployed on Vercel.",
    technologies: ["Next.js", "Vercel", "WhatsApp"],
    status: "Online",
    demoUrl: "https://espacoprime-whatsappgustavo-75998596215.vercel.app",
    gradient: "linear-gradient(140deg, rgba(5,150,105,0.75) 0%, rgba(6,182,212,0.5) 100%)",
    accentColor: "#059669",
    glowColor: "rgba(5,150,105,0.45)",
    emoji: "🏠",
  },
  {
    id: "gridhunter",
    title: "GridHunter",
    tagline: "SaaS Tool",
    description:
      "A powerful SaaS platform built and deployed independently. Designed for performance, automation, and seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    status: "Online",
    demoUrl: "https://gridhunter.vercel.app",
    gradient: "linear-gradient(140deg, rgba(124,58,237,0.75) 0%, rgba(6,182,212,0.5) 100%)",
    accentColor: "#7c3aed",
    glowColor: "rgba(124,58,237,0.45)",
    emoji: "🔍",
  },
];
