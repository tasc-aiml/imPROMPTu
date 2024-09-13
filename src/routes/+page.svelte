<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  
  import { trpc } from "$lib/trpc/client";
  import { storySchema } from "$lib/zod/user";

  trpc().storyRouter.getStory.query(storySchema.parse({storyId:"1"})).then((data) => {
	console.log(data);
  })
</script>

<div class="w-full h-full justify-center flex flex-col items-center">hero
	<Button on:click={() => {
		goto("/round1");
	}}>Round 1</Button>
	<Button on:click={() => {
		goto("/round2");
	}}>Round 2</Button>
</div>
