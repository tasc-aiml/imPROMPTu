<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  
  import { trpc } from "$lib/trpc/client";
  import { storySchema } from "$lib/zod/user";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  console.log(data);
  let storyData: any = null;


  import { page } from "$app/stores";
  onMount(() => {
	trpc().storyRouter.getStory.query(storySchema.parse({storyId: $page.data.team.storyId})).then((data) => {
	console.log(data);
	storyData = data;
  })
  })
</script>

<div class="w-full h-full justify-center flex flex-col items-center">
	{#if data.story}
		<Button class="bg-[#cb6ce6] absolute top-[40%] w-56 h-16 rounded-full text-4xl z-20" on:click={() => {
			goto("/round1");
		}}>Round 1</Button>
		<Button class="bg-[#80a3ff] absolute top-[60%] right-[25%] w-56 h-16 rounded-full text-4xl z-20" on:click={() => {
			goto("/round2");
		}}>Round 2</Button>
	{:else}
		<Button class="absolute top-[50%] right-[37%] w-72 h-16 rounded-full text-4xl z-20 dark:bg-slate-300 bg-slate-600" on:click={() => {
			goto("/storyline");
		}}>Select Storyline</Button>
	{/if}
</div>
