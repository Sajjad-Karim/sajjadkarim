/**
 * Shared experience constants — avoid duplicating inline assets.
 */

export const NOISE_DATA_URI = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const REVEAL_SELECTOR = "[data-reveal]:not([data-reveal='off'])";

export const REVEAL_OBSERVER_OPTIONS = {
  threshold: 0.06,
  rootMargin: "-4% 0px -8% 0px",
};
