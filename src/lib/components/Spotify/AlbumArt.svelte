<script lang="ts">
	import { spotifyData } from '$lib/utils/spotifyUtils';
	import { onDestroy } from 'svelte';

	export let height: string;

	let songData = {
		data: null
	};

	const unsubscribe = spotifyData.subscribe((value) => {
		songData = value;
	});

	onDestroy(unsubscribe);
</script>

{#if songData.data !== null}
	<img
		src={songData.data.item.album.images[0].url}
		alt="Album Art"
		class="rounded-2xl"
		style="height: {height};"
	/>
{/if}

<style>
	img {
		box-shadow: 0 9px 9px 0 rgba(0, 0, 0, 0.3), 0 0 29px 0 rgba(0, 0, 0, 0.4);
	}
</style>
