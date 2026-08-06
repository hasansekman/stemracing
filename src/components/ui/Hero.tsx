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
  /** Sağ tarafta marka logosu göster (md ve üzeri) */
  showCornerLogo?: boolean;
  /** UK-style gradient + cutout people */
  variant?: "image" | "gradient";
  cutoutSrc?: string;
  cutoutAlt?: string;
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
  variant = "image",
  cutoutSrc,
  cutoutAlt = "",
  animate = true,
  className,
}: HeroProps) {
  const isGradient = variant === "gradient";

  const content = (
    <>
      {eyebrow ? <p className="eyebrow mb-4 opacity-90">{eyebrow}</p> : null}
      <h1 className={cn("mb-5 sm:mb-6 md:mb-8", titleClassName)}>{title}</h1>
      {description ? (
        <p
          className={cn(
            "mb-7 text-base opacity-90 sm:mb-8 md:mb-10 md:text-lg lg:text-xl",
            descriptionClassName ?? "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
      {cta ? (
        <Button
          href={cta.href}
          className={
            isGradient
              ? "!border-white !bg-white !text-brand-black hover:!bg-transparent hover:!text-white"
              : undefined
          }
        >
          {cta.label}
        </Button>
      ) : null}
    </>
  );

  const contentClasses = cn(
    align === "center" && "mx-auto text-center",
    contentClassName ?? "max-w-4xl",
  );

  return (
    <Section
      theme={isGradient ? "black" : theme}
      className={cn(
        "relative flex overflow-hidden",
        isGradient ? "items-center" : "items-end",
        !className?.includes("pb-") && "pb-14 md:pb-24",
        !className?.includes("pt-") && "pt-10 md:pt-14",
        isGradient &&
          "bg-[linear-gradient(125deg,#0a0314_0%,#2a0833_38%,#7a0a5c_72%,#e6007e_100%)]",
        className,
      )}
    >
      {!isGradient && image ? (
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

      {isGradient && cutoutSrc ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[52%] items-end justify-end md:flex lg:w-[48%]">
          <div className="relative h-[92%] w-full max-w-[720px]">
            <Image
              src={cutoutSrc}
              alt={cutoutAlt}
              fill
              priority
              className="object-contain object-bottom object-right drop-shadow-2xl"
              sizes="(max-width: 1024px) 50vw, 720px"
              unoptimized
            />
          </div>
        </div>
      ) : null}

      {showCornerLogo ? (
        <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:right-8 md:block lg:right-10">
          <BrandLogo
            linked={false}
            heightClassName="h-16 w-auto opacity-95 drop-shadow-lg lg:h-24"
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
        {isGradient && cutoutSrc ? (
          <div className="mb-8 md:hidden">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
              <Image
                src={cutoutSrc}
                alt={cutoutAlt}
                fill
                priority
                className="object-contain object-bottom"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        ) : null}

        {animate ? (
          <FadeIn className={contentClasses}>{content}</FadeIn>
        ) : (
          <div className={contentClasses}>{content}</div>
        )}
      </div>
    </Section>
  );
}
