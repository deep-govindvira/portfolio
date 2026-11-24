import React, { useState } from "react";
import { GitHubIcon, ExternalLinkIcon, SparklesIcon, FileTextIcon, KaggleIcon } from "./Icons";

export const Projects = ({ data }) => {
  const { projects } = data;
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "AI & ML", "Full Stack", "Backend", "Frontend", "Systems"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Notion & GitHub Verified
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            🎯 Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Research-backed machine learning, automated OCR document processing, secure banking REST APIs, cloud suites, and terminal systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/80 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Visual Header Banner */}
                <div
                  className={`h-3 bg-gradient-to-r ${project.gradient} transition-all duration-300 group-hover:h-3.5`}
                />

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                        <SparklesIcon className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <ul className="space-y-1.5 text-xs text-slate-300 bg-slate-950/40 p-4 rounded-xl border border-slate-800/50">
                      {project.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer with Verified Links */}
              <div className="px-6 sm:px-8 py-4 bg-slate-950/60 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                      title="Read Conference Research Paper"
                    >
                      <FileTextIcon className="w-4 h-4" />
                      <span>Paper PDF</span>
                    </a>
                  )}

                  {project.kaggle && (
                    <a
                      href={project.kaggle}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                      title="Kaggle Code"
                    >
                      <KaggleIcon className="w-4 h-4" />
                      <span>Kaggle</span>
                    </a>
                  )}
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                  >
                    <span>Live App</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
