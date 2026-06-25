"use client";

/**
 * Globo de marca animado — canvas 2D, sin WebGL ni dependencias.
 *
 * Homenaje a la ilustración original de IMUKO (globo + pines magenta), pero como
 * esfera 3D girando con el MAPA COMPLETO texturizado encima:
 *  - El mapa de marca (equirectangular en /img) se "envuelve" sobre la esfera por
 *    raycasting: para cada píxel de la cara frontal se calcula su lat/lon (des-
 *    haciendo la rotación) y se muestrea el píxel del mapa → continentes rellenos.
 *  - Un GRID tenue de meridianos y paralelos da estructura de globo.
 *  - PINES magenta anclados a coordenadas reales (icono </>, ubicación y globo)
 *    rotan con el mundo, solo se ven de frente y laten suavemente.
 *  - Glow de marca cian + acento morado.
 *
 * SSR/Next: "use client" + render en useEffect, devicePixelRatio, ResizeObserver,
 * cancelAnimationFrame/disconnect en cleanup y prefers-reduced-motion (frame fijo).
 */

import { useEffect, useRef } from "react";

const CYAN = { r: 48, g: 176, b: 224 };
const ACCENT = { r: 199, g: 17, b: 255 };
const OCEAN = { r: 8, g: 30, b: 60 }; // cuerpo de la esfera (navy de marca)

const MAP_SRC = "/img/eddc47e841aa7d971e7447a75ecd6eb5.png";
const ROTATION_SPEED = 0.14; // radianes / segundo
const TEX_MAX_W = 1024; // ancho máx. de la textura muestreada
const SPHERE_BUF = 340; // resolución del buffer de la esfera (perf vs. nitidez)
const STATIC_ANGLE = 0.5; // ángulo del frame fijo (reduced-motion)

type Vec3 = { x: number; y: number; z: number };
type Pin = { lat: number; lon: number; kind: "code" | "dot" | "ring" };

/** Pines anclados a coordenadas reales (lat, lon en grados). */
const PINS: Pin[] = [
  { lat: 4.7, lon: -74.1, kind: "code" }, // Bogotá — base de IMUKO
  { lat: 40, lon: -100, kind: "dot" }, // Norteamérica
  { lat: 50, lon: 10, kind: "ring" }, // Europa
  { lat: 28, lon: 113, kind: "dot" }, // Asia
];

/** lat/lon (grados) → vector unitario en la esfera. */
function toVec3(latDeg: number, lonDeg: number): Vec3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  return {
    x: Math.cos(lat) * Math.sin(lon),
    y: Math.sin(lat),
    z: Math.cos(lat) * Math.cos(lon),
  };
}

export function HeroGlobe({ className }: { className?: string } = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let frame = 0;

    // Textura del mapa (muestreada una vez).
    let mapData: Uint8ClampedArray | null = null;
    let mapW = 0;
    let mapH = 0;

    // Buffer offscreen donde se pinta la esfera por píxel.
    const sphere = document.createElement("canvas");
    sphere.width = SPHERE_BUF;
    sphere.height = SPHERE_BUF;
    const sphereCtx = sphere.getContext("2d");
    const sphereImg = sphereCtx?.createImageData(SPHERE_BUF, SPHERE_BUF);

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (v: Vec3, cx: number, cy: number, radius: number) => ({
      sx: cx + v.x * radius,
      sy: cy - v.y * radius,
      z: v.z,
    });

    const rotateY = (v: Vec3, cos: number, sin: number): Vec3 => ({
      x: v.x * cos + v.z * sin,
      y: v.y,
      z: -v.x * sin + v.z * cos,
    });

    /** Pinta la esfera texturizada en el buffer offscreen (rotación `angle`). */
    const paintSphere = (angle: number) => {
      if (!sphereImg || !mapData) return;
      const D = SPHERE_BUF;
      const buf = sphereImg.data;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const half = D / 2;
      for (let j = 0; j < D; j++) {
        const ny = (j + 0.5) / half - 1; // -1..1 (pantalla, hacia abajo)
        const sy = -ny; // mundo: Y hacia arriba
        for (let i = 0; i < D; i++) {
          const nx = (i + 0.5) / half - 1;
          const d2 = nx * nx + ny * ny;
          const o = (j * D + i) * 4;
          if (d2 > 1) {
            buf[o + 3] = 0; // fuera del disco → transparente
            continue;
          }
          const nz = Math.sqrt(1 - d2); // hacia el observador (+z)
          // Des-rotación Ry(-angle) del punto visible (nx, sy, nz).
          const wx = nx * cosA - nz * sinA;
          const wz = nx * sinA + nz * cosA;
          const lat = Math.asin(sy);
          const lon = Math.atan2(wx, wz);
          // Muestra del mapa equirectangular.
          let mx = (((lon + Math.PI) / (2 * Math.PI)) * mapW) | 0;
          let my = (((Math.PI / 2 - lat) / Math.PI) * mapH) | 0;
          if (mx < 0) mx = 0;
          else if (mx >= mapW) mx = mapW - 1;
          if (my < 0) my = 0;
          else if (my >= mapH) my = mapH - 1;
          const mo = (my * mapW + mx) * 4;
          const ma = mapData[mo + 3];
          const mr = mapData[mo];
          const mg = mapData[mo + 1];
          const mb = mapData[mo + 2];
          const isLand = ma > 60 && mb > 90 && mg > 80 && mr < 150;
          const shade = 0.42 + 0.58 * nz; // sombreado por curvatura
          // Suaviza el borde del disco (anti-alias del limbo).
          const edge = d2 > 0.985 ? (1 - d2) / 0.015 : 1;
          if (isLand) {
            buf[o] = CYAN.r * shade;
            buf[o + 1] = CYAN.g * shade;
            buf[o + 2] = Math.min(255, CYAN.b * shade + 22);
            buf[o + 3] = 235 * edge;
          } else {
            buf[o] = OCEAN.r * shade;
            buf[o + 1] = OCEAN.g * shade;
            buf[o + 2] = OCEAN.b * shade;
            buf[o + 3] = 150 * (0.55 + 0.45 * nz) * edge;
          }
        }
      }
      sphereCtx!.putImageData(sphereImg, 0, 0);
    };

    /** Pin de marca (teardrop magenta + glifo blanco). */
    const drawPin = (
      x: number,
      y: number,
      scale: number,
      kind: Pin["kind"],
      alpha: number
    ) => {
      const pr = 9 * scale;
      const headY = y - pr * 1.15;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0.8)`;
      ctx.shadowBlur = 14 * scale;
      ctx.beginPath();
      ctx.arc(x, headY, pr, 0, Math.PI * 2);
      ctx.moveTo(x - pr * 0.6, headY + pr * 0.55);
      ctx.lineTo(x, y);
      ctx.lineTo(x + pr * 0.6, headY + pr * 0.55);
      ctx.closePath();
      const g = ctx.createLinearGradient(x, headY - pr, x, y);
      g.addColorStop(0, "#d56bff");
      g.addColorStop(1, "#a300dc");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#ffffff";
      if (kind === "code") {
        ctx.font = `700 ${pr * 0.95}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("</>", x, headY + pr * 0.05);
      } else if (kind === "dot") {
        ctx.beginPath();
        ctx.arc(x, headY, pr * 0.36, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.lineWidth = pr * 0.16;
        ctx.beginPath();
        ctx.arc(x, headY, pr * 0.46, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, headY - pr * 0.46);
        ctx.lineTo(x, headY + pr * 0.46);
        ctx.moveTo(x - pr * 0.46, headY);
        ctx.lineTo(x + pr * 0.46, headY);
        ctx.stroke();
      }
      ctx.restore();
    };

    /** Polilínea de un círculo de la esfera (meridiano/paralelo) — solo frente. */
    const drawArc = (
      sample: (t: number) => Vec3,
      cos: number,
      sin: number,
      cx: number,
      cy: number,
      radius: number
    ) => {
      ctx.beginPath();
      let drawing = false;
      for (let t = 0; t <= 1.0001; t += 1 / 96) {
        const p = project(rotateY(sample(t), cos, sin), cx, cy, radius);
        if (p.z > 0) {
          if (drawing) ctx.lineTo(p.sx, p.sy);
          else {
            ctx.moveTo(p.sx, p.sy);
            drawing = true;
          }
        } else drawing = false;
      }
      ctx.stroke();
    };

    const render = (angle: number, time: number) => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // 1) Esfera con el mapa texturizado (buffer offscreen escalado).
      if (mapData) {
        paintSphere(angle);
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(
          sphere,
          cx - radius,
          cy - radius,
          radius * 2,
          radius * 2
        );
      } else {
        // Fallback: esfera sombreada lisa.
        const grad = ctx.createRadialGradient(
          cx - radius * 0.3,
          cy - radius * 0.3,
          radius * 0.2,
          cx,
          cy,
          radius
        );
        grad.addColorStop(0, "rgba(48,176,224,0.5)");
        grad.addColorStop(1, "rgba(8,30,60,0.5)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2) Grid de globo (paralelos + meridianos) tenue, sobre la textura.
      ctx.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, 0.12)`;
      ctx.lineWidth = 0.7;
      for (const latDeg of [-60, -30, 0, 30, 60])
        drawArc((t) => toVec3(latDeg, t * 360), cos, sin, cx, cy, radius);
      for (const lonDeg of [0, 30, 60, 90, 120, 150])
        drawArc((t) => toVec3(t * 360 - 180, lonDeg), cos, sin, cx, cy, radius);

      // 3) Halo atmosférico (cyan interior, acento morado en el borde).
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.9,
        cx,
        cy,
        radius * 1.16
      );
      glow.addColorStop(0, "rgba(0,0,0,0)");
      glow.addColorStop(0.65, `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, 0.06)`);
      glow.addColorStop(1, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0.18)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.16, 0, Math.PI * 2);
      ctx.fill();

      // 4) Pines de marca: anclados a la superficie, solo de frente, con pulso.
      PINS.forEach((pin, i) => {
        const r3 = rotateY(toVec3(pin.lat, pin.lon), cos, sin);
        if (r3.z <= 0.06) return;
        const p = project(r3, cx, cy, radius);
        const pulse = 1 + 0.07 * Math.sin(time * 2.2 + i * 1.7);
        const scale = (0.78 + r3.z * 0.32) * pulse;
        const alpha = Math.min(1, (r3.z - 0.06) * 4);
        drawPin(p.sx, p.sy, scale, pin.kind, alpha);
      });
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = () => {
      if (cancelled) return;
      resize();
      if (reduceMotion) {
        render(STATIC_ANGLE, 0);
        return;
      }
      const t0 = performance.now();
      let last = t0;
      let angle = 0;
      const loop = (now: number) => {
        angle += ((now - last) / 1000) * ROTATION_SPEED;
        last = now;
        render(angle, (now - t0) / 1000);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    };

    // Muestrea la textura del mapa (mismo origen → sin taint).
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      try {
        const tw = Math.min(img.width, TEX_MAX_W);
        const th = Math.max(1, Math.round((tw * img.height) / img.width));
        const off = document.createElement("canvas");
        off.width = tw;
        off.height = th;
        const octx = off.getContext("2d");
        if (!octx) throw new Error("no offscreen ctx");
        octx.drawImage(img, 0, 0, tw, th);
        mapData = octx.getImageData(0, 0, tw, th).data;
        mapW = tw;
        mapH = th;
      } catch {
        mapData = null; // usará el fallback sombreado
      }
      start();
    };
    img.onerror = () => {
      if (cancelled) return;
      mapData = null;
      start();
    };
    img.src = MAP_SRC;

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) render(STATIC_ANGLE, 0);
    });
    observer.observe(canvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`animate-globe-float relative aspect-square w-full ${
        className ?? "max-w-lg"
      }`}
    >
      {/* Glow de marca tenue (cyan + morado) detrás del globo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[14%] -z-10 rounded-full bg-cyan/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[24%] -z-10 rounded-full bg-accent/10 blur-2xl"
      />
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Globo terráqueo animado con la presencia global de Imuko"
        className="h-full w-full"
      />
    </div>
  );
}

export default HeroGlobe;
