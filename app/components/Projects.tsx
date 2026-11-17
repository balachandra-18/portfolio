import React from "react";
import ProjectCard, { ProjectItem } from "./ProjectCard";

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: "aurastream",
      title: "AuraStream Studio",
      description: "Interactive neural music synthesizer and 3D spatial audio-reactive visualizer built with Web Audio API and custom WebGL shaders.",
      tech: ["TypeScript", "Three.js", "WebAudio", "Tailwind CSS"],
      githubUrl: "https://github.com/balachandra-18/aurastream-studio",
      category: "Spatial Audio & AI",
      gradient: "bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-500",
      badgeClass: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/25",
      glowColor: "rgba(168, 85, 247, 0.25)",
      mockupType: "audio",
    },
    {
      id: "neonpulse",
      title: "NeonPulse Network",
      description: "High-throughput zero-knowledge telemetry pipeline and decentralized peer-to-peer data stream engine with live consensus telemetry.",
      tech: ["Rust", "Wasm", "Next.js", "GraphQL"],
      githubUrl: "https://github.com/balachandra-18/neonpulse-network",
      category: "Web3 & Distributed Systems",
      gradient: "bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-500",
      badgeClass: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/25",
      glowColor: "rgba(6, 182, 212, 0.25)",
      mockupType: "network",
    },
    {
      id: "omnicanvas",
      title: "OmniCanvas Vision",
      description: "Real-time edge-detected multi-layer collaborative infinite canvas featuring generative neural style transfer and SVG vector compilation.",
      tech: ["Python", "FastAPI", "React", "Canvas API"],
      githubUrl: "https://github.com/balachandra-18/omnicanvas-vision",
      category: "Computer Vision & Creative Tools",
      gradient: "bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-600",
      badgeClass: "bg-orange-500/15 text-orange-600 dark:text-orange-300 border border-orange-500/25",
      glowColor: "rgba(249, 115, 22, 0.25)",
      mockupType: "canvas",
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 max-w-5xl mx-auto" suppressHydrationWarning>
      <div className="mb-8" suppressHydrationWarning>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-chip text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span>Innovations & Experiments</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
          Featured Engineering Projects
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1.5 max-w-2xl leading-relaxed">
          Explorations across spatial audio computing, decentralized distributed systems, and real-time computer vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" suppressHydrationWarning>
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}
