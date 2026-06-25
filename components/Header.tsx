"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, appUrls } from "@/lib/content";
import { useLocale, useT } from "@/lib/i18n/LanguageProvider";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const t = useT();
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();

  const navItems = [
    { label: t.nav.home, href: "/", external: false },
    { label: t.nav.developer, href: appUrls.registerDeveloper, external: true },
    { label: t.nav.login, href: appUrls.login, external: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label={site.name} className="flex items-center">
          {/* Logo: oscuro (blanco) en tema oscuro, color en tema claro */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Logo-IMUKO-blanco.png"
            alt={site.name}
            loading="lazy"
            className="hidden h-8 w-auto dark:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/cropped-Logo-IMUKO.png"
            alt={site.name}
            loading="lazy"
            className="block h-8 w-auto dark:hidden"
          />
        </Link>

        {/* Grupo derecho: links + selector idioma + CTA, agrupados a la derecha */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item, i) => {
              const isActive = !item.external && pathname === item.href;
              const className = `text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-fg underline decoration-cyan decoration-2 underline-offset-[6px]"
                  : "text-muted hover:text-cyan"
              }`;
              if (item.external) {
                return (
                  <a
                    key={`${item.href}-${i}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={`${item.href}-${i}`}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Selector de idioma funcional */}
          <div
            className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
              className={`transition-colors ${
                locale === "es" ? "text-cyan" : "text-faint hover:text-cyan"
              }`}
            >
              ES
            </button>
            <span className="text-faint/50">|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`transition-colors ${
                locale === "en" ? "text-cyan" : "text-faint hover:text-cyan"
              }`}
            >
              EN
            </button>
          </div>

          {/* Conmutador de tema (claro/oscuro) */}
          <ThemeToggle />

          <Button
            href={appUrls.requestDeveloper}
            className="hidden px-5 py-2 md:inline-flex"
          >
            {t.nav.cta}
          </Button>

          {/* Menú móvil (hamburguesa, solo <md) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
