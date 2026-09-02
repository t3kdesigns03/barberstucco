import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 " +
  "focus-visible:outline-3 focus-visible:outline-offset-3 active:translate-y-px";

const SIZES = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base sm:text-[1.05rem]",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-teal-deep text-white shadow-[0_10px_30px_-12px_rgba(11,110,116,.7)] hover:bg-teal-mid hover:shadow-[0_16px_38px_-12px_rgba(18,154,163,.75)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-stone hover:ring-teal hover:text-teal-deep hover:-translate-y-0.5 shadow-[0_2px_10px_-6px_rgba(6,25,27,.25)]",
  ghost:
    "text-teal-deep hover:text-ink underline decoration-teal-bright decoration-2 underline-offset-4",
  onDark:
    "bg-teal-bright text-ink hover:bg-white hover:-translate-y-0.5 shadow-[0_12px_34px_-14px_rgba(30,200,208,.8)]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const cls = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
