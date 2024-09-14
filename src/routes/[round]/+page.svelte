<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { trpc } from "$lib/trpc/client";
  import { page } from "$app/stores";
  import { newSubmissionSchema } from "$lib/zod/user";
  export let data: any;
  console.log(data);

    let link: string = '';

    // const start = () => {
    //     const roundId = $page.url.pathname.split('/')[2];
    //     trpc().submissionRouter.startSubmission.query({
    //         roundId: parseInt(roundId, 10),
    //         teamId: data.team.id,
    //         storyId: data.story.id
    //     }).then((data) => {
    //         console.log(data);
    //     }, (error) => {
    //         console.log(error);
    //     })
    // }

    const submit = () => {
        const round = $page.url.pathname.split('/')[1];
        const roundId = round === "round1" ? 1 : 2
        console.log(roundId);
        
        trpc().submissionRouter.startSubmission.query(newSubmissionSchema.parse({
            link: link,
            storyId: $page.data.team.storyId,
            teamId: $page.data.team.id,
            roundId: roundId
        })).then((data) => {
            alert("Successfully submitted " + data.status)
        }).catch((err) => {
            console.log(err);
            alert("Not submitted")
        })
    }
</script>

<div>
    <input type="text" bind:value={link} class="absolute w-64 h-12 top-[40%] right-[40%] z-20 text-black p-2 rounded-lg" >
    <div class="flex absolute top-[55%] right-[43%] space-x-6">
        <!-- <Button class="">Start</Button> -->
        
        <Button on:click={submit} class='z-30'>Submit</Button>
    </div>
</div>