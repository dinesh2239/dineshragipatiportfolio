const Contact = () => {
  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-muted-foreground mb-3">09</p>
          <h2 className="text-h2 text-foreground mb-6">Contact</h2>
          <p className="text-body text-muted-foreground mb-12 md:whitespace-nowrap">
            Open to Business Analyst roles and strategic analytical opportunities.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:dineshragipati99@gmail.com"
              className="flex items-center gap-4 border border-border px-6 py-5 hover:border-foreground/40 hover:bg-muted/30 transition-all duration-200 group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground group-hover:text-foreground transition-colors">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <div>
                <p className="text-label uppercase text-muted-foreground mb-1">Email</p>
                <p className="text-body text-foreground">dineshragipati99@gmail.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/dineshragipati"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-border px-6 py-5 hover:border-foreground/40 hover:bg-muted/30 transition-all duration-200 group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground group-hover:text-foreground transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p className="text-label uppercase text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-body text-foreground">linkedin.com/in/dineshragipati</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
