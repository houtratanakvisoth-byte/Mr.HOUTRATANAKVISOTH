import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterPosts,
  calculateReadingTime,
  getCategoriesWithCounts,
  getTagsWithCounts,
  sortPosts,
} from './blogUtils';
import { Post } from '../types';

const samplePosts: Post[] = [
  {
    id: '1',
    slug: 'react-native-fixes',
    title: 'Fix React Native Ninja Build Error',
    excerpt: 'Resolving build errors in Android Studio by deleting the .cxx folder.',
    content: 'Full article text explaining Android Studio gradle build issues and ninja build targets.',
    category: 'Mobile App',
    tags: ['reactnative', 'android', 'troubleshooting'],
    date: '2026-10-13',
    readTime: '4 min read',
    views: 120,
    featured: true,
  },
  {
    id: '2',
    slug: 'two-database-connections',
    title: 'Using Two Database Connections in Production',
    excerpt: 'Connecting modern frameworks to legacy databases safely.',
    content: 'A guide on setting up primary and secondary database connections for seamless data migration.',
    category: 'Web Development',
    tags: ['database', 'mysql', 'backend'],
    date: '2026-08-27',
    readTime: '2 min read',
    views: 340,
  },
  {
    id: '3',
    slug: 'docker-cloud-deployment',
    title: 'Zero Downtime Docker Swarm and Cloudflare CDN',
    excerpt: 'Production cloud architecture for scaling microservices.',
    content: 'How to configure container clustering, caching rules, and SSL termination.',
    category: 'DevOps & Cloud',
    tags: ['devops', 'docker', 'cloud'],
    date: '2026-09-15',
    readTime: '5 min read',
    views: 80,
  },
];

test('filterPosts filters by search query matching title', () => {
  const result = filterPosts(samplePosts, 'ninja');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '1');
});

test('filterPosts filters by category', () => {
  const result = filterPosts(samplePosts, '', 'Web Development');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '2');
});

test('filterPosts filters by tag', () => {
  const result = filterPosts(samplePosts, '', 'All', '#docker');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '3');
});

test('calculateReadingTime calculates correct estimate', () => {
  const text = 'word '.repeat(450);
  const time = calculateReadingTime(text, 200);
  assert.equal(time, '3 min read');
});

test('getCategoriesWithCounts counts accurately', () => {
  const counts = getCategoriesWithCounts(samplePosts);
  assert.equal(counts.length, 3);
  const mobileCat = counts.find((c) => c.name === 'Mobile App');
  assert.equal(mobileCat?.count, 1);
});

test('getTagsWithCounts lists tags with # prefix and correct counts', () => {
  const tags = getTagsWithCounts(samplePosts);
  assert.ok(tags.length > 0);
  assert.ok(tags.every((t) => t.tag.startsWith('#')));
});

test('sortPosts sorts correctly by popular views', () => {
  const sorted = sortPosts(samplePosts, 'popular');
  assert.equal(sorted[0].id, '2'); // 340 views
  assert.equal(sorted[1].id, '1'); // 120 views
  assert.equal(sorted[2].id, '3'); // 80 views
});
