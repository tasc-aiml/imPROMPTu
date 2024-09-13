<script lang="ts">
  import "../app.pcss";
  import { Navbar, ScrollToTop } from "$lib/components";
  import { darkTheme } from "$lib/stores/theme";
  import { loading, themeSet } from "$lib/stores/stores";
  import { navigating } from "$app/stores";
  import "../app.pcss";

  $darkTheme;
  $themeSet;
  $: $loading = !!$navigating; 
</script>

<svelte:head>
  <title>TASC | imPROMPTu</title>
  <meta name="description" content="imPROMPTu submissions" />
</svelte:head>

{#if $loading}
  <div class="app min-h-screen flex flex-col items-center justify-center">
    <div class="loader">Loading</div>
  </div>
{:else if $themeSet}
  <div class="app min-h-screen flex flex-col">
    <Navbar />
    <section id="main-content" class="w-full flex-grow">
      <slot />
    </section>
    <ScrollToTop />
    <!-- <Footer /> -->
  </div>
{/if}

<style>
</style>
