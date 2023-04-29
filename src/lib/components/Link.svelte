<script lang="ts">
  export let path: string;
  export let active: boolean | undefined = undefined;
</script>

<a href={path} {...$$restProps}>
  <span class:active class:inactive={active === false}>
    <slot />
  </span>
</a>

<style>
  span {
    background: linear-gradient(180deg, transparent 50%, var(--color-accent) 50%);
    background-size: 100% 0.1rem;
    background-position-y: 100%;
    background-repeat: no-repeat;
    padding-bottom: 0.1rem;
    transition: all 0.3s ease-out;
  }

  span.inactive {
    background-size: 100% 0rem;
  }

  span:hover,
  span.active {
    background-size: 100% 1.2rem;
  }
</style>
