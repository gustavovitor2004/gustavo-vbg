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
  categoryKey?: string;
}

/**
 * Screenshot URL helper — thum.io (free, no API key)
 *
 * Parameters used:
 *   width/1280        → output image width (high-res)
 *   crop/800          → captures the top 800 px of the page (hero area)
 *   viewportWidth/1440 → renders at full desktop width (1440 px)
 *   noanimate         → waits for CSS animations / image loads before capture
 *
 * To replace with your own screenshot:
 *   1. Take a screenshot of the site (1440×800 px recommended)
 *   2. Save it to /public/projects/<slug>.jpg
 *   3. Change the thumbnail value to "/projects/<slug>.jpg"
 */
function shot(siteUrl: string): string {
  return `https://image.thum.io/get/width/1280/crop/800/viewportWidth/1440/noanimate/${siteUrl}`;
}

// ── Client websites (shown in "My Sites") ─────────────────────────────────
export const projects: Project[] = [
  {
    id: "espacoprime",
    title: "Espaço Prime",
    description:
      "Landing page de alto impacto para espaço premium em Salvador - BA. Integração WhatsApp, design moderno e focado em conversão.",
    thumbnail: shot("https://espacoprime-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://espacoprime-whatsappgustavo-75998596215.vercel.app",
    featured: true,
    categoryKey: "sites.category.beauty",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "costelao-do-gaucho",
    title: "Costelão do Gaúcho",
    description:
      "Site oficial da churrascaria em Lauro de Freitas - BA. Landing page responsiva de alta conversão com cardápio digital, integração WhatsApp e SEO avançado.",
    thumbnail: shot("https://costelaodogaucho-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "Google Fonts"],
    status: "Finished",
    demoUrl: "https://costelaodogaucho-whatsappgustavo-75998596215.vercel.app/",
    featured: true,
    categoryKey: "sites.category.restaurant",
    gradient: "from-orange-600/20 to-red-600/20",
  },
  {
    id: "cheiro-e-pao",
    title: "Cheiro & Pão",
    description:
      "Site para padaria artesanal e delicatessen em Buraquinho, Lauro de Freitas - BA. Design premium com mais de 20 tipos de pães artesanais em destaque.",
    thumbnail: shot("https://cheiro-e-pao-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://cheiro-e-pao-whatsappgustavo-75998596215.vercel.app/",
    featured: true,
    categoryKey: "sites.category.bakery",
    gradient: "from-amber-600/20 to-yellow-600/20",
  },
  {
    id: "lalay-petshop",
    title: "Lalay Pet Shop",
    description:
      "Site para o 3º maior pet shop de Feira de Santana - BA. Página completa com serviços de banho, tosa e veterinário na Lagoa Salgada.",
    thumbnail: shot("https://lalaypetshop-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://lalaypetshop-whatsappgustavo-75998596215.vercel.app/",
    categoryKey: "sites.category.petshop",
    gradient: "from-pink-600/20 to-purple-600/20",
  },
  {
    id: "pinheiro-escapamentos",
    title: "Pinheiro Escapamentos",
    description:
      "Landing page para especialistas em escapamentos na Av. Barros Reis, Salvador - BA. Atendimento rápido de 20 min como diferencial destacado.",
    thumbnail: shot("https://pinheiroescapamentos-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://pinheiroescapamentos-whatsappgustavo-75998596215.vercel.app/",
    categoryKey: "sites.category.automotive",
    gradient: "from-slate-600/20 to-cyan-600/20",
  },
  {
    id: "casa-da-mangueira",
    title: "Casa da Mangueira Eventos",
    description:
      "Site para espaço de eventos em Salvador - BA. Layout elegante com galeria de fotos, pacotes disponíveis e formulário de reserva via WhatsApp.",
    thumbnail: shot("https://casadamangueiraeventos-whatsappgustavo-75998596215.vercel.app"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://casadamangueiraeventos-whatsappgustavo-75998596215.vercel.app/",
    categoryKey: "sites.category.events",
    gradient: "from-rose-600/20 to-pink-600/20",
  },
];
