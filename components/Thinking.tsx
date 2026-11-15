"use client";
import { useRef } from "react";
import { principles } from "@/lib/data";
import { reveals, useMotion } from "@/lib/motion";

export default function Thinking() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => reveals(root.current!));
  return (
    <section id="thinking" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">How I think</p>
        <h2 data-split className="display max-w-6xl text-[clamp(2.1rem,6vw,5.6rem)]">I don&apos;t just build websites. I build solutions around <span className="text-accent">what businesses actually need.</span></h2>
        <div className="mt-32 space-y-28 md:space-y-40">
          {principles.map((p, i) => (
            <div key={p.title} className={`grid gap-6 md:grid-cols-12 ${i % 2 ? "md:[&>div]:col-start-5" : ""}`}>
              <div className="md:col-span-8">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 data-split className="display mt-4 text-[clamp(2rem,5.5vw,5rem)]">{p.title}</h3>
                <p data-fade className="mt-6 max-w-md text-lg leading-relaxed text-sub">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
