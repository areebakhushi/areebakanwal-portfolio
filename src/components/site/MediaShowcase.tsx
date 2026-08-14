import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Media } from "@/data/projects";

/**
 * Renders a project video or image inside a device / studio frame.
 * Videos autoplay muted only while in view, and pause when scrolled away.
 */
export function MediaShowcase({
  media,
  tone,
  className,
  priority = false,
}: {
  media: Media;
  tone: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => undefined);
    } else {
      v.pause();
    }
  }, [inView]);

  const isPortrait = media.portrait ?? false;
  const glow = `color-mix(in oklab, var(--tone-${tone}) 55%, transparent)`;

  return (
    <div ref={ref} className={className} data-cursor={media.kind === "video" ? "Playing" : undefined}>
      <div
        className={`relative mx-auto w-full ${isPortrait ? "max-w-[240px]" : "max-w-[460px]"}`}
      >
        <div
          className="pointer-events-none absolute -inset-8 rounded-[3rem] opacity-60 blur-3xl"
          style={{ background: `radial-gradient(closest-side, ${glow}, transparent 75%)` }}
        />
        <div
          className={`glass relative overflow-hidden ${isPortrait ? "rounded-[2.4rem] p-2" : "rounded-2xl p-1.5"}`}
          style={{ borderColor: `color-mix(in oklab, var(--tone-${tone}) 30%, var(--hairline))` }}
        >
          {isPortrait ? (
            <div
              className="absolute left-1/2 top-3.5 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full"
              style={{ background: "oklch(0 0 0 / 60%)" }}
            />
          ) : null}

          {media.kind === "video" ? (
            <video
              ref={videoRef}
              src={media.src}
              poster={media.poster}
              muted
              loop
              playsInline
              preload={priority ? "metadata" : "none"}
              onLoadedData={() => setLoaded(true)}
              className={`w-full ${isPortrait ? "rounded-[2rem]" : "rounded-xl"} object-cover transition-opacity duration-700`}
              style={{ opacity: loaded ? 1 : 0.75 }}
            />
          ) : (
            <img
              src={media.src}
              alt={media.caption ?? ""}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className={`w-full ${isPortrait ? "rounded-[2rem]" : "rounded-xl"} object-cover`}
            />
          )}

          {/* scan sheen */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              background: `linear-gradient(115deg, transparent 40%, color-mix(in oklab, var(--tone-${tone}) 22%, transparent) 50%, transparent 60%)`,
            }}
          />
        </div>

        {media.kind === "video" ? (
          <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-full border bg-background px-3 py-1"
            style={{ borderColor: "var(--hairline)" }}>
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: `var(--tone-${tone})` }}
            />
            <span className="mono-label" style={{ fontSize: "0.55rem" }}>
              Live demo
            </span>
          </div>
        ) : null}
      </div>
      {media.caption ? (
        <p className="mt-5 text-center text-xs text-muted-foreground">{media.caption}</p>
      ) : null}
    </div>
  );
}
