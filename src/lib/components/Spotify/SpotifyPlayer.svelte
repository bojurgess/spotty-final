<script lang="ts">
	import { setContext } from 'svelte';
	import fetchSpotifyData from '$lib/helpers/fetchSpotifyData';
	import SpotifyTrackDetails from './SpotifyTrackDetails.svelte';
	import SpotifyAlbumArt from './SpotifyAlbumArt.svelte';
	import SpotifyTrackProgress from './SpotifyTrackProgress.svelte';

	const { data: songData, error, isLoading } = fetchSpotifyData();

	setContext('spotifyData', { songData, error, isLoading });
</script>

{#if $isLoading}
	<p>Loading Player...</p>
{:else if $error}
	<p>An error occured while loading the player.</p>
{:else if $songData}
	<main class="text-black text-2xl flex flex-col items-center max-w-fit rounded-2xl bg-gray-500 p-6 text-center">
		<SpotifyAlbumArt />
		<SpotifyTrackDetails />
    <SpotifyTrackProgress />
	</main>
{/if}
