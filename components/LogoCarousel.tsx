"use client";

interface LogoCarouselProps {
  logos: string[];
}

// Marquee horizontal infinito con CSS. Duplicamos los logos para un loop sin cortes.
// Si hay pocos logos reales, completamos con placeholders grises para llenar la fila.
export function LogoCarousel({ logos }: LogoCarouselProps) {
  const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 px-5"
    >
      {logos.map((logo, i) => (
        <li key={`l-${i}`} className="flex items-center">
          {/* Tarjeta blanca para que los logos oscuros resalten sobre el tema oscuro */}
          <div className="flex h-16 w-44 items-center justify-center rounded-xl bg-white px-6 shadow-md shadow-black/20 transition hover:shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/img/${logo}`}
              alt="Logo de cliente de Imuko"
              loading="lazy"
              className="max-h-9 w-auto object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track />
        <Track ariaHidden />
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
