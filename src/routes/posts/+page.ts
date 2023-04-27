import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post } from '../api/posts/+server';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/api/posts');

  if (res.status >= 500) {
    throw error(500, 'Error loading posts');
  }

  const posts: Post[] = await res.json();

  return { posts };
};
