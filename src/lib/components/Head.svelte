<script lang="ts">
  export let title: string = '';
  $: fullTitle = title ? `${title} | kuosandys` : 'kuosandys';
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta property="og:title" content={fullTitle} />
</svelte:head>
