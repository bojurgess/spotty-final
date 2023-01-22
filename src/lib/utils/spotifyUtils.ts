import { writable } from 'svelte/store';
import { getColorPalette, colorPalette } from './colorUtils';

export async function fetchData() {
	const response = await fetch('https://getnowplaying.penguinoo.workers.dev/');
	const data = await response.json();
	return {
		status: response.status,
		response: data.response
	}
}

export async function fetchSpotifyData() {
	const data = await fetchData();

	if (data.status === 200) {
		const colors = await getColorPalette(data.response.item.album.images[0].url);
		spotifyData.set({ data: data.response });
		colorPalette.set(colors);

		dataIsLoaded.set(true);

		return data.response;
	} else if (data.status === 204) {
		spotifyData.set({ data: data.response });
		colorPalette.set(null);

		dataIsLoaded.set(true);

		return null;
	} else {
		spotifyData.set({ data: null })
		colorPalette.set(null);

		dataIsLoaded.set(true);
	}
}

export let spotifyData = writable({
	data: null
});

export let dataIsLoaded = writable(false);
