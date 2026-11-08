import { Post } from '../types';

/**
 * Filter posts by search query, category, and active tag.
 */
export function filterPosts(
  posts: Post[],
  query: string = '',
  category: string = 'All',
  tag: string = ''
): Post[] {
  const cleanQuery = query.trim().toLowerCase();
  const cleanCategory = category.trim().toLowerCase();
  const cleanTag = tag.trim().toLowerCase().replace(/^#/, '');

  return posts.filter((post) => {
    // Category match
    if (cleanCategory !== 'all' && cleanCategory !== '') {
      if (post.category.toLowerCase() !== cleanCategory) {
        return false;
      }
    }

    // Tag match
    if (cleanTag) {
      const hasTag = post.tags.some(
        (t) => t.toLowerCase().replace(/^#/, '') === cleanTag
      );
      if (!hasTag) return false;
    }

    // Search query match
    if (cleanQuery) {
      const inTitle = post.title.toLowerCase().includes(cleanQuery);
      const inExcerpt = post.excerpt.toLowerCase().includes(cleanQuery);
      const inCategory = post.category.toLowerCase().includes(cleanQuery);
      const inTags = post.tags.some((t) => t.toLowerCase().includes(cleanQuery));
      return inTitle || inExcerpt || inCategory || inTags;
    }

    return true;
  });
}

/**
 * Calculate reading time in minutes from text content.
 */
export function calculateReadingTime(content: string, wpm = 200): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} min read`;
}

/**
 * Aggregate categories with counts from posts.
 */
export function getCategoriesWithCounts(posts: Post[]): { name: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const post of posts) {
    counts[post.category] = (counts[post.category] || 0) + 1;
  }
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

/**
 * Aggregate tags with counts from posts.
 */
export function getTagsWithCounts(posts: Post[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const post of posts) {
    for (const tag of post.tags) {
      const clean = tag.startsWith('#') ? tag : `#${tag}`;
      counts[clean] = (counts[clean] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Sort posts by 'latest' or 'popular'.
 */
export function sortPosts(posts: Post[], sortBy: 'latest' | 'popular'): Post[] {
  return [...posts].sort((a, b) => {
    if (sortBy === 'popular') {
      return (b.views || 0) - (a.views || 0);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
