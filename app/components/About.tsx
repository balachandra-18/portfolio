import React from "react";

export default function About() {
  const skillGroups = [
    {
      category: "Core Web & Languages",
      badgeColor: "text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
      items: [
        { name: "TypeScript", color: "hover:border-blue-500/50 hover:text-blue-500" },
        { name: "JavaScript", color: "hover:border-amber-500/50 hover:text-amber-500" },
        { name: "Python", color: "hover:border-emerald-500/50 hover:text-emerald-500" },
        { name: "HTML5 / CSS3", color: "hover:border-orange-500/50 hover:text-orange-500" },
        { name: "C / C++", color: "hover:border-cyan-500/50 hover:text-cyan-500" },
      ],
    },
    {
      category: "Frameworks & UI Architecture",
      badgeColor: "text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
      items: [
        { name: "React 19", color: "hover:border-cyan-400/50 hover:text-cyan-400" },
        { name: "Next.js (App Router)", color: "hover:border-white/50 hover:text-white" },
        { name: "Tailwind CSS", color: "hover:border-sky-400/50 hover:text-sky-400" },
        { name: "Node.js", color: "hover:border-green-500/50 hover:text-green-500" },
        { name: "FastAPI", color: "hover:border-teal-400/50 hover:text-teal-400" },
      ],
    },
    {
      category: "Engineering & Cloud Platforms",
      badgeColor: "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      items: [
        { name: "Git & GitHub", color: "hover:border-purple-400/50 hover:text-purple-400" },
        { name: "Linux / POSIX", color: "hover:border-amber-400/50 hover:text-amber-400" },
        { name: "Vercel Deployments", color: "hover:border-blue-400/50 hover:text-blue-400" },
        { name: "WebSockets & Web Audio", color: "hover:border-rose-400/50 hover:text-rose-400" },
        { name: "VS Code & Neovim", color: "hover:border-indigo-400/50 hover:text-indigo-400" },
      ],
    },
  ];

  return (
    <section id="about" className="py-12 px-4 max-w-5xl mx-auto" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6" suppressHydrationWarning>
        {/* Bio Card */}
        <div className="md:col-span-6 p-8 rounded-3xl glass-panel flex flex-col justify-between relative overflow-hidden" suppressHydrationWarning>
          {/* Subtle Top-edge colorful reflection */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60" />

          <div suppressHydrationWarning>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Background & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              About Me
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              I am a Computer Science & Engineering student at <strong className="text-neutral-900 dark:text-white font-semibold">Bangalore Institute of Technology (BIT)</strong> passionate about systems architecture, responsive web engineering, and intuitive visual computing.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              My core drive is crafting fast, resilient, and beautifully designed user experiences with modern full-stack web stacks and low-latency APIs.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-2 gap-4 text-xs" suppressHydrationWarning>
            <div className="p-3.5 rounded-2xl glass-chip" suppressHydrationWarning>
              <span className="block font-bold text-neutral-900 dark:text-white text-base">Bengaluru, IN</span>
              <span className="text-neutral-500 dark:text-neutral-400">Location</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-chip" suppressHydrationWarning>
              <span className="block font-bold text-neutral-900 dark:text-white text-base">BIT (VTU)</span>
              <span className="text-neutral-500 dark:text-neutral-400">College</span>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div id="skills" className="md:col-span-6 p-8 rounded-3xl glass-panel flex flex-col justify-between relative overflow-hidden" suppressHydrationWarning>
          {/* Subtle Top-edge colorful reflection */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 opacity-60" />

          <div suppressHydrationWarning>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Technical Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-6">
              Skills & Expertise
            </h2>

            <div className="space-y-5" suppressHydrationWarning>
              {skillGroups.map((grp) => (
                <div key={grp.category} suppressHydrationWarning>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${grp.badgeColor}`}>
                      {grp.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                    {grp.items.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium glass-chip text-neutral-800 dark:text-neutral-200 transition-all ${skill.color}`}
                        suppressHydrationWarning
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
