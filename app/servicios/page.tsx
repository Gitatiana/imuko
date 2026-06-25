import type { Metadata } from "next";
import { services } from "@/lib/content";
import { GradientMesh } from "@/components/GradientMesh";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tecnologías y especialidades de los desarrolladores de Imuko: backend, mobile, frontend y más.",
};

export default function ServiciosPage() {
  return (
    <section className="relative overflow-hidden">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          kicker="Servicios"
          title="El stack que tu proyecto necesita"
          subtitle="Conseguimos desarrolladores y equipos expertos en las tecnologías que tu proyecto necesita."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <GlassCard className="h-full">
                <h2 className="text-gradient text-xl font-bold">
                  {group.category}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted transition hover:border-cyan/40 hover:text-fg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
