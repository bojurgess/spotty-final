<script lang="ts">
	import { getContext } from 'svelte';
	import { subscribe } from 'svelte/internal';
  import parseMilliseconds from '$lib/helpers/parseMilliseconds';

	const { songData, error, isLoading } = getContext('spotifyData');

  let progress_ms: number = 0;
  let duration_ms: number = 0;
  let progress_percent: number = 0;

	$: subscribe(songData, (value: any) => {
		progress_ms = value.progress_ms
    duration_ms = value.item.duration_ms
    progress_percent = (progress_ms / duration_ms) * 100
	});
</script>

<span class="flex items-center">
  <h3 class="mr-2">{parseMilliseconds(progress_ms)}</h3>
  <progress class="progress w-52" value={progress_percent} max="100"></progress>
  <h3 class="ml-2">{parseMilliseconds(duration_ms)}</h3>
</span>