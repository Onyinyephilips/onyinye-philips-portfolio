"use client";
import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
export { gsap, ScrollTrigger, SplitText, useGSAP };

export const openBooking = () => window.dispatchEvent(new Event("open-booking"));
export const scrollToId = (id: string) => {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string | number) => void } }).__lenis;
  if (id === "top") return lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0 });
  lenis ? lenis.scrollTo("#" + id) : document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/** Runs `cb` only when the visitor has not asked for reduced motion. Cleans up on unmount. */
export function useMotion(scope: RefObject<HTMLElement | null>, cb: () => void) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => { cb(); });
    return () => mm.revert();
  }, { scope });
}

/** Scroll reveals: [data-split] masked word reveal, [data-fade] fade-up, [data-scrub] word colour scrub. */
export function reveals(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    SplitText.create(el, {
      type: "lines,words", mask: "lines", autoSplit: true,
      onSplit: (self) => gsap.from(self.words, { yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.05, scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" } }),
    });
  });
  root.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
    gsap.from(el, { y: 36, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse"} });
  });
  root.querySelectorAll<HTMLElement>("[data-scrub]").forEach((el) => {
    SplitText.create(el, {
      type: "words", autoSplit: true,
      onSplit: (self) => gsap.fromTo(self.words, { color: "#656B70" }, { color: "#F5F5F5", stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true } }),
    });
  });
}
