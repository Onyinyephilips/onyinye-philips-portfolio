"use client";
import { useRef } from "react";
import { site } from "@/lib/data";
import { reveals, useMotion, openBooking } from "@/lib/motion";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => reveals(root.current!));
  const links = [
    site.email && { label: "Email", href: `mailto:${site.email}` },
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    site.github && { label: "GitHub", href: site.github },
  ].filter(Boolean) as { label: string; href: string }[];
  return (
    <section id="contact" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">Let&apos;s make something happen</p>
        <h2 data-split className="display max-w-6xl text-[clamp(2.4rem,8vw,7.5rem)]">Have a challenge? <span className="text-accent">I&apos;d love to hear about it.</span></h2>
        <p data-fade className="mt-12 max-w-xl text-lg leading-relaxed text-sub">Whether you&apos;re building something new, improving an existing platform, or looking for someone to help turn a complex idea into a working solution, let&apos;s talk.</p>
        <div data-fade className="mt-12 flex flex-wrap items-center gap-8">
          <button onClick={openBooking} className="btn border-accent bg-accent text-bg hover:bg-soft">Book a discovery call</button>
          {links.map((l) => (
            <a key={l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="font-mono text-xs uppercase tracking-[0.14em] text-sub underline-offset-8 transition-colors hover:text-accent hover:underline">{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
