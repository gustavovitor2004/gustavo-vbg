import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourName — Creator Hub",
  description: "Developer, creator, and community builder. Explore my projects, Discord servers, and socials.",
  keywords: ["portfolio", "developer", "creator", "discord", "projects"],
  openGraph: {
    title: "YourName — Creator Hub",
    description: "Developer, creator, and community builder.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#030712] text-white">{children}</body>
    </html>
  );
}
