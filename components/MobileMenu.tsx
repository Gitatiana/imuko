"use client";

import { useState } from "react";
import Link from "next/link";
import { appUrls } from "@/lib/content";
import { useLocale, useT } from "@/lib/i18n/LanguageProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useT();
  const { locale, setLocale } = useLocale();

  const navItems = [
    { label: t.nav.home, href: "/", external: false },
    { label: t.nav.developer, href: appUrls.registerDeveloper, external: true },
    { label: t.nav.login, href: appUrls.login, external: true },
  ];

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa (solo <md) */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label="Abrir menú de navegación"
        className="glass flex h-10 w-10 items-center justify-center !rounded-lg text-muted transition-colors hover:text-cyan md:hidden"
      >
        <svg
          className={`h-6 w-6 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay (backdrop) */}
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          tabIndex={-1}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Drawer/Panel lateral */}
      <nav
        className={`glass-strong !fixed right-0 top-0 z-50 h-screen w-64 transform shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navegación móvil"
      >
        <div className="flex h-full flex-col px-6 py-8">
          {/* Encabezado del drawer */}
          <div className="mb-8 flex items-center justify-between">
            <span className="text-lg font-bold text-fg">Menú</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              className="text-muted transition-colors hover:text-fg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-1 flex-col gap-4">
            {navItems.map((item, i) => {
              const className =
                "rounded-lg px-4 py-3 text-muted transition-colors hover:bg-fg/5 hover:text-cyan";
              return item.external ? (
                <a
                  key={`${item.href}-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavigate}
                  className={className}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={`${item.href}-${i}`}
                  href={item.href}
                  onClick={handleNavigate}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Divisor */}
          <div className="my-6 border-t border-line" />

          {/* Selector de idioma + conmutador de tema */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <div
              className="glass flex flex-1 items-center gap-3 !rounded-lg px-4 py-3"
              aria-label="Selector de idioma"
            >
              <button
                type="button"
                onClick={() => setLocale("es")}
                aria-pressed={locale === "es"}
                className={`text-sm font-semibold transition-colors ${
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
                className={`text-sm font-semibold transition-colors ${
                  locale === "en" ? "text-cyan" : "text-faint hover:text-cyan"
                }`}
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>

          {/* Botón CTA */}
          <a
            href={appUrls.requestDeveloper}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavigate}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-cyan px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/40 transition duration-200 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
