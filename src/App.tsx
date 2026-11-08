import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { BlogView } from './components/BlogView';
import { CVView } from './components/CVView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { PostDetailView } from './components/PostDetailView';
import {
  initialProfile,
  initialCategories,
  initialPosts,
  initialCVData,
} from './data/portfolioData';
import { NavTab, Post, Profile, CVData } from './types';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Hout Ratanakvisoth's real profile data from official CV PDF
  const [profile] = useState<Profile>(initialProfile);
  const [cvData] = useState<CVData>(initialCVData);
  const [posts] = useState<Post[]>(initialPosts);

  // Clear any old placeholder data from previous preview sessions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('portfolio_profile');
      localStorage.removeItem('portfolio_stats');
      localStorage.removeItem('portfolio_cv');
    }
  }, []);

  // Navigation & Filter states
  const [currentTab, setCurrentTab] = useState<NavTab>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'blog', 'cv', 'about', 'contact'].includes(hash)) {
      return hash as NavTab;
    }
    return 'home';
  });

  const [activePost, setActivePost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  // Apply dark mode class to html document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Sync hash with currentTab
  useEffect(() => {
    window.location.hash = `/${currentTab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleSelectTab = (tab: NavTab) => {
    setActivePost(null);
    setCurrentTab(tab);
  };

  const handleSelectCategory = (cat: string) => {
    setActivePost(null);
    setSelectedCategory(cat);
    setCurrentTab('blog');
  };

  const handleSelectTag = (tag: string) => {
    setActivePost(null);
    setSelectedTag(tag);
    setCurrentTab('blog');
  };

  const handleSelectPost = (post: Post) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCVTab = currentTab === 'cv' && !activePost;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 dark:bg-[#0E0E12] dark:text-slate-100 transition-colors duration-150">
      {/* Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        profile={profile}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activePost ? (
          /* Single Article Reader View */
          <div className="max-w-4xl mx-auto">
            <PostDetailView
              post={activePost}
              onBack={() => setActivePost(null)}
              onSelectTag={handleSelectTag}
            />
          </div>
        ) : isCVTab ? (
          /* CV Page: Centered Document Layout */
          <div className="max-w-4xl mx-auto">
            <CVView profile={profile} cvData={cvData} />
          </div>
        ) : (
          /* Standard 2-Column Layout (Home, Blog, About, Contact) */
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Primary Content Column */}
            <div className="flex-1 w-full min-w-0">
              {currentTab === 'home' && (
                <HomeView
                  profile={profile}
                  posts={posts}
                  categories={initialCategories}
                  onSelectTab={handleSelectTab}
                  onSelectCategory={handleSelectCategory}
                  onSelectPost={handleSelectPost}
                />
              )}

              {currentTab === 'blog' && (
                <BlogView
                  posts={posts}
                  categories={initialCategories}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  onSelectPost={handleSelectPost}
                />
              )}

              {currentTab === 'about' && (
                <AboutView
                  profile={profile}
                  onSelectTab={handleSelectTab}
                />
              )}

              {currentTab === 'contact' && (
                <ContactView profile={profile} />
              )}
            </div>

            {/* Complementary Sidebar Column */}
            <Sidebar
              profile={profile}
              posts={posts}
              onSelectTab={handleSelectTab}
              onSelectCategory={handleSelectCategory}
              onSelectTag={handleSelectTag}
              onSelectPost={handleSelectPost}
            />
          </div>
        )}
      </main>

      {/* Site Footer */}
      <Footer profile={profile} onSelectTab={handleSelectTab} />
    </div>
  );
}
