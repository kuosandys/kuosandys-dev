<script lang="ts">
  import '../app.css';
  import Head from '$lib/components/Head.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Head />

<Header />

<main>
  <slot />
</main>

<Footer />
