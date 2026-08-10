import { motion } from "framer-motion";
import { Reveal, SplitText } from "./motion-kit";

const GROUPS = [
  {
    tone: "cyan",
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "State Management (Provider)", level: 82 },
      { name: "Responsive UI / Animations", level: 88 },
    ],
  },
  {
    tone: "electric",
    title: "Backend & Data",
    skills: [
      { name: "Firebase Auth", level: 88 },
      { name: "Cloud Firestore", level: 86 },
      { name: "FCM Push Notifications", level: 80 },
      { name: "Hive / SQLite (offline)", level: 84 },
    ],
  },
  {
    tone: "magenta",
    title: "AI Integration",
    skills: [
      { name: "Gemini AI", level: 82 },
      { name: "OpenRouter AI", level: 84 },
      { name: "Prompt design", level: 80 },
      { name: "REST API integration", level: 86 },
    ],
  },
  {
    tone: "gold",
    title: "Web, Design & Tools",
    skills: [
      { name: "HTML / CSS / JavaScript", level: 85 },
      { name: "WordPress & PHP", level: 78 },
      { name: "UI/UX design", level: 84 },
      { name: "Git & GitHub · Canva · VS Code", level: 88 },
    ],
  },
];

const MARQUEE = [
  "Flutter",
  "Dart",
  "Firebase",
  "Firestore",
  "Gemini AI",
  "OpenRouter",
  "Hive",
  "SQLite",
  "Provider",
  "fl_chart",
  "REST APIs",
  "WordPress",
  "JavaScript",
  "PHP",
  "Git",
  "Figma-less UI/UX",
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mono-label">03 — Capabilities</p>
          </Reveal>
          <SplitText
            as="h2"
            text="The stack I actually ship with."
            className="display mt-5 text-[clamp(2rem,5vw,4rem)]"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.07}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="glass h-full rounded-3xl p-7" data-cursor>
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="h-8 w-1 rounded-full"
                    style={{ background: `var(--tone-${g.tone})`, boxShadow: `0 0 18px var(--tone-${g.tone})` }}
                  />
                  <h3 className="text-base font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.skills.map((s, si) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-sm text-foreground/85">{s.name}</span>
                        <span className="font-mono text-[10px] text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full" style={{ background: "var(--surface-2)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, color-mix(in oklab, var(--tone-${g.tone}) 45%, transparent), var(--tone-${g.tone}))`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 1.1, delay: si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-20 flex overflow-hidden border-y py-5" style={{ borderColor: "var(--hairline)" }}>
        <div className="animate-marquee flex shrink-0 gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={`${m}-${i}`} className="display whitespace-nowrap text-2xl text-muted-foreground/60 sm:text-3xl">
              {m} <span style={{ color: "var(--tone-cyan)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
