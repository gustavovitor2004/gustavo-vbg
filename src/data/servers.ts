export interface DiscordServer {
  id: string;
  name: string;
  description: string;
  memberCount: string;
  category: string;
  tags: string[];
  inviteUrl: string;
  color: string;
  glowColor: string;
  // optional legacy fields kept for type compatibility
  icon?: string;
  banner?: string;
  onlineCount?: string;
  longDescription?: string;
  verified?: boolean;
  partnered?: boolean;
  featured?: boolean;
}

export const discordServers: DiscordServer[] = [
  {
    id: "trophi",
    name: "Trophi.gg",
    description:
      "Trophi.gg is a growing community for gamers, developers, and creators. Whether you're here to chill, collaborate on projects, or just vibe — you'll fit right in. Come join us!",
    memberCount: "Growing",
    category: "Community",
    tags: ["Community", "Gaming", "Dev", "Creative"],
    inviteUrl: "https://discord.gg/5tMJDxH8vc",
    color: "#7c3aed",
    glowColor: "rgba(124,58,237,0.4)",
  },
];
