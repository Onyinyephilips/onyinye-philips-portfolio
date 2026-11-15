"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { reveals, useMotion, openBooking } from "@/lib/motion";

function Row({ p }: { p: Project }) {
  const body = (
    <>
      <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">{p.number}</span>
      <div>
        <h3 className="display text-[clamp(2.6rem,9vw,6rem)] transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:text-accent group-focus-within:translate-x-4 group-focus-within:text-accent">{p.name}
  {p.country && (
    <span className="ml-2 mt-1 inline-flex items-center gap-1.5 whitespace-nowrap align-top font-mono text-[10px] font-normal leading-none tracking-[0.14em] text-sub transition-colors duration-500 group-hover:text-accent md:ml-3 md:mt-2 md:text-xs">{p.country.name}
      <span aria-hidden className="text-sm md:text-base">{p.country.flag}</span>
      
    </span>
  )}</h3>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-sub">{p.category}</p>
        <div className="overflow-hidden transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-56 md:group-hover:opacity-100 md:group-focus-within:max-h-56 md:group-focus-within:opacity-100">
          <p className="mt-6 max-w-2xl leading-relaxed text-sub text-base md:text-lg">{p.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.technologies.map((t) => <li key={t} className="border border-line px-3 py-1 font-mono text-[11px] text-soft">{t}</li>)}
          </ul>
        </div>
      </div>
      <span className="flex items-center gap-2 justify-self-start font-mono text-[11px] uppercase tracking-[0.14em] text-sub transition-colors group-hover:text-accent md:justify-self-end">
        {p.url ? <>Visit site <ArrowUpRight aria-hidden size={26} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" /></> : "Coming soon"}
      </span>
    </>
  );
  const cls = "grid gap-5 py-9 md:grid-cols-[4.5rem_1fr_auto] md:gap-8 md:py-12";
  return (
    <li data-fade className="group relative border-b border-line">
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100" />
      {p.url ? (
        <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} (opens in a new tab)`} className={cls}>{body}</a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </li>
  );
}

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => reveals(root.current!));
  return (
    <section id="projects" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">Selected projects</p>
        <h2 data-split className="display mb-20 max-w-5xl text-[clamp(2.2rem,6.5vw,6rem)]">Built with purpose. <span className="text-accent">Designed to perform.</span></h2>
        <ul className="border-t border-line">{projects.map((p) => <Row key={p.id} p={p} />)}</ul>
        <button data-fade onClick={openBooking} className="group mt-16 text-left font-mono text-sm uppercase tracking-[0.12em] text-sub transition-colors hover:text-accent">
          Have a project in mind? <span className="text-ink group-hover:text-accent">Let&apos;s build something meaningful.</span>
        </button>
      </div>
    </section>
  );
}
