import { useState } from "react";

interface Project {
  title: string;
  impact: string;
  description: string;
  methods: string[];
  details?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Sales Optimization Model",
    impact: "Revenue +15%  |  Margin +12%  |  Churn −18%",
    description:
      "Designed a predictive sales optimization framework using structured experimentation and pricing validation to improve revenue performance.",
    methods: ["Predictive modeling (Python, SQL)", "A/B pricing analysis", "Retention analytics"],
    details:
      "Applied regression and decision-tree models to historical sales data, identified key churn indicators, and built a pricing sensitivity dashboard that informed quarterly pricing decisions.",
  },
  {
    title: "Customer Segmentation Framework",
    impact: "Engagement +18%  |  Conversion +22%",
    description:
      "Built a clustering-based segmentation strategy aligned with campaign objectives to improve targeting precision and conversion rates.",
    methods: ["RFM + clustering", "Business-aligned segmentation logic", "Automated reporting workflows"],
    details:
      "Used K-means and RFM analysis to segment 50K+ customer records, mapped segments to campaign strategies, and automated weekly reporting through Python scripts and Power BI dashboards.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="mb-16">
          <p className="text-label uppercase text-muted-foreground mb-3">03</p>
          <h2 className="text-h2 text-foreground">Selected Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border p-8 md:p-10 transition-all duration-200 hover:translate-y-[-2px] hover:border-foreground/30 group">
      <h3 className="text-h3 text-foreground mb-3">{project.title}</h3>
      <p className="text-small text-accent font-medium mb-5 tracking-wide">
        {project.impact}
      </p>
      <p className="text-body text-muted-foreground mb-6">{project.description}</p>
      <ul className="space-y-2 mb-8">
        {project.methods.map((method, i) => (
          <li key={i} className="text-small text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
            {method}
          </li>
        ))}
      </ul>

      {project.details && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6 border-b border-dashed border-muted-foreground/40 pb-px"
          >
            {expanded ? "Less detail" : "More detail"}
          </button>
          {expanded && (
            <p className="text-small text-muted-foreground mb-6 leading-relaxed">
              {project.details}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Work;
