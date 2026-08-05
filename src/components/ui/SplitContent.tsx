import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section, type SectionTheme } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type SplitContentProps = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  cta?: { label: string; href: string; external?: boolean };
  image?: string;
  imageAlt?: string;
  theme?: SectionTheme;
  reverse?: boolean;
};

export function SplitContent({
  eyebrow,
  title,
  description,
  bullets,
  cta,
  image,
  imageAlt = "",
  theme = "black-bold",
  reverse = false,
}: SplitContentProps) {
  return (
    <Section theme={theme} className="py-16 md:py-24">
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <FadeIn>
            {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
            <h2 className="mb-5">{title}</h2>
            <p className="text-base md:text-lg opacity-90 mb-6">{description}</p>
            {bullets?.length ? (
              <ul className="space-y-3 mb-8 list-disc pl-5 opacity-90">
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {cta ? (
              <Button href={cta.href} external={cta.external}>
                {cta.label}
              </Button>
            ) : null}
          </FadeIn>

          {image ? (
            <FadeIn delay={0.1} className="media-frame relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
              />
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
