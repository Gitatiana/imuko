import type { Metadata } from "next";
import { GradientMesh } from "@/components/GradientMesh";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Resolvemos las dudas más comunes sobre trabajar con Imuko.",
};

const faqItems = [
  {
    q: "¿Cómo seleccionan a los desarrolladores?",
    a: "Cada candidato pasa por un proceso de evaluación de varias etapas: validamos su experiencia técnica con pruebas y retos prácticos según el stack requerido, revisamos su trayectoria en proyectos reales y evaluamos sus habilidades de comunicación en inglés y español. Solo presentamos perfiles que ya hemos filtrado de nuestra red de más de 3.000 desarrolladores en LATAM, por lo que recibes una lista corta de candidatos que realmente encajan con tus necesidades.",
  },
  {
    q: "¿En qué zonas horarias trabajan?",
    a: "Nuestro talento está ubicado principalmente en Latinoamérica, lo que permite una superposición horaria casi total con Estados Unidos y Canadá. Trabajamos en zonas que van desde GMT-3 hasta GMT-6, de modo que tu equipo remoto colabora en tiempo real durante tu jornada laboral, facilitando las reuniones diarias, el pair programming y la respuesta inmediata.",
  },
  {
    q: "¿Cuánto tarda en armarse un equipo?",
    a: "Para roles individuales podemos presentarte candidatos cualificados en tan solo 48 horas. Para equipos completos construidos desde cero, el proceso suele tomar entre una y dos semanas, dependiendo de la complejidad del stack y la cantidad de perfiles. Te acompañamos desde la definición de requerimientos hasta la incorporación, para que empieces a acelerar tus proyectos lo antes posible.",
  },
  {
    q: "¿Qué modelos de contratación ofrecen?",
    a: "Trabajamos con tres modelos flexibles: pago por hora para proyectos puntuales o tareas específicas; tarifa mensual (outsourcing) para colaboración continua con costos predecibles; y pago único (head hunting) cuando buscas incorporar talento directamente a tu nómina. Elegimos juntos el modelo que mejor se adapte a tu presupuesto y a la duración de tu proyecto.",
  },
  {
    q: "¿En qué idiomas se comunican los desarrolladores?",
    a: "Todos nuestros desarrolladores dominan el español de forma nativa y cuentan con un nivel de inglés profesional, validado durante el proceso de selección. Esto garantiza una comunicación fluida tanto con equipos hispanohablantes como con clientes y stakeholders internacionales, sin barreras que frenen el avance del proyecto.",
  },
  {
    q: "¿Qué garantías ofrecen si un desarrollador no encaja?",
    a: "Si durante las primeras semanas un desarrollador no cumple con tus expectativas técnicas o de encaje con el equipo, lo reemplazamos sin costo adicional. Hacemos seguimiento continuo del desempeño y mantenemos una comunicación cercana para resolver cualquier ajuste rápidamente, asegurando que siempre cuentes con el talento adecuado en tus proyectos.",
  },
];

export default function FaqPage() {
  return (
    <section className="relative overflow-hidden">
      <GradientMesh variant="subtle" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          kicker="FAQ"
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre trabajar con Imuko."
        />

        <div className="mt-12 space-y-4">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <details
                className="glass group p-6 transition hover:border-cyan/30"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-fg marker:hidden">
                  <span className="text-pretty">{item.q}</span>
                  <span
                    aria-hidden
                    className="text-gradient shrink-0 text-2xl leading-none transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="text-pretty mt-3 leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
