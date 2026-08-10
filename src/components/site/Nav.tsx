import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion-kit";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-px w-full origin-left"
        style={{ scaleX: progress, background: "linear-gradient(to right, var(--tone-cyan), var(--tone-magenta))" }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
        style={{
          backdropFilter: scrolled ? "blur(16px)" : undefined,
          background: scrolled ? "color-mix(in oklab, var(--background) 78%, transparent)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" data-cursor className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-primary-foreground"
              style={{ background: "linear-gradient(135deg, var(--tone-cyan), var(--tone-electric))" }}
            >
              A
            </span>
            <span className="display text-lg">Areeba Kanwal</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-cursor
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--tone-cyan)" }}
                />
              </a>
            ))}
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                data-cursor="Say hi"
                className="rounded-full border px-5 py-2 text-sm transition-colors hover:bg-secondary"
                style={{ borderColor: "var(--hairline)" }}
              >
                Contact
              </a>
            </Magnetic>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border md:hidden"
            style={{ borderColor: "var(--hairline)" }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-foreground"
            />
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="mx-5 mt-4 flex flex-col gap-1 rounded-2xl p-3"
                style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
                {[...NAV, { label: "Contact", href: "#contact" }].map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-foreground/85 transition-colors hover:bg-secondary"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
