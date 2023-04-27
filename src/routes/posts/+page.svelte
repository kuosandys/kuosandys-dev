<script lang="ts">
  import { TITLE } from '$constants';
  import { formatDate } from '../../utils/helpers';
  import type { PageData } from './$types';

  export let data: PageData;

  const { posts } = data;

  const sortedPosts = posts.sort(
    (a, b) => new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime()
  );
</script>

<svelte:head>
  <title>{TITLE} | posts</title>
</svelte:head>

<h1>words</h1>

{#if posts.length === 0}
  <p>No words to display. Sad.</p>
{:else}
  <ul>
    {#each sortedPosts as post}
      <li>
        <a href={`/posts/${post.path}`}>{post.metadata.title}</a>
        <span class="post__date">{formatDate(post.metadata.date, false)}</span>
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  li {
    display: flex;
    flex-direction: column;
  }
</style>
