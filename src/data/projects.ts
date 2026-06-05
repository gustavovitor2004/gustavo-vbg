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

// ── Client websites (shown in "My Sites") ─────────────────────────────────
export const projects: Project[] = [
  {
    id: "costelao-do-gaucho",
    title: "Costelão do Gaúcho",
    description:
      "Site oficial da churrascaria em Lauro de Freitas - BA. Landing page responsiva de alta conversão com cardápio digital, integração WhatsApp e SEO avançado.",
    thumbnail: "/projects/costelao.png",
    technologies: ["HTML5", "CSS3", "Google Fonts"],
    status: "Finished",
    githubUrl: "https://github.com/gustavovitor2004/CostelaoDoGaucho",
    demoUrl: "https://costelaodogaucho-whatsappgustavo-75998596215.vercel.app/",
    featured: true,
    gradient: "from-orange-600/20 to-red-600/20",
  },
  {
    id: "cheiro-e-pao",
    title: "Cheiro & Pão",
    description:
      "Site para padaria artesanal e delicatessen em Buraquinho, Lauro de Freitas - BA. Design premium com mais de 20 tipos de pães artesanais em destaque.",
    thumbnail: "/projects/cheiro-pao.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://cheiro-e-pao-whatsappgustavo-75998596215.vercel.app/",
    featured: true,
    gradient: "from-amber-600/20 to-yellow-600/20",
  },
  {
    id: "lalay-petshop",
    title: "Lalay Pet Shop",
    description:
      "Site para o 3º maior pet shop de Feira de Santana - BA. Página completa com serviços de banho, tosa e veterinário na Lagoa Salgada.",
    thumbnail: "/projects/lalay.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://lalaypetshop-whatsappgustavo-75998596215.vercel.app/",
    gradient: "from-pink-600/20 to-purple-600/20",
  },
  {
    id: "pinheiro-escapamentos",
    title: "Pinheiro Escapamentos",
    description:
      "Landing page para especialistas em escapamentos na Av. Barros Reis, Salvador - BA. Atendimento rápido de 20 min como diferencial destacado.",
    thumbnail: "/projects/pinheiro.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://pinheiroescapamentos-whatsappgustavo-75998596215.vercel.app/",
    gradient: "from-slate-600/20 to-cyan-600/20",
  },
  {
    id: "casa-da-mangueira",
    title: "Casa da Mangueira Eventos",
    description:
      "Site para espaço de eventos em Salvador - BA. Layout elegante com galeria de fotos, pacotes disponíveis e formulário de reserva via WhatsApp.",
    thumbnail: "/projects/casa-mangueira.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    demoUrl: "https://casadamangueiraeventos-whatsappgustavo-75998596215.vercel.app/",
    gradient: "from-rose-600/20 to-pink-600/20",
  },
  {
    id: "sabor-e-vida",
    title: "Sabor & Vida",
    description:
      "Site institucional para restaurante com foco em identidade visual forte e experiência do usuário otimizada para conversão.",
    thumbnail: "/projects/sabor-vida.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Finished",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
];
