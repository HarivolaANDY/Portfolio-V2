"use client";

import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Mes Projets</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
        Découvrez une sélection de mes réalisations récentes. Chaque projet représente un défi unique et une opportunité d&apos;apprentissage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
