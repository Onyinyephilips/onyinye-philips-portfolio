import { site } from "@/lib/data";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: site.title,
  description:
    "Solutions Architect and Web Developer based in Port Harcourt, Nigeria. He builds high-performing websites and scalable digital solutions using for businesses worldwide.",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  knowsAbout: [
    "Solutions Architecture",
    "Web Development",
    "WordPress Development",
    "Shopify Development",
    "React",
    "Next.js",
    "Frontend Development",
    "E-commerce Development",
    "Website Performance",
  ],
  sameAs: [site.linkedin],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description:
    "The professional portfolio of Onyinye Philips, Solutions Architect and Web Developer.",
  publisher: {
    "@id": `${site.url}/#person`,
  },
};
