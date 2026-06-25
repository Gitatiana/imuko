"use client";

import { useEffect, useState } from "react";

interface AnimatedHeadlineProps {
  prefix: string;
  words: string[];
  suffix?: string;
  interval?: number;
  className?: string;
}

export function AnimatedHeadline({
  prefix,
  words,
  suffix,
  interval = 2500,
  className = "",
}: AnimatedHeadlineProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Reinicia la rotación si cambian las palabras (p. ej. cambio de idioma).
  useEffect(() => {
    setIndex(0);
    setVisible(true);
  }, [words]);

  useEffect(() => {
    if (words.length <= 1) return;
    const tick = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
      return () => clearTimeout(swap);
    }, interval);
    return () => clearInterval(tick);
  }, [words, interval]);

  return (
    <h1 className={className}>
      {prefix}{" "}
      <span className="relative inline-block align-bottom">
        <span
          aria-live="polite"
          className={`inline-block text-fg transition-all duration-[400ms] [transition-timing-function:var(--ease-out-soft)] will-change-transform motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0 ${
            visible
              ? "translate-y-0 opacity-100 blur-0"
              : "-translate-y-1 opacity-0 blur-[2px]"
          }`}
        >
          {words[index]}
        </span>
      </span>
      {suffix ? <> {suffix}</> : null}
    </h1>
  );
}
