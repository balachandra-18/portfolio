"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CursorEffect() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const springPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -200, y: -200 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktops/laptops with a mouse/trackpad)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Detect hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest("a, button, input, textarea, [role='button'], .glass-panel, .glass-chip, .cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth animation loop for physics-based cursor trailing
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Trailing spring for cursor ring (fast)
      springPos.current.x += (targetX - springPos.current.x) * 0.28;
      springPos.current.y += (targetY - springPos.current.y) * 0.28;

      // Smooth lag for ambient glass refraction glow (soft & floating)
      glowPos.current.x += (targetX - glowPos.current.x) * 0.08;
      glowPos.current.y += (targetY - glowPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${springPos.current.x - 20}px, ${springPos.current.y - 20}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Ambient Glass Refraction Spotlight (Follows mouse behind frosted glass) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full -z-10 transition-opacity duration-500 opacity-60 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, rgba(168, 85, 247, 0.22) 35%, rgba(244, 63, 94, 0.12) 60%, transparent 75%)",
          filter: "blur(70px)",
          willChange: "transform",
        }}
      />

      {/* 2. Sleek Custom Cursor Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-opacity duration-150"
        style={{ willChange: "transform" }}
      />

      {/* 3. Trailing Interactive Glass Cursor Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-[width,height,border-color,background-color,transform] duration-200 ease-out flex items-center justify-center ${
          hovered
            ? "w-12 h-12 -ml-2 -mt-2 border-blue-500/70 dark:border-blue-400/80 bg-blue-500/10 backdrop-blur-sm shadow-[0_0_16px_rgba(59,130,246,0.25)]"
            : clicked
            ? "w-7 h-7 ml-1 mt-1 border-blue-600 bg-blue-500/20"
            : "w-10 h-10 border-neutral-400/50 dark:border-white/30 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
