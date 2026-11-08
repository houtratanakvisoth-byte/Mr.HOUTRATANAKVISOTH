import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X, Shield, Award } from 'lucide-react';
import { NavTab, Profile } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  profile: Profile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  profile,
  darkMode,
  onToggleDarkMode,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'blog', label: 'Blog' },
    { id: 'cv', label: 'CV' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-[2.5px] border-slate-900 bg-[#FAF7F2]/95 backdrop-blur-md dark:border-slate-800 dark:bg-[#12131a]/95">
      {/* Top Harvard Academic Ribbon */}
      <div className="bg-[#A51C30] text-amber-100 text-[10px] font-bold tracking-widest text-center py-0.5 border-b border-slate-900 flex items-center justify-center gap-2">
        <span>★ VERITAS IN MATHEMATICA & DIGITALIS</span>
        <span>•</span>
        <span>NUM INTERNATIONAL UNIVERSITY</span>
        <span>•</span>
        <span>HOUT RATANAKVISOTH ★</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo: Harvard Shield Emblem + Comic Inking */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex cursor-pointer items-center gap-3 transition hover:scale-102"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#A51C30] font-black text-amber-200 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#18181b] dark:border-slate-700 dark:shadow-[3px_3px_0px_0px_#A51C30]">
            <span className="font-comic text-xl tracking-tight">{profile.initials || 'HR'}</span>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 border border-slate-900 text-[8px] font-bold text-slate-950">
              V
            </span>
          </div>
          <div>
            <div className="font-serif-academic text-lg font-bold tracking-tight text-slate-950 dark:text-amber-50">
              {profile.siteTitle || profile.name}
            </div>
            <div className="hidden text-xs font-semibold text-[#A51C30] sm:block dark:text-rose-400">
              {profile.role}
            </div>
          </div>
        </div>

        {/* Desktop Navigation with Comic Tabs */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                  isActive
                    ? 'bg-[#A51C30] text-amber-50 border-2 border-slate-900 shadow-[2.5px_2.5px_0px_0px_#18181b] dark:border-slate-700 dark:shadow-[2.5px_2.5px_0px_0px_#C92A42]'
                    : 'text-slate-700 hover:bg-amber-100/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Comic Search & Dark Mode */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search */}
          <div className="relative hidden lg:block w-48 xl:w-56">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentTab !== 'blog' && e.target.value) {
                  onSelectTab('blog');
                }
              }}
              placeholder="Search chronicles..."
              aria-label="Search posts"
              className="w-full rounded-xl border-2 border-slate-900 bg-white py-1.5 pl-8 pr-3 text-xs font-medium text-slate-900 shadow-[2px_2px_0px_0px_#18181b] placeholder-slate-400 focus:bg-amber-50/50 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-[2px_2px_0px_0px_#A51C30]"
            />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-800 shadow-[2.5px_2.5px_0px_0px_#18181b] hover:translate-x-[-1px] hover:translate-y-[-1px] dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300 dark:shadow-[2.5px_2.5px_0px_0px_#A51C30]"
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_0px_#18181b] md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b-2 border-slate-900 bg-[#FAF7F2] px-4 py-4 md:hidden dark:border-slate-800 dark:bg-[#12131a]">
          <div className="mb-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (currentTab !== 'blog' && e.target.value) {
                    onSelectTab('blog');
                  }
                }}
                placeholder="Search chronicles..."
                className="w-full rounded-xl border-2 border-slate-900 bg-white py-2 pl-9 pr-3 text-xs font-semibold text-slate-900 shadow-[2px_2px_0px_0px_#000] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center rounded-xl border-2 border-slate-900 px-3 py-2 text-left text-xs font-bold ${
                  currentTab === item.id
                    ? 'bg-[#A51C30] text-white shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-white text-slate-800 hover:bg-amber-100 dark:bg-slate-800 dark:text-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
