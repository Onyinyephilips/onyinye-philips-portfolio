"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./marquee.css";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "STRATEGY",
  "DESIGN",
  "ENGINEERING",
  "PERFORMANCE",
];

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="marquee-section mt-28" ref={sectionRef}>
      <div className="marquee-track" ref={trackRef}>
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
}