import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitizes a URL to prevent XSS vulnerabilities (e.g. javascript: schemes).
 * Only allows safe protocols (http, https, mailto, tel) and relative/anchor links.
 * Returns "#" if the URL is unsafe or invalid.
 */
export function sanitizeUrl(url?: string): string {
  if (!url) return "#";

  // Remove control characters and trim whitespace
  const cleaned = url.replace(/[\u0000-\u001F\u007F-\u009F]/g, "").trim();
  if (!cleaned) return "#";

  // Allow relative paths and anchor links
  if (cleaned.startsWith("/") || cleaned.startsWith("#")) {
    return cleaned;
  }

  try {
    const parsed = new URL(cleaned, "https://dummy.local");
    const allowedProtocols = ["http:", "https:", "mailto:", "tel:"];

    if (allowedProtocols.includes(parsed.protocol)) {
      return cleaned;
    }
  } catch {
    return "#";
  }

  return "#";
}
