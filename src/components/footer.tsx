import { PROFILE, SOCIAL_LINKS } from "@/lib/constants";
import { sanitizeUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-base-content/70">
          © {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.
        </p>
        <ul className="flex gap-1">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={sanitizeUrl(link.url)}
                  {...(link.url.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary"
                >
                  <Icon aria-hidden="true" className="size-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
