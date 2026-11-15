"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let tick: ((t: number) => void) | null = null;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      (window as unknown as { __lenis: Lenis }).__lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      tick = (t) => lenis!.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => {
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);
  return <>{children}</>;
}
