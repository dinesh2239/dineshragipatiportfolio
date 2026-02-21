import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container-swiss flex items-center justify-between h-14">
        <a href="#" className="text-small font-semibold tracking-tight text-foreground">
          RDN
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-small transition-colors duration-200 relative pb-1 ${
                  activeSection === href.slice(1)
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <MobileNav activeSection={activeSection} />
      </div>
    </nav>
  );
};

const MobileNav = ({ activeSection }: { activeSection: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-foreground p-2"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" />
          ) : (
            <>
              <path d="M2 5h16" />
              <path d="M2 10h16" />
              <path d="M2 15h16" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border py-4">
          <ul className="container-swiss flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-body block ${
                    activeSection === href.slice(1)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
