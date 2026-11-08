import React from 'react';
import { Profile, NavTab } from '../types';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Database, ShieldCheck } from 'lucide-react';

interface AboutViewProps {
  profile: Profile;
  onSelectTab: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ profile, onSelectTab }) => {
  return (
    <div className="space-y-8">
      {/* 1. Harvard Academic + Comic Hero Card */}
      <section className="comic-box relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-rose-50/60 p-6 sm:p-8 md:p-10 dark:from-[#1b151e] dark:via-[#13141f] dark:to-[#17131a]">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-block rounded-md border border-slate-900 bg-[#A51C30] px-2.5 py-0.5 text-[10px] font-black text-amber-200 uppercase tracking-widest">
            ACADEMIC DOSSIER & PHILOSOPHY
          </div>

          <h1 className="font-serif-academic text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-amber-50 leading-[1.15]">
            I architect software that real businesses depend on.
          </h1>

          <p className="text-base font-medium text-slate-700 sm:text-lg dark:text-slate-300 leading-relaxed">
            {profile.bioLong}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onSelectTab('contact')}
              className="comic-btn inline-flex items-center gap-2 rounded-xl bg-[#A51C30] px-5 py-2.5 text-xs sm:text-sm font-black text-amber-50 tracking-wider hover:bg-[#8A1526]"
            >
              <span>INITIATE CONTACT DISPATCH</span>
              <ArrowRight className="h-4 w-4 text-amber-300" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. What I Build */}
      <section className="comic-box rounded-2xl bg-white p-6 sm:p-8 dark:bg-[#161720] space-y-4">
        <div className="border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <h2 className="font-comic text-2xl tracking-wide text-slate-950 dark:text-amber-100">
            ARENAS OF ENGINEERING SPECIALIZATION
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
          Enterprise management systems, high-throughput cloud infrastructure, and mission-critical applications developed for real businesses operating in high-demand environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
          <div className="flex items-start gap-3 rounded-xl border-2 border-slate-900 bg-amber-50/70 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/40">
            <Globe className="h-5 w-5 shrink-0 text-[#A51C30] mt-0.5" />
            <div>
              <h3 className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                Web Applications & Enterprise SaaS
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                Fault-tolerant distributed applications with clean access control, high concurrency, and rapid render pipelines.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border-2 border-slate-900 bg-amber-50/70 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/40">
            <Smartphone className="h-5 w-5 shrink-0 text-[#A51C30] mt-0.5" />
            <div>
              <h3 className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                Cross-Platform Mobile Engines
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                Native-performing React Native & Expo applications with resilient offline data synchronization and device hardware integrations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border-2 border-slate-900 bg-amber-50/70 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/40">
            <Database className="h-5 w-5 shrink-0 text-[#A51C30] mt-0.5" />
            <div>
              <h3 className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                Relational Databases & Data Pipelines
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                Optimized PostgreSQL & MySQL engines, index tuning, strict migrations, and distributed caching strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border-2 border-slate-900 bg-amber-50/70 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800/40">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#A51C30] mt-0.5" />
            <div>
              <h3 className="font-serif-academic text-sm font-bold text-slate-950 dark:text-white">
                Cloud Architecture & DevOps Rigor
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                Containerized microservices with zero-downtime rolling deploys, edge caching, and automated observability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Philosophy */}
      <section className="comic-box rounded-2xl bg-white p-6 sm:p-8 dark:bg-[#161720] space-y-4">
        <div className="border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <h2 className="font-comic text-2xl tracking-wide text-slate-950 dark:text-amber-100">
            VERITAS: CODE PRINCIPLES & VALUES
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A51C30] mt-0.5" />
            <span><strong className="font-bold text-slate-950 dark:text-white">Veritas in Architecture:</strong> Write software that tells the truth. Handle every edge case explicitly, log real causes, and prioritize resilience above hype.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A51C30] mt-0.5" />
            <span><strong className="font-bold text-slate-950 dark:text-white">Chronicle the Solutions:</strong> Institutional memory is preserved by documenting hard-fought bugs, preventing entire engineering teams from repeating mistakes.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A51C30] mt-0.5" />
            <span><strong className="font-bold text-slate-950 dark:text-white">Pragmatic Mastery:</strong> Select tools because they solve the actual problem with minimal complexity, never to chase ephemeral trends.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
