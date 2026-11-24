import React from "react";
import { TechIcon } from "./TechIcons";
import { CodeIcon, ServerIcon, DatabaseIcon, WrenchIcon, SparklesIcon } from "./Icons";

export const Skills = ({ data }) => {
  const { skillCategories } = data;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Code":
        return <CodeIcon className="w-6 h-6 text-blue-400" />;
      case "Server":
        return <ServerIcon className="w-6 h-6 text-emerald-400" />;
      case "Database":
        return <DatabaseIcon className="w-6 h-6 text-purple-400" />;
      case "Wrench":
        return <WrenchIcon className="w-6 h-6 text-amber-400" />;
      default:
        return <SparklesIcon className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Capabilities & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            🚀 Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Core stack across systems programming, backend architecture, distributed messaging, databases, and cloud tooling.
          </p>
        </div>

        {/* Cards UI matching Work & Leadership */}
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-slate-900/80 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Category Icon Badge */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 p-2.5 flex items-center justify-center shadow-md">
                    {getCategoryIcon(category.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {category.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>

                    <span className="self-start sm:self-auto text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 whitespace-nowrap">
                      {category.skills.length} Technologies
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200"
                      >
                        <div className="p-1 rounded-md bg-slate-900 border border-slate-800/80 text-slate-400 group-hover:text-white transition">
                          <TechIcon name={skill.name} className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-medium text-slate-400 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800/80">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
