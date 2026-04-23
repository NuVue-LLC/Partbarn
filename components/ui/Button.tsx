import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost";

const baseClass =
  "inline-flex items-center justify-center font-barlow-condensed font-medium uppercase tracking-[0.15em] text-sm px-8 py-4 rounded-none transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-text-dark hover:bg-brand-accent-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent border border-current text-current hover:bg-bg-cream hover:text-brand-green-dark hover:-translate-y-0.5",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> {
  href: string;
  external?: boolean;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", className = "", children, ...rest },
  ref,
) {
  const cls = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorRest } = rest as ButtonAsLink;
    if (external || href.startsWith("http")) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...buttonRest}>
      {children}
    </button>
  );
});

export default Button;
