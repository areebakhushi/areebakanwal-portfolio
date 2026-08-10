import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only custom cursor: a smooth-following ring + glow trail that
 * expands over interactive elements. Disabled on touch / coarse pointers
 * and when the user prefers reduced motion.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let gx = mx;
    let gy = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;

      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, input, textarea",
      );
      if (target) {
        setActive(true);
        const raw = target.dataset["cursor"];
        setLabel(raw && raw !== "true" ? raw : null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.07;
      gy += (my - gy) * 0.07;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (glow.current) glow.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={glow}
        className="absolute -left-40 -top-40 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--tone-electric) 55%, transparent), transparent 70%)",
        }}
      />
      <div ref={ring} className="absolute left-0 top-0">
        <div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ease-out"
          style={{
            width: active ? (label ? 108 : 62) : 30,
            height: active ? (label ? 108 : 62) : 30,
            borderColor: active
              ? "color-mix(in oklab, var(--tone-cyan) 80%, transparent)"
              : "color-mix(in oklab, var(--foreground) 35%, transparent)",
            background: active ? "color-mix(in oklab, var(--tone-cyan) 10%, transparent)" : "transparent",
            backdropFilter: active ? "blur(2px)" : undefined,
          }}
        >
          {label ? (
            <span
              className="mono-label text-center leading-tight"
              style={{ color: "var(--tone-cyan)", fontSize: "0.6rem" }}
            >
              {label}
            </span>
          ) : null}
        </div>
      </div>
      <div ref={dot} className="absolute left-0 top-0">
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200"
          style={{
            width: 5,
            height: 5,
            background: "var(--tone-cyan)",
            opacity: active ? 0 : 1,
            boxShadow: "0 0 12px var(--tone-cyan)",
          }}
        />
      </div>
    </div>
  );
}
