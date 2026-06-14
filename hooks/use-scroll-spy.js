"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for active nav state.
 * Only meaningful on the homepage where section anchors exist.
 */
export function useScrollSpy(sectionIds, enabled = true) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting);
        });

        const firstVisible = sectionIds.find((id) => visibleSections.get(id));
        if (firstVisible) {
          setActiveId(firstVisible);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return activeId;
}
