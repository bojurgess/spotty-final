import { writable } from 'svelte/store';
import { getColorPalette, colorPalette } from './colorUtils';

export async function fetchData() {
	const response = await fetch('https://getnowplaying.penguinoo.workers.dev/');
	return response.json();
}

export async function fetchSpotifyData() {
	const data = await fetchData();
	const colors = await getColorPalette(data.response.item.album.images[0].url);
	spotifyData.set({ data: data.response });
	colorPalette.set(colors);

	dataIsLoaded.set(true);

	return data.response;
}

export let spotifyData = writable({
	data: null
});

export let dataIsLoaded = writable(false);
