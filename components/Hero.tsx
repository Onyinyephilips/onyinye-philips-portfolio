"use client";
import { useRef } from "react";
import {
  gsap,
  ScrollTrigger,
  SplitText,
  useMotion,
  openBooking,
  scrollToId,
} from "@/lib/motion";

const WORDS = "Captivate. Convert. Elevate. ";
const INTRO = ["I am", "Onyinye", "Philips."];

function Row({ dir }: { dir: 1 | -1 }) {
  return (
    <div className="marquee overflow-hidden whitespace-nowrap" data-dir={dir}>
      <div className="track flex w-max">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="stroke-text display shrink-0 pr-10 text-[clamp(6rem,19vw,17rem)]"
          >
            {WORDS.repeat(2)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useMotion(root, () => {
    // Endless marquee rows, alternating direction
    const loops = gsap.utils.toArray<HTMLElement>(".marquee").map((row, i) => {
      const dir = Number(row.dataset.dir);
      return gsap.fromTo(
        row.querySelector(".track"),
        { xPercent: dir === 1 ? 0 : -50 },
        {
          xPercent: dir === 1 ? -50 : 0,
          duration: 30 + i * 6,
          ease: "none",
          repeat: -1,
        },
      );
    });

    // Scrolling fast speeds the rows up, then they ease back to normal
    ScrollTrigger.create({
      trigger: root.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 400, 6);
        gsap.to(loops, {
          timeScale: boost,
          duration: 0.15,
          overwrite: true,
          onComplete: () => {
            gsap.to(loops, { timeScale: 1, duration: 1 });
          },
        });
      },
    });

    // Master timeline: name intro first, then the hero
    const html = document.documentElement;
    const playIntro = window.scrollY < 50; // skip the intro if the page reloads scrolled down
    const split = SplitText.create(".hero-h1", {
      type: "lines",
      mask: "lines",
    });
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.2 });

    if (playIntro) {
      html.classList.add("lenis-stopped"); // lock scrolling during the intro
      const chars = gsap.utils
        .toArray<HTMLElement>(".intro-line")
        .flatMap(
          (l) => SplitText.create(l, { type: "chars" }).chars as HTMLElement[],
        );
      gsap.set(".intro", { autoAlpha: 1 });
      tl.from(chars, { yPercent: 115, duration: 1, stagger: 0.03 })
        .to(
          chars,
          { yPercent: -115, duration: 0.7, stagger: 0.02, ease: "power3.in" },
          "+=0.6",
        )
        .to(
          ".intro",
          { yPercent: -100, duration: 1, ease: "power4.inOut" },
          "-=0.25",
        )
        .set(".intro", { display: "none" })
        .call(() => html.classList.remove("lenis-stopped"));
    } else {
      gsap.set(".intro", { display: "none" });
    }

    tl.from(".hero-bg", { opacity: 0, duration: 1.8 }, playIntro ? "-=0.8" : 0)
      .from(".h-eyebrow", { y: 16, opacity: 0, duration: 0.8 }, "<0.2")
      .from(
        split.lines,
        { yPercent: 110, duration: 1.2, stagger: 0.12 },
        "-=0.4",
      )
      .from(".h-sub", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
      .from(
        ".h-cta",
        { y: 20, opacity: 0, stagger: 0.12, duration: 0.8 },
        "-=0.7",
      )
      .from(".h-scroll", { opacity: 0, duration: 1 }, "-=0.4");

    gsap.to(".h-scroll-line", {
      scaleY: 0,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-32"
    >
      {/* Full-screen name intro (hidden until GSAP starts it, so reduced-motion visitors never see it) */}
      <div
        aria-hidden
        className="intro invisible fixed inset-0 z-[60] flex flex-col justify-center bg-bg px-6 md:px-12"
      >
        {INTRO.map((t, i) => (
          <span key={t} className="block overflow-hidden pb-[0.08em]">
            <span
              className={`intro-line display inline-block text-[clamp(3.4rem,15vw,14rem)] ${i === 2 ? "text-accent" : ""} ${i === 0 ? "font-light" : ""}`}
            >
              {t}
            </span>
          </span>
        ))}
      </div>

      {/* Background marquee rows */}
      <div
        aria-hidden
        className="hero-bg pointer-events-none absolute inset-0 flex select-none flex-col justify-center gap-2"
      >
        <Row dir={1} />
        <Row dir={-1} />
        <Row dir={1} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(8,10,11,0.92)_0%,rgba(8,10,11,0.55)_55%,transparent_80%)]"
      />

      <div className="wrap relative">
        <p className="eyebrow h-eyebrow mb-8 flex items-center gap-3">
          <span aria-hidden className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          Available to take on new projects
        </p>
        <h1 className="hero-h1 display max-w-5xl text-[clamp(2.6rem,7.4vw,6.8rem)]">
          <span className="font-light">I build</span> digital{" "}
          <span className="text-accent">experiences</span> that move{" "}
          <span className="font-light">businesses</span>{" "}
          <span className="text-accent">forward.</span>
        </h1>
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="h-sub max-w-xl text-lg leading-relaxed text-sub">
            <span className="text-ink">
              I’m Philip, a Solutions Architect and Web Developer in Port
              Harcourt, Nigeria,
            </span>{" "}
            building high-performing websites, e-commerce platforms, and
            scalable digital solutions for businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToId("projects")}
              className="btn h-cta border-accent bg-accent text-bg hover:bg-soft"
            >
              Explore my work
            </button>
            <button
              onClick={openBooking}
              className="btn h-cta border-line text-ink hover:border-accent hover:text-accent"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-scroll absolute bottom-8 left-6 flex items-center gap-4 md:left-12"
        aria-hidden
      >
        <span className="h-scroll-line block h-12 w-px bg-accent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
      </div>
    </section>
  );
}
