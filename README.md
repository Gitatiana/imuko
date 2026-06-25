# IMUKO — Landing (Next.js)

Reconstrucción limpia de la landing de **imuko.co** en Next.js (App Router) +
TypeScript + Tailwind CSS v4. Sin WordPress, sin base de datos, sin plugins →
sin la superficie de ataque que causó los hackeos.

## Estructura

```
app/
  layout.tsx                 # layout raíz (Header + Footer, metadata, fuente)
  page.tsx                   # Home (hero, beneficios, formas de trabajar, testimonios, CTA)
  servicios/page.tsx         # Catálogo de tecnologías
  preguntas-frecuentes/page.tsx
  terminos/page.tsx          # (pendiente: pegar texto legal real)
  globals.css                # Tailwind + tema de marca
components/
  Header.tsx  Footer.tsx  sections.tsx  HeroGlobe.tsx  ...
lib/
  content.ts                 # 🔸 TODO el texto vive aquí — incluye `appUrls`
```

## Flujo hacia la app

Los CTAs (Login, "Soy desarrollador", "Empezar a contratar"/"Solicitar
desarrollador") apuntan al subdominio **`app.imuko.co`**, replicando el sitio
original. Las URLs están centralizadas en `appUrls` (`lib/content.ts`).
`next.config.mjs` replica además el redirect del home en inglés:
`/en/home` → `app.imuko.co/#/registro-desarrollador`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Contenido

- Los textos están en `lib/content.ts`, extraídos del sitio original.
- En `public/img/` viven **solo las imágenes realmente usadas** (logos, iconos,
  mapa, logos de clientes), depuradas del dump original de WordPress.
- FAQ y Términos quedaron como placeholder porque el original tenía relleno /
  faltaba migrar el texto largo.

## Pendiente / próximos pasos

- [ ] Migrar el texto legal de Términos y condiciones.
- [ ] Completar las respuestas reales del FAQ.
- [ ] Versión en inglés (el sitio original era bilingüe ES/EN).
- [ ] Desplegar y apuntar el dominio desde GoDaddy.
```
