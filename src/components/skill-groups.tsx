import { motion } from "framer-motion";
import { SKILL_GROUPS, SKILL_LEVELS, type SkillLevel } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LEVEL_BADGE: Record<SkillLevel, string> = Object.fromEntries(
  SKILL_LEVELS.map(({ level, badge }) => [level, badge])
) as Record<SkillLevel, string>;

export function SkillGroups() {
  return (
    <div className="space-y-6">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-base-content/70" aria-label="Légende des niveaux">
        {SKILL_LEVELS.map(({ level, meaning, badge }) => (
          <li key={level} className="flex items-center gap-2">
            <span className={cn("badge badge-soft badge-sm", badge)}>{level}</span>
            <span>{meaning}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {SKILL_GROUPS.map((group, groupIndex) => {
          const GroupIcon = group.icon;
          return (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              aria-labelledby={`skills-${groupIndex}`}
              className={cn(
                "card rounded-box border border-base-300 bg-base-100 shadow-sm",
                groupIndex === 0 && "xl:col-span-2"
              )}
            >
              <div className="card-body gap-5 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-field bg-primary/10 text-primary">
                    <GroupIcon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 id={`skills-${groupIndex}`} className="font-heading text-lg font-bold">
                      {group.title}
                    </h3>
                    <p className="text-sm text-base-content/70">{group.description}</p>
                  </div>
                </div>

                <ul className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", groupIndex === 0 && "lg:grid-cols-3")}>
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 rounded-field border border-base-300 bg-base-200/60 px-3 py-2.5"
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <Icon aria-hidden="true" className="size-4 shrink-0 text-base-content/70" />
                          <span className="truncate text-sm font-medium">{skill.name}</span>
                        </span>
                        <span className={cn("badge badge-soft badge-sm shrink-0", LEVEL_BADGE[skill.level])}>
                          {skill.level}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
