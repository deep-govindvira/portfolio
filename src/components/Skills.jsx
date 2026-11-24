import React, { useState } from "react";
import { TechIcon } from "./TechIcons";
import { CodeIcon, ServerIcon, DatabaseIcon, WrenchIcon, SparklesIcon } from "./Icons";

export const Skills = ({ data }) => {
  const { skillCategories } = data;
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    ...skillCategories.map((c) => c.shortLabel || c.category),
  ];

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

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === "All") return true;
    return (cat.shortLabel || cat.category) === activeTab;
  });

  return (
    <section id="skills" className="py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Capabilities & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            🚀 Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Core stack across systems programming, backend architecture, distributed messaging, databases, and cloud tooling.
          </p>
        </div>

        {/* Filter Buttons — Same tabs UI as used in Software Projects */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition duration-200 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "All"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 max-w-3xl mx-auto"
          }`}
        >
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="group bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/80 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Visual Header Banner */}
                <div
                  className={`h-3 bg-gradient-to-r ${category.badgeGradient} transition-all duration-300 group-hover:h-3.5`}
                />

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                          {category.category}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 whitespace-nowrap">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center justify-between p-2.5 rounded-xl border bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover/item:text-white transition flex-shrink-0">
                            <TechIcon name={skill.name} className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white truncate">
                            {skill.name}
                          </span>
                        </div>

                        {skill.tag && (
                          <span className="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800/80 whitespace-nowrap ml-2">
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
