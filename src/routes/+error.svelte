<script lang="ts">
  import { TITLE } from '$constants';
  import { page } from '$app/stores';

  console.error(`${$page.status}: ${$page.error?.message}`);
</script>

<svelte:head>
  <title>{TITLE} | error</title>
</svelte:head>

<h1>{$page.status}</h1>
{#if $page.status === 404}
  <p>Not found.</p>
{:else}
  <p>Something went unexpectedly wrong.</p>
{/if}
