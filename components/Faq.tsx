"use client";
import { useRef } from "react";
import { gsap, reveals, useMotion } from "@/lib/motion";


const faqs = [
  { q: "Do you handle both website design and development?", a: "Absolutely. I handle both the design and development process, from structuring the user experience and creating engaging interfaces to building and launching fully functional websites. I can also work with existing designs and bring them to life." },
  { q: "Will my website work seamlessly across mobile, tablet, and desktop?", a: "Yes. Every website I build is designed with responsiveness in mind. I ensure that layouts, content, navigation, and interactive elements adapt smoothly across different screen sizes and devices." },
  { q: "What should I expect to invest in a website project?", a: "Every project is different. Pricing depends on the scope, complexity, functionality, and specific requirements. Once I understand what you're looking to achieve, I'll provide a tailored proposal with a clear breakdown of the investment." },
  { q: "Will I have full ownership and control of my website once it's completed?", a: "Yes. Once the project is completed, you'll have ownership of your website and its deliverables. I'll also provide the necessary access and guidance to help you manage your website confidently." },
  { q: "Are you available to take on new projects right now?", a: "I'm open to discussing new projects and collaborations. Book a discovery call. We'll talk through the problem and goals, your expected timeline, and explore best ways to bring your ideas to life." },
];


function Message({ text, side }: { text: string; side: "q" | "a" }) {
  const q = side === "q";
  return (
    <div className={`flex ${q ? "justify-start" : "justify-end"}`}>
      <div className={`msg ${q ? "msg-q" : "msg-a"} relative w-fit max-w-[85%] md:max-w-xl`}>
        <p aria-hidden className="invisible px-6 py-4 leading-relaxed">{text}</p>
        <span className={`bub absolute top-0 h-full w-full overflow-hidden border ${q ? "left-0 rounded-3xl rounded-bl-md border-line bg-surface" : "right-0 rounded-3xl rounded-br-md border-accent/30 bg-deep"}`}>
          <span aria-hidden className="dots absolute inset-0 flex items-center justify-center gap-1.5 opacity-0">
            {[0, 1, 2].map((i) => <span key={i} className={`dot h-2 w-2 rounded-full ${q ? "bg-sub" : "bg-accent"}`} />)}
          </span>
        </span>
        <p className="txt absolute inset-0 px-6 py-4 leading-relaxed text-ink">{text}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const root = useRef<HTMLElement>(null);
  useMotion(root, () => {
    reveals(root.current!);
    const msgs = gsap.utils.toArray<HTMLElement>(".chat .msg");

    
    gsap.to(".chat .dot", { yPercent: -70, duration: 0.4, ease: "sine.inOut", stagger: { each: 0.15, repeat: -1, yoyo: true } });


    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".chat", start: "top 75%", end: "bottom 60%", scrub: 0.6, invalidateOnRefresh: true },
    });

    const DWELL = 1.2; // minimum time a bubble shows "..." before it can reveal
    const STEP = 0.6; // a waiting bubble appears this long after the previous waiting bubble
    const pillAt: number[] = [];
    const growAt: number[] = [];
    msgs.forEach((m, i) => {
      const origin = m.classList.contains("msg-q") ? "left bottom" : "right bottom";
      const bub = m.querySelector(".bub"), dots = m.querySelector(".dots"), txt = m.querySelector(".txt");
      // "..." appears at most one bubble ahead of the one currently being revealed
      const appear = Math.max(i ? pillAt[i - 1] + STEP : 0, i > 1 ? growAt[i - 2] : 0);
      // ...and it only reveals once the previous message is fully revealed
      const grow = Math.max(appear + DWELL, i ? growAt[i - 1] + 0.95 : 0);
      pillAt[i] = appear;
      growAt[i] = grow;
      tl.fromTo(bub, { opacity: 0, scale: 0.8, width: 72, height: 44, transformOrigin: origin }, { opacity: 1, scale: 1, width: 72, height: 44, duration: 0.5 }, appear)
        .fromTo(dots, { opacity: 0 }, { opacity: 1, duration: 0.2 }, appear + 0.2)
        .to(dots, { opacity: 0, duration: 0.25 }, grow)
        .to(bub, { width: () => m.offsetWidth, height: () => m.offsetHeight, duration: 0.6, ease: "power2.out", invalidateOnRefresh: true }, grow + 0.1)
        .fromTo(txt, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5 }, grow + 0.45);
    });
  });

  return (
    <section id="faq" ref={root} aria-labelledby="faq-title" className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow mb-8">Questions people ask</p>
        <h2 id="faq-title" data-split className="display mb-20 max-w-5xl text-[clamp(2.2rem,6.5vw,6rem)]">Quick answers, <span className="text-accent">straight up.</span></h2>
        <div className="chat mx-auto max-w-3xl space-y-14 md:space-y-20">
          {faqs.map((f) => (
            <div key={f.q} className="qa space-y-4">
              <Message side="q" text={f.q} />
              <Message side="a" text={f.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
