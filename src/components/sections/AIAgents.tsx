const AGENTS = [
  {
    title: "Internship Opportunity Finder",
    description:
      "An AI agent that scans and curates relevant internship openings, matching candidates with opportunities based on skills, location, and preferences.",
    url: "https://m365.cloud.microsoft:443/chat/?titleId=T_44a45302-18ab-c387-8c33-cf6b321dbf53&source=embedded-builder",
  },
  {
    title: "IntelliStack",
    description:
      "An intelligent research assistant that aggregates, summarizes, and organizes information from multiple sources to accelerate decision-making.",
    url: "https://m365.cloud.microsoft:443/chat/?titleId=T_41e98aee-4be3-eece-4213-8367e7558c93&source=embedded-builder",
  },
];

const AIAgents = () => {
  return (
    <section id="ai-agents" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="mb-16">
          <p className="text-label uppercase text-muted-foreground mb-3">04</p>
          <h2 className="text-h2 text-foreground">AI Agents</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="border border-border p-8 md:p-10 transition-all duration-200 hover:translate-y-[-2px] hover:border-foreground/30 group"
            >
              <h3 className="text-h3 text-foreground mb-4">{agent.title}</h3>
              <p className="text-body text-muted-foreground mb-8">
                {agent.description}
              </p>
              <a
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-small font-medium text-foreground border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                Try Agent
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 13L13 1M13 1H4M13 1v9" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
