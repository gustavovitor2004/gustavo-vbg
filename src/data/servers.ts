export interface DiscordServer {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  icon: string;
  banner?: string;
  memberCount: string;
  onlineCount?: string;
  category: string;
  tags: string[];
  inviteUrl: string;
  color: string;
  glowColor: string;
  verified?: boolean;
  partnered?: boolean;
  featured?: boolean;
}

export const discordServers: DiscordServer[] = [
  {
    id: "main-community",
    name: "YourName Community",
    description: "The main hub for everything I create. Hang out, get support, share your projects, and vibe with the community.",
    icon: "/servers/server1.png",
    memberCount: "2,400+",
    onlineCount: "340",
    category: "General Community",
    tags: ["Community", "Chat", "Gaming", "Dev"],
    inviteUrl: "https://discord.gg/yourserver",
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.4)",
    verified: true,
    featured: true,
  },
  {
    id: "dev-hub",
    name: "Dev & Coding Hub",
    description: "A community for developers and programmers of all levels. Share code, ask questions, and level up your skills together.",
    icon: "/servers/server2.png",
    memberCount: "1,800+",
    onlineCount: "220",
    category: "Programming",
    tags: ["Programming", "Dev", "Open Source", "Learning"],
    inviteUrl: "https://discord.gg/devhub",
    color: "#3b82f6",
    glowColor: "rgba(59,130,246,0.4)",
    featured: true,
  },
  {
    id: "gaming",
    name: "Gaming Zone",
    description: "Play games, find teammates, and compete in community tournaments. All games welcome!",
    icon: "/servers/server3.png",
    memberCount: "950+",
    onlineCount: "180",
    category: "Gaming",
    tags: ["Gaming", "Tournament", "LFG", "Fun"],
    inviteUrl: "https://discord.gg/gamingzone",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    id: "creative",
    name: "Creative Studio",
    description: "A space for designers, artists, and content creators. Share your work, get feedback, and inspire others.",
    icon: "/servers/server4.png",
    memberCount: "720+",
    onlineCount: "95",
    category: "Creative",
    tags: ["Design", "Art", "Content", "Feedback"],
    inviteUrl: "https://discord.gg/creativestudio",
    color: "#ec4899",
    glowColor: "rgba(236,72,153,0.4)",
  },
];
