import React from 'react';
import { Printer, Mail, Phone, MapPin, Linkedin, ExternalLink, Award, Shield, GraduationCap, Globe2 } from 'lucide-react';
import { Profile, CVData } from '../types';

interface CVViewProps {
  profile: Profile;
  cvData: CVData;
}

export const CVView: React.FC<CVViewProps> = ({ profile, cvData }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 print-full-width">
      {/* 1. CV Hero Card (Harvard Collegiate Crest + Comic Neo-Brutalist Frame) */}
      <div className="comic-box relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50/90 via-white to-rose-50/60 p-6 sm:p-8 dark:from-[#1b151e] dark:via-[#13141f] dark:to-[#17131a]">
        {/* Academic Ribbon */}
        <div className="absolute top-0 right-0 bg-[#A51C30] text-amber-200 text-[10px] font-black uppercase px-4 py-1 border-b-2 border-l-2 border-slate-900 shadow-[2px_2px_0px_0px_#000]">
          CURRICULUM VITAE · VERITAS
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-2">
          {/* Avatar with thick comic border */}
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-[3px] border-slate-900 bg-slate-100 shadow-[4px_4px_0px_0px_#18181b] dark:border-slate-600 dark:bg-slate-800 dark:shadow-[4px_4px_0px_0px_#A51C30]">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex h-full w-full items-center justify-center bg-[#A51C30] text-2xl font-black text-amber-200">
              {profile.initials}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-serif-academic text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-amber-50">
              {profile.name}
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-black text-[#A51C30] uppercase tracking-wide dark:text-rose-400">
              {profile.role}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#A51C30]" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#A51C30] underline">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5 text-[#A51C30]" />
                <a
                  href={`https://${profile.linkedin.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A51C30] underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={handlePrint}
                className="comic-btn no-print inline-flex items-center gap-2 rounded-xl bg-amber-300 px-4 py-2 text-xs font-black text-slate-950 hover:bg-amber-400 dark:bg-amber-400"
              >
                <Printer className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>PRINT CURRICULUM VITAE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PERSONAL DATA */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            SCHOLAR RECORD & PERSONAL DATA
          </h2>
        </div>

        <div className="mt-4 divide-y-2 divide-slate-100 dark:divide-slate-800">
          {cvData.personalData.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 py-3 text-xs">
              <span className="font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="sm:col-span-2 text-slate-950 dark:text-slate-100 font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SKILLS & PROFICIENCIES */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            DISCIPLINARY PROFICIENCIES & SKILLS
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cvData.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="rounded-xl border-2 border-slate-900 bg-amber-50/70 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/60"
            >
              <h3 className="font-serif-academic text-sm font-bold text-[#A51C30] dark:text-rose-400 uppercase tracking-wide">
                {skillGroup.category}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-semibold">
                {skillGroup.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORKING EXPERIENCE */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            CHRONOLOGY OF PROFESSIONAL FELLOWSHIPS & EXPERIENCE
          </h2>
        </div>

        <div className="mt-6 space-y-6">
          {cvData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-sm before:bg-[#A51C30] before:border-2 before:border-slate-900 after:absolute after:left-1.5 after:top-6 after:bottom-0 after:w-0.5 after:bg-slate-900 dark:after:bg-slate-700 last:after:hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif-academic text-base font-bold text-slate-950 dark:text-amber-50">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-black text-[#A51C30] uppercase dark:text-rose-400">
                    {exp.company}
                  </div>
                </div>
                <span className="mt-1 sm:mt-0 rounded-md border border-slate-900 bg-amber-100 px-2 py-0.5 text-[10px] font-black text-slate-900 dark:bg-slate-800 dark:text-amber-300">
                  {exp.period}
                </span>
              </div>
              {exp.description && (
                <p className="mt-2 text-xs leading-relaxed text-slate-700 font-medium dark:text-slate-300">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECT PORTFOLIO */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            ENGINEERING FOLIO & PRODUCT BUILDS
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cvData.projects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border-2 border-slate-900 bg-white p-4 shadow-[2.5px_2.5px_0px_0px_#18181b] dark:border-slate-700 dark:bg-[#1b171f]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-academic text-base font-bold text-slate-950 dark:text-amber-100">
                    {proj.name}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#A51C30] hover:scale-110 transition dark:text-rose-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="mt-0.5 text-xs font-black text-[#A51C30] uppercase dark:text-rose-400">
                  {proj.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 font-medium dark:text-slate-300">
                  {proj.description}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-slate-900 bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-900 shadow-[1px_1px_0px_0px_#000] dark:bg-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EDUCATION & CERTIFICATES */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            ACADEMIC HONORS & CREDENTIALS
          </h2>
        </div>

        <div className="mt-4 divide-y-2 divide-slate-100 dark:divide-slate-800">
          {cvData.certificates.map((cert, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 text-xs">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#A51C30]" />
                <div>
                  <div className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                    {cert.title}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </div>
                </div>
              </div>
              <span className="rounded border border-slate-900 bg-amber-200 px-2 py-0.5 text-[10px] font-black text-slate-950 shadow-[1px_1px_0px_0px_#000]">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LANGUAGES */}
      <section className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <div className="h-3 w-3 bg-[#A51C30] border border-slate-900" />
          <h2 className="font-comic text-xl tracking-wider text-slate-950 dark:text-amber-100">
            LINGUISTIC CAPABILITIES
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cvData.languages.map((lang, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border-2 border-slate-900 bg-amber-50/70 p-3 text-xs shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="flex items-center gap-2">
                <Globe2 className="h-3.5 w-3.5 text-[#A51C30]" />
                <span className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                  {lang.language}
                </span>
              </div>
              <span className="font-bold text-[#A51C30] dark:text-rose-400">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
