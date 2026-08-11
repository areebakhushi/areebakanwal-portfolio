import { motion } from "framer-motion";
import { Counter, Reveal, SplitText } from "./motion-kit";

const STATS = [
  { value: 11, suffix: "+", label: "Projects shipped" },
  { value: 10, suffix: "", label: "Top 10 · Bano Qabil HPT", prefix: "Top " },
  { value: 1, suffix: "+", label: "Internship completed" },
  { value: 4, suffix: "", label: "AI-powered products" },
];

const PILLARS = [
  {
    tone: "cyan",
    title: "Mobile",
    body: "Cross-platform Flutter apps with clean architecture, considered state management and smooth motion.",
  },
  {
    tone: "electric",
    title: "Backend",
    body: "Firebase, Firestore, Auth and FCM — real-time data, notifications and secure role-based access.",
  },
  {
    tone: "magenta",
    title: "AI",
    body: "Gemini and OpenRouter integrations that generate plans, explain code and detect data anomalies.",
  },
  {
    tone: "gold",
    title: "Web & UI/UX",
    body: "WordPress and hand-built front-ends, designed before they're coded.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2"
        style={{ background: "linear-gradient(to right, transparent, var(--hairline), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <p className="mono-label">01 — About</p>
            </Reveal>
            <SplitText
              as="h2"
              text="Developer. Problem solver. Top 10 Bano Qabil HPT."
              className="display mt-5 text-[clamp(2rem,4.6vw,3.5rem)]"
            />
          </div>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                I&apos;m Areeba Kanwal, a BS Information Technology graduate from the{" "}
                <span style={{ color: "var(--tone-cyan)" }}>University of the Punjab</span> and a Flutter Developer
                focused on building cross-platform mobile applications with Flutter and Dart, with experience in
                Firebase, AI integrations, UI/UX and web development.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="leading-relaxed text-muted-foreground">
                I have practical experience through my courses, academic projects, internship experience and
                independent development — selected for Bano Qabil&apos;s High Performance Track and ranked in the top
                10 of the Mobile Development cohort. I built{" "}
                <span className="text-foreground">RateBridge</span>, an AI construction price platform, as my Final
                Year Project. I&apos;m currently focused on improving my technical skills and looking for
                Flutter/mobile development jobs, internships, junior developer roles and other professional software
                development opportunities.
              </p>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.06 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="glass h-full rounded-2xl p-5"
                    data-cursor
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: `var(--tone-${p.tone})`, boxShadow: `0 0 12px var(--tone-${p.tone})` }}
                      />
                      <h3 className="text-sm font-semibold tracking-wide">{p.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl lg:grid-cols-4"
          style={{ background: "var(--hairline)" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full bg-background p-7 sm:p-9">
                <div className="display text-[clamp(2.4rem,6vw,4rem)]">
                  {s.prefix ?? ""}
                  <Counter to={s.value} suffix={s.suffix} className="text-gradient" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
