/**
 * Blog articles — translatable fields live in src/i18n/translations.ts
 * under keys blog.article.{id}.*
 */

export interface Article {
  id: string;
  categoryKey: string;
  categoryColor: string;
  tags: string[];
  featured?: boolean;
  slug: string;
  gradient: string;
}

export const articles: Article[] = [
  {
    id: "article-1",
    categoryKey: "blog.category.development",
    categoryColor: "#7c3aed",
    tags: ["Node.js", "Discord API", "Bot Development", "MongoDB"],
    featured: true,
    slug: "building-discord-bot-nodejs",
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.7) 0%, rgba(6,182,212,0.45) 100%)",
  },
  {
    id: "article-2",
    categoryKey: "blog.category.design",
    categoryColor: "#ec4899",
    tags: ["UI/UX", "Design", "Dark Mode", "CSS"],
    slug: "designing-dark-uis",
    gradient:
      "linear-gradient(135deg, rgba(219,39,119,0.65) 0%, rgba(124,58,237,0.45) 100%)",
  },
  {
    id: "article-3",
    categoryKey: "blog.category.personal",
    categoryColor: "#f59e0b",
    tags: ["Personal", "Story", "Career", "Learning"],
    slug: "my-journey-as-developer",
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.65) 0%, rgba(239,68,68,0.4) 100%)",
  },
  {
    id: "article-4",
    categoryKey: "blog.category.development",
    categoryColor: "#3b82f6",
    tags: ["Next.js", "React", "Frontend", "Performance"],
    slug: "nextjs-16-review",
    gradient:
      "linear-gradient(135deg, rgba(37,99,235,0.65) 0%, rgba(124,58,237,0.45) 100%)",
  },
];
