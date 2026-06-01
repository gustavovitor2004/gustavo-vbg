"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  r: number;
  g: number;
  b: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  trail: number;
}

const STAR_PALETTE = [
  { r: 255, g: 255, b: 255 },
  { r: 224, g: 231, b: 255 },
  { r: 196, g: 181, b: 253 },
  { r: 165, g: 243, b: 252 },
  { r: 191, g: 219, b: 254 },
];

// Deterministic position using golden-ratio spiral — no Math.random in init
function buildStars(width: number, height: number): Star[] {
  const density = (width * height) / 4500;
  const count = Math.min(Math.floor(density), 180);
  const phi = 0.618033988749895;
  return Array.from({ length: count }, (_, i) => {
    const col = STAR_PALETTE[(i * 7) % STAR_PALETTE.length];
    const sizeClass = i % 25 === 0 ? 2.4 : i % 8 === 0 ? 1.6 : 0.75;
    return {
      x: ((i * phi) % 1) * width,
      y: ((i * (1 - phi)) % 1) * height,
      size: sizeClass,
      alpha: 0.25 + (i % 12) * 0.06,
      twinkleSpeed: 0.006 + (i % 18) * 0.002,
      twinkleOffset: (i * phi * 6.283) % 6.283,
      ...col,
    };
  });
}

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let stars: Star[] = [];
    let shooters: ShootingStar[] = [];
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = buildStars(canvas.width, canvas.height);
    };

    const spawnShooter = () => {
      const angle = 0.35; // ~20° diagonal
      const speed = 9 + Math.sin(frame * 0.1) * 3;
      shooters.push({
        x: Math.abs(Math.sin(frame * 0.037)) * canvas.width * 0.8,
        y: Math.abs(Math.cos(frame * 0.053)) * canvas.height * 0.35,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        trail: 90 + (frame % 60),
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Spawn shooting star every ~5 seconds
      if (frame % 300 === 150 && shooters.length < 2) spawnShooter();

      // Shooting stars
      shooters = shooters.filter((s) => s.alpha > 0.04);
      for (const s of shooters) {
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (s.trail / 9), s.y - s.vy * (s.trail / 9));
        grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        grad.addColorStop(0.4, `rgba(196,181,253,${s.alpha * 0.5})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.trail / 9), s.y - s.vy * (s.trail / 9));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.012;
      }

      // Stars
      const t = frame * 0.016;
      for (const star of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t * (star.twinkleSpeed / 0.016) + star.twinkleOffset);
        const a = star.alpha * (0.35 + 0.65 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 6.283);
        ctx.fillStyle = `rgba(${star.r},${star.g},${star.b},${a})`;
        ctx.fill();

        if (star.size > 1.4) {
          const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 6);
          glow.addColorStop(0, `rgba(${star.r},${star.g},${star.b},${a * 0.45})`);
          glow.addColorStop(1, `rgba(${star.r},${star.g},${star.b},0)`);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 6, 0, 6.283);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

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
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
