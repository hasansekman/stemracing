import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  features: Feature[];
  theme?: "black" | "black-bold" | "light-bold" | "white-bold" | "bright";
  columns?: 2 | 3 | 4;
  cta?: { label: string; href: string };
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  theme = "light-bold",
  columns = 3,
  cta,
}: FeatureGridProps) {
  const colClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <Section theme={theme} className="py-16 md:py-24">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
          {title ? <h2 className="mb-4">{title}</h2> : null}
          {description ? (
            <p className="text-base md:text-lg opacity-90">{description}</p>
          ) : null}
        </FadeIn>

        <div className={cnGrid(colClass)}>
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.05}>
              <h4 className="mb-3">{feature.title}</h4>
              <p className="opacity-90 text-base leading-relaxed">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>

        {cta ? (
          <FadeIn className="mt-12">
            <Button href={cta.href}>{cta.label}</Button>
          </FadeIn>
        ) : null}
      </Container>
    </Section>
  );
}

function cnGrid(cols: string) {
  return `grid grid-cols-1 gap-10 ${cols}`;
}
