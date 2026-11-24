import React from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  CodeChefIcon,
  CodeforcesIcon,
  HackerRankIcon,
  AtCoderIcon,
  MailIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  DownloadIcon,
} from "./Icons";

export const Hero = ({ data }) => {
  const { personal, stats } = data;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-emerald-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-medium text-emerald-400">{personal.badge}</span>
            </div>

            {/* Title / Name */}
            <div className="space-y-2">
              <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                {personal.greetings}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-amber-300">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {personal.title}
              </p>
            </div>

            {/* Bio description from Notion */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Projects
                <ChevronRightIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                <DownloadIcon className="w-4 h-4 text-blue-400" />
                Resume (PDF)
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MailIcon className="w-4 h-4 text-emerald-400" />
                Contact
              </a>
            </div>

            {/* Social & Coding Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Profiles:
              </span>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800 transition"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-blue-400 hover:bg-slate-800 transition"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-amber-400 hover:bg-slate-800 transition"
                title="LeetCode (deep_govindvira)"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.codechef}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-orange-400 hover:bg-slate-800 transition"
                title="CodeChef (deepgovindvira)"
              >
                <CodeChefIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.codeforces}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-red-400 hover:bg-slate-800 transition"
                title="Codeforces (deep_govindvira)"
              >
                <CodeforcesIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-emerald-400 hover:bg-slate-800 transition"
                title="HackerRank (deepgovindvira)"
              >
                <HackerRankIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.atcoder}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-cyan-400 hover:bg-slate-800 transition"
                title="AtCoder (deep_govindvira)"
              >
                <AtCoderIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.email}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-emerald-400 hover:bg-slate-800 transition"
                title="Email: deep.govindvira@gmail.com"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image with Modern Glow Ring */}
          <div className="relative flex justify-center items-center">
            {/* Outer animated gradient glow */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-500 opacity-75 blur-lg animate-pulse-slow" />

            {/* Profile Avatar Card */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-emerald-500 to-amber-500 shadow-2xl transition duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 select-none ring-4 ring-slate-950">
                <img
                  src="profile.png"
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-2 sm:right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <BriefcaseIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-semibold text-slate-400 leading-none">
                  Company
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  Zeus Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 text-center md:text-left transition hover:border-slate-700/80 hover:bg-slate-900/70"
            >
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
