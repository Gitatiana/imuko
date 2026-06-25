// Contenido de la landing IMUKO — extraído del sitio original (imuko.co).
// Edita aquí los textos; los componentes los consumen desde este archivo.

export const site = {
  name: "Imuko",
  tagline: "Desarrolladores de software a su alcance",
  email: "talento@imuko.co",
  url: "https://www.imuko.co",
};

// Plataforma/app de IMUKO (subdominio aparte, SPA con login).
// Los CTAs apuntan aquí, replicando el flujo del sitio original.
export const appUrls = {
  base: "https://app.imuko.co",
  login: "https://app.imuko.co/#/login",
  // El cliente solicita un desarrollador / empieza a contratar.
  requestDeveloper: "https://app.imuko.co/#/solicitar-desarrollador",
  // El desarrollador se registra como talento.
  registerDeveloper: "https://app.imuko.co/#/registro-desarrollador",
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
];

export const hero = {
  prefix: "Acelera tus",
  rotatingWords: ["equipos", "proyectos", "negocios"],
  subtitle:
    "Obtén desarrolladores confiables y experimentados en tiempo récord. Construimos tu equipo tecnológico soñado —equipos completos o desarrolladores individuales— para ayudarte a escalar de manera eficiente.",
  primaryCta: { label: "Acelera tu proyecto hoy", href: appUrls.requestDeveloper },
  image: "51e27cfd7e0fef46d6c6941621d1e347.png",
  bgImage: "b5133824657c038864a1cd2fc45637c4a993be71.png",
};

export const benefits = {
  title: "Ayudamos a las empresas a:",
  items: [
    {
      icon: "022d616b8903fdd822ae194d8a12dacf.svg",
      text: "Cumplir con sus plazos más urgentes a tiempo.",
    },
    {
      icon: "96c971299694f2b2b42d30b445411bfe.svg",
      text: "Reducir sus costos operativos y deuda técnica.",
    },
    {
      icon: "38f2ada1352859be7bca8be3b0f4fd5d.svg",
      text: "Liberar tiempo para enfocarse en sus objetivos y no en la contratación.",
    },
  ],
};

export const waysToWork = {
  title: "3 formas de trabajar con nosotros",
  items: [
    {
      tag: "Existing Teams",
      title: "Mejorando tu equipo interno",
      description:
        "¿Necesitas un impulso de talento? Integramos profesionales capacitados en tus equipos existentes para cubrir vacantes, abordar bloqueos en los proyectos y asegurar un control de calidad de primera clase.",
    },
    {
      tag: "Teams from scratch",
      title: "Creando equipos de desarrollo desde cero",
      description:
        "Si tienes una idea o proyecto pero aún no tienes equipo de desarrollo, armamos un equipo de expertos hecho a medida para ejecutar tu proyecto y hacer realidad tu visión.",
    },
    {
      tag: "Consulting",
      title: "Consultoría de Arquitectura",
      description:
        "Consultores experimentados en tecnologías como AWS, Salesforce, Azure y más, para evaluar tu infraestructura, identificar oportunidades de mejora y trazar rutas de modernización.",
    },
  ],
};

export const testimonials = {
  title: "Nuestros clientes dicen",
  items: [
    {
      quote:
        "Quedamos impresionados con la calidad del talento que encontramos a través de Imuko. Los desarrolladores de LATAM que se unieron a nuestro equipo no solo tenían las habilidades técnicas que necesitábamos, sino también una excelente comunicación en inglés, fuertes capacidades de liderazgo y un espíritu colaborativo.",
      author: "Sebastián Lopez",
      role: "CEO of Qualoom",
      logo: "fd9d0f10d37300da7b8a6bca7b21f1fb.png",
    },
    {
      quote:
        "Con Imuko logramos cumplir consistentemente con los plazos de nuestros proyectos, reducir nuestros costos operativos en aproximadamente un 20% y enfocarnos más en objetivos estratégicos en lugar de estar constantemente contratando.",
      author: "Sofía Ruiz",
      role: "CEO of Druo",
      logo: "0321494bfd5ae5cd17b5f00363668707.png",
    },
  ],
};

export const clientsCarousel = {
  kicker: "Impulsados por Imuko",
  title: "Las empresas más innovadoras confían en nosotros:",
  logos: [
    "fd9d0f10d37300da7b8a6bca7b21f1fb.png", // Qualoom
    "0321494bfd5ae5cd17b5f00363668707.png", // Druo
    "ace5691889954728b485323673831bb9.png", // Gobrico 30
    "6430277c461b12f12fb46c611f96988c.png", // Mullen Lowe SSP3
    "54d2d9654eff9c76445bccbba4ff0c40.png", // Smartdici
  ],
};

export const pathToSuccess = {
  title: "Your path to success",
  steps: [
    {
      number: "1",
      icon: "037245f54e21e828f7ae01bb51e4005c.svg",
      title: "Comparte tus requerimientos",
      text: "Completa nuestro formulario de manera rápida para que podamos entender tus requerimientos actuales.",
    },
    {
      number: "2",
      icon: "44a9f927bf75658f3d10740b30343b76.svg",
      title: "Te conectamos con el talento adecuado.",
      text: "En segundos comenzaremos a encontrar los candidatos que mejor se ajusten a tus requisitos. Disponemos de una red de más de 3000 desarrolladores de alta calidad.",
    },
    {
      number: "3",
      icon: "d69b6917b58bd00c0d50fb9662f6ad68.svg",
      title: "Firma el contrato y comienza a acelerar tus equipos.",
      text: "Después de elegir a tu candidato favorito, firma el contrato de trabajo y prepárate para tener el mejor talento trabajando en tus proyectos.",
    },
  ],
};

export const globalPresence = {
  title: "Nuestra presencia global",
  map: "eddc47e841aa7d971e7447a75ecd6eb5.png",
  stats: [
    { before: "Hemos impulsado", to: 50, suffix: "+", after: "Empresas a nivel mundial" },
    { before: "", to: 3000, suffix: "+", after: "Desarrolladores selectos en nuestra plataforma" },
    {
      before: "Obtén candidatos cualificados trabajando en tu equipo en tan solo",
      to: 48,
      suffix: "",
      after: "horas",
    },
  ],
};

export const awards = {
  title: "Premiado por",
  logos: [
    "d0b2315e57382d2cee4e3c34b5a2154c.png", // ENTER.co
    "54846b95863d031985a16ceb85cfd439.png", // IMPACTOTIC
    "887002e5bcd318258cda307119d8b592.png",
    "62acdfe707fe7cc7dd726ccc4e096792.png",
  ],
};

export const pricing = {
  title: "3 formas de trabajar con nosotros",
  bgImage: "cd02a0088bfb066bb13db374b115fdd86c9842ec.png",
  plans: [
    {
      icon: "c40b5016254af94755ca09d7c7cdf6ce.svg",
      name: "Pago por hora",
      subtitle: "On-demand Service",
      text: "¿Necesitas un desarrollador capacitado para un proyecto a corto plazo o una tarea específica? Te conectamos con talento de primer nivel por hora, ofreciendo flexibilidad y rentabilidad para tus necesidades inmediatas.",
      popular: false,
    },
    {
      icon: "8829385b1ee653bdf7011097f2bc5e3f.svg",
      name: "Tarifa Mensual",
      subtitle: "Servicio de Outsourcing",
      text: "Obtén equipos de desarrollo de alto rendimiento o desarrolladores individuales en tu empresa, beneficiándote de una colaboración constante, comunicación fluida y costos mensuales predecibles.",
      popular: true,
    },
    {
      icon: "9fd70e82caf6ed795b3843ef213db2dd.svg",
      name: "Pago único",
      subtitle: "Head Hunting",
      text: "¿Buscas un desarrollador o líder específico para llenar un rol crítico? Nuestros reclutadores expertos te ayudarán a identificar el candidato perfecto, ahorrándote tiempo y recursos valiosos.",
      popular: false,
    },
  ],
};

// Catálogo de tecnologías (de la página "Servicios" original)
export const services = [
  {
    category: "Backend / PHP",
    items: ["Laravel", "Symfony", "CodeIgniter", "CakePHP", "Lumen", "Yii", "Zend", "Drupal", "Magento", "WordPress"],
  },
  {
    category: "Mobile",
    items: ["iOS / Swift", "Objective-C", "Kotlin", "Android", "React Native", "Ionic", "Cordova", "Phonegap", "Xamarin"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "SASS / SCSS", "LESS", "React", "Vue", "Angular"],
  },
  {
    category: "Otras tecnologías",
    items: ["Java", "Groovy", "Dropwizard", "Node.js", "Python", "AWS", "Azure", "Salesforce"],
  },
];

export const faq = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿Cómo seleccionan a los desarrolladores?",
      a: "Pendiente de completar — el contenido original era texto de relleno (Lorem ipsum).",
    },
    {
      q: "¿En qué zonas horarias trabajan?",
      a: "Pendiente de completar.",
    },
    {
      q: "¿Cuánto tarda en armarse un equipo?",
      a: "Pendiente de completar.",
    },
  ],
};
