import React from 'react';
import { NavTab, Profile } from '../types';
import { Linkedin, Github, Mail, Shield } from 'lucide-react';

interface FooterProps {
  profile: Profile;
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onSelectTab }) => {
  return (
    <footer className="mt-16 border-t-[2.5px] border-slate-900 bg-[#FAF7F2] dark:border-slate-800 dark:bg-[#0c0d13]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div
              onClick={() => onSelectTab('home')}
              className="flex cursor-pointer items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#A51C30] font-black text-amber-200 shadow-[2px_2px_0px_0px_#000] text-sm">
                {profile.initials || 'HC'}
              </div>
              <div>
                <span className="font-serif-academic text-lg font-bold text-slate-950 dark:text-amber-50">
                  {profile.siteTitle || profile.name}
                </span>
                <span className="ml-2 rounded border border-slate-900 bg-amber-300 px-1.5 py-0.2 text-[9px] font-black text-slate-950 uppercase">
                  VERITAS
                </span>
              </div>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
              {profile.role} in {profile.location}. Veritas in code — solving and documenting production software challenges with academic rigor and comic clarity.
            </p>
          </div>

          {/* Column 2: Explore (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="font-comic text-base tracking-wider text-slate-950 dark:text-amber-100">
              ACADEMIC REPOSITORY
            </h3>
            <ul className="mt-4 space-y-2 text-xs font-bold">
              <li>
                <button
                  onClick={() => onSelectTab('blog')}
                  className="text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  All Chronicles & Dispatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cv')}
                  className="text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  Curriculum Vitae
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  Academic Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  Initiate Correspondence
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Elsewhere (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="font-comic text-base tracking-wider text-slate-950 dark:text-amber-100">
              DISPATCH CHANNELS
            </h3>
            <ul className="mt-4 space-y-2 text-xs font-bold">
              <li>
                <a
                  href={`https://${profile.linkedin.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#A51C30]" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
              {profile.github && (
                <li>
                  <a
                    href={`https://${profile.github.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                  >
                    <Github className="h-3.5 w-3.5 text-[#A51C30]" />
                    <span>GitHub Repositories</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-[#A51C30] dark:text-slate-300 dark:hover:text-rose-400"
                >
                  <Mail className="h-3.5 w-3.5 text-[#A51C30]" />
                  <span>{profile.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t-2 border-slate-900 pt-6 text-xs font-bold text-slate-600 dark:border-slate-800 dark:text-slate-400">
          <div>© {new Date().getFullYear()} {profile.name} · Harvard Collegiate & Comic Format. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 text-[#A51C30] dark:text-rose-400">VERITAS VOS LIBERABIT</div>
        </div>
      </div>
    </footer>
  );
};
