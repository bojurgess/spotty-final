<script>
	import SpotifyPlayer from '$lib/components/Spotify/SpotifyPlayer.svelte';
	import ThemePicker from '$lib/components/Spotify/ThemePicker.svelte';
	import { onMount } from 'svelte';

	let compactDisplay = false;

	function toggleCompactDisplay() {
		compactDisplay = !compactDisplay;
	}

	onMount(() => {
		window.location.href = '/links'
	})
</script>

<SpotifyPlayer {compactDisplay} />
<span class="flex">
	<button class="btn mr-2" on:click={toggleCompactDisplay}>Toggle View</button>
	<ThemePicker />
</span>
