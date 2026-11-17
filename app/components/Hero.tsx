import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 max-w-5xl mx-auto flex flex-col items-start gap-6" suppressHydrationWarning>
      {/* Available for Work Glass Pill with Glowing Dot */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-chip shadow-sm border border-emerald-500/20" suppressHydrationWarning>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
          Available for Work & Innovative Projects
        </span>
      </div>

      <div className="space-y-3" suppressHydrationWarning>
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          CS Student & Full-Stack Developer
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
          Balachandra{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            S
          </span>
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl font-normal leading-relaxed">
          CS student & full-stack developer building clean, immersive web experiences.
        </p>
      </div>

      <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
        Computer Science student at Bangalore Institute of Technology (BIT). Passionate about full-stack web engineering, distributed systems, spatial computing, and crafting responsive, accessible digital products.
      </p>

      {/* Floating Glass Metric Badges */}
      <div className="flex flex-wrap gap-3 py-1" suppressHydrationWarning>
        <div className="px-3.5 py-2 rounded-2xl glass-panel text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          <span className="font-bold text-neutral-900 dark:text-white">Full-Stack Web</span>
        </div>
        <div className="px-3.5 py-2 rounded-2xl glass-panel text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          <span className="font-bold text-neutral-900 dark:text-white">Systems & Audio</span>
        </div>
        <div className="px-3.5 py-2 rounded-2xl glass-panel text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="font-bold text-neutral-900 dark:text-white">Bengaluru, IN</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2" suppressHydrationWarning>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
        >
          <span>Get in Touch</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-chip hover:bg-white/40 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-semibold text-sm transition-all active:scale-95"
        >
          <span>Explore Projects</span>
        </Link>
      </div>
    </section>
  );
}
