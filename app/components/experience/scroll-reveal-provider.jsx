"use client";

import { useEffect } from "react";
import { REVEAL_OBSERVER_OPTIONS, REVEAL_SELECTOR } from "@/lib/experience/constants";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
}

function revealElement(element) {
  element.classList.add("is-revealed");
}

/**
 * Observes [data-reveal] elements and applies .is-revealed on intersection.
 * Progressive enhancement: content is visible until this provider mounts.
 */
function ScrollRevealProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-enhanced");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pending = new WeakSet();
    let observer;

    const observeElement = (element) => {
      if (element.classList.contains("is-revealed") || pending.has(element)) {
        return;
      }

      if (reducedMotion || isInViewport(element)) {
        revealElement(element);
        return;
      }

      pending.add(element);
      observer?.observe(element);
    };

    const observeAll = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach(observeElement);
    };

    if (!reducedMotion) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
            pending.delete(entry.target);
          }
        });
      }, REVEAL_OBSERVER_OPTIONS);
    }

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const fallbackTimer = window.setTimeout(observeAll, 100);

    const safetyTimer = window.setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach(revealElement);
    }, 2500);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(safetyTimer);
      mutationObserver.disconnect();
      observer?.disconnect();
      root.classList.remove("reveal-enhanced");
    };
  }, []);

  return children;
}

export default ScrollRevealProvider;
