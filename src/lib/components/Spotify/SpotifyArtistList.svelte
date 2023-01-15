<script lang="ts">
	import { getContext } from 'svelte';
	import { subscribe } from 'svelte/internal';
	import SpotifyArtist from './SpotifyArtist.svelte';

	const { songData, error, isLoading } = getContext('spotifyData');

	let artists: any[] = [];

	$: subscribe(songData, (value: any) => {
		artists = value.item.artists;
	});
</script>

<span class="flex">
	{#each artists as artist, i}
			<SpotifyArtist name={artist.name} url={artist.external_urls.spotify} />
			{#if i !== artists.length - 1}
				<span class="mr-1">,</span>
			{/if}
	{:else}
		<p>No artists to show</p>
	{/each}
</span>
