<script lang="ts">
	import { fetchSpotifyData, dataIsLoaded } from '$lib/utils/spotifyUtils';
	import { onMount, onDestroy } from 'svelte';

	import { colorPalette, currentColor } from '$lib/utils/colorUtils';

	export let compactDisplay: boolean;
	let colors: any = null;
	let dataLoaded: boolean = false;
	let selectedColor: string | null = null;

	import TrackDetails from './TrackDetails.svelte';
	import AlbumArt from './AlbumArt.svelte';
	import TrackProgress from './TrackProgress.svelte';

	const unsubscribe = colorPalette.subscribe((value) => {
		colors = value;
	});

	const unsubscribeCurrentColor = currentColor.subscribe((value) => {
		selectedColor = value;
	});

	const unsubscribeDataLoaded = dataIsLoaded.subscribe((value) => {
		dataLoaded = value;
	});

	onMount(() => {
		fetchSpotifyData().then(() => {
			if (selectedColor === null) currentColor.set(colors[1].hex);
		});
	});

	onDestroy(() => {
		unsubscribe();
		unsubscribeDataLoaded();
		unsubscribeCurrentColor();
		colors = null;
	});
</script>

{#if dataLoaded === true}
	{#if compactDisplay === false && colors !== null}
		<div
			style="background-color: {selectedColor};"
			class="max-w-fit p-4 bg-indigo-500 text-black flex flex-col items-center rounded-2xl"
		>
			<AlbumArt height="500px" />
			<div class="mt-6">
				<TrackDetails />
				<TrackProgress />
			</div>
		</div>
	{:else if compactDisplay === true && colors !== null}
		<div
			style="background-color: {selectedColor};"
			class="min-w-fit p-4 bg-red-500 text-black rounded-2xl flex items-center"
		>
			<AlbumArt height="250px" />
			<div class="p-8">
				<TrackDetails />
				<TrackProgress />
			</div>
		</div>
	{/if}
{/if}
