"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark, mounted]);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-3 bg-white/70 dark:bg-[#16161A]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full px-4 py-2 shadow-lg shadow-black/5 transition-all">
        <Link href="#hero" className="flex items-center gap-2 font-bold text-sm tracking-tight text-neutral-900 dark:text-white mr-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-semibold shadow-sm">
            BS
          </span>
          <span>Balachandra S</span>
        </Link>

        <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          <Link href="#about" className="px-3 py-1.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            About
          </Link>
          <Link href="#skills" className="px-3 py-1.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="px-3 py-1.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="px-3 py-1.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Contact
          </Link>
        </div>

        {/* iOS Theme Switch */}
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle Theme"
          className="ml-2 p-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
              <path strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
