import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  // TODO: remove after home page is implemented
  throw redirect(301, '/blog');
};
