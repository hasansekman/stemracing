import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-white border border-transparent hover:bg-white hover:text-brand-black",
  secondary:
    "bg-transparent text-current border-2 border-current hover:bg-white hover:text-brand-black hover:border-white",
  tertiary:
    "bg-transparent text-current border-2 border-current hover:bg-brand-accent hover:border-brand-accent hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center max-w-full text-center",
    "px-6 py-3.5 min-[480px]:px-[1.15rem] min-[480px]:py-[0.9rem] rounded-[10px]",
    "font-[family-name:var(--font-heading)] italic font-medium uppercase tracking-[0.1em] text-sm min-[480px]:text-base leading-[1.2]",
    "transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
    "disabled:opacity-50 disabled:pointer-events-none whitespace-normal",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
