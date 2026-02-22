const Leadership = () => {
  return (
    <section id="leadership" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">06</p>
            <h2 className="text-h2 text-foreground">Leadership</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h3 className="text-h3 text-foreground mb-1">Corporate Mentorship Team Lead</h3>
            <p className="text-small text-muted-foreground mb-6">
              Alliance School of Business — 2025
            </p>
            <ul className="space-y-3">
              <li className="text-body text-foreground flex gap-3 items-baseline">
                <span className="w-1 h-1 bg-foreground rounded-full shrink-0 mt-3" />
                Coordinated corporate mentors and student teams
              </li>
              <li className="text-body text-foreground flex gap-3 items-baseline">
                <span className="w-1 h-1 bg-foreground rounded-full shrink-0 mt-3" />
                Structured reporting and scheduling workflows
              </li>
              <li className="text-body text-foreground flex gap-3 items-baseline">
                <span className="w-1 h-1 bg-foreground rounded-full shrink-0 mt-3" />
                Improved program efficiency through process alignment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
