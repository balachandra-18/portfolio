import React from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  category: string;
  gradient: string;
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group">
      <div>
        {/* Mockup Graphic Header */}
        <div className={`w-full h-40 rounded-2xl ${project.gradient} mb-5 flex items-center justify-center p-4 relative overflow-hidden shadow-inner`}>
          <div className="w-4/5 h-4/5 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 p-3 flex flex-col gap-2 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/70" />
              <div className="w-2 h-2 rounded-full bg-white/70" />
              <div className="w-2 h-2 rounded-full bg-white/70" />
            </div>
            <div className="w-1/2 h-1.5 rounded-full bg-white/50" />
            <div className="grid grid-cols-2 gap-2 flex-1 mt-1">
              <div className="rounded-lg bg-white/20" />
              <div className="rounded-lg bg-white/20" />
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {project.category}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
