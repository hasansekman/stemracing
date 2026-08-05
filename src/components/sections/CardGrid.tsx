import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section, type SectionTheme } from "@/components/ui/Section";

export type CardItem = {
  title: string;
  description: string;
  href: string;
  image?: string;
  ctaLabel?: string;
};

export function CardGrid({
  eyebrow,
  title,
  description,
  items,
  theme = "light-bold",
  columns = 2,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: CardItem[];
  theme?: SectionTheme;
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <Section theme={theme} className="py-16 md:py-24">
      <Container>
        {(eyebrow || title || description) && (
          <FadeIn className="mb-12 max-w-3xl">
            {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
            {title ? <h2 className="mb-4">{title}</h2> : null}
            {description ? (
              <p className="text-base md:text-lg opacity-90">{description}</p>
            ) : null}
          </FadeIn>
        )}

        <div className={`grid grid-cols-1 gap-10 ${cols}`}>
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04} className="flex flex-col">
              {item.image ? (
                <div className="media-frame relative aspect-[3/2] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
              ) : null}
              <h3 className="text-2xl md:text-[2rem] mb-3">{item.title}</h3>
              <p className="opacity-90 mb-6 flex-1">{item.description}</p>
              <div>
                <Button
                  href={item.href}
                  variant="secondary"
                  external={item.href.startsWith("http")}
                >
                  {item.ctaLabel ?? "Daha fazla bilgi"}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function SimpleLinkList({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:text-brand-accent transition-colors">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
