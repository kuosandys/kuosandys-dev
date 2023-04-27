import type { SvelteComponent } from 'svelte';
import type { Post } from '../../routes/api/posts/+server';

const MD_EXTENSION = '.md';
const ROUTES_FILEPATH = '/src/routes/posts/content/';

export async function fetchPosts(): Promise<Post[]> {
  const files = import.meta.glob('/src/routes/posts/**/*.md');
  const posts = await Promise.all(
    Object.entries(files).map(async ([filePath, loadFile]) => {
      const post = (await loadFile()) as SvelteComponent;
      const path = `${filePath.slice(ROUTES_FILEPATH.length, MD_EXTENSION.length * -1)}`;

      return { metadata: post.metadata, path };
    })
  );

  return posts;
}
