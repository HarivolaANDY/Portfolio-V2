"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/constants";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center space-y-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter">
            Créer des expériences numériques <span className="text-primary">uniques</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl font-light">
            Je suis Alex, un designer UX et développeur passionné par la création d&apos;interfaces intuitives et élégantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="group">
              Voir mon travail
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Me contacter
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-8 animate-bounce"
        >
          <span className="text-muted-foreground text-sm">Scroll pour découvrir</span>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-24 border-t">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-heading">Projets à la une</h2>
            <p className="text-muted-foreground max-w-md">
              Une sélection de mes réalisations les plus récentes et significatives.
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
      </section>
    </div>
  );
}
