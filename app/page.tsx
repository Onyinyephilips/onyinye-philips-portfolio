import dynamic from "next/dynamic";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Thinking from "@/components/Thinking";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/marquee";

const Booking = dynamic(() => import("@/components/Booking"));

export default function Page() {
  return (
    <Providers>
      <Nav />
      <main>
        <Hero />
        <Marquee/>
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Thinking />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Booking />
    </Providers>
  );
}
