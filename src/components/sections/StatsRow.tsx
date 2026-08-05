import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";

type Stat = {
  value: string;
  label: string;
};

export function StatsRow({
  stats,
  theme = "light-bold",
}: {
  stats: Stat[];
  theme?: "light-bold" | "black-bold" | "white-bold";
}) {
  return (
    <Section theme={theme} className="py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 max-[360px]:grid-cols-1 md:grid-cols-3 md:gap-12 sm:gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05}>
              <p className="text-[clamp(2rem,1rem+5vw,3.75rem)] md:text-6xl font-[family-name:var(--font-heading)] italic font-bold leading-none mb-3">
                {stat.value}
              </p>
              <p className="opacity-90 text-sm md:text-base">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
