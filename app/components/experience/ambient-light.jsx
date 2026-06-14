"use client";

import { useEffect } from "react";

/**
 * Subtle cursor-aware ambient light — updates CSS vars on :root.
 * Desktop only; disabled for reduced motion and touch devices via CSS.
 */
function AmbientLight() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    if (reducedMotion || !finePointer) return;

    let rafId = 0;
    let targetX = 50;
    let targetY = 40;
    let currentX = 50;
    let currentY = 40;

    const tick = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
        rafId = 0;
        return;
      }

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      document.documentElement.style.setProperty(
        "--ambient-x",
        `${currentX}%`
      );
      document.documentElement.style.setProperty(
        "--ambient-y",
        `${currentY}%`
      );

      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;

      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}

export default AmbientLight;
