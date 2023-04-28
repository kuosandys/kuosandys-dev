<script>
  import { page } from '$app/stores';
</script>

<header>
  <nav>
    <ul>
      <li>
        <a class:active={$page.url.pathname === '/'} href="/">home</a>
      </li>
      <li>
        <a class:active={$page.url.pathname.includes('/posts')} href="/posts">posts</a>
      </li>
      <li>
        <a class:active={$page.url.pathname === '/about'} href="/about">about</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    padding: var(--space-s-l) 0;
  }

  ul {
    display: flex;
    gap: var(--space-s);
  }

  li:first-child {
    margin-right: auto;
  }

  a {
    box-shadow: none;
  }

  a:hover,
  a.active {
    box-shadow: inset 0 -10px var(--color-accent);
  }
</style>
