"use client";

import React, { useRef } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  category: string;
  gradient: string;
  badgeClass: string;
  glowColor: string;
  mockupType: "audio" | "network" | "canvas";
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      data-cursor="view"
      className="relative flex flex-col justify-between p-6 rounded-3xl glass-panel glass-panel-hover group overflow-hidden"
      suppressHydrationWarning
    >
      {/* Interactive Cursor Spotlight Glow across Card Surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.glowColor}, transparent 70%)`,
        }}
      />

      {/* Glass Top-Edge Shimmer Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity"
      />

      <div className="relative z-10" suppressHydrationWarning>
        {/* Mockup Graphic Header */}
        <div
          className={`w-full h-44 rounded-2xl ${project.gradient} mb-5 flex items-center justify-center p-4 relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300`}
        >
          {/* Subtle noise and light shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/20 opacity-70" />

          {/* Frosted Glass Floating Miniature App Window */}
          <div className="w-[88%] h-[84%] rounded-xl bg-white/25 dark:bg-black/30 backdrop-blur-xl border border-white/40 dark:border-white/20 p-3.5 flex flex-col justify-between shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm" />
              </div>
              <div className="w-16 h-2 rounded-full bg-white/30" />
            </div>

            {/* Mockup Dynamic Content */}
            {project.mockupType === "audio" && (
              <div className="space-y-2 my-auto">
                {/* Audio Waveform Bars */}
                <div className="flex items-end justify-center gap-1.5 h-12 pt-2">
                  {[40, 75, 55, 95, 60, 85, 45, 90, 70, 100, 65, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-white/90 animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${(i % 5) * 150}ms`,
                        animationDuration: "1.2s",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center px-1">
                  <div className="w-1/3 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1/4 h-1.5 rounded-full bg-white/30" />
                </div>
              </div>
            )}

            {project.mockupType === "network" && (
              <div className="my-auto space-y-2">
                {/* Distributed Mesh Graph */}
                <div className="relative h-12 flex items-center justify-around px-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] animate-ping opacity-75" />
                  <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] flex items-center justify-center text-[8px] font-bold text-black">
                    ZK
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-teal-300 shadow-[0_0_8px_#5eead4]" />
                  <div className="w-4 h-4 rounded-full bg-blue-300 shadow-[0_0_10px_#93c5fd]" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-2 rounded bg-white/30" />
                  <div className="h-2 rounded bg-white/40" />
                  <div className="h-2 rounded bg-white/30" />
                </div>
              </div>
            )}

            {project.mockupType === "canvas" && (
              <div className="my-auto space-y-2">
                {/* Generative Canvas Vector UI */}
                <div className="h-12 rounded-lg bg-white/20 border border-white/20 p-1.5 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 shadow-md animate-spin duration-[12000ms]" />
                  <div className="space-y-1 flex-1 ml-2">
                    <div className="w-4/5 h-2 rounded-full bg-white/60" />
                    <div className="w-1/2 h-1.5 rounded-full bg-white/40" />
                  </div>
                </div>
                <div className="flex gap-1 justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
              </div>
            )}

            <div className="flex justify-between items-center text-[9px] text-white/80 font-mono">
              <span>ACTIVE</span>
              <span>v2.4.0</span>
            </div>
          </div>
        </div>

        {/* Category Pill with Neon Accent Color */}
        <div className="inline-flex items-center gap-1.5 mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${project.badgeClass}`}>
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div
        className="relative z-10 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap"
        suppressHydrationWarning
      >
        <div className="flex flex-wrap gap-1.5" suppressHydrationWarning>
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium glass-chip text-neutral-700 dark:text-neutral-300"
              suppressHydrationWarning
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-1 px-2.5 rounded-full hover:bg-blue-500/10"
        >
          <span>GitHub</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
