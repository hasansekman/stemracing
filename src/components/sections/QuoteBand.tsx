import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";

type QuoteBandProps = {
  quote: string;
  attribution: string;
};

export function QuoteBand({ quote, attribution }: QuoteBandProps) {
  return (
    <Section theme="bright" className="py-16 md:py-20">
      <Container>
        <FadeIn className="max-w-4xl mx-auto text-center">
          <blockquote className="text-[clamp(1.25rem,0.9rem+2.5vw,2.25rem)] md:text-4xl font-[family-name:var(--font-heading)] italic font-bold leading-tight mb-6 text-balance">
            “{quote}”
          </blockquote>
          <p className="font-meta text-lg opacity-90">{attribution}</p>
        </FadeIn>
      </Container>
    </Section>
  );
}
