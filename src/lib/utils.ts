import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitizes a URL string to prevent Cross-Site Scripting (XSS) via dangerous schemes like javascript:, vbscript:, or data:.
 *
 * @param url The URL string to sanitize.
 * @param fallback The fallback URL if the input is unsafe or invalid (default: "#").
 * @returns The original URL if safe, or the fallback URL.
 */
export function sanitizeUrl(url: string | undefined | null, fallback = "#"): string {
  if (!url || typeof url !== "string") {
    return fallback;
  }

  const trimmed = url.trim();

  // Allow safe relative URLs and anchor links
  if (trimmed.startsWith("/") || trimmed.startsWith("#")) {
    return trimmed;
  }

  // Remove ASCII control characters (0x00 - 0x1F, 0x7F - 0x9F) which could bypass simple scheme checks
  const cleanUrl = trimmed.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

  try {
    const parsed = new URL(cleanUrl);
    const allowedProtocols = ["http:", "https:", "mailto:", "tel:"];
    if (allowedProtocols.includes(parsed.protocol.toLowerCase())) {
      return trimmed;
    }
  } catch {
    // If URL parsing fails, fallback
    return fallback;
  }

  return fallback;
}
