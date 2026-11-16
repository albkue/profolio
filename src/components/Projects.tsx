import { createElement, type ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import PipelineDiagram, { PipelineDiagramVertical } from "./PipelineDiagram";
import { getTechIcon } from "@/lib/techIcons";

type Project = {
  title: string;
  stack: string;
  repo: string | null;
  inProgress?: boolean;
  problem: string;
  points: string[];
};

const projects: Project[] = [
  {
    title: "Auto-Parts Image Search Service",
    stack: "FastAPI · YOLOv8 · CLIP · FAISS · PaddleOCR",
    repo: "https://github.com/services-management/image-search",
    problem:
      "Upload a photo of a car part and get ranked matching products from the catalog.",
    points: [
      "Engineered a multi-stage ML pipeline — YOLOv8 part detection, PaddleOCR for brand/part-number text, CLIP image embeddings, and BGE-M3 text embeddings.",
      "Indexed embeddings in FAISS for fast nearest-neighbor retrieval and merged catalog + vector results with confidence-weighted scoring.",
      "Exposed the pipeline as a documented REST API and packaged it with Docker for deployment.",
    ],
  },
  {
    title: "Garage Service Provider — Backend API",
    stack: "FastAPI · PostgreSQL · JWT · Docker",
    repo: "https://github.com/services-management/back-end-api-garage-servie-provider",
    problem:
      "The backend for a garage service platform: authentication, admin and technical-staff accounts, and the product/inventory domain.",
    points: [
      "Implemented JWT login with role-based access control and a clean layered structure (models, repositories, routers, schemas).",
      "Delivered full CRUD for categories, products, and inventory, including stock restock/deduct and low-stock alert endpoints.",
      "Containerized with Docker Compose and added a pytest test suite (130+ commits).",
    ],
  },
  {
    title: "AI Mood Journal",
    stack: "Flutter · FastAPI · NLP (multi-label + LDA)",
    repo: "https://github.com/albkue/ai-mood-journal",
    problem:
      "A cross-platform journaling app that surfaces the emotional patterns and topics driving each entry.",
    points: [
      "Trained NLP models for multi-label emotion classification and used LDA topic modeling to explain the “why” behind a mood.",
      "Built a Flutter mobile front end backed by a FastAPI service exposing the ML models as endpoints.",
    ],
  },
  {
    title: "SLAP Autofix",
    stack: "Spring Boot · Java · PostgreSQL · PostGIS · Kafka · WebSocket",
    repo: null,
    inProgress: true,
    problem:
      "Real-time roadside assistance: a stranded driver raises an SOS, nearby mechanics are notified, bid on the job, and get matched.",
    points: [
      "Developed the service in Spring Boot (Java 21) with JPA/Hibernate entities (PostGIS geography types), Java record DTOs, and MapStruct mappers across a clean layered structure.",
      "Designed an event-driven flow over Apache Kafka (sos.created, sos.bid.created, keyed by sos_id) and streamed live SOS/bid updates to drivers and mechanics over WebSocket / STOMP.",
      "Implemented two-stage geospatial matching (H3 grid-disk shortlist → PostGIS ST_DWithin exact filter) to surface the nearest available mechanics fast.",
      "Research project with my professor; I own the SOS (Sign of Service) module. Currently in progress.",
    ],
  },
];

function Tag({ tech, featured = false }: { tech: string; featured?: boolean }) {
  const Icon = getTechIcon(tech);
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 ${
        featured
          ? "border-hairline bg-elevated text-foreground/80"
          : "border-hairline text-muted"
      }`}
    >
      {Icon ? createElement(Icon, { className: "h-3.5 w-3.5 text-muted" }) : null}
      {tech}
    </span>
  );
}

function CaseStudyLink({ repo, inProgress }: { repo: string | null; inProgress?: boolean }): ReactNode {
  if (repo) {
    return (
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link -mx-2 -my-3 inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-gold transition-colors hover:text-gold-hover"
      >
        View case study
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        >
          →
        </span>
      </a>
    );
  }
  if (inProgress) {
    return (
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        Private / internal — walkthrough available on request
      </span>
    );
  }
  return null;
}

function GitHubLink({ repo }: { repo: string | null }) {
  if (!repo) return null;
  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className="-mx-2 -my-3 inline-flex items-center gap-1.5 px-2 py-3 text-sm text-muted transition-colors hover:text-foreground"
    >
      <SiGithub className="h-4 w-4" />
      Source
    </a>
  );
}

function ProjectNumber({ index, featured = false }: { index: string; featured?: boolean }) {
  return (
    <span
      className={`font-mono text-sm tracking-[0.25em] transition-colors duration-300 ${
        featured ? "text-gold" : "text-muted group-hover:text-gold"
      }`}
    >
      {index} /
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="02" eyebrow="Selected Work" title="Selected Work" />

      {/* Featured project — large editorial case study */}
      <Reveal className="mt-10">
        <article className="group rounded-3xl border border-hairline bg-surface p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_16px_48px_var(--shadow-color)] sm:p-10">
          <div className="flex flex-wrap items-center gap-4">
            <ProjectNumber index="01" featured />
            <span className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
              Featured project
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-3 text-lg font-medium text-foreground/80">
            {featured.problem}
          </p>
          <ul className="mt-5 space-y-2.5">
            {featured.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-6 text-muted"
              >
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-gold/60" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.stack.split(" · ").map((tech) => (
              <Tag key={tech} tech={tech} featured />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <CaseStudyLink repo={featured.repo} />
            <GitHubLink repo={featured.repo} />
          </div>
          {/* Mobile: vertical stacked flow */}
          <div className="mt-8 rounded-2xl border border-hairline bg-background/60 p-4 sm:hidden">
            <PipelineDiagramVertical />
          </div>
          {/* ≥640px: horizontal pipeline */}
          <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-hairline bg-background/60 p-4 transition-transform duration-300 group-hover:scale-[1.03] sm:block sm:p-6">
            <PipelineDiagram />
          </div>
        </article>
      </Reveal>

      {/* Remaining projects — smaller polished rows */}
      <div className="mt-8 flex flex-col gap-6">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={(i + 1) * 0.08}>
            <SpotlightCard className="group rounded-2xl border border-hairline bg-surface p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_12px_36px_var(--shadow-color)] sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-4">
                  <ProjectNumber index={`0${i + 2}`} />
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </div>
                {project.inProgress && (
                  <span className="flex items-center gap-2 rounded-full border border-hairline px-3 py-1 font-mono text-xs tracking-widest text-gold uppercase">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                    In progress
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-foreground/80">
                {project.problem}
              </p>
              <ul className="mt-4 space-y-2.5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-gold/60" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.split(" · ").map((tech) => (
                  <Tag key={tech} tech={tech} />
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <CaseStudyLink repo={project.repo} inProgress={project.inProgress} />
                <GitHubLink repo={project.repo} />
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
