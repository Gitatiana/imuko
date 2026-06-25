import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import "./globals.css";

// Script bloqueante: fija la clase de tema en <html> ANTES del primer paint
// para evitar el flash de tema incorrecto (FOUC). Default: dark.
const themeInitScript = `(function(){try{var t=localStorage.getItem('imuko-theme');if(t!=='light'&&t!=='dark')t='dark';var r=document.documentElement;r.classList.remove('dark','light');r.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`;

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Obtén desarrolladores confiables y experimentados en tiempo récord. Construimos tu equipo tecnológico soñado para escalar tu negocio.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: "El mejor talento tecnológico de LATAM para tu equipo.",
    url: site.url,
    siteName: site.name,
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
