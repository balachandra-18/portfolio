import React from "react";
import ProjectCard, { ProjectItem } from "./ProjectCard";

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: "cyber-shield",
      title: "Cyber Fraud & UPI Shield",
      description: "Intelligent threat detection and transaction security platform mitigating digital payment fraud in real time.",
      tech: ["Python", "FastAPI", "React", "Next.js"],
      githubUrl: "https://github.com/balachandra-18/cyber-shield",
      category: "Security & FinTech",
      gradient: "bg-gradient-to-tr from-blue-600 to-indigo-600"
    },
    {
      id: "bit-tracker",
      title: "BIT Study Tracker",
      description: "A lightweight, time-blocked academic logbook and deadline management web application for college studies.",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/balachandra-18/app_bit",
      category: "Productivity & EdTech",
      gradient: "bg-gradient-to-tr from-emerald-500 to-teal-600"
    },
    {
      id: "cleanyourtv",
      title: "CleanYourTV Launcher",
      description: "Minimalist, high-performance custom Android TV launcher and debloater designed for streamlined navigation.",
      tech: ["Kotlin", "Android SDK", "Shell", "ADB"],
      githubUrl: "https://github.com/balachandra-18/cleanyourtv",
      category: "Systems & Tooling",
      gradient: "bg-gradient-to-tr from-orange-500 to-rose-600"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Selected Works
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
          Featured Projects
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          A showcase of engineering and open-source software I have built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}
