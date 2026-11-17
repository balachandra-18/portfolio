"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CursorEffect() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isTextInput, setIsTextInput] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -200, y: -200 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on devices with a mouse/trackpad
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (hidden) setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // When over form inputs or textareas, hide the custom cursor so native text caret shows cleanly
      if (target.closest("input, textarea, [contenteditable='true']")) {
        setIsTextInput(true);
        setHovered(false);
        return;
      }
      setIsTextInput(false);

      // Over clickable elements, expand the magnetic glass ring
      if (target.closest("a, button, [role='button'], .glass-panel-hover, .glass-chip, .cursor-pointer")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth 60fps / 120fps physics loop with spring easing
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Trailing spring for cursor ring (silky smooth)
      ringPos.current.x += (targetX - ringPos.current.x) * 0.22;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.22;

      // Soft ambient lag for background glass refraction light
      glowPos.current.x += (targetX - glowPos.current.x) * 0.08;
      glowPos.current.y += (targetY - glowPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [hidden]);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Ambient Glass Refraction Spotlight (Follows mouse behind frosted glass) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full -z-10 transition-opacity duration-700"
        style={{
          opacity: hidden ? 0 : 0.45,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(168, 85, 247, 0.24) 35%, rgba(244, 63, 94, 0.12) 60%, transparent 75%)",
          filter: "blur(75px)",
          willChange: "transform",
        }}
      />

      {/* 2. Sleek Custom Cursor Dot (Centered) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-[opacity,transform,background-color] duration-150 ${
          hidden || isTextInput ? "opacity-0" : "opacity-100"
        } ${
          hovered
            ? "w-1.5 h-1.5 bg-blue-400 shadow-[0_0_10px_#60a5fa]"
            : "w-2 h-2 bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* 3. Trailing Apple Vision Pro / Glass Cursor Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full transition-[width,height,opacity,border-color,background-color,box-shadow] duration-200 ease-out ${
          hidden || isTextInput ? "opacity-0" : "opacity-100"
        } ${
          hovered
            ? "w-12 h-12 border border-blue-500/70 dark:border-blue-400/80 bg-blue-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-110"
            : clicked
            ? "w-6 h-6 border-2 border-blue-600 bg-blue-500/20 scale-90"
            : "w-9 h-9 border border-neutral-400/40 dark:border-white/30 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
