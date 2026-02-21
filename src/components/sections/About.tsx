const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">01</p>
            <h2 className="text-h2 text-foreground">About</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-body text-foreground leading-relaxed">
              Currently pursuing an MBA at Alliance School of Business, with a foundation 
              in Business Analytics from Osmania University. My focus is aligning data 
              initiatives with business objectives — ensuring analytical work directly 
              supports revenue growth, efficiency, and strategic clarity. I prioritize 
              business fit over technical complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
