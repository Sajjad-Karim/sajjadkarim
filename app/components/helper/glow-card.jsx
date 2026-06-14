"use client";

import { useEffect, useRef } from "react";

const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 12,
  gap: 32,
  opacity: 0,
};

function GlowCard({ children, identifier }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    if (reducedMotion || !finePointer) return;

    container.style.setProperty("--gap", String(CONFIG.gap));
    container.style.setProperty("--blur", String(CONFIG.blur));
    container.style.setProperty("--spread", String(CONFIG.spread));

    const update = (event) => {
      const bounds = card.getBoundingClientRect();

      if (
        event.x > bounds.left - CONFIG.proximity &&
        event.x < bounds.left + bounds.width + CONFIG.proximity &&
        event.y > bounds.top - CONFIG.proximity &&
        event.y < bounds.top + bounds.height + CONFIG.proximity
      ) {
        card.style.setProperty("--active", "1");
      } else {
        card.style.setProperty("--active", String(CONFIG.opacity));
      }

      const centerX = bounds.left + bounds.width * 0.5;
      const centerY = bounds.top + bounds.height * 0.5;
      let angle =
        (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
      angle = angle < 0 ? angle + 360 : angle;
      card.style.setProperty("--start", String(angle + 90));
    };

    container.addEventListener("pointermove", update, { passive: true });

    return () => {
      container.removeEventListener("pointermove", update);
    };
  }, [identifier]);

  return (
    <div
      ref={containerRef}
      className={`glow-container-${identifier} glow-container`}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit w-full cursor-pointer rounded-xl border border-border bg-surface text-neutral-300 transition-hover relative focus-ring hover:border-transparent`}
      >
        <div className="glows" aria-hidden="true" />
        {children}
      </article>
    </div>
  );
}

export default GlowCard;
