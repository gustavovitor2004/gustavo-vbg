"use client";

import { useEffect, useRef } from "react";

const PHI = 0.618033988749895;

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const isLight = () =>
      document.documentElement.getAttribute("data-theme") === "light";

    const draw = () => {
      frame++;
      const { width, height } = canvas;
      const cx = width * 0.5;
      const cy = height * 0.44;
      const R = Math.min(width, height) * 0.5;
      const t = frame * 0.0006; // very slow rotation
      const light = isLight();

      ctx.clearRect(0, 0, width, height);

      // 1 — Background fill
      ctx.fillStyle = light ? "#f0fdf4" : "#030610";
      ctx.fillRect(0, 0, width, height);

      // 2 — Outer haze / nebula bleed  (light: emerald-cyan triad)
      const haze = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.6);
      if (light) {
        haze.addColorStop(0, "rgba(16,185,129,0.09)");
        haze.addColorStop(0.5, "rgba(6,182,212,0.06)");
        haze.addColorStop(1, "rgba(240,253,244,0.0)");
      } else {
        haze.addColorStop(0, "rgba(8,20,80,0.0)");
        haze.addColorStop(0.5, "rgba(6,15,60,0.25)");
        haze.addColorStop(1, "rgba(3,6,16,0.0)");
      }
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, width, height);

      // 3 — Swirling galaxy bands (rotating arcs)
      ctx.save();
      ctx.translate(cx, cy);

      const BANDS = 14;
      for (let i = 0; i < BANDS; i++) {
        const pct = i / BANDS;
        const r = R * (0.06 + pct * 0.9);
        const speed = 1 + (1 - pct) * 1.8;
        const offset = (i % 2 === 0 ? 1 : -1) * t * speed + i * 0.55;
        const arcLen = Math.PI * (1.2 + pct * 0.6);
        const baseAlpha = pct < 0.15 ? 0.22 : pct > 0.75 ? 0.18 * (1 - (pct - 0.75) / 0.25) : 0.2 - pct * 0.08;
        // light: boost to 0.62× so orbital rings are clearly visible
        const alpha = light ? baseAlpha * 0.62 : baseAlpha;

        const bVal = Math.floor(180 - pct * 80);
        const gVal = Math.floor(110 - pct * 60);
        // light: alternate emerald / cyan bands; dark: keep original deep-blue
        const bandColor = light
          ? (i % 2 === 0 ? `rgba(16,185,129,${alpha})` : `rgba(6,182,212,${alpha})`)
          : `rgba(55,${gVal},${bVal},${alpha})`;

        ctx.beginPath();
        ctx.arc(0, 0, r, offset, offset + arcLen);
        ctx.strokeStyle = bandColor;
        ctx.lineWidth = R * 0.075 * (1 - pct * 0.45);
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.restore();

      // 4 — Core glow
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.38);
      if (light) {
        // Emerald-teal core glow for the green triad
        core.addColorStop(0, "rgba(52,211,153,0.38)");
        core.addColorStop(0.12, "rgba(16,185,129,0.20)");
        core.addColorStop(0.35, "rgba(6,182,212,0.09)");
        core.addColorStop(1, "rgba(240,253,244,0)");
      } else {
        core.addColorStop(0, "rgba(220,240,255,0.95)");
        core.addColorStop(0.04, "rgba(160,210,255,0.85)");
        core.addColorStop(0.12, "rgba(80,160,255,0.55)");
        core.addColorStop(0.28, "rgba(40,100,220,0.22)");
        core.addColorStop(0.55, "rgba(20,60,160,0.08)");
        core.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.38, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();

      // 5 — Stars (deterministic golden-ratio placement)
      const starCount = Math.min(Math.floor((width * height) / 4000), 200);
      for (let i = 0; i < starCount; i++) {
        const sx = ((i * PHI) % 1) * width;
        const sy = ((i * (1 - PHI)) % 1) * height;
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(frame * 0.012 * ((i % 14) * 0.07 + 0.4) + i));
        const sr = i % 28 === 0 ? 1.8 : i % 9 === 0 ? 1.1 : 0.55;
        const sa = (light ? 0.06 : 0.2 + (i % 11) * 0.065) * twinkle;
        const starRgb = light ? "16,185,129" : "200,215,255";

        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb},${sa})`;
        ctx.fill();

        if (sr > 1 && !light) {
          const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr * 5);
          sg.addColorStop(0, `rgba(200,215,255,${sa * 0.5})`);
          sg.addColorStop(1, "rgba(200,215,255,0)");
          ctx.beginPath();
          ctx.arc(sx, sy, sr * 5, 0, Math.PI * 2);
          ctx.fillStyle = sg;
          ctx.fill();
        }
      }

      // 6 — Shooting star (every ~5 s) — dark mode only
      if (!light) {
        const shootCycle = Math.floor(frame / 300);
        const shootProgress = (frame % 300) / 300;
        if (shootProgress < 0.18) {
          const sx0 = ((shootCycle * PHI * 3) % 0.7) * width;
          const sy0 = ((shootCycle * PHI * 2) % 0.3) * height;
          const angle = 0.38;
          const dist = width * 0.22 * (shootProgress / 0.18);
          const ex = sx0 + dist * Math.cos(angle);
          const ey = sy0 + dist * Math.sin(angle);
          const fadeAlpha = shootProgress < 0.1 ? 1 : 1 - (shootProgress - 0.1) / 0.08;
          const trail = ctx.createLinearGradient(ex, ey, sx0, sy0);
          trail.addColorStop(0, `rgba(255,255,255,${fadeAlpha})`);
          trail.addColorStop(0.5, `rgba(180,200,255,${fadeAlpha * 0.4})`);
          trail.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.moveTo(ex, ey);
          ctx.lineTo(sx0, sy0);
          ctx.strokeStyle = trail;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // 7 — Vignette
      const vignette = ctx.createRadialGradient(cx, cy, R * 0.35, cx, cy, Math.max(width, height) * 0.82);
      if (light) {
        // Green-tinted vignette — matches the emerald hero-bg
        vignette.addColorStop(0, "rgba(240,253,244,0)");
        vignette.addColorStop(0.55, "rgba(240,253,244,0.35)");
        vignette.addColorStop(1, "rgba(236,253,245,0.85)");
      } else {
        vignette.addColorStop(0, "rgba(3,6,16,0)");
        vignette.addColorStop(0.45, "rgba(3,6,16,0.55)");
        vignette.addColorStop(1, "rgba(3,6,16,0.97)");
      }
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      rafId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
      }}
    />
  );
}
