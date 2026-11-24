import React, { useState } from "react";
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  CodeChefIcon,
  CodeforcesIcon,
  HackerRankIcon,
  AtCoderIcon,
  TrophyIcon,
  MapPinIcon,
} from "./Icons";

export const Contact = ({ data }) => {
  const { personal, codingProfiles } = data;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const getProfileIcon = (iconName) => {
    switch (iconName) {
      case "LeetCode":
        return <LeetCodeIcon className="w-5 h-5 text-amber-400" />;
      case "CodeChef":
        return <CodeChefIcon className="w-5 h-5 text-orange-400" />;
      case "Codeforces":
        return <CodeforcesIcon className="w-5 h-5 text-red-400" />;
      case "HackerRank":
        return <HackerRankIcon className="w-5 h-5 text-emerald-400" />;
      case "AtCoder":
        return <AtCoderIcon className="w-5 h-5 text-cyan-400" />;
      case "Trophy":
        return <TrophyIcon className="w-5 h-5 text-yellow-400" />;
      case "GitHub":
        return <GitHubIcon className="w-5 h-5 text-slate-300" />;
      default:
        return <GitHubIcon className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            📞 Contacts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">👨‍💻 Coding Profiles</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Whether you want to discuss backend architecture, algorithmic challenges, or full-stack engineering, feel free to reach out or explore my contest handles!
          </p>
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-12">
          {codingProfiles.map((cp) => (
            <a
              key={cp.name}
              href={cp.url}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-4 rounded-2xl flex flex-col items-center text-center transition hover:bg-slate-900/90 group"
            >
              <div className="p-2.5 rounded-xl bg-slate-950/80 mb-2 group-hover:scale-110 transition">
                {getProfileIcon(cp.icon)}
              </div>
              <p className="text-xs font-bold text-white group-hover:text-blue-300 transition">
                {cp.name}
              </p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate max-w-full">
                {cp.handle}
              </p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Contacts
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fastest way to get in touch is via email or connecting directly on LinkedIn.
                </p>
              </div>

              {/* Email Copier */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn & Location */}
              <div className="space-y-3">
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        LinkedIn
                      </p>
                      <p className="text-xs font-medium text-slate-200 mt-0.5">
                        Deep Govindvira
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-0.5 transition">
                    Connect →
                  </span>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-rose-400">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-xs font-medium text-slate-200 mt-0.5">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an inquiry, project, or opportunity? Drop a note below and I will respond promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your message was prepared in your default mail app. You can also write directly to{" "}
                    <span className="text-emerald-400 font-mono">{personal.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-blue-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Question"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Deep, I would like to talk about..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <MailIcon className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
