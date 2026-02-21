const COLUMNS = [
  {
    title: "Business Analysis",
    items: ["Requirement Analysis", "KPI Definition", "Process Optimization", "Stakeholder Communication"],
  },
  {
    title: "Analytics",
    items: ["SQL", "Python", "Statistical Modeling", "Business Analytics"],
  },
  {
    title: "Tools",
    items: ["Power BI", "Excel", "Git / GitHub", "Google Colab"],
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="mb-16">
          <p className="text-label uppercase text-muted-foreground mb-3">04</p>
          <h2 className="text-h2 text-foreground">Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-h3 text-foreground mb-6">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="text-body text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
