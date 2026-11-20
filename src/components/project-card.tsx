import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ANIMATION_CARD_DURATION, ANIMATION_STAGGER_DELAY, type Project } from "@/lib/constants";
import { sanitizeUrl } from "@/lib/utils";
import { ProjectVisual } from "@/components/project-visual";

const LINK_CLASS =
  "card h-full rounded-box focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const safeLink = sanitizeUrl(project.link);
  const isExternal = /^https?:\/\//i.test(safeLink);
  const isInternalRoute = safeLink.startsWith("/");

  const content = (
    <>
      <div className="relative overflow-hidden rounded-t-box border-b border-base-300">
        <ProjectVisual
          kind={project.visual}
          className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {/* Frosted badge: replaces the old black hover mask */}
        <span className="badge absolute bottom-3 right-3 translate-y-1 gap-1 border-base-100/60 bg-base-100/65 text-base-content opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          Voir le projet
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </span>
      </div>
      <div className="card-body gap-3 p-5">
        <h3 className="card-title font-heading text-xl">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-base-content/70">{project.description}</p>
        <ul className="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="badge badge-outline badge-sm font-medium">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: ANIMATION_CARD_DURATION,
        delay: (index % 3) * ANIMATION_STAGGER_DELAY,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <div className="group h-full rounded-box border border-base-300 bg-base-100 shadow-sm transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        {isInternalRoute ? (
          <Link to={safeLink} className={LINK_CLASS}>
            {content}
          </Link>
        ) : (
          <a
            href={safeLink}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={LINK_CLASS}
          >
            {content}
          </a>
        )}
      </div>
    </motion.article>
  );
}
