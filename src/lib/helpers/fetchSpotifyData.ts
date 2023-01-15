import { writable } from 'svelte/store';

export default function fetchSpotifyData() {
	const data = writable();
	const error = writable();
	const isLoading = writable(false);

	async function fetchData() {
		try {
			const response = await fetch('https://getnowplaying.penguinoo.workers.dev/');
			const { response: songData } = await response.json();
			data.set(songData);
			error.set('');
		} catch (err) {
			data.set('');
			error.set(err);
		}
		isLoading.set(false);
	}
	fetchData();

	return { data, error, isLoading };
}
