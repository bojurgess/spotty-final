<script lang="ts">
	import { colorPalette, currentColor } from '$lib/utils/colorUtils';
	import { dataIsLoaded } from '$lib/utils/spotifyUtils';
	import { onMount, onDestroy } from 'svelte';

	let colors: any = null;
	let dataLoaded: boolean = false;

	const unsubscribe = colorPalette.subscribe((value) => {
		colors = value;
	});

	const unsubscribeDataLoaded = dataIsLoaded.subscribe((value) => {
		dataLoaded = value;
	});

	function changeColor(color: any) {
		currentColor.set(color);
	}

	onDestroy(() => {
		unsubscribe();
		unsubscribeDataLoaded();
		colors = null;
	});
</script>

{#if dataLoaded === true}
	{#if colors !== null}
		<span class="flex py-2 rounded-md max-w-fit">
			{#each colors as color}
				<button
					style="background-color: {color.hex};"
					class="rounded-full w-[32px] h-[32px] mx-[1px]"
					on:click={() => {
						changeColor(color.hex);
					}}
				/>
			{/each}
		</span>
	{/if}
{/if}
