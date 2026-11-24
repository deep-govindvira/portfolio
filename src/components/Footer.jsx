import React from "react";
import {
  ArrowUpIcon,
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  CodeChefIcon,
  CodeforcesIcon,
  HackerRankIcon,
  AtCoderIcon,
  MailIcon,
} from "./Icons";

export const Footer = ({ data }) => {
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <a
              href="#hero"
              className="text-base font-bold text-white hover:text-blue-400 transition"
            >
              {personal.name}
            </a>
            <p className="text-slate-400 text-xs">
              Software Developer @ Zeus Learning • B.Tech IT @ DDU
            </p>
          </div>

          {/* Social & Contest Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.codechef}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-slate-700 transition"
              title="CodeChef"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.codeforces}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-slate-700 transition"
              title="Codeforces"
            >
              <CodeforcesIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition"
              title="HackerRank"
            >
              <HackerRankIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.atcoder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition"
              title="AtCoder"
            >
              <AtCoderIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.email}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition"
              title="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with React 19 & Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400">Mumbai / Nadiad, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
