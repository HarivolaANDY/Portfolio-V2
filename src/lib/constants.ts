import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projects" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Une interface d'administration complète pour gérer les produits et les commandes avec des graphiques en temps réel.",
    image: "/window.svg",
    link: "#",
    tags: ["React", "Next.js", "Tailwind", "Recharts"],
    featured: true,
  },
  {
    id: 2,
    title: "Application Météo",
    description: "Prévisions météo précises en temps réel avec géolocalisation et fonds d'écran dynamiques selon le temps.",
    image: "/globe.svg",
    link: "#",
    tags: ["JavaScript", "API OpenWeather", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Minimaliste",
    description: "Un portfolio élégant et performant mettant l'accent sur le contenu et les animations fluides.",
    image: "/file.svg",
    link: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    featured: true,
  },
  {
    id: 4,
    title: "Task Manager Pro",
    description: "Application de gestion de tâches avec drag & drop, catégories personnalisées et synchronisation cloud.",
    image: "/window.svg",
    link: "#",
    tags: ["React", "Dnd-kit", "Supabase"],
    featured: false,
  },
  {
    id: 5,
    title: "Plateforme de Blog",
    description: "Un CMS léger et moderne supportant le Markdown et optimisé pour le SEO.",
    image: "/file.svg",
    link: "#",
    tags: ["Next.js", "MDX", "Contentlayer"],
    featured: false,
  },
];

export const SKILLS = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Framer Motion", level: 70 },
];

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
