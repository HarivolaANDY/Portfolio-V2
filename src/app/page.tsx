"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";
import { useRef } from "react";

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const featuredSectionRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center space-y-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter">
            Créer des expériences numériques <span className="text-primary">uniques</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl font-light">
            Je suis Alex, un designer UX et développeur passionné par la création d&apos;interfaces intuitives, élégantes et performantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="group h-12 px-8">
              Voir mon travail
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="h-12 px-8">
              Me contacter
            </Button>
          </Link>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={scrollToFeatured}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm font-medium">Scroll pour découvrir</span>
          <ChevronDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </section>

      {/* Featured Projects Section */}
      <section
        ref={featuredSectionRef}
        className="w-full py-24 bg-secondary/30"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Projets à la une</h2>
              <p className="text-muted-foreground text-lg">
                Une sélection de mes travaux les plus récents et les plus stimulants.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="group">
                Tous les projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 bg-card border rounded-3xl p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Prêt à démarrer un projet ?</h2>
          <p className="text-xl text-muted-foreground font-light">
            Je suis toujours à la recherche de nouvelles opportunités et de collaborations passionnantes.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-10 text-lg">
              Travaillons ensemble
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
