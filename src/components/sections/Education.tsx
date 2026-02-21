const Education = () => {
  return (
    <section id="education" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">06</p>
            <h2 className="text-h2 text-foreground">Education</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <div>
              <h3 className="text-h3 text-foreground mb-1">MBA</h3>
              <p className="text-body text-muted-foreground">
                Alliance School of Business — 2025–2027
              </p>
            </div>
            <div>
              <h3 className="text-h3 text-foreground mb-1">B.Com</h3>
              <p className="text-body text-muted-foreground">
                Osmania University — 75%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
