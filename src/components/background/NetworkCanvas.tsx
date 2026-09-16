"use client";

import { useEffect, useRef } from "react";
import { mulberry32 } from "@/lib/utils";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  light: boolean;
  phase: number;
};

function nodeCountFor(width: number) {
  if (width < 640) return 14;
  if (width < 1024) return 24;
  return 36;
}

function createNodes(width: number, height: number, seed: number): Node[] {
  const rand = mulberry32(seed);
  const count = nodeCountFor(width);
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    nodes.push({
      x: rand() * width,
      y: rand() * height,
      vx: (rand() - 0.5) * 0.12,
      vy: (rand() - 0.5) * 0.12,
      r: 1 + rand() * 1.4,
      light: rand() < 0.16,
      phase: rand() * Math.PI * 2,
    });
  }

  return nodes;
}

const MAX_DIST = 150;

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let nodes = createNodes(width, height, 1337);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(width, height, 1337);
    }

    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    }
    window.addEventListener("resize", onResize);

    function onPointerMove(e: PointerEvent) {
      mouse.targetX = (e.clientX / width - 0.5) * 2;
      mouse.targetY = (e.clientY / height - 0.5) * 2;
    }
    if (!isCoarsePointer && !reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let raf = 0;
    let t = 0;

    function draw() {
      if (!ctx) return;
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const offsetX = mouse.x * 10;
      const offsetY = mouse.y * 8;

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.16;
            const isAccent = a.light || b.light;
            ctx.strokeStyle = isAccent
              ? `rgba(37, 99, 235, ${alpha * 1.4})`
              : `rgba(100, 116, 139, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + offsetX, a.y + offsetY);
            ctx.lineTo(b.x + offsetX, b.y + offsetY);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const twinkle = reduceMotion
          ? 0.8
          : 0.65 + 0.35 * Math.sin(t * 0.6 + n.phase);
        const x = n.x + offsetX;
        const y = n.y + offsetY;

        if (n.light) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
          glow.addColorStop(0, `rgba(37, 99, 235, ${0.16 * twinkle})`);
          glow.addColorStop(1, "rgba(37, 99, 235, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 14, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = n.light
          ? `rgba(37, 99, 235, ${0.55 * twinkle})`
          : `rgba(100, 116, 139, ${0.4 * twinkle})`;
        ctx.beginPath();
        ctx.arc(x, y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.016;

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  );
}
