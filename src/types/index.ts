export interface Profile {
  name: string;
  initials: string;
  siteTitle: string;
  tagline: string;
  role: string;
  location: string;
  bioShort: string;
  bioLong: string;
  avatarUrl: string;
  experienceYears: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
  coverImage?: string;
}

export interface CVData {
  personalData: { label: string; value: string }[];
  skills: { category: string; items: string[] }[];
  experiences: { period: string; role: string; company: string; description?: string }[];
  projects: { name: string; title: string; link?: string; description: string; tech: string[] }[];
  certificates: { year: string; title: string; issuer: string }[];
  languages: { language: string; proficiency: string }[];
}

export interface AboutStats {
  yearsShipping: string;
  productsBuilt: string;
  appsDelivered: string;
  customSystems: string;
}

export type NavTab = 'home' | 'blog' | 'cv' | 'about' | 'contact';
