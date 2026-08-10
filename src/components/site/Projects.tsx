import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects, type Project } from "@/data/projects";
import { MediaShowcase } from "./MediaShowcase";
import { Reveal, SplitText, Tilt } from "./motion-kit";

function Meta({ project }: { project: Project }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <span className="display text-4xl" style={{ color: `var(--tone-${project.tone})` }}>
          {project.index}
        </span>
        <span className="hairline-x w-10" />
        <span className="mono-label">{project.kicker}</span>
      </div>

      <h3 className="display mt-5 text-[clamp(2.2rem,5vw,4rem)]">{project.title}</h3>

      <p
        className="mt-3 text-lg font-light italic"
        style={{ color: `color-mix(in oklab, var(--tone-${project.tone}) 80%, var(--foreground))` }}
      >
        {project.tagline}
      </p>

      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {project.features.map((f, i) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="flex items-start gap-2.5 text-sm text-foreground/85"
          >
            <span
              className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full"
              style={{ background: `var(--tone-${project.tone})` }}
            />
            {f}
          </motion.li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border px-3 py-1 text-[11px] tracking-wide"
            style={{
              borderColor: `color-mix(in oklab, var(--tone-${project.tone}) 35%, transparent)`,
              color: `color-mix(in oklab, var(--tone-${project.tone}) 85%, var(--foreground))`,
              background: `color-mix(in oklab, var(--tone-${project.tone}) 8%, transparent)`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mono-label mt-7" style={{ letterSpacing: "0.14em" }}>
        Role — <span className="text-foreground/70 normal-case">{project.role}</span>
      </p>
    </>
  );
}

function ProjectBlock({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMedia = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const primary = project.media[0]!;
  const flip = i % 2 === 1;

  const media = (extra?: string) => (
    <motion.div style={{ y: yMedia }} className={extra}>
      <Tilt max={6}>
        <MediaShowcase media={primary} tone={project.tone} priority={i < 2} />
      </Tilt>
    </motion.div>
  );

  let body: React.ReactNode;

  switch (project.layout) {
    case "cinematic":
      body = (
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Meta project={project} />
            </Reveal>
          </div>
          <motion.div style={{ y: yMedia }} className="mt-14">
            <MediaShowcase media={primary} tone={project.tone} priority={i < 2} />
          </motion.div>
        </div>
      );
      break;

    case "centered":
      body = (
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {media("order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md")}
          <Reveal className="order-2 lg:order-1">
            <Meta project={project} />
          </Reveal>
        </div>
      );
      break;

    case "asymmetric":
      body = (
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <Meta project={project} />
          </Reveal>
          <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
            {media(primary.portrait ? "mx-auto max-w-xs sm:max-w-sm" : "")}
          </div>
        </div>
      );
      break;

    case "gallery":
      body = (
        <div>
          <Reveal className="mx-auto max-w-2xl">
            <Meta project={project} />
          </Reveal>
          <div className="relative mt-14 -mx-5 sm:-mx-8">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-5 sm:px-8 [scrollbar-width:thin]">
              {project.media.map((m, mi) => (
                <Reveal
                  key={m.src}
                  delay={Math.min(mi, 4) * 0.06}
                  className={`shrink-0 snap-start ${m.portrait ? "w-[210px] sm:w-[250px]" : "w-[320px] sm:w-[460px]"}`}
                >
                  <MediaShowcase media={m} tone={project.tone} />
                </Reveal>
              ))}
            </div>
            <p className="mono-label mt-2 px-5 sm:px-8">Scroll →</p>
          </div>
        </div>
      );
      break;


    case "minimal":
      body = (
        <div className="glass overflow-hidden rounded-[2.5rem]">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <Reveal>
              <Meta project={project} />
            </Reveal>
            <MediaShowcase media={primary} tone={project.tone} />
          </div>
        </div>
      );
      break;

    case "browser":
      body = (
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="glass overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: "var(--hairline)" }}>
                {["var(--tone-magenta)", "var(--tone-gold)", "var(--tone-jade)"].map((c) => (
                  <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                ))}
                <span className="ml-3 truncate rounded-md px-3 py-1 font-mono text-[10px] text-muted-foreground"
                  style={{ background: "var(--surface-2)" }}>
                  nexcraftstudio.client/index.php
                </span>
              </div>
              <MediaShowcase media={primary} tone={project.tone} />
            </div>
          </div>
          <Reveal>
            <Meta project={project} />
          </Reveal>
        </div>
      );
      break;

    default:
      body = (
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {flip ? (
            <>
              {media(primary.portrait ? "mx-auto max-w-xs sm:max-w-sm lg:order-2" : "lg:order-2")}
              <Reveal className="lg:order-1">
                <Meta project={project} />
              </Reveal>
            </>
          ) : (
            <>
              <Reveal>
                <Meta project={project} />
              </Reveal>
              {media(primary.portrait ? "mx-auto max-w-xs sm:max-w-sm" : "")}
            </>
          )}
        </div>
      );
  }

  return (
    <article ref={ref} id={project.id} className="relative py-14 sm:py-20">
      <div className="hairline-x mb-14 w-full opacity-50" />
      {project.badge ? (
        <Reveal>
          <span
            className="mb-8 inline-block rounded-full px-3.5 py-1.5 text-[11px] font-medium"
            style={{
              background: `color-mix(in oklab, var(--tone-${project.tone}) 16%, transparent)`,
              color: `var(--tone-${project.tone})`,
            }}
          >
            {project.badge}
          </span>
        </Reveal>
      ) : null}
      {body}
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mono-label">02 — Selected work</p>
          </Reveal>
          <SplitText
            as="h2"
            text="Eleven products, from student platforms to AI tools."
            className="display mt-5 text-[clamp(2.2rem,5.5vw,4.5rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Real builds with real screens — recorded demos, shipped features and the stack behind each one.
            </p>
          </Reveal>
        </div>

        <div className="mt-8">
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
