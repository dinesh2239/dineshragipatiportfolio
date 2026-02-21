const PRINCIPLES = [
  "Define the core business objective before modeling",
  "Identify measurable KPIs and constraints",
  "Build structured analytical frameworks",
  "Validate decisions with data",
  "Communicate insights in business language",
];

const Approach = () => {
  return (
    <section id="approach" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">02</p>
            <h2 className="text-h2 text-foreground">How I Think</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-6">
              {PRINCIPLES.map((item, i) => (
                <li key={i} className="flex gap-4 items-baseline">
                  <span className="text-label text-muted-foreground shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
