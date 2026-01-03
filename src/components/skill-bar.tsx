import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  level: number;
}

export function SkillBar({ skill, index }: { skill: SkillProps; index: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-primary h-2.5 rounded-full"
        />
      </div>
    </div>
  );
}
