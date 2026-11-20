import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { PROFILE, PROJECTS } from "@/lib/constants";
import { useRef } from "react";

const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const featuredSectionRef = useRef<HTMLElement>(null);

  const scrollToFeatured = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    featuredSectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-center space-y-8 px-4 pb-24 pt-16 text-center md:pb-28">
        {/* Soft light wash behind the headline (decorative) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_70%)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="max-w-3xl space-y-5"
        >
          <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Créer des expériences numériques{" "}
            <span className="rounded-md bg-[linear-gradient(transparent_62%,color-mix(in_oklab,var(--color-primary)_24%,transparent)_62%)] text-primary">
              uniques
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-base-content/75 md:text-2xl">
            Je suis {PROFILE.name}, designer UX et développeur passionné par la création d&apos;interfaces intuitives, élégantes et performantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link to="/projects" className="btn btn-primary btn-lg group px-8">
            Voir mon travail
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="btn btn-outline btn-lg px-8">
            Me contacter
          </Link>
        </motion.div>

        {/* Hidden on small or short screens so it can never sit on top of the CTAs */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={scrollToFeatured}
          className="absolute bottom-6 hidden flex-col items-center gap-1 rounded-full px-3 py-2 text-base-content/70 transition-colors hover:text-primary md:flex [@media(max-height:720px)]:hidden"
        >
          <span className="text-sm font-medium">Faire défiler pour découvrir</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </motion.button>
      </section>

      {/* Featured Projects Section */}
      <section
        ref={featuredSectionRef}
        className="w-full border-y border-base-300 bg-base-100 py-24"
        aria-labelledby="featured-title"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 id="featured-title" className="mb-3 font-heading text-3xl font-bold md:text-4xl">
                Projets à la une
              </h2>
              <p className="text-lg text-base-content/70">
                Une sélection de mes travaux les plus récents et les plus stimulants.
              </p>
            </div>
            <Link to="/projects" className="btn btn-ghost group">
              Tous les projets
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6 rounded-box border border-base-300 bg-base-100 p-8 shadow-sm md:p-12">
          <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Prêt à démarrer un projet ?</h2>
          <p className="text-lg font-light text-base-content/75 md:text-xl">
            Je suis toujours à la recherche de nouvelles opportunités et de collaborations passionnantes.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg px-10">
            Travaillons ensemble
          </Link>
        </div>
      </section>
    </div>
  );
}
