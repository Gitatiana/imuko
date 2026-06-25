import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Etiqueta corta en mayúsculas con acento (opcional). */
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/**
 * Encabezado de sección consistente: kicker (mayúsculas + tracking + acento),
 * título grande con text-balance y subtítulo gris.
 */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {kicker ? (
        <p className="text-gradient mb-3 text-xs font-bold uppercase tracking-[0.2em]">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-pretty mt-4 text-base leading-relaxed text-muted sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
