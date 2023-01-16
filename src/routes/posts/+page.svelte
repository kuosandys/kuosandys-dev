<script>
  export let data;
  const { posts } = data;
</script>

<h1>bunch of rambling</h1>

{#if posts.length === 0}
  <p>no posts to display</p>
{:else}
  <ul>
    {#each posts as post}
      <li><a href={`/posts/${post.path}`}>{post.metadata.title}</a></li>
    {/each}
  </ul>
{/if}
