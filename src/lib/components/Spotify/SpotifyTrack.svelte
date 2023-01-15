<script lang="ts">
	import { getContext } from 'svelte';
	import { subscribe } from 'svelte/internal';
  import Link from '$lib/components/Link.svelte'

	const { songData, error, isLoading } = getContext('spotifyData');

	let name: string
  let url: string

	$: subscribe(songData, (value: any) => {
		name = value.item.name
    url = value.item.external_urls.spotify
	});
</script>

<h2>
  <Link text={name} {url} />
</h2>