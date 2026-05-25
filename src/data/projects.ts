export type ProjectStatus = "Online" | "WIP" | "Finished" | "Beta" | "Archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  downloadUrl?: string;
  featured?: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "CreatorHub Bot",
    description: "A powerful Discord bot for community management with auto-moderation, leveling, giveaways, and custom commands.",
    thumbnail: "/projects/project1.png",
    technologies: ["Node.js", "Discord.js", "MongoDB", "Redis"],
    status: "Online",
    githubUrl: "https://github.com/yourname/creatorhub-bot",
    demoUrl: "https://creatorhub-bot.xyz",
    docsUrl: "https://docs.creatorhub-bot.xyz",
    featured: true,
    gradient: "from-purple-600/20 to-cyan-600/20",
  },
  {
    id: "project-2",
    title: "Portfolio Generator",
    description: "An open-source CLI tool that scaffolds beautiful portfolio websites from a simple YAML config file.",
    thumbnail: "/projects/project2.png",
    technologies: ["TypeScript", "Node.js", "React", "TailwindCSS"],
    status: "WIP",
    githubUrl: "https://github.com/yourname/portfolio-gen",
    featured: true,
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    id: "project-3",
    title: "StreamAlert Overlay",
    description: "Real-time stream alert overlays for Twitch and YouTube with customizable themes and animations.",
    thumbnail: "/projects/project3.png",
    technologies: ["React", "WebSockets", "CSS Animations", "Electron"],
    status: "Beta",
    githubUrl: "https://github.com/yourname/stream-alerts",
    demoUrl: "https://stream-alerts.xyz",
    downloadUrl: "https://github.com/yourname/stream-alerts/releases",
    featured: true,
    gradient: "from-pink-600/20 to-purple-600/20",
  },
  {
    id: "project-4",
    title: "DevDash",
    description: "A personal developer dashboard with GitHub stats, task tracking, Pomodoro timer, and quick links.",
    thumbnail: "/projects/project4.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    status: "Finished",
    githubUrl: "https://github.com/yourname/devdash",
    demoUrl: "https://devdash.yourname.dev",
    docsUrl: "https://docs.devdash.yourname.dev",
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    id: "project-5",
    title: "NexusAPI",
    description: "A RESTful API boilerplate with auth, rate limiting, caching, and full documentation out of the box.",
    thumbnail: "/projects/project5.png",
    technologies: ["Fastify", "TypeScript", "Redis", "Docker"],
    status: "Finished",
    githubUrl: "https://github.com/yourname/nexus-api",
    docsUrl: "https://docs.nexusapi.dev",
    downloadUrl: "https://github.com/yourname/nexus-api/releases",
    gradient: "from-emerald-600/20 to-cyan-600/20",
  },
  {
    id: "project-6",
    title: "UI Components Library",
    description: "An open-source React component library with dark mode, animations, and full TypeScript support.",
    thumbnail: "/projects/project6.png",
    technologies: ["React", "TypeScript", "Storybook", "Framer Motion"],
    status: "WIP",
    githubUrl: "https://github.com/yourname/ui-lib",
    demoUrl: "https://ui.yourname.dev",
    gradient: "from-orange-600/20 to-pink-600/20",
  },
];
