<script lang="ts">
	import { setContext } from 'svelte';
	import fetchSpotifyData from '$lib/helpers/fetchSpotifyData';
  import SpotifyTrackDetails from './SpotifyTrackDetails.svelte';
	import SpotifyAlbumArt from './SpotifyAlbumArt.svelte';

	const { data: songData, error, isLoading } = fetchSpotifyData();

	setContext('spotifyData', { songData, error, isLoading });
</script>

{#if $isLoading}
	<p>Loading Player...</p>
{:else if $error}
	<p>An error occured while loading the player.</p>
{:else if $songData}
  <main>
    <SpotifyAlbumArt />
    <SpotifyTrackDetails />
  </main>
{/if}
