import type { Metadata } from "next";
import "./globals.css";
import { meta } from "@/config/site";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: ["portfolio", "developer", "full-stack", "freelance", "Next.js", "TypeScript", "Bahia", "Brazil"],
  metadataBase: new URL(meta.siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: meta.siteUrl,
    siteName: "Gustavo Gomes",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    creator: "@gustavo_vbg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100;0,14..32,200;0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,300;1,14..32,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full" style={{ color: "var(--text-primary)" }}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
