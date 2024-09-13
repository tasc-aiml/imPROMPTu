<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="w-full h-full justify-center flex flex-col items-center">hero
	<Button on:click={() => {
		goto("/round1");
	}}>Round 1</Button>
	<Button on:click={() => {
		goto("/round2");
	}}>Round 2</Button>
</div>
