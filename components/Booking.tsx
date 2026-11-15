"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";
import { gsap } from "@/lib/motion";

export default function Booking() {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const show = () => setOpen(true);
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-booking", show);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-booking", show); window.removeEventListener("keydown", key); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    if (open) {
      closeBtn.current?.focus();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        gsap.fromTo(box.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
    }
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Book a discovery call" data-lenis-prevent onClick={() => setOpen(false)}
      className="fixed inset-0 z-[100] grid place-items-center bg-bg/85 p-3 backdrop-blur-md md:p-8">
      <div ref={box} onClick={(e) => e.stopPropagation()} className="flex h-[88dvh] w-full max-w-4xl flex-col border border-line bg-surface">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="eyebrow">Book a discovery call</span>
          <button ref={closeBtn} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] text-sub hover:text-accent">Close</button>
        </div>
        <iframe title="Book a 30 minute discovery call" src={`${site.booking}?embed=true&theme=dark&layout=month_view`} className="w-full flex-1 bg-surface" loading="lazy" />
      </div>
    </div>
  );
}
