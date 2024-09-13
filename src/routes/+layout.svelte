<script lang="ts">
  import "../app.pcss";
  import { Navbar, ScrollToTop } from "$lib/components";
  import Robot from '$lib/components/robot.svelte';
  import Shapes from "$lib/components/shapes.svelte";
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import { darkTheme } from "$lib/stores/theme";
  import { loading, themeSet } from "$lib/stores/stores";
  import { navigating } from "$app/stores";
  import "../app.pcss";
  
  $: particlesConfig = {
        particles: {
            color: { value: $darkTheme ? '#ffffff' : '#000000' },
            move: { enable: true, speed: 2, random: false, direction: 'top', out_mode: 'in' },
            number: { value: 200 },
            size: { value: 1 },
        }
    };

    let onParticlesLoaded = (event: any) => {
        const particlesContainer = event.detail.particles;
    };

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });

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
    <Robot />
    <Shapes />
    <Particles
        id="tsparticles"
        class=""
        style=""
        options={particlesConfig}
        on:particlesLoaded="{onParticlesLoaded}"
/>
    <section id="main-content" class="w-full flex-grow">
      <slot />
    </section>
    <ScrollToTop />
    <!-- <Footer /> -->
  </div>
{/if}

<style>
</style>
