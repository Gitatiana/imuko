"use client";

import Link from "next/link";
import { site, appUrls } from "@/lib/content";
import { useT } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-line bg-page/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          {/* Logo theme-aware */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Logo-IMUKO-blanco.png"
            alt={site.name}
            loading="lazy"
            className="hidden h-7 w-auto self-start dark:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/cropped-Logo-IMUKO.png"
            alt={site.name}
            loading="lazy"
            className="block h-7 w-auto self-start dark:hidden"
          />
          <p className="text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          <a
            href={appUrls.registerDeveloper}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition hover:text-cyan"
          >
            {t.footer.developer}
          </a>
          <a
            href={appUrls.login}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition hover:text-cyan"
          >
            {t.footer.login}
          </a>
          <Link
            href="/terminos"
            className="text-sm text-muted transition hover:text-cyan"
          >
            {t.footer.legal[1]}
          </Link>
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="text-sm font-medium text-cyan transition hover:brightness-110 hover:underline"
        >
          {site.email}
        </a>
      </div>

      <div className="border-t border-line py-4 text-center text-xs text-faint">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
