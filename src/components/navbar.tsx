import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, PROFILE } from "@/lib/constants";

export function Navbar() {
  const { pathname } = useLocation();
  // The menu is "open for" a given route, so navigating elsewhere closes it
  // without needing an effect to reset state.
  const [openPath, setOpenPath] = React.useState<string | null>(null);
  const isOpen = openPath === pathname;
  const setIsOpen = (open: boolean) => setOpenPath(open ? pathname : null);

  // Close mobile menu with Escape
  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-200/85 backdrop-blur-md"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          aria-label={`${PROFILE.name}, accueil`}
          className="group flex items-center gap-2.5 rounded-full py-1 pr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-content transition-transform duration-300 ease-out-expo group-hover:scale-105"
          >
            {PROFILE.initials}
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">{PROFILE.name}</span>
        </Link>

        {/* Desktop nav: the active page is a soft pill, so nothing touches the bottom border */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  active ? "text-primary" : "text-base-content/70 hover:text-base-content"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.name}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-base-300 bg-base-200 md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 p-3">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "btn btn-ghost h-12 justify-start px-4 text-base font-medium",
                      active && "bg-primary/10 text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
