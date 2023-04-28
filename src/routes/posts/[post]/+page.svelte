<script lang="ts">
  import { TITLE } from '$constants';
  import { formatDate } from '../../../utils/helpers';
  import type { PageData } from './$types';

  export let data: PageData;

  const { metadata, Content } = data;
  const date = formatDate(metadata.date);
</script>

<svelte:head>
  <title>{metadata.title} &mdash; {TITLE}</title>
</svelte:head>

<article>
  <h1>{metadata.title}</h1>
  <span class="text--smaller">{date}</span>
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
