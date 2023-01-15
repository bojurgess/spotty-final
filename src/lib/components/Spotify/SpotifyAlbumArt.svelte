<script lang="ts">
	import { onMount, getContext } from 'svelte';

	const { songData } = getContext('spotifyData');

	let albumUrl: string = '';

	onMount(() => {
		songData.subscribe((value: any) => {
			albumUrl = value.item.album.images[0].url;
		});
	});
</script>

<img class="rounded-2xl" src={albumUrl} alt="Album Art" />
