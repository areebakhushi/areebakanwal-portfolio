import { motion } from "framer-motion";
import clientReview from "@/assets/fiverr-client-review.png.asset.json";
import orderProof from "@/assets/fiverr-order-proof.png.asset.json";
import { Reveal, SplitText } from "./motion-kit";

const HIGHLIGHTS = [
  { icon: "🇺🇸", label: "First International Client", note: "United States" },
  { icon: "💻", label: "Custom Website Development", note: "Birthday / Anniversary" },
  { icon: "⚡", label: "1-Day Delivery", note: "Completed in 24 hours" },
  { icon: "⭐", label: "5-Star Client Review", note: "Positive feedback" },
  { icon: "💰", label: "$100 Paid Project", note: "First Fiverr order" },
];

export function Freelancing() {
  return (
    <section id="freelancing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mono-label">Freelancing Journey</p>
          </Reveal>
          <SplitText
            as="h2"
            text="My First International Client 🇺🇸"
            className="display mt-5 text-[clamp(2.2rem,5.5vw,4rem)]"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              I started offering my services on Fiverr, and successfully completed my first paid
              project for a client from the United States. I created a{" "}
              <span className="text-foreground">custom digital birthday/anniversary surprise website</span>{" "}
              based on the client&apos;s requirements and delivered it successfully within{" "}
              <span className="text-foreground">1 day</span>. The client gave me a{" "}
              <span className="text-foreground">5-star review</span> and positive feedback, making
              this an important milestone in my freelancing journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass h-full rounded-2xl p-5"
                data-cursor
              >
                <span className="text-2xl" style={{ fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif' }}>{h.icon}</span>
                <h3 className="mt-3 text-sm font-semibold">{h.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{h.note}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.15}>
            <motion.figure
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass overflow-hidden rounded-2xl p-2.5 shadow-sm"
              data-cursor
            >
              <img
                src={clientReview.url}
                alt="Fiverr client review from themaidensreven in the United States, 5 stars"
                loading="lazy"
                className="w-full rounded-xl"
              />
              <figcaption className="mono-label mt-3 px-1 text-center text-[11px]">
                Client Review
              </figcaption>
            </motion.figure>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.figure
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass overflow-hidden rounded-2xl p-2.5 shadow-sm"
              data-cursor
            >
              <img
                src={orderProof.url}
                alt="Fiverr order proof showing $100 completed order for custom digital birthday website"
                loading="lazy"
                className="w-full rounded-xl"
              />
              <figcaption className="mono-label mt-3 px-1 text-center text-[11px]">
                Order Proof
              </figcaption>
            </motion.figure>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <p className="mono-label mt-8 text-center text-xs">
            Real Client Work • Fiverr • July 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
