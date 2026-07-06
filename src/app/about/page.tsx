"use client";

import { SkillBar } from "@/components/skill-bar";
import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-muted flex items-center justify-center border">
             {/* Placeholder for profile image */}
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-8xl">👤</span>
             </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold font-heading mb-6">À propos de moi</h1>
          <div className="space-y-4 text-muted-foreground mb-8 text-lg leading-relaxed">
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

          <h2 className="text-2xl font-bold font-heading mb-6">Compétences techniques</h2>
          <div className="space-y-2">
            {SKILLS.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
