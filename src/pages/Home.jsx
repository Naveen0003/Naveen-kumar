import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SeoCaseStudy from "../components/SeoCaseStudy";
import LinkBuilding from "../components/LinkBuilding";
import Skills from "../components/Skills";
import About from "../components/About";
import WorkProcess from "../components/WorkProcess";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <SeoCaseStudy />
      <LinkBuilding />
      <Skills />
      <About />
      <WorkProcess />
      <FAQ />
      <Contact />
    </>
  );
}
