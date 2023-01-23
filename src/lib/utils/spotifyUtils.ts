import { writable } from 'svelte/store';
import { getColorPalette, colorPalette } from './colorUtils';

export async function fetchData() {
	const response = await fetch('https://getnowplaying.penguinoo.workers.dev/' + new URLSearchParams({
		market: 'US',
	}));
	if (response.status === 200 || response.status === 401) {
		const data = await response.json();
		return {
			status: response.status,
			response: data.response
		}
	} else if (response.status === 204) {
		return {
			status: response.status,
			response: null
		}
	} else {
		return {
			status: response.status,
			response: response.statusText
		}
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
