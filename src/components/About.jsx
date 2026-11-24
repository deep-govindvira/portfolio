import React from "react";
import { MapPinIcon } from "./Icons";

export const About = ({ data }) => {
  const { personal } = data;

  return (
    <section id="about" className="py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Philosophy</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs">
            <MapPinIcon className="w-3.5 h-3.5 text-rose-400" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Authentic Narrative directly from Notion */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-10 space-y-5 text-slate-300 text-base leading-relaxed shadow-xl">
          {personal.about.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Core Domains Mentioned in Bio */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-slate-400 mr-2 self-center">Focus:</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
              Backend Architecture & REST APIs
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              Redis Data Access Caching
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
              RabbitMQ Asynchronous Processing
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
              OCR & Real-Time Document Workflows
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
