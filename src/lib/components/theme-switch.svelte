<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from './icon.svelte';
    import { darkTheme } from '$lib/stores/theme';

    let className:string = '';
    let style="";

    export { className as class };
    export { style as style };
</script>

<Icon
	icon={`${$darkTheme === false ? 'icon-park-solid:sun-one' : 'hugeicons:moon-01'}`}
	class={cn(className)}
	color={`${$darkTheme === false ? 'black' : 'white'}`}
    Style={style}
    on:click={() => {
        darkTheme.toggle();
    }}
/>
