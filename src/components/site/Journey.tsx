import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import certificate from "@/assets/nexcraft-certificate.jpg.asset.json";
import { Reveal, SplitText } from "./motion-kit";

type Entry = {
  period: string;
  title: string;
  place: string;
  tone: string;
  kind: "education" | "experience" | "achievement";
  points: string[];
};

const TIMELINE: Entry[] = [
  {
    period: "Ongoing",
    title: "BS Information Technology",
    place: "University of Punjab",
    tone: "cyan",
    kind: "education",
    points: [
      "Software engineering, databases and mobile computing",
      "Final Year Project: RateBridge — AI construction price platform",
    ],
  },
  {
    period: "Completed",
    title: "Bano Qabil — High Performance Track",
    place: "Mobile Application Development (Flutter)",
    tone: "gold",
    kind: "education",
    points: [
      "Selected for the High Performance Track cohort",
      "Ranked in the Top 10 of the mobile development track",
      "Built BQ Spark for the cohort itself",
    ],
  },
  {
    period: "Internship",
    title: "Frontend / Web Development Intern",
    place: "NexCraftStudio",
    tone: "electric",
    kind: "experience",
    points: [
      "Built and maintained responsive WordPress business websites",
      "Customised themes and templates with HTML, CSS, JS, PHP and XML",
      "Collaborated with the team on delivery and cross-device QA",
    ],
  },
  {
    period: "Continuous",
    title: "Independent Flutter Developer",
    place: "Personal & client projects",
    tone: "jade",
    kind: "experience",
    points: [
      "Shipped 11+ mobile and web products end to end",
      "Integrated Gemini and OpenRouter AI into production-style apps",
      "Owned design, development and deployment on each build",
    ],
  },
];

const AWARDS = [
  { title: "Top 10 — Bano Qabil HPT", note: "Mobile Application Development cohort", tone: "gold" },
  { title: "High Performance Track", note: "Selected participant, Bano Qabil", tone: "cyan" },
  { title: "Flutter Development Certificate", note: "Cross-platform mobile development", tone: "electric" },
  { title: "Web Development Certificate", note: "HTML, CSS, JavaScript & WordPress", tone: "magenta" },
  { title: "11+ Projects Delivered", note: "Mobile apps and interactive web experiences", tone: "jade" },
  { title: "AI Integration Practice", note: "Gemini & OpenRouter powered products", tone: "cyan" },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mono-label">04 — Journey</p>
          </Reveal>
          <SplitText
            as="h2"
            text="Education, experience and the wins along the way."
            className="display mt-5 text-[clamp(2rem,5vw,4rem)]"
          />
        </div>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-[3px] top-0 h-full w-px sm:left-[11px]" style={{ background: "var(--hairline)" }} />
          <motion.div
            className="absolute left-[3px] top-0 h-full w-px origin-top sm:left-[11px]"
            style={{
              scaleY,
              background: "linear-gradient(to bottom, var(--tone-cyan), var(--tone-electric), var(--tone-magenta))",
            }}
          />

          <div className="space-y-12">
            {TIMELINE.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className="relative">
                  <span
                    className="absolute -left-8 top-2 h-2 w-2 rounded-full sm:-left-12 sm:h-2.5 sm:w-2.5"
                    style={{ background: `var(--tone-${e.tone})`, boxShadow: `0 0 16px var(--tone-${e.tone})` }}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono-label" style={{ color: `var(--tone-${e.tone})` }}>
                      {e.period}
                    </span>
                    <span className="mono-label">{e.kind}</span>
                  </div>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full" style={{ background: `var(--tone-${e.tone})` }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="mono-label">05 — Achievements</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  data-cursor
                  className="glass h-full rounded-2xl p-6"
                >
                  <span
                    className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm"
                    style={{
                      background: `color-mix(in oklab, var(--tone-${a.tone}) 16%, transparent)`,
                      color: `var(--tone-${a.tone})`,
                    }}
                  >
                    ★
                  </span>
                  <h3 className="text-sm font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{a.note}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="mono-label">06 — Certificates</p>
          </Reveal>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                data-cursor
                className="glass overflow-hidden rounded-3xl p-2.5"
              >
                <img
                  src={certificate.url}
                  alt="Internship Completion Certificate awarded to Areeba by NexCraftStudio for Website Development"
                  loading="lazy"
                  className="w-full rounded-2xl"
                />
              </motion.figure>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <span className="mono-label" style={{ color: "var(--tone-gold)" }}>
                  NexCraftStudio
                </span>
                <h3 className="display mt-3 text-2xl sm:text-3xl">Internship Completion Certificate</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Awarded by NexCraftStudio for successfully completing the internship in Website
                  Development.
                </p>
                <p className="mono-label mt-5">ID: WG2506</p>
                <a
                  href="https://nexcraftstudio.com/certificate-verification"
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor
                  className="glass mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-colors hover:text-foreground"
                  style={{ color: "var(--tone-cyan)" }}
                >
                  Verify: nexcraftstudio.com/certificate-verification
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
