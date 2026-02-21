import { useState, FormEvent } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address.";
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.trim().length < 20) errs.message = "Message must be at least 20 characters.";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // spam bot

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "", honeypot: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-background border border-border px-4 py-3 text-body text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground transition-colors duration-200";

  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="container-swiss">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-label uppercase text-muted-foreground mb-3">07</p>
            <h2 className="text-h2 text-foreground mb-6">Contact</h2>
            <p className="text-body text-muted-foreground mb-10">
              Open to Business Analyst roles and strategic analytical opportunities.
            </p>
            <div className="space-y-2 text-small text-muted-foreground">
              <p>
                <a href="mailto:dineshragipati99@gmail.com" className="hover:text-foreground transition-colors duration-200">
                  dineshragipati99@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/dineshragipati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  linkedin.com/in/dineshragipati
                </a>
              </p>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {status === "success" ? (
              <p className="text-body text-foreground">
                Message received. I will respond within 24–48 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  className="absolute opacity-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                  {errors.name && <p className="text-small text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                  {errors.email && <p className="text-small text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Message (minimum 20 characters)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message && <p className="text-small text-destructive mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3 bg-foreground text-background text-small font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors duration-200 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-small text-destructive">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
