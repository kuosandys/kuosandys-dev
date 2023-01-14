import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const post: SvelteComponent = await import(`../posts/${params.post}.md`);

    return { metadata: post.metadata, Content: post.default };
  } catch (e) {
    throw error(404, (e as Error).message);
  }
};
