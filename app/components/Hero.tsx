import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 max-w-5xl mx-auto flex flex-col items-start gap-6" suppressHydrationWarning>
      {/* Available for Work Glass Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-chip shadow-sm" suppressHydrationWarning>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
          Available for Work & Projects
        </span>
      </div>

      <div className="space-y-3" suppressHydrationWarning>
        <p className="text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          CS Student & Full-Stack Developer
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
          Balachandra S
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
          CS student & full-stack developer building clean web apps.
        </p>
      </div>

      <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
        Computer Science student at Bangalore Institute of Technology (BIT). Passionate about full-stack web engineering, systems programming, and building clean, accessible, and high-performance digital products.
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2" suppressHydrationWarning>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
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
          <span>View Projects</span>
        </Link>
      </div>
    </section>
  );
}
