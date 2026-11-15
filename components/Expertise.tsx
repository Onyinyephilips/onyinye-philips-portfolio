"use client";
import { useEffect, useRef, useState } from "react";
import { expertise } from "@/lib/data";
import { gsap, reveals, useMotion } from "@/lib/motion";

function Row({ i, item, open, onToggle, onHover }: { i: number; item: (typeof expertise)[number]; open: boolean; onToggle: () => void; onHover: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const d = reduce ? 0 : 0.7;
    gsap.to(panel.current, { height: open ? "auto" : 0, duration: d, ease: "power3.inOut" });
    gsap.to(bar.current, { scaleX: open ? 1 : 0, duration: d, ease: "power3.inOut" });
    if (open && !reduce) gsap.fromTo(panel.current!.querySelectorAll("[data-in]"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.7, delay: 0.15, ease: "power3.out" });
  }, [open]);
  const id = `exp-${i}`;
  return (
    <li className="relative border-b border-line" onMouseEnter={onHover}>
      <span ref={bar} className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent" />
      <h3>
        <button onClick={onToggle} aria-expanded={open} aria-controls={id} className="group flex w-full items-baseline gap-5 py-7 text-left md:gap-10 md:py-10">
          <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
          <span className={`display text-[clamp(1.8rem,5vw,4.5rem)] transition-all duration-500 ${open ? "translate-x-3 text-accent" : "group-hover:translate-x-3"}`}>{item.title}</span>
          <span aria-hidden className={`ml-auto font-mono text-2xl text-sub transition-transform duration-500 ${open ? "rotate-45 text-accent" : ""}`}>+</span>
        </button>
      </h3>
      <div id={id} ref={panel} className="h-0 overflow-hidden">
        <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-[4.6rem]">
          <p data-in className="max-w-lg text-base md:text-lg leading-relaxed text-sub md:col-span-6">{item.desc}</p>
          {item.tech.length > 0 && (
            <ul data-in className="flex flex-wrap content-start gap-2 md:col-span-5 md:col-start-8">
              {item.tech.map((t) => <li key={t} className="border border-line px-3 py-1.5 font-mono text-xs text-soft">{t}</li>)}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Expertise() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);
  useMotion(root, () => reveals(root.current!));
  const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  return (
    <section id="expertise" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">What I bring to the table</p>
        <h2 data-split className="display mb-20 max-w-5xl text-[clamp(2.2rem,6.5vw,6rem)]">From complex problems to <span className="text-accent">digital solutions.</span></h2>
        <ul data-fade className="border-t border-line">
          {expertise.map((e, i) => (
            <Row key={e.title} i={i} item={e} open={open === i} onToggle={() => setOpen(open === i ? null : i)} onHover={() => canHover() && setOpen(i)} />
          ))}
        </ul>
      </div>
    </section>
  );
}
