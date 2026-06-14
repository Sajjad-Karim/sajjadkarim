"use client";

import dynamic from "next/dynamic";
import ScrollRevealProvider from "@/app/components/experience/scroll-reveal-provider";
import ToastProvider from "./toast-provider";

const AmbientLight = dynamic(
  () => import("@/app/components/experience/ambient-light"),
  { ssr: false }
);

/**
 * Client boundary for global interactivity — keeps layout.js as Server Component.
 */
function ClientProviders({ children }) {
  return (
    <>
      <ToastProvider />
      <AmbientLight />
      <ScrollRevealProvider>{children}</ScrollRevealProvider>
    </>
  );
}

export default ClientProviders;
