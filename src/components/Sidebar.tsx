import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';
import { Profile, Post, NavTab } from '../types';
import { getCategoriesWithCounts, getTagsWithCounts, sortPosts } from '../utils/blogUtils';

interface SidebarProps {
  profile: Profile;
  posts: Post[];
  onSelectTab: (tab: NavTab) => void;
  onSelectCategory: (category: string) => void;
  onSelectTag: (tag: string) => void;
  onSelectPost: (post: Post) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  profile,
  posts,
  onSelectTab,
  onSelectCategory,
  onSelectTag,
  onSelectPost,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = getCategoriesWithCounts(posts);
  const tags = getTagsWithCounts(posts).slice(0, 8);
  const popularPosts = sortPosts(posts, 'popular').slice(0, 3);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <aside className="w-full space-y-6 lg:w-80 shrink-0" aria-label="Sidebar information">
      {/* 1. Author Profile Card (Harvard Collegiate Crest + Comic Frame) */}
      <div className="comic-box overflow-hidden rounded-2xl bg-white dark:bg-[#161720]">
        {/* Top Harvard Crimson Banner with Halftone / Heraldic Crest Motif */}
        <div className="relative h-22 bg-[#A51C30] border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between px-4">
          <span className="text-[10px] font-black tracking-widest text-amber-200 uppercase">
            VERITAS · CODE
          </span>
          <div className="flex items-center gap-1 text-amber-300">
            <Award className="h-4 w-4" />
            <span className="text-[10px] font-bold">FELLOW</span>
          </div>

          {/* Avatar with thick comic border */}
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border-[3px] border-slate-900 bg-slate-100 shadow-[3.5px_3.5px_0px_0px_#18181b] dark:border-slate-600 dark:bg-slate-800 dark:shadow-[3px_3px_0px_0px_#A51C30]">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex h-full w-full items-center justify-center bg-[#A51C30] text-xl font-black text-amber-200">
                {profile.initials}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-5 pt-13 pb-5 text-center">
          <h3 className="font-serif-academic text-xl font-bold text-slate-950 dark:text-amber-50">
            {profile.name}
          </h3>
          <p className="mt-0.5 text-xs font-black tracking-wide text-[#A51C30] uppercase dark:text-rose-400">
            {profile.role}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            {profile.bioShort}
          </p>

          <button
            onClick={() => onSelectTab('cv')}
            className="comic-btn mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-300 px-4 py-2 text-xs font-black text-slate-950 hover:bg-amber-400 dark:bg-amber-400 dark:text-slate-950"
          >
            <Shield className="h-3.5 w-3.5 mr-1.5 text-[#A51C30]" />
            <span>Examine Curriculum Vitae</span>
          </button>
        </div>
      </div>

      {/* 2. Categories Card */}
      <div className="comic-box rounded-2xl bg-white p-5 dark:bg-[#161720]">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <h3 className="font-comic text-lg tracking-wide text-slate-950 dark:text-amber-100">
            DISCIPLINES & TOPICS
          </h3>
          <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[9px] font-black text-slate-900 border border-slate-900">
            INDEX
          </span>
        </div>
        <ul className="mt-3 divide-y-2 divide-slate-100 dark:divide-slate-800">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => {
                  onSelectCategory(cat.name);
                  onSelectTab('blog');
                }}
                className="group flex w-full items-center justify-between py-2 text-left text-xs font-bold text-slate-800 transition hover:text-[#A51C30] dark:text-slate-200 dark:hover:text-rose-400"
              >
                <span>{cat.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="rounded-md border border-slate-900 bg-amber-50 px-1.5 py-0.2 text-[10px] font-black text-slate-900 group-hover:bg-[#A51C30] group-hover:text-white dark:bg-slate-800 dark:text-amber-200">
                    {cat.count}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Popular Posts */}
      <div className="comic-box rounded-2xl bg-white p-5 dark:bg-[#161720]">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <h3 className="font-comic text-lg tracking-wide text-slate-950 dark:text-amber-100">
            HERALDED CHRONICLES
          </h3>
          <span className="rounded bg-rose-200 px-1.5 py-0.5 text-[9px] font-black text-rose-950 border border-slate-900">
            POPULAR
          </span>
        </div>
        <div className="mt-3 divide-y-2 divide-slate-100 dark:divide-slate-800">
          {popularPosts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer py-2.5 transition"
            >
              <div className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-900 bg-[#A51C30] text-[10px] font-black text-white shadow-[1px_1px_0px_0px_#000]">
                  #{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-[#A51C30] dark:text-slate-100 dark:group-hover:text-rose-400">
                  {post.title}
                </h4>
              </div>
              <div className="mt-1 flex items-center gap-2 pl-7 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span>{post.date}</span>
                <span>•</span>
                <span className="font-bold text-[#A51C30] dark:text-rose-400">{post.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Topics / Tags Cloud */}
      <div className="comic-box rounded-2xl bg-white p-5 dark:bg-[#161720]">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 dark:border-slate-700">
          <h3 className="font-comic text-lg tracking-wide text-slate-950 dark:text-amber-100">
            FIELD DISPATCHES
          </h3>
          <span className="rounded bg-emerald-200 px-1.5 py-0.5 text-[9px] font-black text-emerald-950 border border-slate-900">
            TAGS
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <button
              key={t.tag}
              onClick={() => {
                onSelectTag(t.tag);
                onSelectTab('blog');
              }}
              className="rounded-lg border-[1.5px] border-slate-900 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-slate-800 shadow-[1.5px_1.5px_0px_0px_#18181b] transition hover:bg-[#A51C30] hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#A51C30]"
            >
              {t.tag}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Newsletter / Email Subscription Widget */}
      <div className="comic-box rounded-2xl bg-amber-50/70 p-5 dark:bg-[#1b171c]">
        <div className="inline-block rounded-md border border-slate-900 bg-[#A51C30] px-2 py-0.5 text-[10px] font-black text-amber-200 uppercase tracking-wider">
          DISPATCH GAZETTE
        </div>
        <h3 className="mt-2 font-serif-academic text-base font-bold text-slate-950 dark:text-white">
          Receive Academic & Field Dispatches
        </h3>
        <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
          Strictly engineering truth. Zero spam, pure production wisdom.
        </p>

        {subscribed ? (
          <div className="mt-3 flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-emerald-100 p-3 text-xs font-black text-emerald-900">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
            <span>Enrolled! You will receive future dispatches.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="scholar@example.com"
              required
              aria-label="Email for newsletter subscription"
              className="w-full rounded-xl border-2 border-slate-900 bg-white px-3 py-2 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:bg-amber-100/40 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="submit"
              className="comic-btn w-full rounded-xl bg-[#A51C30] px-4 py-2 text-xs font-black text-amber-100 tracking-wider hover:bg-[#8A1526]"
            >
              SUBSCRIBE TO DISPATCHES!
            </button>
          </form>
        )}
      </div>
    </aside>
  );
};
