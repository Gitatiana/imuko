import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold " +
  "transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-page " +
  "motion-reduce:transform-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-cyan text-white shadow-lg shadow-accent/40 " +
    "hover:scale-[1.02] hover:brightness-110 active:scale-100",
  ghost: "glass text-fg hover:bg-fg/10 active:scale-[0.99]",
};

/**
 * Botón / enlace de marca.
 * - `primary`: pill con gradiente morado→cyan, glow y hover sutil.
 * - `ghost`: glass translúcido con borde.
 * Si recibe `href` renderiza un <Link> de next/link; si no, un <button>.
 */
export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    // Enlaces externos (p. ej. la app en app.imuko.co) abren en pestaña nueva.
    const isExternal = /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
