"use client";
import { nav, site } from "@/lib/data";
import { scrollToId } from "@/lib/motion";

export default function Footer() {
  const socials = [site.linkedin && ["LinkedIn", site.linkedin], site.github && ["GitHub", site.github]].filter(Boolean) as string[][];
  return (
    <footer className="border-t border-line py-16">
      <div className="wrap grid gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="display text-3xl md:text-5xl">{site.name}</p>
          <p className="mt-4 text-accent">{site.tagline}</p>
          <p className="mt-1 text-sub">{site.title}.</p>
        </div>
        <div className="flex flex-col gap-8 md:items-end">
          <ul className="flex flex-wrap gap-6">
            {nav.map((n) => <li key={n.id}><button onClick={() => scrollToId(n.id)} className="font-mono text-xs uppercase tracking-[0.14em] text-sub hover:text-accent">{n.label}</button></li>)}
            {socials.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.14em] text-sub hover:text-accent">{l}</a></li>)}
          </ul>
          <button onClick={() => scrollToId("top")} className="group font-mono text-xs uppercase tracking-[0.14em] text-ink hover:text-accent">
            Back to top <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
      <p className="wrap mt-12 font-mono text-[11px] text-muted">© {new Date().getFullYear()} {site.name} V1. All rights reserved.</p>
    </footer>
  );
}
