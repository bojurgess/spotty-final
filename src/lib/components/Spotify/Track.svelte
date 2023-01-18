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
	<h2 class="font-bold text-xl">
		<Link url={songData.data.item.external_urls.spotify} text={songData.data.item.name} />
	</h2>
{/if}
