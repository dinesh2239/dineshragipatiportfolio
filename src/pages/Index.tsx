import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Work from "@/components/sections/Work";
import AIAgents from "@/components/sections/AIAgents";
import Capabilities from "@/components/sections/Capabilities";
import Leadership from "@/components/sections/Leadership";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Approach />
        <Work />
        <AIAgents />
        <Capabilities />
        <Leadership />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
