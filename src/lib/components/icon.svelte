<script lang="ts">
    /**
     * @name Icon
     * 
     * @description Simplified button with icon
     * @abstract supports iconify and lucide(function based) icons 
     * 
     * @param icon @type {string | function} - icon name or icon component
     * 
     * @param class - button class
     * @param Style - icon class
     * @param Z - z-index
	 * @param color - icon color
     * 
     * @param on:click - click event
     * @param on:keydown - keydown event
    */
   
	import { cn } from '$lib/utils.js';
	// @ts-ignore
	import Icon from '@iconify/svelte';

	let className: string = '';
	let icon: any = undefined;
	let buttonClass: string = '';
	let zIndex: number = 10;
	let color: string = 'black';

	export { className as class };
	export { icon };
	export { buttonClass as Style };
	export { color as color };
	export { zIndex as Z };
</script>

<button class={cn(buttonClass, `z-[${zIndex}]`)} on:click on:keydown>
	{#if typeof icon === 'function'}
		<svelte:component this={icon} class={cn(className, `z-${zIndex + 1}`)} />
	{:else if typeof icon === 'string'}
		<Icon {icon} class={cn(className, `z-${zIndex + 1}`)} style={`color: ${color}`}/>
	{/if}
	<slot />
</button>