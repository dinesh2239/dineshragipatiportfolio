import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Work from "@/components/sections/Work";
import Capabilities from "@/components/sections/Capabilities";
import Leadership from "@/components/sections/Leadership";
import Education from "@/components/sections/Education";
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
        <Capabilities />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
