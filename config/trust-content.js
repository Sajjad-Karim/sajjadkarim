/**
 * Social proof and platform credibility — single source for Upwork and trust signals.
 */

export const upworkProfile = {
  url: "https://www.upwork.com/freelancers/~019efaa92f9cd31346",
  label: "View Upwork profile",
  shortLabel: "Upwork",
  hireLabel: "Hire on Upwork",
};

/** Verifiable platform credentials — keep claims factual and profile-backed */
export const platformCredibility = {
  upworkBadge: "Top Rated Plus",
  upworkSubtitle: "Freelancer on Upwork",
};

export const heroTrustBadges = [
  {
    id: "upwork",
    value: platformCredibility.upworkBadge,
    label: platformCredibility.upworkSubtitle,
  },
  {
    id: "delivery",
    value: "Proven",
    label: "Delivery record",
  },
  {
    id: "clients",
    value: "Long-term",
    label: "Client relationships",
  },
];

export const aboutTrustSignals = [
  { value: platformCredibility.upworkBadge, label: "Upwork credential" },
  { value: "5+", label: "Years shipping products" },
  { value: "Global", label: "Remote client base" },
  { value: "Production", label: "Systems in market" },
];
