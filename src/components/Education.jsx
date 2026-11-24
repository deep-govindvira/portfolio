import React from "react";
import { GraduationCapIcon, TrophyIcon, FileTextIcon, MapPinIcon, CalendarIcon, ExternalLinkIcon } from "./Icons";

export const Education = ({ data }) => {
  const { education, certifications } = data;

  return (
    <section id="education" className="py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Academics & Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            🎓 Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-purple-400">📄 Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Formal engineering degree from Dharmsinh Desai University (DDU), research conference publications, and certified AWS Cloud foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <GraduationCapIcon className="w-6 h-6 text-blue-400" />
              Academic History
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      {edu.logo && (
                        <div className="w-12 h-12 rounded-xl bg-white p-1 flex-shrink-0 flex items-center justify-center border border-slate-200/20 shadow-sm">
                          <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-blue-400 mt-0.5">
                          {edu.field}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-base text-slate-300 font-medium">
                            {edu.institution}
                          </p>
                          {edu.website && (
                            <a
                              href={edu.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-slate-400 hover:text-blue-400 transition"
                              title="Visit institution website"
                            >
                              <ExternalLinkIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {edu.score && (
                      <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto sm:justify-end">
                        {edu.score.includes("|") ? (
                          edu.score.split("|").map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                            >
                              {s.trim()}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-y border-slate-800/60 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPinIcon className="w-3.5 h-3.5 text-rose-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Research Publication Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <TrophyIcon className="w-6 h-6 text-amber-400" />
              Certifications & Research
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/80 transition space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/60 flex-shrink-0">
                      <FileTextIcon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="self-start sm:self-auto text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                          {cert.id}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-blue-400 mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/60">
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        <span>View Certificate (Google Drive)</span>
                      </a>
                    )}
                    {cert.paperUrl && (
                      <a
                        href={cert.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                      >
                        <FileTextIcon className="w-3.5 h-3.5" />
                        <span>Read Paper PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
