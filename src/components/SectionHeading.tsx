interface SectionHeadingProps {
  index: string;
  title: string;
  eyebrow?: string;
}

const SectionHeading = ({ index, title, eyebrow }: SectionHeadingProps) => (
  <div className="mb-12 grid gap-4 md:grid-cols-[8rem_1fr] md:items-end">
    <p className="text-label font-semibold uppercase text-accent">{index}</p>
    <div>
      {eyebrow && <p className="mb-2 text-small font-medium text-muted-foreground">{eyebrow}</p>}
      <h2 className="text-h2 text-foreground">{title}</h2>
    </div>
  </div>
);

export default SectionHeading;