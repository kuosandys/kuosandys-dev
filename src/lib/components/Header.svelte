<script>
  import { page } from '$app/stores';
  import Link from './Link.svelte';
</script>

<header>
  <nav>
    <ul>
      <li>
        <Link path="/" active={$page.url.pathname === '/'}>home</Link>
      </li>
      <li>
        <Link path="/posts" active={$page.url.pathname === '/posts'}>posts</Link>
      </li>
      <li>
        <Link path="/about" active={$page.url.pathname === '/about'}>about</Link>
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
</style>
