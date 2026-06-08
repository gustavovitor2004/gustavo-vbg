export interface Social {
  id: string;
  platform: string;
  username: string;
  url: string;
  color: string;
  glowColor: string;
  description: string;
  followers?: string;
}

export const socials: Social[] = [
  {
    id: "discord",
    platform: "Discord",
    username: "_pujin_",
    url: "https://discord.com/users/1082744154544689212",
    color: "#5865F2",
    glowColor: "rgba(88,101,242,0.45)",
    description: "Chat & connect with me",
    followers: "Add me",
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
];
