import { motion } from "framer-motion";
import { Magnetic, Reveal, SplitText } from "./motion-kit";

/**
 * TODO(Areeba): swap these placeholders for your real contact links.
 */
export const CONTACT = {
  email: "areeba.kanwal@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  location: "Rawalpindi, Pakistan",
};

const LINKS = [
  { label: "GitHub", href: CONTACT.github, tone: "cyan" },
  { label: "LinkedIn", href: CONTACT.linkedin, tone: "electric" },
  { label: "Email", href: `mailto:${CONTACT.email}`, tone: "magenta" },
];

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden py-28 sm:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--tone-electric) 40%, transparent), transparent 65%)",
        }}
      />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mono-label">06 — Contact</p>
        </Reveal>
        <SplitText
          as="h2"
          text="Let's build something that matters."
          className="display mt-6 text-[clamp(2.4rem,7vw,5.5rem)]"
        />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Open to Flutter roles, internships and freelance app work. If you have an idea that needs shipping,
            I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${CONTACT.email}`}
                data-cursor="Email me"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(100deg, var(--tone-cyan), var(--tone-electric))",
                  boxShadow: "0 20px 60px -22px color-mix(in oklab, var(--tone-electric) 90%, transparent)",
                }}
              >
                Get in touch →
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#work"
                className="inline-flex items-center rounded-full border px-8 py-4 text-sm font-medium transition-colors hover:bg-secondary"
                style={{ borderColor: "var(--hairline)" }}
              >
                Browse projects
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {LINKS.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor
                whileHover={{ y: -3 }}
                className="glass rounded-full px-5 py-2.5 text-sm"
                style={{ color: `var(--tone-${l.tone})` }}
              >
                {l.label}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="relative z-10 mx-auto mt-28 flex max-w-7xl flex-col items-center justify-between gap-4 border-t px-5 pt-8 text-xs text-muted-foreground sm:flex-row sm:px-8"
        style={{ borderColor: "var(--hairline)" }}>
        <p>© {new Date().getFullYear()} Areeba Kanwal · Flutter Developer</p>
        <p className="mono-label">{CONTACT.location}</p>
      </footer>
    </section>
  );
}
