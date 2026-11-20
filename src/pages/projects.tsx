import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-6 text-center font-heading text-4xl font-bold text-balance">Mes Projets</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-base-content/70">
        Découvrez une sélection de mes réalisations récentes. Chaque projet représente un défi unique et une opportunité d&apos;apprentissage.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
