import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behaviour: 'wrap', properties: { class: 'post__header-link' } }],
      ],
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $lib: '/src/lib',
    },
  },
};

export default config;
