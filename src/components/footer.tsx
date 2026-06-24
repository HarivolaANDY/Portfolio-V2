import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/lib/constants";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t bg-background py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {Icon && <Icon className="h-5 w-5" />}
                <span className="sr-only">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
