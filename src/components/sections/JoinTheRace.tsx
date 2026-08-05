import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

type JoinTheRaceProps = {
  title?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function JoinTheRace({
  title = (
    <>
      Öğrencilerinizin STEM potansiyelini{" "}
      <span className="sm:whitespace-nowrap">ateşlemeye hazır mısınız?</span>
    </>
  ),
  ctaLabel = "HEMEN BAŞLAYIN",
  ctaHref = "/findus",
}: JoinTheRaceProps) {
  return (
    <Section theme="bright" className="py-16 md:py-20">
      <Container>
        <FadeIn className="max-w-4xl">
          <p className="eyebrow mb-4">YARIŞA KATILIN</p>
          <h2 className="mb-8 text-balance">{title}</h2>
          <Button href={ctaHref} variant="secondary">
            {ctaLabel}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
