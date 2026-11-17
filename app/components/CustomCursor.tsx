"use client";

import React, { useEffect, useState, useRef } from "react";

type CursorMode = "default" | "pointer" | "view" | "hidden";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isDown, setIsDown] = useState(false);
  const [visible, setVisible] = useState(false);

  // High performance coordinates tracking
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const glow = useRef({ x: -400, y: -400 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Accessibility & Device Checks: Only run on fine pointer devices (desktops)
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setIsDown(true);
    const onMouseUp = () => setIsDown(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text inputs & textareas -> switch cleanly to native text cursor
      if (target.closest("input, textarea, [contenteditable='true'], select")) {
        setMode("hidden");
        return;
      }

      // Project showcase cards or media with [data-cursor="view"]
      if (target.closest('[data-cursor="view"]')) {
        setMode("view");
        return;
      }

      // Interactive clickable elements
      if (
        target.closest(
          'a, button, [role="button"], [data-cursor="pointer"], .cursor-pointer'
        )
      ) {
        setMode("pointer");
        return;
      }

      setMode("default");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    // 2. High performance spring physics loop using requestAnimationFrame + Lerp
    const render = () => {
      const targetX = mouse.current.x;
      const targetY = mouse.current.y;

      // Trailing spring for outer ring with natural damping (0.22)
      ring.current.x += (targetX - ring.current.x) * 0.22;
      ring.current.y += (targetY - ring.current.y) * 0.22;

      // Soft ambient lag for background spotlight glow (0.07)
      glow.current.x += (targetX - glow.current.x) * 0.07;
      glow.current.y += (targetY - glow.current.y) * 0.07;

      // Dot: Instant positioning at exact mouse point
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // Ring / Pill: Follows with spring physics
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Background Spotlight Glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.current.x}px, ${glow.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Ambient Background Spotlight (400px soft radial glow at ~5% to 10% opacity) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full -z-10 transition-opacity duration-700 ease-out"
        style={{
          opacity: visible ? 0.45 : 0,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(168, 85, 247, 0.18) 35%, rgba(244, 63, 94, 0.08) 60%, transparent 75%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />

      {/* 2. Primary Center Dot (8px) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-[opacity,transform,width,height] duration-150 ease-out ${
          !visible || mode === "hidden" || mode === "view"
            ? "opacity-0 scale-0"
            : "opacity-100 scale-100"
        } ${
          mode === "pointer"
            ? "w-2.5 h-2.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]"
            : "w-2 h-2 bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
        }`}
        style={{
          mixBlendMode: mode === "pointer" ? "normal" : "difference",
          willChange: "transform",
        }}
      />

      {/* 3. Trailing Outer Ring / Glassmorphic "View" Pill Badge */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center font-medium transition-[width,height,opacity,background-color,border-color,box-shadow,transform,border-radius,padding] duration-250 ease-out ${
          !visible || mode === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${isDown ? "scale-[0.82]" : "scale-100"}`}
        style={{ willChange: "transform" }}
      >
        {/* Default State: 36px subtle translucent ring with mix-blend-mode: difference */}
        {mode === "default" && (
          <div
            className="w-9 h-9 rounded-full border-[1.5px] border-white/80 transition-all duration-200"
            style={{ mixBlendMode: "difference" }}
          />
        )}

        {/* Interactive Pointer State: 56px expanded ring with soft glass tint */}
        {mode === "pointer" && (
          <div className="w-14 h-14 rounded-full border-[1.5px] border-blue-500/80 dark:border-blue-400/90 bg-blue-500/15 backdrop-blur-[3px] shadow-[0_0_20px_rgba(59,130,246,0.35)] animate-pulse duration-1000" />
        )}

        {/* Project Showcase State: Glassmorphic "Explore ↗" Pill Badge */}
        {mode === "view" && (
          <div className="px-3.5 py-1.5 rounded-full bg-neutral-900/85 dark:bg-white/90 text-white dark:text-neutral-950 backdrop-blur-xl border border-white/20 dark:border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)] flex items-center gap-1.5 text-xs font-bold tracking-wide animate-scale-in">
            <span>Explore</span>
            <span className="text-blue-400 dark:text-blue-600 font-extrabold text-sm">↗</span>
          </div>
        )}
      </div>
    </>
  );
}
