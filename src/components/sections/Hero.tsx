const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="container-swiss">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-label uppercase text-muted-foreground mb-6">
            Business Analyst (Aspiring)
          </p>
          <h1 className="text-display text-foreground mb-8">
            Ragipati<br />Dinesh Naidu
          </h1>
          <p className="text-h3 font-normal text-foreground mb-4 max-w-xl">
            Designing business-aligned analytical systems.
          </p>
          <div className="max-w-lg mb-12">
            <p className="text-body text-muted-foreground">
              I translate business problems into structured analytical frameworks.
              <br />
              Focused on measurable impact, not just models.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background text-small font-medium tracking-wide hover:bg-accent transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center text-small text-muted-foreground hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
