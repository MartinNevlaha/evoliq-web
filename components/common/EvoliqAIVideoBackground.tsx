"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * EvoliqAIVideoBackground
 * Transparent canvas background with animated AI neural network
 */

export default function EvoliqAIVideoBackground({
  nodeCount = 70,
  connectDistance = 180,
  lineWidth = 1.25,
  nodeRadius = 2.6,
  hue = 185, // turquoise hue
  saturation = 78,
  lightness = 52,
  opacity = 0.9,
  showRecorder = false, // set to true to render a small "Record 10s" button
  showLogo = false, // set to true to show centered Evoliq logo
}: {
  nodeCount?: number;
  connectDistance?: number;
  lineWidth?: number;
  nodeRadius?: number;
  hue?: number;
  saturation?: number;
  lightness?: number;
  opacity?: number; // overall alpha multiplier for lines
  showRecorder?: boolean;
  showLogo?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<BlobPart[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  // Nodes state lives inside effect; we just re-seed on resize
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Seed nodes
    type Node = { x: number; y: number; vx: number; vy: number; pulse: number; pdir: number };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: rand(-0.35, 0.35),
      vy: rand(-0.35, 0.35),
      pulse: Math.random(),
      pdir: Math.random() > 0.5 ? 1 : -1,
    }));

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const lineColor = (alpha: number) => `hsla(${hue} ${saturation}% ${lightness}% / ${clamp(alpha * opacity, 0, 1)})`;
    const nodeColor = `hsl(${hue} ${saturation}% ${lightness}%)`;

    const maxDist2 = connectDistance * connectDistance;

    let lastTime = performance.now();

    const tick = (t: number) => {
      const dt = clamp((t - lastTime) / 16.666, 0.5, 1.5); // normalize to ~60fps, avoid spikes
      lastTime = t;

      ctx.clearRect(0, 0, w, h);

      // Update
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        // gentle wrap (teleport) to keep density uniform
        if (n.x < -50) n.x = w + 50; else if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50; else if (n.y > h + 50) n.y = -50;
        // pulse between 0..1
        n.pulse += (0.015 * n.pdir * dt);
        if (n.pulse > 1) { n.pulse = 1; n.pdir = -1; }
        if (n.pulse < 0) { n.pulse = 0; n.pdir = 1; }
      }

      // Edges
      ctx.lineWidth = lineWidth;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 <= maxDist2) {
            const d = Math.sqrt(d2);
            const alpha = 1 - d / connectDistance; // closer = more opaque
            ctx.strokeStyle = lineColor(alpha * 0.95);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes (with subtle pulsing)
      for (const n of nodes) {
        const r = nodeRadius * (0.8 + 0.4 * n.pulse);
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // schedule next frame only when tab is visible
      if (!document.hidden) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        lastTime = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [nodeCount, connectDistance, lineWidth, nodeRadius, hue, saturation, lightness, opacity]);

  const startRecording = () => {
    if (!canvasRef.current) return;
    if (isRecording) return;

    const stream = canvasRef.current.captureStream(60);
    const mr = new MediaRecorder(stream, { mimeType: "video/webm;codecs=vp9" });
    mediaRecorderRef.current = mr;
    recordedChunksRef.current = [];
    mr.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };
    mr.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "evoliq-background.webm";
      a.click();
      URL.revokeObjectURL(url);
      setIsRecording(false);
    };

    mr.start();
    setIsRecording(true);
    // auto-stop after 10s
    setTimeout(() => {
      mr.stop();
    }, 10_000);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Transparent canvas background */}
      <canvas ref={canvasRef} className="h-full w-full" />

      {/* Centered Evoliq logo (black) - optional */}
      {showLogo && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <LogoEvoliq className="h-28 w-auto md:h-36" />
        </div>
      )}

      {/* Optional small recorder control (set showRecorder=true to enable) */}
      {showRecorder && (
        <div className="pointer-events-auto absolute right-4 top-4 z-10">
          <button
            onClick={startRecording}
            disabled={isRecording}
            className="rounded-xl border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur hover:bg-white/90"
          >
            {isRecording ? "Recording 10s…" : "Record 10s WebM"}
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Evoliq Logo (black) – symbol + wordmark
 * - Symbol: 3 connected nodes within a ring
 * - Word: evoliq (lowercase) – clean geometric sans wordmark
 */
function LogoEvoliq({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-label="Evoliq logo">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ring */}
        <circle cx="32" cy="32" r="29" stroke="#000" strokeWidth="3.2" />
        {/* Nodes */}
        <circle cx="22" cy="22" r="3" fill="#000" />
        <circle cx="42" cy="22" r="3" fill="#000" />
        <circle cx="32" cy="42" r="3" fill="#000" />
        {/* Links */}
        <path d="M22 22 L42 22" stroke="#000" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M22 22 L32 42" stroke="#000" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M42 22 L32 42" stroke="#000" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <svg width="220" height="40" viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg" role="img">
        <title>Evoliq</title>
        <g fill="#000">
          {/* A clean custom wordmark – geometric, rounded ends */}
          <path d="M5 28c0-8.8 6.8-16 15.6-16 5.6 0 9.8 2.2 12.4 6.4l-5.2 3.2c-1.7-2.4-4.2-3.6-7.4-3.6-5.8 0-9.8 4.2-9.8 10s4 10 9.8 10c3.4 0 5.9-1.3 7.6-3.8l5.2 3.2c-2.8 4.3-7 6.6-12.8 6.6C11.8 44 5 36.8 5 28z" transform="translate(0 -8)"/>
          <path d="M54 12c3.2 0 5.7 2.5 5.7 5.6v16.8c0 3.1-2.5 5.6-5.7 5.6H36.3V12H54zm-1.8 5.4H42v17.2h10.2c.6 0 1.1-.5 1.1-1.1V18.5c0-.6-.5-1.1-1.1-1.1z"/>
          <path d="M67.5 12h6.6v27.9h-6.6V12zm3.3-8.2c2.3 0 4 1.8 4 4s-1.7 4-4 4-4-1.8-4-4 1.7-4 4-4z"/>
          <path d="M86 12h6.6v16.8c0 3.7 2.2 5.9 5.9 5.9 3.8 0 6-2.2 6-5.9V12h6.5v17.1c0 7.2-4.9 11.6-12.6 11.6-7.6 0-12.4-4.4-12.4-11.6V12z"/>
          <path d="M131.5 12h6.6v27.9h-6.6V12z"/>
          <path d="M145.6 12h6.9l8.2 18.3 8.3-18.3h6.8l-12.3 27.9h-5.5L145.6 12z"/>
        </g>
      </svg>
    </div>
  );
}
