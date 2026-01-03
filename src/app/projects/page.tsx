"use client";

import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Une interface d'administration complète pour gérer les produits et les commandes.",
    image: "/window.svg", 
    link: "#",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Application Météo",
    description: "Prévisions météo en temps réel avec géolocalisation.",
    image: "/globe.svg",
    link: "#",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    id: 3,
    title: "Portfolio Minimaliste",
    description: "Site personnel responsive avec mode sombre et animations.",
    image: "/file.svg",
    link: "#",
    tags: ["Next.js", "Framer Motion"],
  },
   {
    id: 4,
    title: "Task Manager",
    description: "Application de gestion de tâches avec drag & drop.",
    image: "/window.svg",
    link: "#",
    tags: ["React", "DnD", "Redux"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Mes Projets</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Découvrez une sélection de mes réalisations récentes. Chaque projet représente un défi unique et une opportunité d'apprentissage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
