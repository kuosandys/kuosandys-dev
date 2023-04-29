<script lang="ts">
  import { TITLE } from '$constants';
  import Link from '$lib/components/Link.svelte';
  import { formatDate } from '../../utils/helpers';
  import type { PageData } from './$types';

  export let data: PageData;

  const { posts } = data;

  const sortedPosts = posts.sort(
    (a, b) => new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime()
  );
</script>

<svelte:head>
  <title>Posts &mdash; {TITLE}</title>
</svelte:head>

<h1>words</h1>

{#if posts.length === 0}
  <p>No words to display. Sad.</p>
{:else}
  <ul>
    {#each sortedPosts as post}
      <li>
        <span class="text--smaller">{formatDate(post.metadata.date, false)}</span>
        <Link path={`/posts/${post.path}`}>{post.metadata.title}</Link>
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }

  li {
    display: flex;
    flex-direction: column;
    gap: var(--space-3xs);
  }
</style>
