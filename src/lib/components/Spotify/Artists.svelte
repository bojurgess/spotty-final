<script lang="ts">
	import { spotifyData } from '$lib/utils/spotifyUtils';
	import { onDestroy } from 'svelte';
	import Link from '$lib/components/Link.svelte';

	let songData = {
		data: null
	};

	const unsubscribe = spotifyData.subscribe((value) => {
		songData = value;
	});

	onDestroy(unsubscribe);
</script>

{#if songData.data !== null}
	<span class="flex mb-4">
		{#each songData.data.item.artists as artist}
			{#if songData.data.item.artists.indexOf(artist) !== songData.data.item.artists.length - 1}
				<Link url={artist.external_urls.spotify} text={artist.name} />
				<span class="mr-1">{','}</span>
			{:else}
				<Link url={artist.external_urls.spotify} text={artist.name} />
			{/if}
		{/each}
	</span>
{/if}
