import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="04" eyebrow="About" title="About" />
      <Reveal className="mt-8">
        <p className="max-w-2xl text-base leading-8 text-muted">
          I like seeing a project through end-to-end from training a model or
          designing a schema, to shipping it behind a clean, documented API. I
          care about getting the fundamentals right: sensible data models,
          tested code, and services that are containerized and easy to deploy,
          not just code that works on my machine. Outside of coursework, I pick
          up real-world-shaped problems on my own visual search, NLP, and now
          real-time event-driven systems because that&apos;s where I learn the
          most.
        </p>
      </Reveal>
    </section>
  );
}
