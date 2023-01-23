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
		init();
	});

	function init() {
		fetchSpotifyData().then(() => {
			if (colors !== null) {
				currentColor.set(colors[1].hex)
			} else {
				setTimeout(init, 1000 * 60)
				currentColor.set('#000000');
			}
		});
	}

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
			class="min-w-fit p-4 bg-indigo-500 text-black flex flex-col items-center rounded-2xl"
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
	{:else if colors === null}
		<div class="min-w-fit px-4 py-8 bg-[#1db954] text-black flex items-center rounded-2xl">
			<img src="/sadge.webp" alt="Sadge" class="max-w-[200px] pr-8 rounded-2xl" />
			<h1>I'm not listening to anything on spotify right now.</h1>
		</div>
	{/if}
{:else if dataLoaded === false}
<div class="min-w-fit p-4 bg-indigo-500 text-black flex flex-col items-center rounded-2xl">
	<h1>Loading Player...</h1>
</div>
{/if}
