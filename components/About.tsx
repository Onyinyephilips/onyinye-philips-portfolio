"use client";
import { useRef } from "react";
import { reveals, useMotion } from "@/lib/motion";

const facts = [
  "7+ Years of Experience",
  "Computer Science Background",
  "International Client Experience",
  "Independent & Collaborative Work",
];

export default function About() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => reveals(root.current!));
  return (
    <section id="about" ref={root} className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">A little about me</p>
        <h2
          data-split
          className="display max-w-6xl text-[clamp(2.2rem,6.5vw,6rem)]"
        >
          Technology is only powerful when it solves the{" "}
          <span className="text-accent">right problem.</span>
        </h2>
        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div
            data-fade
            className="space-y-6 text-lg leading-relaxed text-sub md:col-span-5 md:col-start-2"
          >
            <p>
              I'm <span className="text-white">Onyinye Philip Obiete,</span> a
              Solutions Architect and Web Developer passionate about building
              digital experiences that combine thoughtful engineering,
              functional design, and business impact.
            </p>
            <p>
              Over the years, I&apos;ve worked with businesses, professional
              service firms, e-commerce brands, and digital organisations to
              create, improve, and maintain digital platforms.
            </p>
            <p>
              My approach goes beyond writing code. I focus on understanding the
              problem, choosing the right technology, and delivering solutions
              that are scalable, functional, and built to perform.
            </p>
          </div>
          <ul data-fade className="self-end md:col-span-4 md:col-start-8">
            {facts.map((f) => (
              <li
                key={f}
                className="border-t border-line py-4 font-mono text-sm tracking-wide text-sub first:border-t-0 md:text-base"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
        <p
          data-scrub
          className="display mt-28 max-w-5xl text-[clamp(2rem,5.5vw,5rem)]"
        >
          Good technology should make complex things feel simple.
        </p>
      </div>
    </section>
  );
}
