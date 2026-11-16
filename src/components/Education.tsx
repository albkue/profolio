import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const education = [
  {
    school: "Royal University of Phnom Penh",
    detail: "B.Sc. in Data Science and Engineering — in progress",
    place: "Phnom Penh",
  },
  {
    school: "ETEC Center",
    detail: "Computer Programming, C/C++",
    place: "2023–2024",
  },
  {
    school: "ETEC Center",
    detail: "Computer Programming, Java · MySQL · iReport",
    place: "2024–2025",
  },
  {
    school: "Hun Sen Chumpuvorn High School",
    detail: "Graduated with honors",
    place: "2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="06" eyebrow="Education" title="Education" />
      <ul className="mt-8 flex flex-col">
        {education.map((item, i) => (
          <Reveal key={item.detail} delay={i * 0.06}>
            <li className="flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline py-5">
              <div>
                <p className="font-medium text-foreground">{item.school}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
              <p className="font-mono text-xs tracking-wider text-muted">{item.place}</p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <h3 className="mt-12 font-mono text-xs tracking-[0.25em] text-gold uppercase">
          Languages
        </h3>
        <ul className="mt-4 flex gap-8 text-sm font-medium text-foreground">
          <li>Khmer</li>
          <li>English</li>
        </ul>
      </Reveal>
    </section>
  );
}
