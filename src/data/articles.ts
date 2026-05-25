/**
 * Blog articles data.
 * Replace these with your real articles. Each article needs:
 * - A unique id and slug
 * - A gradient for the card banner
 * - A categoryColor that matches your article's theme
 *
 * Future: integrate an MDX-based blog or CMS (e.g. Contentlayer, Sanity, Notion API)
 * and replace this static data with dynamic fetching.
 */

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  featured?: boolean;
  slug: string;
  gradient: string;
}

export const articles: Article[] = [
  {
    id: "article-1",
    title: "Building a Real-Time Discord Bot with Node.js",
    excerpt:
      "Learn how I built CreatorHub Bot from scratch — architecture decisions, the challenges I hit running it for thousands of users, and the lessons that changed how I think about distributed systems.",
    category: "Development",
    categoryColor: "#7c3aed",
    tags: ["Node.js", "Discord API", "Bot Development", "MongoDB"],
    readTime: "8 min read",
    publishedAt: "May 20, 2026",
    featured: true,
    slug: "building-discord-bot-nodejs",
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.7) 0%, rgba(6,182,212,0.45) 100%)",
  },
  {
    id: "article-2",
    title: "Designing Dark UIs That Don't Hurt Your Eyes",
    excerpt:
      "Dark mode done right is harder than it looks. Contrast, typography choices, and subtle glow effects all play a role. Here's what I've learned designing premium dark interfaces.",
    category: "Design",
    categoryColor: "#ec4899",
    tags: ["UI/UX", "Design", "Dark Mode", "CSS"],
    readTime: "5 min read",
    publishedAt: "May 15, 2026",
    slug: "designing-dark-uis",
    gradient:
      "linear-gradient(135deg, rgba(219,39,119,0.65) 0%, rgba(124,58,237,0.45) 100%)",
  },
  {
    id: "article-3",
    title: "My Journey as a 20-Year-Old Developer",
    excerpt:
      "From writing my first lines of code to building tools used by thousands — an honest look at how I got started, what I struggled with, and what I'd tell myself at day one.",
    category: "Personal",
    categoryColor: "#f59e0b",
    tags: ["Personal", "Story", "Career", "Learning"],
    readTime: "6 min read",
    publishedAt: "May 8, 2026",
    slug: "my-journey-as-developer",
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.65) 0%, rgba(239,68,68,0.4) 100%)",
  },
  {
    id: "article-4",
    title: "Next.js 16: What Changed and What I Actually Think",
    excerpt:
      "Turbopack as the default, new caching model, and async APIs — I've been running Next.js 16 in production for weeks. Here's the real breakdown of what matters.",
    category: "Development",
    categoryColor: "#3b82f6",
    tags: ["Next.js", "React", "Frontend", "Performance"],
    readTime: "7 min read",
    publishedAt: "Apr 30, 2026",
    slug: "nextjs-16-review",
    gradient:
      "linear-gradient(135deg, rgba(37,99,235,0.65) 0%, rgba(124,58,237,0.45) 100%)",
  },
];
