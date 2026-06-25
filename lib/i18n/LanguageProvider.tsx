"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dictionaries, type Locale } from "./dictionaries";

type Dictionary = (typeof dictionaries)[Locale];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const STORAGE_KEY = "imuko-locale";
const DEFAULT_LOCALE: Locale = "es";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR-safe: arrancamos siempre en el default para que la hidratación coincida.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Tras montar en cliente leemos la preferencia guardada.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  // Mantenemos <html lang> sincronizado para accesibilidad/SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}

/** Devuelve el diccionario activo (objeto con todas las claves de la home). */
export function useT(): Dictionary {
  return useLanguage().t;
}

/** Devuelve el locale actual y un setter para cambiarlo. */
export function useLocale(): {
  locale: Locale;
  setLocale: (locale: Locale) => void;
} {
  const { locale, setLocale } = useLanguage();
  return { locale, setLocale };
}
