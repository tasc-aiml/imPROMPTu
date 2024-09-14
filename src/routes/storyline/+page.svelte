<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";

  import { trpc } from "$lib/trpc/client";
  import { storySchema } from "$lib/zod/user";

  

  let description="Select title to see descrition"

  let stories: any[] = [];
  let selectedStory: any = null;
  export let data: any;

  trpc()
    .storyRouter.getAllStories.query()
    .then((data) => {
      stories = data.stories;
      
    });

  const selectStory = () => {
    trpc()
      .storyRouter.selectStory.mutate({
        teamId: data.team.id,
        storyId: selectedStory.id,
      })
      .then(
        (data) => {
          goto("/");
        },
        (error) => {
          alert("Error selecting story");
        }
      );
  };
</script>

<div class="grid grid-cols-3 w-2/3 right-[5%] absolute space-x-5 p-3">
  <div class="flex flex-col gap-4">
    {#each stories as story}
      <button
        on:click={() => {
          selectedStory = story;
          description = story.description
        }}
        class={`p-3 bg-blue-400 z-20 text-center text-wrap rounded-lg ${selectedStory === story ? "bg-blue-600" : ""}`}
        >{story.title}</button
      >
      {/each}
    </div>
    <div
      
      class={`p-3 bg-blue-400 z-20 text-center text-wrap rounded-lg `}
      >{description}</div
    >
  <div class="col-span-3 z-20 m-5 p-2 grid">
    <Button class="justify-self-center w-[15%]" on:click={selectStory}
      >Select</Button
    >
  </div>
</div>
