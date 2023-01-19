<script>
	import { spotifyData, fetchSpotifyData } from '$lib/utils/spotifyUtils';
	import { onDestroy } from 'svelte';
	import parseMilliseconds from '$lib/helpers/parseMilliseconds';

	let songData = {
		data: null
	};

	let progress = 0;
	let progressPercent = 0;
	let duration = 0;

	let timeoutId = setTimeout(async () => {
		await fetchSpotifyData().then((data) => {
			progress = data.progress_ms;
			duration = data.item.duration_ms;
			progressPercent = (progress / duration) * 100;

			updateProgress();
		});
	}, 1000);

	function updateProgress() {
		progress += 1000;
		if (progress + 1000 < duration) {
			setTimeout(updateProgress, 1000);
			updateProgressBar();
		} else resetProgressBar();
	}

	function updateProgressBar() {
		progressPercent = (progress / duration) * 100;
	}

	function resetProgressBar() {
		setTimeout(() => {
			fetchSpotifyData().then((data) => {
				(progress = data.progress_ms),
					(duration = data.item.duration_ms),
					(progressPercent = (progress / duration) * 100);

				updateProgress();
			});
		});
	}

	const unsubscribe = spotifyData.subscribe((value) => {
		songData = value;
	});

	onDestroy(() => {
		unsubscribe();
		clearTimeout(timeoutId);
	});
</script>

{#if songData.data !== null}
	<span class="flex items-center">
		<h3 class="mr-2">{parseMilliseconds(progress)}</h3>
		<progress class="progress w-52" value={progressPercent} max="100" />
		<h3 class="ml-2">{parseMilliseconds(duration)}</h3>
	</span>
{/if}
