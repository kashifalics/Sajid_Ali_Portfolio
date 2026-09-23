import { Container } from "@/components/ui/Container";
import {
  marqueeSkillsRow1,
  marqueeSkillsRow2,
  type MarqueeSkill,
} from "@/data/marqueeSkills";

function Pill({ skill }: { skill: MarqueeSkill }) {
  const Icon = skill.icon;
  return (
    <span className="mx-2 flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-fg-body transition-colors hover:border-accent/50 hover:bg-surface-2 hover:text-fg">
      <Icon size={15} className="shrink-0 text-accent-2" aria-hidden="true" />
      {skill.label}
    </span>
  );
}

function MarqueeRow({
  skills,
  direction,
  duration,
}: {
  skills: MarqueeSkill[];
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...skills, ...skills];
  return (
    <div className="marquee-row mask-fade-x overflow-hidden">
      <div
        className={`marquee-track ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((skill, i) => (
          <Pill key={`${skill.label}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section className="relative z-10 pt-8 pb-14 md:pt-10 md:pb-16">
      <Container>
        <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
          Core Technology &amp; Expertise
        </p>
      </Container>

      <div className="mt-6 flex flex-col gap-3.5">
        <MarqueeRow skills={marqueeSkillsRow1} direction="left" duration={42} />
        <MarqueeRow skills={marqueeSkillsRow2} direction="right" duration={46} />
      </div>
    </section>
  );
}
