import React from 'react';
import { ArrowRight, BookOpen, FileText, Bookmark, Sparkles, Award } from 'lucide-react';
import { Profile, Post, NavTab } from '../types';

interface HomeViewProps {
  profile: Profile;
  posts: Post[];
  categories: string[];
  onSelectTab: (tab: NavTab) => void;
  onSelectCategory: (category: string) => void;
  onSelectPost: (post: Post) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  posts,
  categories,
  onSelectTab,
  onSelectCategory,
  onSelectPost,
}) => {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const moreReadingPosts = posts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="space-y-8">
      {/* 1. Harvard Academic + Comic Hero Card */}
      <section
        aria-label="Introduction hero"
        className="comic-box relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-rose-50/50 p-6 sm:p-8 md:p-10 dark:from-[#1b151e] dark:via-[#13141f] dark:to-[#17131a]"
      >
        {/* Subtle Ben-Day / Halftone Dot Comic Glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#A51C30]/10 blur-2xl" />

        <div className="relative z-10 max-w-2xl space-y-4">
          {/* Top Status Pill: Comic Badge + Harvard Emblem */}
          <div className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-900 bg-amber-300 px-3 py-1 text-xs font-black text-slate-950 shadow-[2px_2px_0px_0px_#000] dark:bg-amber-400">
            <span className="h-2 w-2 rounded-full bg-[#A51C30] animate-pulse" />
            <span className="tracking-wide uppercase">
              ACADEMIC DISPATCH · {profile.location} · HARVARD STYLE
            </span>
          </div>

          {/* Heading in Prestige Collegiate Serif */}
          <h1 className="font-serif-academic text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-amber-50 leading-[1.12]">
            {profile.tagline || 'Veritas in Code: Engineering, Systems & Real-World Solutions'}
          </h1>

          {/* Subtitle */}
          <p className="text-base font-medium text-slate-700 sm:text-lg dark:text-slate-300 leading-relaxed">
            {profile.bioShort}
          </p>

          {/* Action Buttons: Comic Neo-Brutalist Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('blog')}
              className="comic-btn inline-flex items-center gap-2 rounded-xl bg-[#A51C30] px-5 py-2.5 text-xs sm:text-sm font-black text-amber-50 tracking-wide hover:bg-[#8A1526]"
            >
              <BookOpen className="h-4 w-4 text-amber-300" />
              <span>READ THE CHRONICLES</span>
            </button>

            <button
              onClick={() => onSelectTab('cv')}
              className="comic-btn inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 hover:bg-amber-50 dark:bg-slate-800 dark:text-amber-100"
            >
              <FileText className="h-4 w-4 text-[#A51C30]" />
              <span>INSPECT CURRICULUM VITAE</span>
            </button>
          </div>

          {/* Quick Categories Bar with Comic Pill Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  onSelectTab('blog');
                }}
                className="rounded-lg border-[1.5px] border-slate-900 bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow-[2px_2px_0px_0px_#18181b] transition hover:bg-[#A51C30] hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#A51C30]"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LATEST Section (Comic Graphic Novel Featured Panel) */}
      {featuredPost && (
        <section aria-label="Latest featured post" className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-md border-2 border-slate-900 bg-[#A51C30] px-2 py-0.5 font-comic text-xs tracking-wider text-amber-200 shadow-[1.5px_1.5px_0px_0px_#000]">
                CHAPTER HIGHLIGHT
              </span>
              <h2 className="font-comic text-xl tracking-wide text-slate-950 dark:text-amber-100">
                LATEST PRODUCTION BATTLE
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('blog')}
              className="group flex items-center gap-1 text-xs font-black text-[#A51C30] hover:underline dark:text-rose-400"
            >
              <span>View all issues</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <article
            onClick={() => onSelectPost(featuredPost)}
            className="comic-box group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-[#161720]"
          >
            {/* Featured Image with Comic Vignette Overlay */}
            <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900 sm:aspect-21/9 border-b-2 border-slate-900">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              {/* Comic Action Tag in Top Left */}
              <div className="absolute top-4 left-4">
                <span className="rounded-md border-2 border-slate-900 bg-amber-300 px-3 py-1 font-comic text-xs tracking-wider text-slate-950 shadow-[2px_2px_0px_0px_#000]">
                  TOP DISPATCH ★ {featuredPost.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <h3 className="font-serif-academic text-xl font-extrabold text-amber-50 sm:text-2xl md:text-3xl leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
                  {featuredPost.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-amber-200/90">
                  <span>DISPATCHED: {featuredPost.date}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                  <span>·</span>
                  <span>{featuredPost.views} SCHOLAR VIEWS</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* 3. MORE READING Section (Comic Panels) */}
      <section aria-label="More reading posts" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md border-2 border-slate-900 bg-amber-400 px-2 py-0.5 font-comic text-xs tracking-wider text-slate-950 shadow-[1.5px_1.5px_0px_0px_#000]">
            VOL. II
          </span>
          <h2 className="font-comic text-2xl tracking-wide text-slate-950 dark:text-amber-100">
            FURTHER CASE STUDIES & SOLUTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {moreReadingPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="comic-box group flex flex-col sm:flex-row gap-5 rounded-2xl bg-white p-4 sm:p-5 dark:bg-[#161720] cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              {/* Thumbnail with Comic Inking Frame */}
              <div className="relative aspect-16/9 w-full sm:w-52 sm:shrink-0 overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 rounded border border-slate-900 bg-amber-300 px-1.5 py-0.5 text-[9px] font-black text-slate-950">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-[#A51C30] dark:text-rose-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-2 font-serif-academic text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#A51C30] dark:text-amber-50 dark:group-hover:text-rose-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium line-clamp-2 dark:text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-black text-[#A51C30] dark:text-rose-400 uppercase tracking-wide">
                  <span>READ FULL DISPATCH</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
