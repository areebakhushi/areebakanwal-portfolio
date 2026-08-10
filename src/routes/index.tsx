import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Journey } from "@/components/site/Journey";
import { Contact } from "@/components/site/Contact";
import { CustomCursor } from "@/components/site/CustomCursor";

const TITLE = "Areeba Kanwal — Flutter Mobile Developer";
const DESCRIPTION =
  "Flutter developer building AI-powered mobile apps with Firebase. Top 10 Bano Qabil HPT · 11+ shipped products including BQ Spark, RateBridge and SpendWise.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </main>
  );
}
