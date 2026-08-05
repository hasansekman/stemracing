import { cn } from "@/lib/cn";

export type SectionTheme =
  | "black"
  | "black-bold"
  | "light-bold"
  | "white-bold"
  | "bright"
  | "bright-inverse"
  | "white";

const themeClasses: Record<SectionTheme, string> = {
  black: "bg-brand-black text-white",
  "black-bold": "bg-brand-black text-white",
  "light-bold": "bg-brand-light text-brand-black",
  "white-bold": "bg-white text-brand-black",
  bright: "bg-brand-accent text-white",
  "bright-inverse": "bg-brand-accent text-white",
  white: "bg-white text-brand-black",
};

type SectionProps = {
  children: React.ReactNode;
  theme?: SectionTheme;
  className?: string;
  id?: string;
  as?: "section" | "footer" | "div";
};

export function Section({
  children,
  theme = "black",
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        themeClasses[theme],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-site", className)}>{children}</div>;
}
