export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  color: string;
  badge?: string;
  featured?: boolean;
}

export const linkCategories = [
  "All",
  "Social",
  "Projects",
  "Community",
  "Downloads",
  "Resources",
] as const;

export const links: LinkItem[] = [
  // Social
  {
    id: "discord-profile",
    title: "Discord Profile",
    description: "Add me on Discord",
    url: "https://discord.com/users/yourname",
    icon: "discord",
    category: "Social",
    color: "#5865F2",
    featured: true,
  },
  {
    id: "youtube",
    title: "YouTube Channel",
    description: "Subscribe for videos",
    url: "https://youtube.com/@YourChannel",
    icon: "youtube",
    category: "Social",
    color: "#FF0000",
    badge: "1.2K subs",
    featured: true,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Check out my open source work",
    url: "https://github.com/yourname",
    icon: "github",
    category: "Social",
    color: "#ffffff",
  },
  {
    id: "twitter",
    title: "Twitter / X",
    description: "Follow for updates",
    url: "https://x.com/yourname",
    icon: "twitter",
    category: "Social",
    color: "#ffffff",
  },
  // Projects
  {
    id: "creatorhub-bot",
    title: "CreatorHub Bot",
    description: "The ultimate Discord bot",
    url: "https://creatorhub-bot.xyz",
    icon: "bot",
    category: "Projects",
    color: "#a855f7",
    badge: "Online",
    featured: true,
  },
  {
    id: "bot-docs",
    title: "Bot Documentation",
    description: "Full docs for CreatorHub Bot",
    url: "https://docs.creatorhub-bot.xyz",
    icon: "book",
    category: "Resources",
    color: "#06b6d4",
  },
  // Community
  {
    id: "main-server",
    title: "Main Discord Server",
    description: "Join the community",
    url: "https://discord.gg/yourserver",
    icon: "users",
    category: "Community",
    color: "#a855f7",
    badge: "2.4K members",
    featured: true,
  },
  {
    id: "dev-server",
    title: "Dev Hub Discord",
    description: "Programming community",
    url: "https://discord.gg/devhub",
    icon: "code",
    category: "Community",
    color: "#3b82f6",
    badge: "1.8K members",
  },
  // Downloads
  {
    id: "stream-alerts-download",
    title: "StreamAlert Overlay",
    description: "Download the overlay app",
    url: "https://github.com/yourname/stream-alerts/releases",
    icon: "download",
    category: "Downloads",
    color: "#ec4899",
    badge: "Free",
  },
  {
    id: "ui-lib",
    title: "UI Component Library",
    description: "Install via npm",
    url: "https://www.npmjs.com/package/@yourname/ui",
    icon: "package",
    category: "Downloads",
    color: "#f97316",
    badge: "npm",
  },
  // Resources
  {
    id: "portfolio-source",
    title: "Portfolio Source Code",
    description: "This site's source on GitHub",
    url: "https://github.com/yourname/portfolio",
    icon: "github",
    category: "Resources",
    color: "#ffffff",
  },
  {
    id: "email",
    title: "Business Email",
    description: "Contact for collab/sponsorships",
    url: "mailto:business@yourname.dev",
    icon: "mail",
    category: "Resources",
    color: "#22c55e",
    featured: true,
  },
];
