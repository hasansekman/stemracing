import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Section, type SectionTheme } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

type HeroProps = {
  title: React.ReactNode;
  description?: string;
  eyebrow?: string;
  cta?: { label: string; href: string };
  theme?: SectionTheme;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "left" | "center";
  /** Sağ üstte marka logosu göster */
  showCornerLogo?: boolean;
  /** Hero LCP için animasyonu kapat (varsayılan: true) */
  animate?: boolean;
  className?: string;
};

export function Hero({
  title,
  description,
  eyebrow,
  cta,
  theme = "black",
  image,
  imageAlt = "",
  imageClassName,
  overlayClassName,
  contentClassName,
  containerClassName,
  titleClassName,
  descriptionClassName,
  align = "left",
  showCornerLogo = false,
  animate = true,
  className,
}: HeroProps) {
  const content = (
    <>
      {eyebrow ? <p className="eyebrow mb-4 opacity-90">{eyebrow}</p> : null}
      <h1 className={cn("mb-6 md:mb-8", titleClassName)}>{title}</h1>
      {description ? (
        <p
          className={cn(
            "mb-8 text-base opacity-90 md:mb-10 md:text-lg lg:text-xl",
            descriptionClassName ?? "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
      {cta ? <Button href={cta.href}>{cta.label}</Button> : null}
    </>
  );

  const contentClasses = cn(
    align === "center" && "mx-auto text-center",
    contentClassName ?? "max-w-4xl",
  );

  return (
    <Section
      theme={theme}
      className={cn(
        "relative flex items-end overflow-hidden",
        !className?.includes("pt-") && "pt-28",
        !className?.includes("pb-") && "pb-16 md:pb-24",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0 overflow-hidden bg-brand-black">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className={cn("object-cover", imageClassName ?? "object-center")}
            sizes="100vw"
            quality={90}
          />
          {overlayClassName !== "none" ? (
            <div
              className={
                overlayClassName ??
                "absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/30"
              }
            />
          ) : null}
        </div>
      ) : null}

      {showCornerLogo ? (
        <div className="pointer-events-none absolute right-4 top-1/2 z-20 -translate-y-1/2 sm:right-6 md:right-8 lg:right-10">
          <BrandLogo
            linked={false}
            heightClassName="h-14 w-auto opacity-95 drop-shadow-lg sm:h-16 md:h-20 lg:h-24"
          />
        </div>
      ) : null}

      <div
        className={cn(
          containerClassName
            ? cn("relative z-10 w-full", containerClassName)
            : "container-site relative z-10 w-full",
        )}
      >
        {animate ? (
          <FadeIn className={contentClasses}>{content}</FadeIn>
        ) : (
          <div className={contentClasses}>{content}</div>
        )}
      </div>
    </Section>
  );
}
