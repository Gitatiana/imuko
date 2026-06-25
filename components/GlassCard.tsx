import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Resalta la tarjeta: borde gradiente animado + glow más fuerte. */
  featured?: boolean;
}

/**
 * Tarjeta glass con hover lift + glow.
 * `featured` añade un borde gradiente (morado→cyan) animado y un glow mayor.
 */
export function GlassCard({
  children,
  className = "",
  featured = false,
}: GlassCardProps) {
  const base =
    "group relative rounded-2xl p-6 transition duration-300 ease-out " +
    "will-change-transform hover:-translate-y-1 motion-reduce:transform-none";

  if (featured) {
    return (
      <div
        className={`${base} animate-gradient-border bg-[linear-gradient(120deg,var(--color-accent),var(--color-cyan),var(--color-accent))] p-px shadow-[0_0_40px_-8px_rgba(199,17,255,0.45)] hover:shadow-[0_0_60px_-6px_rgba(199,17,255,0.6)] ${className}`}
      >
        <div className="glass-strong h-full w-full rounded-2xl p-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass ${base} hover:shadow-[0_20px_50px_-16px_rgba(48,176,224,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
