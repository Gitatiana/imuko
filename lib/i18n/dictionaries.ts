// Diccionario bilingüe ES/EN para la home de IMUKO.
// Textos extraídos del backup original (home v2 ES e EN) y de las imágenes de referencia.
// Ambos idiomas comparten EXACTAMENTE la misma estructura de claves.

export type Locale = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      home: "Inicio",
      developer: "Soy desarrollador",
      login: "Ingresar",
      cta: "Empezar a contratar",
      langLabel: "ES",
    },
    hero: {
      prefix: "Acelera tus",
      rotatingWords: ["equipos", "proyectos", "negocios"],
      suffix: "con el mejor talento tecnológico",
      subtitle:
        "Construimos el equipo tecnológico de tus sueños. Integramos equipos completos o desarrolladores individuales en tu empresa para ayudar a tu negocio a escalar de manera eficiente.",
      cta: "Empezar a contratar",
    },
    benefits: {
      title: "Ayudamos a las empresas a:",
      items: [
        "Cumplir con sus plazos más urgentes a tiempo",
        "Reducir sus costos operativos y deuda técnica.",
        "Liberar tiempo para enfocarse en sus objetivos y no en la contratación.",
      ],
    },
    waysToWork: {
      title: "3 formas de trabajar con nosotros",
      items: [
        {
          tag: "Existing Teams",
          title: "Mejorando tu equipo interno",
          description:
            "¿Necesitas un impulso de talento? Podemos integrar profesionales capacitados en tus equipos existentes para cubrir vacantes, abordar bloqueos en los proyectos y asegurar un control de calidad de primera clase.",
        },
        {
          tag: "Teams from scratch",
          title: "Creando equipos de desarrollo desde cero",
          description:
            "Si tienes una idea o proyecto pero aún no tienes un equipo de desarrollo, armaremos un equipo de expertos hecho a medida para ejecutar tu proyecto y hacer realidad tu visión.",
        },
        {
          tag: "Consulting",
          title: "Consultoría de Arquitectura",
          description:
            "Ofrecemos consultores experimentados en tecnologías como AWS, Salesforce, Azure y más, para evaluar tu infraestructura actual e identificar oportunidades de mejora.",
        },
      ],
      cta: "Acelera tu proyecto hoy",
    },
    clients: {
      kicker: "Impulsados por Imuko",
      title: "Las empresas más innovadoras confían en nosotros:",
    },
    testimonials: {
      title: "Nuestros clientes dicen",
      items: [
        {
          quote:
            "“Quedamos impresionados con la calidad del talento que encontramos a través de Imuko. Los desarrolladores de LATAM que se unieron a nuestro equipo no solo tenían las habilidades técnicas que necesitábamos, sino también una excelente comunicación en inglés, fuertes capacidades de liderazgo y un espíritu colaborativo.”",
          author: "Sebastián Lopez",
          role: "CEO of Qualoom",
        },
        {
          quote:
            "“Con Imuko logramos cumplir consistentemente con los plazos de nuestros proyectos, reducir nuestros costos operativos en aproximadamente un 20% y enfocarnos más en objetivos estratégicos en lugar de estar constantemente contratando.”",
          author: "Sofía Ruiz",
          role: "CEO of Druo",
        },
      ],
    },
    pathToSuccess: {
      title: "Tu camino al éxito",
      steps: [
        {
          number: "1",
          title: "Comparte tus requerimientos",
          text: "Completa nuestro formulario de manera rápida para que podamos entender tus requerimientos actuales.",
        },
        {
          number: "2",
          title: "Te conectamos con el talento adecuado.",
          text: "En segundos comenzaremos a encontrar los candidatos que mejor se ajusten a tus requisitos, desde nuestra red de más de 3000 desarrolladores selectos.",
        },
        {
          number: "3",
          title: "Firma el contrato y comienza a acelerar tus equipos.",
          text: "Después de elegir a tu candidato favorito, firma el contrato de trabajo y prepárate para tener el mejor talento trabajando en tus proyectos.",
        },
      ],
    },
    globalPresence: {
      title: "Nuestra presencia global",
      stats: [
        {
          before: "Hemos impulsado",
          value: "+60",
          after: "Empresas a nivel mundial",
        },
        {
          before: "",
          value: "+2,735",
          after: "Desarrolladores selectos en nuestra plataforma",
        },
        {
          before: "Obtén candidatos cualificados trabajando en tu equipo en tan solo",
          value: "72",
          after: "horas",
        },
      ],
    },
    awards: {
      title: "Premiado por:",
    },
    pricing: {
      title: "3 formas de trabajar con nosotros",
      popularLabel: "Más popular",
      plans: [
        {
          name: "Pago por hora",
          subtitle: "On-demand Service",
          text: "¿Necesitas un desarrollador capacitado para un proyecto a corto plazo o una tarea específica? Te conectamos con talento de primer nivel por hora, ofreciendo flexibilidad y rentabilidad para tus necesidades inmediatas.",
          popular: false,
        },
        {
          name: "Tarifa Mensual",
          subtitle: "Servicio de Outsourcing",
          text: "Obtén equipos de desarrollo de alto rendimiento o desarrolladores individuales en tu empresa, beneficiándote de una colaboración constante, comunicación fluida y costos mensuales predecibles.",
          popular: true,
        },
        {
          name: "Pago único",
          subtitle: "Head Hunting",
          text: "¿Buscas un desarrollador o líder específico para llenar un rol crítico? Nuestros reclutadores expertos aprovechan su red para identificar el candidato perfecto, ahorrándote tiempo y recursos valiosos.",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Acelera tus equipos con el mejor talento tecnológico",
      button: "Empezar a contratar",
    },
    contact: {
      title: "Ponte en contacto",
      subtitle:
        "Cuéntanos cómo podemos ayudarte a encontrar los mejores talentos.",
      nameLabel: "Nombre completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "juan@empresa.com",
      companyLabel: "Empresa",
      companyPlaceholder: "Mi Empresa S.A.",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos qué necesitas...",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      errors: {
        nameRequired: "El nombre es requerido",
        emailRequired: "El email es requerido",
        emailInvalid: "Email inválido",
        companyRequired: "La empresa es requerida",
        messageRequired: "El mensaje es requerido",
        messageMin: "El mensaje debe tener al menos 10 caracteres",
        submitFailed: "Error al enviar el formulario. Intenta de nuevo.",
      },
    },
    footer: {
      developer: "Soy desarrollador",
      login: "Iniciar sesión",
      cta: "Empezar a contratar",
      followUs: "Síguenos",
      social: ["Facebook", "Instagram", "LinkedIn", "Whatsapp"],
      copyright: "© 2024. Imuko. Todos los derechos reservados",
      legal: ["Política de privacidad", "Términos del servicio", "Configuración de cookies"],
    },
  },

  en: {
    nav: {
      home: "Home",
      developer: "I am a developer",
      login: "Login",
      cta: "Start Hiring",
      langLabel: "EN",
    },
    hero: {
      prefix: "Accelerate your",
      rotatingWords: ["teams", "projects", "business"],
      suffix: "with the best tech talent",
      subtitle:
        "We build your dream tech crew. Placing both complete teams and individual developers in your company to help your business scale efficiently.",
      cta: "Start Hiring",
    },
    benefits: {
      title: "We help businesses:",
      items: [
        "Complete their most urgent deadlines on time",
        "Reduce their operating costs and technical debt.",
        "Liberate time to focus on goals not hiring paperwork",
      ],
    },
    waysToWork: {
      title: "3 ways we serve our customers",
      items: [
        {
          tag: "Existing Teams",
          title: "Enhancing your in-house team",
          description:
            "Need a talent boost? We can integrate skilled professionals into your existing teams to fill gaps, tackle project roadblocks, and ensure top-notch quality control.",
        },
        {
          tag: "Teams from scratch",
          title: "Building development teams from scratch",
          description:
            "If you have an idea/project but don't have a development team yet, we'll assemble a team of experts tailored to execute your project and bring your vision to life.",
        },
        {
          tag: "Consulting",
          title: "Consulting Services",
          description:
            "We offer experienced consultants in trending tech stacks like AWS, Salesforce, Azure, and more, to assess your current infrastructure and identify improvement opportunities.",
        },
      ],
      cta: "Accelerate your project today",
    },
    clients: {
      kicker: "Powered by Imuko",
      title: "The most innovative companies trust us:",
    },
    testimonials: {
      title: "What our clients say",
      items: [
        {
          quote:
            "“We were blown away by the talent pool we found through Imuko. The Latin American developers they matched us with had not only the technical skills we needed, but also excellent English communication, strong leadership qualities, and a collaborative spirit.”",
          author: "Sebastián Lopez",
          role: "CEO of Qualoom",
        },
        {
          quote:
            "“With Imuko we managed to meet our project deadlines consistently, reduce our operating costs by about 20%, and focus more on strategic goals rather than constantly hiring.”",
          author: "Sofía Ruiz",
          role: "CEO of Druo",
        },
      ],
    },
    pathToSuccess: {
      title: "Your path to success",
      steps: [
        {
          number: "1",
          title: "Share your needs",
          text: "Complete our easy to fill form so we can understand your current requirements.",
        },
        {
          number: "2",
          title: "Get matched with the right talent.",
          text: "Within seconds we will start finding the candidates that best match your requirements from our vetted +3000 developer network.",
        },
        {
          number: "3",
          title: "Sign the contract and start accelerating your project.",
          text: "After choosing your favorite candidate sign the working contract and get ready to have the best talent working in your projects.",
        },
      ],
    },
    globalPresence: {
      title: "Our global presence",
      stats: [
        {
          before: "Powered more than",
          value: "+60",
          after: "Companies Worldwide",
        },
        {
          before: "",
          value: "+2,735",
          after: "vetted developers in our platform",
        },
        {
          before: "Get matching candidates working in your team as fast as",
          value: "72",
          after: "hours",
        },
      ],
    },
    awards: {
      title: "Awarded by:",
    },
    pricing: {
      title: "3 ways of working with us",
      popularLabel: "Most Popular",
      plans: [
        {
          name: "Hourly Fee",
          subtitle: "On-demand Service",
          text: "Need a skilled developer for a short-term project or specific task? We connect you with top-tier talent on an hourly basis, offering flexibility and cost-efficiency for your immediate needs.",
          popular: false,
        },
        {
          name: "Monthly Fee",
          subtitle: "Outsourcing Service",
          text: "Get high-performing development teams or individual developers in your company while benefiting from consistent collaboration, streamlined communication, and predictable monthly costs.",
          popular: true,
        },
        {
          name: "One time-Payment",
          subtitle: "Head Hunting",
          text: "Looking for a specific developer or leader to fill a critical role? Our expert recruiters leverage their network to identify the perfect match, saving you valuable time and resources.",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Accelerate your teams with the best tech talent",
      button: "Start Hiring",
    },
    contact: {
      title: "Get in touch",
      subtitle: "Tell us how we can help you find the best talent.",
      nameLabel: "Full name",
      namePlaceholder: "John Doe",
      emailLabel: "Email address",
      emailPlaceholder: "john@company.com",
      companyLabel: "Company",
      companyPlaceholder: "My Company Inc.",
      messageLabel: "Message",
      messagePlaceholder: "Tell us what you need...",
      submit: "Send message",
      submitting: "Sending...",
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email",
        companyRequired: "Company is required",
        messageRequired: "Message is required",
        messageMin: "Message must be at least 10 characters",
        submitFailed: "Failed to send the form. Please try again.",
      },
    },
    footer: {
      developer: "I am a developer",
      login: "Login",
      cta: "Start Hiring",
      followUs: "Follow Us",
      social: ["Facebook", "Instagram", "LinkedIn", "Whatsapp"],
      copyright: "© 2024. Imuko. All rights reserved.",
      legal: ["Privacy Policy", "Terms of Service", "Cookies Settings"],
    },
  },
} as const;
