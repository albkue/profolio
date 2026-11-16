import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getTechIcon } from "@/lib/techIcons";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "C/C++", "Dart", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: [
      "Spring Boot (Java 21)",
      "FastAPI",
      "REST APIs",
      "Apache Kafka",
      "WebSocket / STOMP",
      "JWT auth & role-based access",
      "MapStruct",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "PostGIS", "SQLAlchemy", "Redis"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "FAISS vector search",
      "text/image embeddings",
      "YOLOv8",
      "PaddleOCR",
    ],
  },
  {
    title: "Tools & Infrastructure",
    items: [
      "Docker & Docker Compose",
      "Git/GitHub",
      "GitHub Actions (CI)",
      "pytest",
      "Linux",
      "H3 geospatial indexing",
    ],
  },
  {
    title: "AI-Assisted Dev",
    items: ["GitHub Copilot", "ChatGPT / Claude"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading index="03" eyebrow="Skills" title="Technical Skills" />
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = getTechIcon(item);
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-hairline bg-elevated px-3 py-1 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:text-foreground"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 text-muted" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
