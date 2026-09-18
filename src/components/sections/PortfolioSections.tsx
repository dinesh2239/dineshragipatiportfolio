import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Download, ExternalLink, FileText, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Hero = () => (
  <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border pt-24">
    <div className="data-grid absolute inset-0" aria-hidden="true" />
    <div className="container-portfolio relative py-16 md:py-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_18rem] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 flex flex-wrap items-center gap-3 text-small text-muted-foreground">
            <span className="inline-flex items-center gap-2 border border-border bg-background px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" /> Business Analyst (Aspiring)
            </span>
            <span className="inline-flex items-center gap-2"><MapPin size={15} /> Bengaluru, Karnataka, India</span>
          </div>
          <h1 className="max-w-5xl text-display text-foreground">Dinesh Ragipati</h1>
          <p className="mt-7 text-xl font-semibold text-foreground md:text-2xl">Data · Strategy · Agile</p>
          <p className="mt-2 max-w-2xl text-body text-muted-foreground">MBA Business Analytics | Power BI · Python · SQL</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">View My Work <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">Let's Connect <Mail /></a></Button>
            <Button asChild size="lg" variant="ghost"><a href="/resume.pdf" download>Download Resume <Download /></a></Button>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <a className="icon-link" href="mailto:dineshragipati9@gmail.com" aria-label="Email Dinesh"><Mail size={19} /></a>
            <a className="icon-link" href="https://www.linkedin.com/in/dinesh-ragipati-32b3aa229" target="_blank" rel="noopener noreferrer" aria-label="Dinesh Ragipati on LinkedIn"><Linkedin size={19} /></a>
          </div>
        </motion.div>
        <div className="border-l border-border pl-6 text-small text-muted-foreground">
          <p className="text-label font-semibold uppercase text-accent">Profile / 2026</p>
          <p className="mt-5 leading-relaxed">Turning business questions into structured analysis, practical insight, and better decisions.</p>
        </div>
      </div>
    </div>
  </section>
);

const openRoles = ["Business Analyst", "Product Analyst", "Data Analyst", "Other Analyst Roles"];
export const About = () => (
  <section id="about" className="section-spacing bg-secondary/50">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="01 / 07" title="About" eyebrow="Business-first analytical thinking" /></Reveal>
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,.75fr)] md:gap-20">
        <Reveal>
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">I’m developing my career at the intersection of business analytics, strategy, and technology.</p>
          <p className="mt-6 max-w-3xl text-body text-muted-foreground">My interests include data-driven decision making, business process optimization, analytical thinking, business strategy, and Agile ways of working. I am pursuing an MBA in Business Analytics at Alliance School of Business, Alliance University.</p>
        </Reveal>
        <Reveal className="space-y-8">
          <div>
            <p className="text-label font-semibold uppercase text-accent">Currently open to</p>
            <ul className="mt-4 space-y-3">{openRoles.map((role) => <li key={role} className="flex items-center gap-3 text-small text-foreground"><Check size={15} className="text-accent" />{role}</li>)}</ul>
          </div>
          <div className="border-t border-border pt-6"><p className="text-label font-semibold uppercase text-accent">Preferred locations</p><p className="mt-3 text-body text-foreground">Bengaluru / Hyderabad</p></div>
        </Reveal>
      </div>
    </div>
  </section>
);

const skillGroups = [
  { title: "Data & Analytics", items: ["Business Analytics", "Predictive Modeling", "SQL", "Power BI", "Python"] },
  { title: "Database & Tools", items: ["MySQL", "DBeaver", "MySQL Workbench", "Excel"] },
  { title: "Business & Strategy", items: ["Business Analysis", "Data Strategy", "Business Process Optimization", "Agile"] },
];
export const Skills = () => (
  <section id="skills" className="section-spacing border-t border-border">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="02 / 07" title="Skills" eyebrow="A practical toolkit for business decisions" /></Reveal>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {skillGroups.map((group, index) => <Reveal key={group.title} className="h-full bg-background p-7 md:p-9"><p className="text-label text-muted-foreground">0{index + 1}</p><h3 className="mt-5 text-h3 text-foreground">{group.title}</h3><div className="mt-7 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="border border-border bg-secondary px-3 py-2 text-small text-foreground">{item}</span>)}</div></Reveal>)}
      </div>
    </div>
  </section>
);

const experiences = [
  { company: "Alliance Business School", role: "Team Lead", date: "August 2025 – Present", details: ["Coordinated corporate mentors and student teams across cohorts.", "Managed scheduling, reporting, and communication workflows.", "Structured mentorship activities and supported progress tracking."] },
  { company: "Deal Squard", role: "Analytics Specialist", date: "April 2026 – June 2026", details: ["Wrote MySQL queries using SELECT, JOIN, GROUP BY/HAVING, subqueries, CTEs, and views across customer, booking, and transaction data.", "Used MySQL Workbench, DBeaver, and Excel to translate business questions into SQL and validate outputs.", "Identified join and filtering errors during data validation."] },
];
export const Experience = () => (
  <section id="experience" className="section-spacing bg-primary text-primary-foreground">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="03 / 07" title="Experience" eyebrow="Roles, responsibilities, and applied learning" /></Reveal>
      <div className="ml-2 border-l border-primary-foreground/20">
        {experiences.map((item) => <Reveal key={item.company} className="relative pb-14 pl-8 last:pb-0 md:pl-12"><span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full border-2 border-primary bg-accent" /><div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start"><div><p className="text-small text-primary-foreground/60">{item.company}</p><h3 className="mt-1 text-h3 text-primary-foreground">{item.role}</h3></div><p className="text-small text-primary-foreground/60">{item.date}</p></div><ul className="mt-6 max-w-3xl space-y-3">{item.details.map((detail) => <li key={detail} className="flex gap-3 text-body text-primary-foreground/75"><span className="mt-3 h-px w-4 shrink-0 bg-accent" />{detail}</li>)}</ul></Reveal>)}
      </div>
    </div>
  </section>
);

const projects = [
  { number: "01", title: "Role of Analytics in Working Capital Optimization", description: "An analysis of how structured data and analytical thinking can support working capital efficiency and informed financial decisions.", tags: ["Working Capital", "Analytics", "Financial Efficiency", "Business Decision Making"] },
  { number: "02", title: "Affordable Housing Solutions", role: "Prototype Architect", description: "An SDG-linked initiative exploring practical, sustainable responses to affordable housing through structured problem solving and prototype development.", tags: ["Problem Solving", "Prototype Development", "Sustainability", "Social Impact"] },
];
export const Projects = () => (
  <section id="projects" className="section-spacing">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="04 / 07" title="Projects" eyebrow="Selected analytical and problem-solving work" /></Reveal>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <Reveal key={project.number} className="group project-card"><div className="flex items-center justify-between"><span className="text-label text-accent">PROJECT / {project.number}</span><ArrowUpRight className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></div><h3 className="mt-9 text-h3 text-foreground">{project.title}</h3>{project.role && <p className="mt-3 text-small font-semibold text-accent">Role: {project.role}</p>}<p className="mt-5 text-body text-muted-foreground">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-3 py-1.5 text-small text-muted-foreground">{tag}</span>)}</div></Reveal>)}</div>
    </div>
  </section>
);

const certifications = [
  { title: "Microsoft Business Analytics Professional Certificate", file: "/Microsoft_Business_Analytics_Professional_Certificate.pdf" },
  { title: "Accenture North America – Data Analytics and Visualization Job Simulation" },
  { title: "Tata Group – ESG" },
];
export const Certifications = () => (
  <section id="certifications" className="section-spacing border-y border-border bg-secondary/50">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="05 / 07" title="Certifications" eyebrow="Professional learning and applied simulations" /></Reveal>
      <div className="divide-y divide-border border-y border-border">{certifications.map((cert, index) => <Reveal key={cert.title} className="grid gap-5 py-7 md:grid-cols-[3rem_1fr_auto] md:items-center"><FileText className="text-accent" size={22} /><div><p className="text-label text-muted-foreground">CERTIFICATE 0{index + 1}</p><h3 className="mt-2 text-lg font-semibold text-foreground">{cert.title}</h3></div><div className="flex items-center gap-2">{cert.file ? <><Button asChild variant="outline" size="sm"><a href={cert.file} target="_blank" rel="noopener noreferrer">View <ExternalLink /></a></Button><Button asChild variant="ghost" size="sm"><a href={cert.file} download>Download <Download /></a></Button></> : <span className="text-small text-muted-foreground">Document coming soon</span>}</div></Reveal>)}</div>
    </div>
  </section>
);

const education = [
  { degree: "MBA Business Analytics", school: "Alliance School of Business, Alliance University" },
  { degree: "B.Com Business Analytics", school: "Osmania University, Hyderabad" },
  { degree: "Civics, Economics, Commerce", school: "Emeralds Junior College" },
  { degree: "Secondary Education", school: "Sri Chaitanya School, Ananthapuram" },
];
export const Education = () => (
  <section id="education" className="section-spacing">
    <div className="container-portfolio">
      <Reveal><SectionHeading index="06 / 07" title="Education" eyebrow="Academic foundation" /></Reveal>
      <div className="grid gap-px border-l border-border md:grid-cols-2">{education.map((item, index) => <Reveal key={item.school} className="relative border-b border-r border-border p-7 md:p-9"><span className="absolute -left-1 top-10 h-2 w-2 rounded-full bg-accent" /><p className="text-label text-accent">0{index + 1}</p><h3 className="mt-5 text-h3 text-foreground">{item.degree}</h3><p className="mt-2 text-body text-muted-foreground">{item.school}</p></Reveal>)}</div>
    </div>
  </section>
);

export const Contact = () => {
  const [error, setError] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) { setError("Please complete all fields with a valid email address."); return; }
    setError("");
    window.location.href = `mailto:dineshragipati9@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
  };
  return (
    <section id="contact" className="section-spacing bg-primary text-primary-foreground">
      <div className="container-portfolio">
        <Reveal><SectionHeading index="07 / 07" title="Let’s connect and build better decisions with data." eyebrow="Contact" /></Reveal>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal className="space-y-7">
            <a className="contact-line" href="mailto:dineshragipati9@gmail.com"><Mail size={19} /><span><small>Email</small>dineshragipati9@gmail.com</span></a>
            <a className="contact-line" href="https://www.linkedin.com/in/dinesh-ragipati-32b3aa229" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>dinesh-ragipati-32b3aa229</span></a>
            <div className="contact-line"><MapPin size={19} /><span><small>Location</small>Bengaluru, Karnataka, India</span></div>
          </Reveal>
          <Reveal>
            <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Name<Input name="name" placeholder="Your name" /></label><label className="field-label">Email<Input name="email" type="email" placeholder="you@example.com" /></label></div>
              <label className="field-label">Message<Textarea name="message" placeholder="Tell me about the opportunity or conversation." className="min-h-36" /></label>
              {error && <p className="text-small text-destructive" role="alert">{error}</p>}
              <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-fit">Send Message <Send /></Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};