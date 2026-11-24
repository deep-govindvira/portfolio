import React from "react";
import { CalendarIcon, MapPinIcon, ExternalLinkIcon, GitHubIcon } from "./Icons";

export const Experience = ({ data }) => {
  const { experience } = data;

  return (
    <section id="experience" className="py-20 border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            💼 Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Professional software development, university internship engineering, and coding community leadership.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`relative bg-slate-900/50 border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-slate-900/80 shadow-lg ${
                item.featured
                  ? "border-blue-500/40 shadow-blue-500/5 ring-1 ring-blue-500/20"
                  : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Organization Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md overflow-hidden border border-slate-200/20">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.organization}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="font-bold text-slate-900 text-xl font-mono">EXP</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        {item.type && (
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                            {item.type}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-base font-medium text-slate-300">
                          {item.organization}
                        </p>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition"
                            title="Visit website"
                          >
                            <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <div className="inline-flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5 text-blue-400" />
                        <span className="font-medium text-slate-300">{item.duration}</span>
                      </div>
                      {item.location && (
                        <div className="inline-flex items-center gap-1">
                          <MapPinIcon className="w-3.5 h-3.5 text-rose-400" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  {item.points && item.points.length > 0 && (
                    <ul className="space-y-2.5 text-sm text-slate-300 pt-1">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Repo Link if available */}
                  {item.github && (
                    <div className="pt-1">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        View Marksheet-Management-System Repo
                      </a>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
