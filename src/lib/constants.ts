import {
  Atom,
  Braces,
  Database,
  FileCode2,
  Figma,
  FlaskConical,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Palette,
  Plug,
  Server,
  Twitter,
  Wind,
  Workflow,
  Zap,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Andy Harivola",
  initials: "AH",
  firstName: "Andy",
};

export const NAV_ITEMS = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projects" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

/** Which hand-drawn mockup to render for a project (see project-visual.tsx). */
export type ProjectVisualKind =
  | "dashboard"
  | "weather"
  | "portfolio"
  | "kanban"
  | "blog";

export interface Project {
  id: number;
  title: string;
  description: string;
  visual: ProjectVisualKind;
  link: string;
  tags: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Une interface d'administration complète pour gérer les produits et les commandes avec des graphiques en temps réel.",
    visual: "dashboard",
    link: "#",
    tags: ["React", "Next.js", "Tailwind", "Recharts"],
    featured: true,
  },
  {
    id: 2,
    title: "Application Météo",
    description: "Prévisions météo précises en temps réel avec géolocalisation et fonds d'écran dynamiques selon le temps.",
    visual: "weather",
    link: "#",
    tags: ["JavaScript", "API OpenWeather", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Minimaliste",
    description: "Un portfolio élégant et performant mettant l'accent sur le contenu et les animations fluides.",
    visual: "portfolio",
    link: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    featured: true,
  },
  {
    id: 4,
    title: "Task Manager Pro",
    description: "Application de gestion de tâches avec drag & drop, catégories personnalisées et synchronisation cloud.",
    visual: "kanban",
    link: "#",
    tags: ["React", "Dnd-kit", "Supabase"],
    featured: false,
  },
  {
    id: 5,
    title: "Plateforme de Blog",
    description: "Un CMS léger et moderne supportant le Markdown et optimisé pour le SEO.",
    visual: "blog",
    link: "#",
    tags: ["Next.js", "MDX", "Contentlayer"],
    featured: false,
  },
];

export type SkillLevel = "Avancé" | "Quotidien" | "En veille";

/** Semantic meaning of each level, shown as a legend on the About page. */
export const SKILL_LEVELS: { level: SkillLevel; meaning: string; badge: string }[] = [
  { level: "Avancé", meaning: "Maîtrise approfondie, je guide les choix techniques", badge: "badge-primary" },
  { level: "Quotidien", meaning: "Utilisé régulièrement sur mes projets", badge: "badge-success" },
  { level: "En veille", meaning: "En exploration ou en apprentissage", badge: "badge-info" },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Front-end & UI",
    description: "Interfaces accessibles, fluides et soignées.",
    icon: Layers,
    skills: [
      { name: "React", icon: Atom, level: "Avancé" },
      { name: "TypeScript", icon: FileCode2, level: "Avancé" },
      { name: "Tailwind CSS", icon: Wind, level: "Avancé" },
      { name: "DaisyUI", icon: Palette, level: "Quotidien" },
      { name: "Framer Motion", icon: Workflow, level: "Quotidien" },
      { name: "UI/UX Design", icon: Figma, level: "Quotidien" },
    ],
  },
  {
    title: "Back-end & Données",
    description: "APIs et persistance pour des produits complets.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, level: "Quotidien" },
      { name: "API REST", icon: Plug, level: "Quotidien" },
      { name: "Supabase", icon: Database, level: "Quotidien" },
      { name: "PostgreSQL", icon: Database, level: "En veille" },
    ],
  },
  {
    title: "Outils & Workflow",
    description: "Une chaîne de livraison fiable et reproductible.",
    icon: Workflow,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: "Avancé" },
      { name: "Vite", icon: Zap, level: "Quotidien" },
      { name: "Tests automatisés", icon: FlaskConical, level: "Quotidien" },
      { name: "CI/CD", icon: Braces, level: "En veille" },
    ],
  },
];

export const ANIMATION_STAGGER_DELAY = 0.1;
export const ANIMATION_CARD_DURATION = 0.5;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:andyharivola@gmail.com",
    icon: Mail,
  },
];
