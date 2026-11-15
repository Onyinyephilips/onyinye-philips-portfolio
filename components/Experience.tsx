"use client";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { gsap, reveals, useMotion } from "@/lib/motion";

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => {
    reveals(root.current!);
    gsap.fromTo(".tl-line", { scaleY: 0 }, { scaleY: 1, ease: "none", transformOrigin: "top", scrollTrigger: { trigger: ".tl", start: "top 70%", end: "bottom 70%", scrub: true } });
    gsap.utils.toArray<HTMLElement>(".tl-dot").forEach((d) =>
      gsap.fromTo(d, { backgroundColor: "#080A0B" }, { backgroundColor: "#3DE078", duration: 0.4, scrollTrigger: { trigger: d, start: "top 70%", toggleActions: "play none none reverse" } })
    );
  });
  return (
    <section id="experience" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">The journey so far</p>
        <h2 data-split className="display mb-20 max-w-5xl text-[clamp(2.2rem,6.5vw,6rem)]">Experience built through <span className="text-accent">real work.</span></h2>
        <ol className="tl relative ml-2 md:ml-0">
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line md:left-[calc(25%-1px)]" />
          <span aria-hidden className="tl-line absolute bottom-0 left-0 top-0 w-px bg-accent md:left-[calc(25%-1px)]" />
          {experience.map((e) => (
            <li key={e.company} data-fade className="relative grid gap-3 pb-16 pl-8 md:grid-cols-4 md:gap-0 md:pl-0">
              <span aria-hidden className="tl-dot absolute left-0 top-3 h-2.5 w-2.5 -translate-x-[5px] rounded-full border border-accent md:left-1/4" />
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-sub md:pr-10 md:pt-2 md:text-right">{e.period}</p>
              <div className="md:col-span-3 md:pl-12">
                <h3 className="display text-[clamp(1.9rem,4.5vw,3.8rem)]">{e.company}</h3>
                <p className="mt-2 text-ink">{e.role}</p>
                {e.points.length > 0 && (
                  <ul className="mt-4 max-w-xl space-y-1.5 text-sub">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
