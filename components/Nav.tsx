"use client";
import { useRef, useState } from "react";
import { nav, site } from "@/lib/data";
import { gsap, ScrollTrigger, scrollToId, useGSAP } from "@/lib/motion";

export default function Nav() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState("home");
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    const triggers = nav.map(({ id }) =>
      ScrollTrigger.create({ trigger: "#" + id, start: "top 55%", end: "bottom 55%", onToggle: (s) => s.isActive && setActive(id) })
    );
    const bar = ScrollTrigger.create({ start: 40, end: "95%", onToggle: (s) => setSolid(s.isActive) });
    return () => { triggers.forEach((t) => t.kill()); bar.kill(); };
  }, { scope: root });

  useGSAP(() => {
    if (open) gsap.fromTo(".m-link", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: "power3.out" });
  }, { dependencies: [open], scope: root });

  const go = (id: string) => { setOpen(false); scrollToId(id); };

  return (
    <header ref={root} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid || open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between md:h-20">
        <button onClick={() => go("home")} className="font-display text-sm font-bold tracking-[0.12em]">{site.name.toUpperCase()}</button>
        <ul className="hidden gap-9 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <button onClick={() => go(n.id)} aria-current={active === n.id ? "true" : undefined}
                className={`relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${active === n.id ? "text-ink" : "text-sub hover:text-ink"}`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 ${active === n.id ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="font-mono text-xs uppercase tracking-[0.14em] md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col justify-center gap-5 bg-bg px-6 md:hidden">
          {nav.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} className={`m-link display text-left text-5xl ${active === n.id ? "text-accent" : ""}`}>{n.label}</button>
          ))}
        </div>
      )}
    </header>
  );
}
