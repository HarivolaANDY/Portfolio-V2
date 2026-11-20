import { motion } from "framer-motion";
import { SkillGroups } from "@/components/skill-groups";
import { PROFILE } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="container mx-auto space-y-20 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
      >
        {/* Stylised avatar: DaisyUI avatar-placeholder on a soft themed panel */}
        <div
          aria-hidden="true"
          className="relative flex aspect-square items-center justify-center overflow-hidden rounded-box border border-base-300 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20 shadow-sm md:aspect-[4/5]"
        >
          <div className="avatar avatar-placeholder">
            <div className="w-40 rounded-full bg-primary text-primary-content shadow-md ring-4 ring-base-100 md:w-48">
              <span className="font-heading text-5xl font-bold md:text-6xl">{PROFILE.initials}</span>
            </div>
          </div>
          <span className="badge badge-soft badge-primary absolute left-5 top-5 bg-base-100/70 backdrop-blur-sm">
            Designer UX
          </span>
          <span className="badge badge-soft badge-secondary absolute bottom-6 right-5 bg-base-100/70 backdrop-blur-sm">
            Développeur front-end
          </span>
        </div>

        <div>
          <h1 className="mb-6 font-heading text-4xl font-bold">À propos de moi</h1>
          <div className="space-y-4 text-lg leading-relaxed text-base-content/75">
            <p>
              Je suis un développeur passionné avec plus de 5 ans d&apos;expérience dans la création d&apos;applications web modernes et performantes.
            </p>
            <p>
              Mon parcours m&apos;a permis de travailler sur des projets variés, allant de sites vitrines élégants à des applications SaaS complexes. J&apos;accorde une importance particulière à l&apos;expérience utilisateur, à l&apos;accessibilité et à la performance.
            </p>
            <p>
              Quand je ne code pas, j&apos;explore les dernières tendances du design, je contribue à des projets open source ou je partage mes connaissances via des articles techniques.
            </p>
          </div>
        </div>
      </motion.div>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title" className="mb-3 font-heading text-3xl font-bold">
          Compétences techniques
        </h2>
        <p className="mb-8 max-w-2xl text-lg text-base-content/70">
          Les technologies avec lesquelles je travaille, classées par domaine et par niveau d&apos;usage.
        </p>
        <SkillGroups />
      </section>
    </div>
  );
}
