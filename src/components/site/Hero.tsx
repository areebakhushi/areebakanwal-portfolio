import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Magnetic, SplitText, EASE } from "./motion-kit";
import bqPoster from "@/assets/bqspark.jpg.asset.json";
import spendPoster from "@/assets/spendwise.jpg.asset.json";
import countdownPoster from "@/assets/countdown.jpg.asset.json";

const BADGES = ["Flutter", "Dart", "Firebase", "Firestore", "Gemini AI", "OpenRouter", "Hive", "Provider"];

const CODE_FRAGMENTS = [
  "class Areeba extends StatelessWidget {",
  "await FirebaseFirestore.instance",
  "MaterialApp(theme: AppTheme.dark)",
  "final plan = await ai.generate();",
];

function Particles({ count = 26 }: { count?: number }) {
  const [seeds, setSeeds] = useState<{ x: number; y: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setSeeds(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 6 + Math.random() * 10,
        s: 1 + Math.random() * 2.4,
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: i % 3 === 0 ? "var(--tone-magenta)" : i % 3 === 1 ? "var(--tone-cyan)" : "var(--tone-gold)",
            boxShadow: "0 0 10px currentColor",
          }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -26, 0] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function PhoneMock({
  src,
  className,
  depth,
  rotate,
  delay,
  px,
  py,
}: {
  src: string;
  className: string;
  depth: number;
  rotate: number;
  delay: number;
  px: number;
  py: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60, rotate: rotate * 2, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      transition={{ duration: 1.4, delay, ease: EASE }}
      style={{ x: px * depth, translateY: py * depth }}
    >
      <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
        <div
          className="glass overflow-hidden rounded-[2rem] p-1.5"
          style={{ boxShadow: "0 40px 90px -40px oklch(0 0 0 / 90%)" }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            width={220}
            height={470}
            className="h-full w-full rounded-[1.6rem] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  const px = pointer.x * 16;
  const py = pointer.y * 12;

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* base atmosphere */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[42rem] w-[42rem] rounded-full blur-3xl animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--tone-electric) 45%, transparent), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[38rem] w-[38rem] rounded-full blur-3xl animate-pulse-glow"
        style={{
          animationDelay: "2s",
          background: "radial-gradient(circle, color-mix(in oklab, var(--tone-magenta) 40%, transparent), transparent 65%)",
        }}
      />
      <Particles />

      {/* orbital rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <div
          className="animate-spin-slow rounded-full border"
          style={{ width: 760, height: 760, borderColor: "color-mix(in oklab, var(--tone-cyan) 18%, transparent)" }}
        />
        <div
          className="animate-spin-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 1080,
            height: 1080,
            animationDirection: "reverse",
            borderColor: "color-mix(in oklab, var(--tone-magenta) 12%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: reduced ? 0 : yText, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2"
            style={{ borderColor: "var(--hairline)", background: "color-mix(in oklab, var(--surface) 60%, transparent)" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                style={{ background: "var(--tone-jade)" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--tone-jade)" }} />
            </span>
            <span className="mono-label" style={{ color: "var(--foreground)" }}>
              Open to opportunities
            </span>
          </motion.div>

          <p className="mono-label mb-4">Hi, I&apos;m</p>

          <h1 className="display text-[clamp(3.2rem,10vw,7.5rem)]">
            <SplitText text="Areeba" className="block" />
            <SplitText text="Kanwal" className="block text-gradient" delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-6 text-[clamp(1.05rem,2.4vw,1.5rem)] font-light text-foreground/90"
          >
            Flutter Developer{" "}
            <span className="display italic" style={{ color: "var(--tone-cyan)" }}>
              &amp;
            </span>{" "}
            Creative App Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Building modern mobile experiences with Flutter, Firebase, AI and thoughtful UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor="View work"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(100deg, var(--tone-cyan), var(--tone-electric))",
                  boxShadow: "0 18px 50px -20px color-mix(in oklab, var(--tone-electric) 90%, transparent)",
                }}
              >
                See the work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                data-cursor="Say hi"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-secondary"
                style={{ borderColor: "var(--hairline)" }}
              >
                Let&apos;s talk
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {BADGES.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25 + i * 0.06, duration: 0.5, ease: EASE }}
                className="glass rounded-full px-3.5 py-1.5 text-[11px] tracking-wide text-muted-foreground"
              >
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* laboratory composition */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[540px] lg:h-[620px] lg:max-w-none">
          <PhoneMock
            src={bqPoster.url}
            className="absolute left-[8%] top-[6%] w-[42%] sm:w-[40%]"
            depth={1.6}
            rotate={-7}
            delay={0.35}
            px={px}
            py={py}
          />
          <PhoneMock
            src={spendPoster.url}
            className="absolute right-[6%] top-[22%] z-20 w-[46%] sm:w-[44%]"
            depth={-1.1}
            rotate={5}
            delay={0.55}
            px={px}
            py={py}
          />
          <PhoneMock
            src={countdownPoster.url}
            className="absolute bottom-[2%] left-[24%] z-10 w-[38%] sm:w-[36%]"
            depth={2.2}
            rotate={-2}
            delay={0.75}
            px={px}
            py={py}
          />

          {/* floating code fragments */}
          {CODE_FRAGMENTS.map((c, i) => (
            <motion.div
              key={c}
              className="glass absolute hidden rounded-lg px-3 py-2 font-mono text-[10px] text-muted-foreground lg:block"
              style={{
                top: `${[4, 40, 70, 88][i]}%`,
                left: i % 2 === 0 ? "-8%" : "auto",
                right: i % 2 === 0 ? "auto" : "-6%",
                x: px * (i % 2 === 0 ? 2.4 : -2.4),
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 + i * 0.15, ease: EASE }}
            >
              <span style={{ color: "var(--tone-cyan)" }}>›</span> {c}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="mono-label">Scroll</span>
          <motion.div
            className="h-10 w-px"
            style={{ background: "linear-gradient(to bottom, var(--tone-cyan), transparent)" }}
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
