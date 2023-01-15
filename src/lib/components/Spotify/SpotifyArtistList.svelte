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

{#each artists as artist}
	{#if artists.indexOf(artist) !== artists.length - 1}
		<SpotifyArtist name={artist.name} url={artist.external_urls.spotify} />{`, `}
	{:else}
		<SpotifyArtist name={artist.name} url={artist.external_urls.spotify} />
	{/if}
{/each}
