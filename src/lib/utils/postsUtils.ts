import type { SvelteComponent } from 'svelte';
import { pipe } from './helper';

const MD_EXTENSION = '.md';
const ROUTES_FILEPATH = '/src/routes/posts/content/';

export type Post = {
  metadata: Record<string, unknown>;
  path: string;
};

export async function fetchPosts() {
  const files = import.meta.glob('/src/routes/posts/**/*.md');
  const posts = await Promise.all(
    Object.entries(files).map(async ([filePath, loadFile]) => {
      const post = (await loadFile()) as SvelteComponent;
      const path = `${filePath.slice(ROUTES_FILEPATH.length, MD_EXTENSION.length * -1)}`;

      return { metadata: post.metadata, path };
    })
  );

  return pipe(posts, sortByDate);
}

function sortByDate(posts: Post[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date as string).getTime() - new Date(a.metadata.date as string).getTime()
  );
}
