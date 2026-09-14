"use client";

import dynamic from "next/dynamic";

// Keep GSAP and ScrollTrigger out of the critical server/client bundle. Next
// requests this chunk after hydration while the static hero is already usable.
const ClientEffects = dynamic(() => import("./ClientEffects"), {
  ssr: false,
});

export default function DeferredClientEffects() {
  return <ClientEffects />;
}
