import React from 'react';
import { Search, X, ArrowRight, Eye, Clock, Calendar, Bookmark } from 'lucide-react';
import { Post } from '../types';
import { filterPosts } from '../utils/blogUtils';

interface BlogViewProps {
  posts: Post[];
  categories: string[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedTag: string;
  onSelectTag: (tag: string) => void;
  onSelectPost: (post: Post) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  posts,
  categories,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedTag,
  onSelectTag,
  onSelectPost,
}) => {
  const filtered = filterPosts(posts, searchQuery, selectedCategory, selectedTag);

  const resetFilters = () => {
    onSearchChange('');
    onSelectCategory('All');
    onSelectTag('');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedTag !== '';

  return (
    <div className="space-y-6">
      {/* Header & Controls Panel */}
      <div className="comic-box rounded-2xl bg-white p-6 dark:bg-[#161720]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-block rounded-md border border-slate-900 bg-[#A51C30] px-2 py-0.5 text-[10px] font-black text-amber-200 uppercase tracking-widest">
              ACADEMIC REPOSITORY
            </div>
            <h1 className="mt-1 font-comic text-2xl sm:text-3xl tracking-wide text-slate-950 dark:text-amber-100">
              FIELD CHRONICLES & DISPATCHES
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
              Technical case studies, architectural proofs, and solutions verified under heavy production fire.
            </p>
          </div>

          {/* Search Bar inside Blog */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search chronicles..."
              aria-label="Search articles"
              className="w-full rounded-xl border-2 border-slate-900 bg-white py-2 pl-9 pr-7 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] placeholder-slate-400 focus:bg-amber-50 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills with Comic Buttons */}
        <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t-2 border-slate-900 dark:border-slate-700">
          <button
            onClick={() => onSelectCategory('All')}
            className={`comic-btn rounded-lg px-3 py-1.5 text-xs font-black transition ${
              selectedCategory === 'All'
                ? 'bg-[#A51C30] text-amber-100'
                : 'bg-white text-slate-800 hover:bg-amber-100 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`comic-btn rounded-lg px-3 py-1.5 text-xs font-black transition ${
                  isSelected
                    ? 'bg-[#A51C30] text-amber-100'
                    : 'bg-white text-slate-800 hover:bg-amber-100 dark:bg-slate-800 dark:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Active Tag Indicator / Filter Reset */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-slate-900 bg-amber-100 p-3 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-slate-800 dark:text-amber-200">
            <div className="flex flex-wrap items-center gap-2">
              <span>Showing:</span>
              {selectedCategory !== 'All' && (
                <span className="rounded border border-slate-900 bg-white px-2 py-0.5 text-slate-950 dark:bg-slate-900 dark:text-white">
                  {selectedCategory}
                </span>
              )}
              {selectedTag && (
                <span className="rounded border border-slate-900 bg-white px-2 py-0.5 text-slate-950 dark:bg-slate-900 dark:text-white">
                  {selectedTag}
                </span>
              )}
              {searchQuery && (
                <span className="rounded border border-slate-900 bg-white px-2 py-0.5 text-slate-950 dark:bg-slate-900 dark:text-white">
                  "{searchQuery}"
                </span>
              )}
              <span className="text-slate-500 font-semibold">({filtered.length} found)</span>
            </div>
            <button
              onClick={resetFilters}
              className="font-black text-[#A51C30] underline hover:text-[#8A1526]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Articles List */}
      {filtered.length === 0 ? (
        <div className="comic-box rounded-2xl bg-white p-12 text-center dark:bg-[#161720]">
          <p className="font-comic text-xl text-slate-900 dark:text-amber-100">
            NO CHRONICLES FOUND IN THIS ARCHIVE!
          </p>
          <p className="mt-1 text-xs text-slate-600 font-medium">Try searching for other terms or clear current filters.</p>
          <button
            onClick={resetFilters}
            className="comic-btn mt-4 rounded-xl bg-[#A51C30] px-4 py-2 text-xs font-black text-amber-100 hover:bg-[#8A1526]"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="comic-box group flex flex-col sm:flex-row gap-5 rounded-2xl bg-white p-5 dark:bg-[#161720] cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/9 w-full sm:w-56 sm:shrink-0 overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_#18181b] dark:border-slate-700 dark:bg-slate-800">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 rounded border border-slate-900 bg-amber-300 px-2 py-0.5 text-[10px] font-black text-slate-950">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-[#A51C30] dark:text-rose-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#A51C30] dark:text-rose-400 font-bold">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </span>
                  </div>

                  <h2 className="mt-2 font-serif-academic text-lg font-bold text-slate-950 group-hover:text-[#A51C30] dark:text-amber-50 dark:group-hover:text-rose-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium line-clamp-2 dark:text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-slate-900 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-black text-[#A51C30] dark:text-rose-400 uppercase tracking-wide">
                  <span>EXAMINE DISPATCH</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
