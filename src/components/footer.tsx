import { SOCIAL_LINKS } from "@/lib/constants";
import { sanitizeUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-background py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={sanitizeUrl(link.url)}
                {...(link.url.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center justify-center h-11 w-11 rounded-md text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
