import type { SvelteComponent } from 'svelte';

const MD_EXTENSION = '.md';
const ROUTES_FILEPATH = '/src/routes/blog/posts/';

export async function fetchPosts() {
  const files = import.meta.glob('/src/routes/blog/**/*.md');
  const posts = await Promise.all(
    Object.entries(files).map(async ([filePath, loadFile]) => {
      const post = (await loadFile()) as SvelteComponent;
      const path = `/blog/${filePath.slice(ROUTES_FILEPATH.length, MD_EXTENSION.length * -1)}`;

      return { metadata: post.metadata, path };
    })
  );

  return posts;
}
