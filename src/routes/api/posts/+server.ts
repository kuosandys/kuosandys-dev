import { json } from '@sveltejs/kit';
import { fetchPosts } from '$lib/utils/postsUtils';

export interface Post {
  metadata: {
    date: string;
    title: string;
    tags: string[];
  };
  path: string;
}

export const GET = async (): Promise<Response> => {
  try {
    const posts = await fetchPosts();
    return json(posts, { status: 200 });
  } catch (e) {
    return json({ message: (e as Error).message }, { status: 500 });
  }
};
