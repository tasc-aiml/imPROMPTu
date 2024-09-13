<script lang="ts">
	import Icon from './icon.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	$: hidden = true;

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', () => {
				hidden = window.scrollY < 300;
			});
		}

		return () => {
			if (browser) {
				window.removeEventListener('scroll', () => {
					hidden = window.scrollY < 300;
				});
			}
		};
	});
</script>

<Icon
	icon="bxs:up-arrow"
	class={`size-12 bg-black border rounded-lg p-1 fixed right-8 bottom-10 transition-all duration-500 ease-in-out transform ${
		hidden ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
	}`}
	on:click={() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}}
	color="white"
/>
