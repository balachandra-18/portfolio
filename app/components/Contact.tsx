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
    <section id="contact" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Info Column */}
        <div className="md:col-span-5 p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 flex flex-col justify-between">
          <div>
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

          <div className="space-y-3">
            <Link
              href="mailto:balachandra182008@gmail.com"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-blue-500/30 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
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
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-blue-500/30 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <span>GitHub / balachandra-18</span>
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="https://linkedin.com/in/balachandra-s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-blue-500/30 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <span>LinkedIn / balachandra-s</span>
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Direct Message
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-neutral-500">Fast response guaranteed.</span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                Send Message
              </button>
            </div>

            {status && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-2 animate-fade-in">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
