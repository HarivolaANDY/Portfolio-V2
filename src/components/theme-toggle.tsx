import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const subscribeNoop = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false during any server/pre-hydration render, true once on the client
  const mounted = React.useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button type="button" className="btn btn-ghost btn-circle" aria-label="Changer de thème" disabled>
        <span className="size-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="btn btn-ghost btn-circle relative"
      aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
    >
      <motion.span
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon aria-hidden="true" className="size-5" />
      </motion.span>
      <motion.span
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <Sun aria-hidden="true" className="size-5" />
      </motion.span>
    </button>
  );
}
