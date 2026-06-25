import type { CSSProperties } from "react";

type MeshVariant = "hero" | "cta" | "subtle";

interface GradientMeshProps {
  /** Intensidad/composición del fondo decorativo. */
  variant?: MeshVariant;
  className?: string;
}

/**
 * Fondo decorativo absoluto: halos radiales (morado + cyan) con blur y deriva
 * lenta. Es puramente decorativo (aria-hidden, pointer-events-none, z-0).
 *
 * Uso: primer hijo de una <section className="relative">.
 */
export function GradientMesh({
  variant = "subtle",
  className = "",
}: GradientMeshProps) {
  const config: Record<
    MeshVariant,
    { opacity: number; blur: number; purple: number; cyan: number }
  > = {
    hero: { opacity: 0.9, blur: 90, purple: 0.32, cyan: 0.22 },
    cta: { opacity: 0.8, blur: 80, purple: 0.28, cyan: 0.2 },
    subtle: { opacity: 0.55, blur: 100, purple: 0.16, cyan: 0.12 },
  };
  const c = config[variant];

  const style: CSSProperties = {
    // La opacidad base se escala por tema vía --mesh-opacity-scale
    // (1 en oscuro, 0.5 en claro) definido en globals.css.
    ["--mesh-base-opacity" as string]: c.opacity,
    opacity: `calc(${c.opacity} * var(--mesh-opacity-scale, 1))`,
    filter: `blur(${c.blur}px)`,
    backgroundImage: [
      `radial-gradient(40rem 40rem at 20% 25%, rgba(199, 17, 255, ${c.purple}), transparent 60%)`,
      `radial-gradient(38rem 38rem at 82% 30%, rgba(48, 176, 224, ${c.cyan}), transparent 60%)`,
      `radial-gradient(34rem 34rem at 55% 90%, rgba(199, 17, 255, ${
        c.purple * 0.6
      }), transparent 65%)`,
    ].join(", "),
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="animate-mesh-drift absolute inset-0" style={style} />
    </div>
  );
}

export default GradientMesh;
