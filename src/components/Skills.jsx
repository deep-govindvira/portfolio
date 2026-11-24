import React from "react";
import { TechIcon } from "./TechIcons";
import { CodeIcon, ServerIcon, DatabaseIcon, WrenchIcon, SparklesIcon } from "./Icons";

export const Skills = ({ data }) => {
  const { skillCategories } = data;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Code":
        return <CodeIcon className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <ServerIcon className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <DatabaseIcon className="w-5 h-5 text-purple-400" />;
      case "Wrench":
        return <WrenchIcon className="w-5 h-5 text-amber-400" />;
      default:
        return <SparklesIcon className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
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

        {/* Simplified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:bg-slate-900/60 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.category}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800/50 border border-slate-700/40">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition duration-150"
                  >
                    <TechIcon name={skill.name} className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
