import { json } from '@sveltejs/kit';
import { fetchPosts } from '$lib/utils/postsUtils';

export const GET = async (): Promise<Response> => {
  try {
    const posts = await fetchPosts();
    return json(posts, { status: 200 });
  } catch (e) {
    return json({ message: (e as Error).message }, { status: 500 });
  }
};
