export const site = {
  name: "Onyinye Philips",
  title: "Solutions Architect & Web Developer",
  tagline: "Solving problems. Engineering possibilities.",
  booking: "https://cal.com/iamonyinye/30min",
  email: "hello@onyinyephilips.com",
  linkedin: "https://www.linkedin.com/in/iamonyinyephilips/",
  github: "",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://onyinyephilips.com",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  url: string;
  country?: { name: string; flag: string };
};

export const projects: Project[] = [
  {
    id: "bimun",
    number: "01",
    name: "BIMUN",
    category: "Digital Organisation / Non-profit",
    description:
      "A long-term digital platform supporting an international Model United Nations community. Helped build and evolve its online presence, bringing conferences, delegate registration, community initiatives, and organisational information into one accessible platform.",
    technologies: ["WordPress", "PHP", "Platform Maintenance"],
    url: "https://bimun.org.ng/",
    country: { name: "Nigeria", flag: "🇳🇬" },
  },
  {
    id: "care-onboard",
    number: "02",
    name: "CareOnboard",
    category: "Healthcare / Professional Services",
    description:
      "Built a polished, conversion-focused digital experience that brings a complex care management solution to life. Structured the website around clear user journeys, intuitive navigation, reusable sections, and responsive layouts, making its extensive services easier to understand and explore.",
    technologies: ["WordPress", "Elementor", "SEO"],
    url: "https://joincareonboard.com/",
    country: { name: "USA", flag: "🇺🇸" },
  },
  {
    id: "shopmagai",
    number: "03",
    name: "Magali",
    category: "E-commerce / Woocomerce",
    description:
      "Built an engaging digital storefront with intuitive product discovery, organised collections, and a seamless shopping experience that reflects the brand’s bold, elegant identity.",
    technologies: ["Woocomerce", "WordPress"],
    url: "https://shopmagali.com/",
    country: { name: "France", flag: "🇫🇷" },
  },
  {
    id: "pertheon",
    number: "04",
    name: "Pertheon",
    category: "Digital Solutions / Web Development",
    description:
      "Pertheon is a strategic design partner for visionary leaders. I designed and built the studio's website, focusing on clear storytelling, refined interactions, and a polished digital experience. I currently work with Pertheon as Lead Web Developer, contributing to digital projects and web solutions for its clients.",
    technologies: ["WordPress", "Headless CMS"],
    url: "https://pertheon.com/",
    country: { name: "USA", flag: "🇺🇸" },
  },

  {
    id: "guscooney",
    number: "05",
    name: "Gus Cooney",
    category: "CMS / Publication",
    description:
      "Built a clean, research-focused personal website that presents academic work, publications, and professional experience. Prioritised clear information architecture, typography, and intuitive navigation to make complex research accessible.",
    technologies: ["WordPress", "Tailwind"],
    url: "https://shopmagali.com/",
    country: { name: "USA", flag: "🇺🇸" },
  },
  {
    id: "affordclean",
    number: "06",
    name: "ACS",
    category: "Cleaning Agency",
    description:
      "Designed and built a user-friendly website for a afford cleaning services, a cleaning company serving London, Essex, and Kent. Translated its diverse cleaning services and community-focused mission into an engaging website, with intuitive service discovery, clear quote-request journeys, and a responsive layout that makes it easy for customers to get started.",
    technologies: ["WordPress", "Tailwind", "Elementor"],
    url: "https://affordcleanservices.co.uk/",
    country: { name: "United Kingdom", flag: "🇬🇧" },
  },
  {
    id: "cameo",
    number: "07",
    name: "Cameo Surgery",
    category: "Healthcare / Beauty",
    description:
      "Built a polished digital experience for a cosmetic surgery practice, showcasing its procedures, medical expertise, and patient-centred approach. Focused on engaging storytelling, intuitive navigation, and clear consultation journeys that help prospective patients explore services and take the next step.",
    technologies: ["Webflow", "JavaScript", "FinSweet"],
    url: "https://www.cameosurgerycenter.com/",
    country: { name: "USA", flag: "🇺🇸" },
  },

  {
    id: "tmk",
    number: "08",
    name: "TMK",
    category: "Entertainment / Club",
    description:
      "Built a vibrant digital platform for an entertainment and marketing company creating memorable events and cultural experiences across the US and Nigeria. Brought the brand's diverse offerings together in a cohesive digital experience, with engaging layouts, intuitive navigation, and a strong visual identity that captures the energy of its entertainment portfolio.",
    technologies: ["WordPress", "Tailwind", "Divi"],
    url: "https://tmkentertainment.com/",
    country: { name: "USA", flag: "🇺🇸" },
  },
  {
    id: "dela",
    number: "09",
    name: "Dela Uni",
    category: "Education",
    description:
      "Worked on the university's landing page and frontend implementation, creating a structured, responsive experience that presents its identity, academic offerings, and key information clearly while making navigation intuitive.",
    technologies: ["React", "NextJs", "Tailwind", "Lenis", "Redux"],
    url: "",
    country: { name: "Nig", flag: "🇳🇬" },
  },
  {
    id: "livery",
    number: "10",
    name: "Livery Lane",
    category: "Transportation",
    description:
      "Crafted a premium web experience for Livery Lane, bringing luxury transportation, seamless navigation, and effortless bookings together in one polished digital experience.",
    technologies: [
      "WordPress",
      "Custom Theme",
      "Tailwind",
      "Lenis",
      "Plugin Dev",
    ],
    url: "",
    country: { name: "Nig", flag: "🇳🇬" },
  },
];

export const expertise = [
  {
    title: "Frontend Engineering",
    desc: "Building immersive, responsive, interactive, accessible, and high-performing interfaces.",
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "WordPress Engineering",
    desc: "Building custom WordPress experiences, custom themes, advanced functionality, and scalable content management solutions.",
    tech: ["WordPress", "PHP", "Elementor", "ACF", "Headless CMS"],
  },
  {
    title: "E-commerce Development",
    desc: "Creating and optimising online stores with a focus on performance, usability, and conversion.",
    tech: ["Shopify", "Liquid", "WooCommerce", "Custom Integrations"],
  },
  {
    title: "CMS & Digital Platforms",
    desc: "Building flexible digital platforms and content experiences that businesses can manage and scale.",
    tech: ["Webflow", "Memberstack", "WordPress"],
  },
  {
    title: "Performance & Optimisation",
    desc: "Improving website speed, responsiveness, usability, SEO foundations, and technical quality.",
    tech: [] as string[],
  },
];

export const experience = [
  {
    company: "Pertheon",
    role: "Lead Web Developer",
    period: "January 2025 – Present",
    points: [
      "Lead web development and implementation across different projects.",
      "Build React and Next.js interfaces.",
      "Deliver custom WordPress solutions.",
      "Implement Webflow and Memberstack experiences.",
      "Handle advanced WooCommerce and Shopify development.",
    ],
  },
  {
    company: "Malkain",
    role: "Frontend Developer",
    period: "June 2023 – December 2024",
    points: [
      "Led the development of high-fidelity, responsive frontend experiences for high-profile US clients, translating designs and business requirements into polished, production-ready interfaces.",
    ],
  },
  {
    company: "Candlewhip UK",
    role: "Shopify Developer",
    period: "August 2022 – December 2023",
    points: [
      "Developed and maintained the company's storefront using Liquid, JavaScript, HTML, and CSS, translating the business and design requirements into responsive production-ready interfaces.",
    ],
  },
  {
    company: "Intoxtech",
    role: "Frontend Developer / WordPress PHP Developer",
    period: "September 2020 – January 2024",
    points: [
      "Spearheaded end-to-end CMS development projects for UK-based clients, specialising in bespoke WordPress and WooCommerce solutions tailored to complex business requirements.",
      "Delivered full e-commerce implementations, achieving a measurable 20% increase in client revenue through optimised user journeys, conversion-focused UI, and performance tuning.",
    ],
  },
  {
    company: "BIMUN",
    role: "Digital Platform / Web Development",
    period: "Since 2016",
    points: [
      "Architected, developed, and continuously maintained the organization's core web platform, supporting the digital infrastructure behind an internationally focused Model United Nations initiative connecting young people across Africa.",
      "Long-term involvement, with subsequent volunteer involvement and technical responsibilities.",
    ],
  },
];

export const principles = [
  {
    title: "Understand before building.",
    body: "Every effective solution starts with understanding the problem, the audience, and the desired outcome.",
  },
  {
    title: "Function before fancy.",
    body: "Good design matters, but the experience must work, perform, and serve its purpose.",
  },
  {
    title: "Build for what comes next.",
    body: "A digital solution should be maintainable, scalable, and ready for future growth.",
  },
];
