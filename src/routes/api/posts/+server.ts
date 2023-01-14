import { json } from '@sveltejs/kit';
import { fetchPosts } from '$lib/utils/apiUtils';

export const GET = async (): Promise<Response> => {
  const posts = await fetchPosts();
  return json(posts);
};
