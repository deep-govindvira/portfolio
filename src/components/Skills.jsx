import React, { useState, useMemo } from "react";
import { TechIcon } from "./TechIcons";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  WrenchIcon,
  SparklesIcon,
  SearchIcon,
  XIcon,
} from "./Icons";

export const Skills = ({ data }) => {
  const { skillCategories } = data;
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return skillCategories;

    return skillCategories
      .map((cat) => {
        const matchingSkills = cat.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(query) ||
            (skill.tag && skill.tag.toLowerCase().includes(query))
        );

        const categoryMatches = cat.category.toLowerCase().includes(query);
        const finalSkills = categoryMatches ? cat.skills : matchingSkills;

        return {
          ...cat,
          skills: finalSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, searchQuery]);

  const totalMatchingSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
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

        {/* Search Skill Input Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400 transition">
              <SearchIcon className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Java, Python, AWS, Kafka...)"
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/40 transition shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition"
                aria-label="Clear search"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center text-xs text-slate-400 mt-2">
              Found <span className="text-emerald-400 font-semibold">{totalMatchingSkills}</span> matching {totalMatchingSkills === 1 ? "technology" : "technologies"}
            </p>
          )}
        </div>

        {/* Simplified Cards Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredCategories.map((category, index) => (
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
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/30 border border-slate-800/60 max-w-md mx-auto">
            <p className="text-sm text-slate-300 mb-2">
              No skills found matching "<span className="text-emerald-400 font-semibold">{searchQuery}</span>"
            </p>
            <p className="text-xs text-slate-500 mb-4">
              Try searching for Java, AWS, React, MySQL, Docker, or Kafka
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs font-medium px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
