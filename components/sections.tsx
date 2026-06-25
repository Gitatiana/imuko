/* eslint-disable @next/next/no-img-element */
"use client";

import {
  benefits as benefitsAssets,
  pathToSuccess as pathAssets,
  awards as awardsAssets,
  pricing as pricingAssets,
  clientsCarousel,
  hero as heroAssets,
  testimonials as testimonialsAssets,
  globalPresence as presenceAssets,
  appUrls,
} from "@/lib/content";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { Counter } from "@/components/Counter";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { GradientMesh } from "@/components/GradientMesh";
import { SectionHeading } from "@/components/SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";
import { HeroGlobe } from "@/components/HeroGlobe";

const img = (name: string) => `/img/${name}`;

/* Valores reales para los contadores de presencia global (spec). */
const PRESENCE_VALUES = [60, 2735, 72];

/* Chip con gradiente de marca para iconos. */
function IconChip({
  src,
  size = "md",
}: {
  src: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  const icon = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`flex ${box} items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-cyan/20 ring-1 ring-white/10`}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        loading="lazy"
        className={`${icon} opacity-90`}
      />
    </span>
  );
}

/* 2. HERO */
export function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      <GradientMesh variant="hero" />
      <img
        src={img(heroAssets.bgImage)}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      {/* El globo es el telón de fondo del hero: el texto flota sobre él para
          que titular, CTA y mundo se lean como una sola escena. */}
      <div className="relative mx-auto max-w-5xl px-6 pb-0 pt-24 md:pt-28 lg:pt-32">
        {/* Globo de fondo, centrado detrás del texto y fundido por arriba. */}
        <div className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center [mask-image:linear-gradient(to_bottom,transparent,#000_22%,#000_88%,transparent)]">
          <HeroGlobe className="max-w-2xl opacity-90" />
        </div>

        {/* Contenido por delante del globo. */}
        <div className="relative z-10 flex flex-col items-center pb-28 text-center md:pb-36 lg:pb-44">
          <AnimatedHeadline
            prefix={t.hero.prefix}
            words={[...t.hero.rotatingWords]}
            suffix={t.hero.suffix}
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-fg drop-shadow-[0_2px_24px_rgba(0,8,24,0.7)] sm:text-5xl lg:text-6xl"
          />
          <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted drop-shadow-[0_1px_16px_rgba(0,8,24,0.7)] sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={appUrls.requestDeveloper} variant="primary">
              {t.hero.cta}
            </Button>
            <Button href="#planes" variant="ghost">
              {t.waysToWork.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. BENEFITS */
export function Benefits() {
  const t = useT();
  return (
    <section className="relative py-20 md:py-24">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.clients.kicker} title={t.benefits.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.benefits.items.map((text, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="h-full p-8 text-center">
                <div className="flex flex-col items-center">
                  <IconChip
                    src={img(
                      benefitsAssets.items[i]?.icon ??
                        benefitsAssets.items[0].icon
                    )}
                  />
                  <p className="mt-5 text-lg font-medium text-fg">
                    {text}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. WAYS TO WORK */
export function WaysToWork() {
  const t = useT();
  return (
    <section className="relative py-20">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading title={t.waysToWork.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.waysToWork.items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="h-full p-8">
                <div className="flex h-full flex-col">
                  <span className="text-gradient inline-flex w-fit text-xs font-bold uppercase tracking-[0.2em]">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={appUrls.requestDeveloper} variant="primary">
            {t.waysToWork.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

/* 5. CLIENTS CAROUSEL */
export function Clients() {
  const t = useT();
  return (
    <section className="relative py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.clients.kicker} title={t.clients.title} />
      </div>
      <div className="relative z-10 mt-12">
        <LogoCarousel logos={clientsCarousel.logos} />
      </div>
    </section>
  );
}

/* 6. TESTIMONIALS */
function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={img("e9aa3780b42bf9403ef234492d1862fd.svg")}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-5 w-5 opacity-90"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const t = useT();
  return (
    <section className="relative py-20">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading title={t.testimonials.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="h-full p-8">
                <figure className="flex h-full flex-col">
                  <Stars />
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-fg">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-fg">{item.author}</p>
                      <p className="text-sm text-muted">{item.role}</p>
                    </div>
                    <img
                      src={img(
                        testimonialsAssets.items[i]?.logo ??
                          testimonialsAssets.items[0].logo
                      )}
                      alt={item.role}
                      loading="lazy"
                      className="h-8 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </figcaption>
                </figure>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pin magenta con pulso sobre el mapa. */
function MapPin({
  top,
  left,
  delay,
}: {
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <span
      aria-hidden
      className="map-pin absolute h-3 w-3 rounded-full bg-accent"
      style={{ top, left, animationDelay: `${delay}s` }}
    />
  );
}

/* 7 + 8. PATH TO SUCCESS + GLOBAL PRESENCE */
export function PathAndPresence() {
  const t = useT();
  const pins = [
    { top: "32%", left: "22%" },
    { top: "44%", left: "48%" },
    { top: "38%", left: "70%" },
    { top: "62%", left: "33%" },
    { top: "58%", left: "82%" },
  ];

  return (
    <section className="relative py-24 text-fg md:py-32">
      <GradientMesh variant="hero" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Path to success */}
        <SectionHeading title={t.pathToSuccess.title} className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {t.pathToSuccess.steps.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="h-full p-8">
                <div className="flex items-center gap-4">
                  <IconChip
                    src={img(
                      pathAssets.steps[i]?.icon ?? pathAssets.steps[0].icon
                    )}
                    size="sm"
                  />
                  <span className="text-gradient text-4xl font-extrabold">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Global presence */}
        <SectionHeading
          title={t.globalPresence.title}
          className="mb-12 mt-24"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Col 1-2: mapamundi + pines */}
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              <img
                src={img(presenceAssets.map)}
                alt="Mapa de la presencia global de Imuko"
                loading="lazy"
                className="w-full rounded-2xl object-contain drop-shadow-[0_0_40px_rgba(48,176,224,0.4)]"
              />
              {pins.map((p, i) => (
                <MapPin key={i} top={p.top} left={p.left} delay={i * 0.2} />
              ))}
            </div>
          </div>

          {/* Col 3: tarjetas de stats con contadores animados */}
          <div className="flex flex-col justify-center gap-4">
            {t.globalPresence.stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <GlassCard className="p-6">
                  {stat.before && (
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {stat.before}
                    </p>
                  )}
                  <Counter
                    to={PRESENCE_VALUES[i] ?? 0}
                    prefix={stat.value.startsWith("+") ? "+" : ""}
                    className="text-gradient mt-2 block text-4xl font-extrabold"
                  />
                  <p className="mt-2 text-sm font-medium text-muted">
                    {stat.after}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 9. AWARDS */
export function Awards() {
  const t = useT();
  return (
    <section className="relative py-20">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading title={t.awards.title} />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {awardsAssets.logos.map((logo) => (
            <div
              key={logo}
              className="glass flex h-20 w-44 items-center justify-center px-6 transition duration-300 hover:-translate-y-1"
            >
              <img
                src={img(logo)}
                alt="Premio o reconocimiento a Imuko"
                loading="lazy"
                className="max-h-12 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10. PRICING */
export function Pricing() {
  const t = useT();
  return (
    <section id="planes" className="relative py-20 md:py-24">
      <GradientMesh variant="hero" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading title={t.pricing.title} />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {t.pricing.plans.map((plan, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard
                featured={plan.popular}
                className={`h-full ${plan.popular ? "md:-translate-y-3" : ""}`}
              >
                <div className="relative flex h-full flex-col">
                  {plan.popular && (
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-cyan px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/40">
                      {t.pricing.popularLabel}
                    </span>
                  )}
                  <IconChip
                    src={img(
                      pricingAssets.plans[i]?.icon ??
                        pricingAssets.plans[0].icon
                    )}
                  />
                  <h3 className="mt-5 text-2xl font-bold text-fg">
                    {plan.name}
                  </h3>
                  <p className="text-gradient mt-1 text-sm font-semibold uppercase tracking-wide">
                    {plan.subtitle}
                  </p>
                  <p className="mt-4 flex-1 text-muted">{plan.text}</p>
                  <div className="mt-6">
                    <Button
                      href={appUrls.requestDeveloper}
                      variant={plan.popular ? "primary" : "ghost"}
                    >
                      {t.waysToWork.cta}
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. CTA FINAL */
export function CtaBanner() {
  const t = useT();
  return (
    <section className="relative py-20 md:py-28">
      <GradientMesh variant="cta" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <GlassCard className="px-8 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-balance text-3xl font-bold text-fg sm:text-4xl">
            {t.cta.title}
          </h2>
          <div className="mt-8">
            <Button href={appUrls.requestDeveloper} variant="primary">
              {t.cta.button}
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
