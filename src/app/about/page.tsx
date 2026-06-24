"use client";

import { SkillBar } from "@/components/skill-bar";
import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-muted flex items-center justify-center">
             {/* Placeholder for profile image */}
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <User className="w-20 h-20 opacity-20" />
             </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold font-heading mb-6">À propos de moi</h1>
          <div className="space-y-4 text-muted-foreground mb-8 text-lg">
            <p>
              Je suis un développeur passionné avec plus de 5 ans d&apos;expérience dans la création d&apos;applications web modernes.
            </p>
            <p>
              Mon parcours m&apos;a permis de travailler sur des projets variés, allant de sites vitrines élégants à des applications SaaS complexes. J&apos;accorde une importance particulière à l&apos;expérience utilisateur et à la performance.
            </p>
            <p>
              Quand je ne code pas, j&apos;explore les dernières tendances du design ou je contribue à des projets open source.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-heading mb-4">Compétences</h2>
          <div className="space-y-2">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
