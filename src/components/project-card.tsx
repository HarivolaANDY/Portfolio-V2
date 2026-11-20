import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ANIMATION_CARD_DURATION, ANIMATION_STAGGER_DELAY } from "@/lib/constants";
import { sanitizeUrl } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const LINK_CLASS =
  "flex-1 flex flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const safeLink = sanitizeUrl(project.link);
  const isExternal = /^https?:\/\//i.test(safeLink);
  const isInternalRoute = safeLink.startsWith("/");

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt=""
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 p-8"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">Voir le projet</span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-foreground bg-secondary/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: ANIMATION_CARD_DURATION, delay: (index % 3) * ANIMATION_STAGGER_DELAY }}
      className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-shadow hover:shadow-lg focus-within:shadow-lg h-full flex flex-col"
    >
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
    </motion.div>
  );
}
