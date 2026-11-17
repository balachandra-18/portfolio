"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thanks! Your message has been received.");
    const target = e.target as HTMLFormElement;
    target.reset();
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-5xl mx-auto" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6" suppressHydrationWarning>
        {/* Info Column */}
        <div className="md:col-span-5 p-8 rounded-3xl glass-panel flex flex-col justify-between" suppressHydrationWarning>
          <div suppressHydrationWarning>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Let&apos;s Connect
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-3">
              Have an idea or opportunity?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              I am open to full-time roles, internships, and collaborative software projects. Feel free to reach out directly!
            </p>
          </div>

          <div className="space-y-3" suppressHydrationWarning>
            <Link
              href="mailto:balachandra182008@gmail.com"
              className="flex items-center justify-between p-3.5 rounded-2xl glass-chip text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <span>balachandra182008@gmail.com</span>
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="https://github.com/balachandra-18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl glass-chip text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>github.com/balachandra-18</span>
              </div>
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <Link
              href="https://linkedin.com/in/balachandra-s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl glass-chip text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>linkedin.com/in/balachandra-s</span>
              </div>
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-7 p-8 rounded-3xl glass-panel" suppressHydrationWarning>
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
            Send a Quick Message
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Leave a note below and I will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" suppressHydrationWarning>
              <div suppressHydrationWarning>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Doe"
                  className="glass-input"
                  suppressHydrationWarning
                />
              </div>

              <div suppressHydrationWarning>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="glass-input"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div suppressHydrationWarning>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Hi Balachandra, I saw your projects and would love to connect..."
                className="glass-input resize-none"
                suppressHydrationWarning
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2" suppressHydrationWarning>
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
              >
                Send Message
              </button>
              {status && (
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 animate-fade-in">
                  {status}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
