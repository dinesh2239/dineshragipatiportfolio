interface Certification {
  title: string;
  viewUrl?: string;
  downloadUrl?: string;
}

const CERTIFICATIONS: Certification[] = [
  { title: "Certification 1 (Coming Soon)" },
  { title: "Certification 2 (Coming Soon)" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">08</p>
            <h2 className="text-h2 text-foreground">Certifications</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className="border border-border p-6 flex items-center justify-between gap-4 transition-colors duration-200 hover:border-foreground/30"
              >
                <h3 className="text-body text-foreground font-medium">{cert.title}</h3>
                <div className="flex items-center gap-4 shrink-0">
                  {cert.viewUrl ? (
                    <a
                      href={cert.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200 border-b border-dashed border-muted-foreground/40 pb-px"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-small text-muted-foreground/40">View</span>
                  )}
                  {cert.downloadUrl ? (
                    <a
                      href={cert.downloadUrl}
                      download
                      className="text-small font-medium text-foreground border border-foreground px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors duration-200"
                    >
                      Download
                    </a>
                  ) : (
                    <span className="text-small text-muted-foreground/40 border border-border px-4 py-1.5">
                      Download
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
