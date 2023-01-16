<script lang="ts">
  import type { PageData } from './$types';
  import Head from '$lib/components/Head.svelte';

  export let data: PageData;
  const { metadata, Content } = data;
</script>

<Head title={metadata.title} />

<article>
  <h1>{metadata.title}</h1>
  <span>date: {metadata.date ?? 'unknown'}</span>
  <ul>
    tags:
    {#each metadata.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
  <div class="post__content">
    <Content />
  </div>
</article>

<style>
  ul {
    display: flex;
  }

  li {
    margin-left: 0.5rem;
  }

  .post__content {
    margin-top: 1rem;
  }
</style>
