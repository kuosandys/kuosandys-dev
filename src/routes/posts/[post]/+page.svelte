<script lang="ts">
  import { TITLE } from '$constants';
  import { formatDate } from '../../../utils/helpers';
  import type { PageData } from './$types';

  export let data: PageData;

  const { metadata, Content } = data;
  const date = formatDate(new Date(metadata.date));
</script>

<svelte:head>
  <title>{TITLE} | {metadata.title}</title>
</svelte:head>

<article>
  <h1>{metadata.title}</h1>
  <span>{date}</span>
  <!-- <ul>
    tags:
    {#each metadata.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul> -->
  <div class="post__content">
    <Content />
  </div>
</article>

<style>
  .post__content {
    margin-top: var(--space-s);
  }
</style>
