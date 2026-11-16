import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const certifications = [
  {
    title: "DevOps for Machine Learning: CI/CD, APIs & Deployment",
    issuer: "Board Infinity, via Coursera",
    date: "Jul 2026",
    verifyUrl: "https://coursera.org/verify/H8TEB7QW44JY",
  },
  {
    title: "Apache Kafka Series – Learn Apache Kafka for Beginners v3",
    issuer: "Packt, via Coursera",
    date: "Jul 2026",
    verifyUrl: "https://coursera.org/verify/4MVRR9P5O4S5",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Feb 2026",
    verifyUrl: "https://coursera.org/verify/HFLX0CP40Q7M",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Feb 2026",
    verifyUrl: "https://coursera.org/verify/C61FGN94I4ZQ",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Feb 2026",
    verifyUrl: "https://coursera.org/verify/V02VR7E6MB0P",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "DeepLearning.AI",
    date: "Nov 2026",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ODIFKJG7AU8L",
  },
  {
    title: "AI Fundamentals",
    issuer: "Google",
    date: "May 2026",
    verifyUrl: "https://coursera.org/verify/YAZWWG8YRBD2",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="05" eyebrow="Certifications" title="Certifications" />
      <Reveal className="mt-4">
        <p className="font-mono text-xs leading-6 tracking-wide text-muted">
          Apache Kafka (Packt) · Machine Learning Specialization (DeepLearning.AI &amp;
          Stanford) · Convolutional Neural Networks (DeepLearning.AI) · AI Fundamentals
          (Google) — all via Coursera.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-elevated hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <HiOutlineAcademicCap className="h-6 w-6 text-gold/70" />
              <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
              <p className="font-mono text-xs text-muted">{cert.issuer} · {cert.date}</p>
              <span className="mt-auto flex items-center gap-1.5 font-mono text-xs text-gold transition-colors group-hover:text-gold-hover">
                <HiOutlineBadgeCheck className="h-4 w-4" />
                Verify credential
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
