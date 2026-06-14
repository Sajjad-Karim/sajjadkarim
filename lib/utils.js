/**
 * Merge class names — lightweight utility without external dependencies.
 * Later can swap to clsx + tailwind-merge when variant complexity grows.
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter((value) => typeof value === "string" && value.length > 0)
    .join(" ");
}

/**
 * Check if user prefers reduced motion (client-side only).
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
