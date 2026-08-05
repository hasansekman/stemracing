import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

const LOGO_SRC = "/LOGO/brand-logo.png";

type BrandLogoProps = {
  className?: string;
  /** Görsel yüksekliği (header/footer için) */
  heightClassName?: string;
  priority?: boolean;
  linked?: boolean;
};

export function BrandLogo({
  className,
  heightClassName = "h-10 md:h-12",
  priority = false,
  linked = true,
}: BrandLogoProps) {
  const mark = (
    <span className={cn("relative inline-flex shrink-0 items-center", className)}>
      <Image
        src={LOGO_SRC}
        alt="STEM Racing"
        width={900}
        height={369}
        priority={priority}
        className={cn("w-auto object-contain object-left", heightClassName)}
        unoptimized
      />
    </span>
  );

  if (!linked) return mark;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="STEM Racing ana sayfa"
    >
      {mark}
    </Link>
  );
}
