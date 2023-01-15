<script lang="ts">
  import { page } from '$app/stores';

  console.error(`${$page.status}: ${$page.error?.message}`);
</script>

<h1>{$page.status}</h1>
{#if $page.status === 404}
  <p>not found.</p>
{:else}
  <p>something went unexpectedly wrong.</p>
{/if}
