import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Profile } from '../types';

interface ContactViewProps {
  profile: Profile;
}

export const ContactView: React.FC<ContactViewProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. Header with Harvard Ribbon & Comic Comic Banner */}
      <div>
        <div className="inline-block rounded-md border border-slate-900 bg-[#A51C30] px-2.5 py-0.5 text-[10px] font-black text-amber-200 uppercase tracking-widest">
          COMMUNICATIONS DISPATCH
        </div>
        <h1 className="mt-1 font-comic text-3xl sm:text-4xl tracking-wide text-slate-950 dark:text-amber-100">
          INITIATE CORRESPONDENCE
        </h1>
        <p className="mt-2 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
          Inquiries regarding high-scale engineering engagements, architectural consultations, or technical collaboration.
        </p>
      </div>

      {/* 2. Form & Direct Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (7 cols) */}
        <div className="comic-box lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 dark:bg-[#161720]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-900 bg-emerald-300 text-slate-950 shadow-[3px_3px_0px_0px_#000] mb-3">
                <CheckCircle2 className="h-8 w-8 text-emerald-950" />
              </div>
              <h3 className="font-comic text-2xl tracking-wide text-slate-950 dark:text-amber-100">
                DISPATCH TRANSMITTED!
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300 max-w-sm">
                Your dispatch has been delivered. Typical academic and engineering turnaround is within 24–48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="comic-btn mt-6 rounded-xl bg-amber-300 px-4 py-2 text-xs font-black text-slate-950 hover:bg-amber-400"
              >
                Transmit Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1 uppercase tracking-wide">
                    Correspondent Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Scholar / Engineer Name"
                    className="w-full rounded-xl border-2 border-slate-900 bg-amber-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1 uppercase tracking-wide">
                    Electronic Mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@institution.com"
                    className="w-full rounded-xl border-2 border-slate-900 bg-amber-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1 uppercase tracking-wide">
                  Dispatch Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="System Architecture / High-Volume Product Project"
                  className="w-full rounded-xl border-2 border-slate-900 bg-amber-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1 uppercase tracking-wide">
                  Dispatch Narrative
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your engineering scope, performance objectives, or technical inquiries..."
                  className="w-full rounded-xl border-2 border-slate-900 bg-amber-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 resize-y"
                />
              </div>

              <button
                type="submit"
                className="comic-btn inline-flex items-center gap-2 rounded-xl bg-[#A51C30] px-6 py-2.5 text-xs font-black text-amber-50 tracking-wider hover:bg-[#8A1526]"
              >
                <Send className="h-3.5 w-3.5 text-amber-300" />
                <span>TRANSMIT DISPATCH NOW</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Direct Box (5 cols) */}
        <div className="comic-box lg:col-span-5 rounded-2xl bg-white p-6 dark:bg-[#161720] space-y-4">
          <div className="border-b-2 border-slate-900 pb-2 dark:border-slate-700">
            <h2 className="font-comic text-lg tracking-wide text-slate-950 dark:text-amber-100">
              DIRECT CHANNELS
            </h2>
          </div>

          <ul className="divide-y-2 divide-slate-100 dark:divide-slate-800 text-xs">
            <li className="py-3 flex flex-col">
              <span className="font-bold text-slate-500 uppercase tracking-wide text-[10px]">
                Electronic Mail
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 font-bold text-slate-950 hover:text-[#A51C30] dark:text-white dark:hover:text-rose-400 flex items-center gap-1.5"
              >
                <Mail className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.email}</span>
              </a>
            </li>

            <li className="py-3 flex flex-col">
              <span className="font-bold text-slate-500 uppercase tracking-wide text-[10px]">
                Voice & Signal
              </span>
              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="mt-1 font-bold text-slate-950 hover:text-[#A51C30] dark:text-white dark:hover:text-rose-400 flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.phone}</span>
              </a>
            </li>

            <li className="py-3 flex flex-col">
              <span className="font-bold text-slate-500 uppercase tracking-wide text-[10px]">
                Professional Network
              </span>
              <a
                href={`https://${profile.linkedin.replace(/^https?:\/\//, '')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1 font-bold text-slate-950 hover:text-[#A51C30] dark:text-white dark:hover:text-rose-400 flex items-center gap-1.5"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.linkedin}</span>
              </a>
            </li>

            <li className="py-3 flex flex-col">
              <span className="font-bold text-slate-500 uppercase tracking-wide text-[10px]">
                Geographic Station
              </span>
              <div className="mt-1 font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#A51C30]" />
                <span>{profile.location}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
