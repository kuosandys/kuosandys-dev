<script lang="ts">
  import { TITLE } from '$constants';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>{TITLE} | home</title>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
