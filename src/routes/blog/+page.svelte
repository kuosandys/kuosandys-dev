<script>
  export let data;
  const { posts } = data;
</script>

<h1>bunch of rambling</h1>

<ul>
  {#each posts as post}
    <li><a href={post.path}>{post.metadata.title}</a></li>
  {/each}
</ul>
