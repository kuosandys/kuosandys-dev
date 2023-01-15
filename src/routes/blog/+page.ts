import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/api/posts');

  if (res.status >= 500) {
    throw error(500, 'Error loading posts');
  }

  const posts = await res.json();

  return { posts };
};
