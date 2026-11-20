import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

/** The user-facing choice ("light" / "dark") is what gets saved in localStorage. */
const THEMES = ["light", "dark"];
/** ...and it maps to our two DaisyUI themes on <html data-theme="...">. */
const THEME_VALUES = { light: "portfolio-light", dark: "portfolio-dark" };

export function ThemeProvider({
  children,
  ...props
}: Omit<React.ComponentProps<typeof NextThemesProvider>, "attribute" | "themes" | "value">) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      themes={THEMES}
      value={THEME_VALUES}
      {...props}
    >
      {/* Honour the OS "reduce motion" setting for all framer-motion animations */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
