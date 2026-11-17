import React from "react";

export default function About() {
  const skills = [
    { category: "Core Web & Languages", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "C / C++"] },
    { category: "Frameworks & Libraries", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "FastAPI"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Linux", "Vercel", "VS Code", "Android SDK"] }
  ];

  return (
    <section id="about" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bio Card */}
        <div className="md:col-span-6 p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Background
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              About Me
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              I am a Computer Science & Engineering student at Bangalore Institute of Technology (BIT) passionate about modern web technologies, systems programming, and performance optimization.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              My engineering philosophy revolves around simplicity, intuitive user interfaces, and clean, resilient codebases. Whether working with low-level systems or crafting interactive web applications, I focus on delivering great user experiences.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <div>
              <span className="block font-bold text-neutral-900 dark:text-white text-base">Bengaluru, IN</span>
              <span>Based in</span>
            </div>
            <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
            <div>
              <span className="block font-bold text-neutral-900 dark:text-white text-base">BIT (VTU)</span>
              <span>College</span>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div id="skills" className="md:col-span-6 p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Technical Stack
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-6">
              Skills & Tools
            </h2>

            <div className="space-y-5">
              {skills.map((grp) => (
                <div key={grp.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                    {grp.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {skill}
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
