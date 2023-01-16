import { writable } from 'svelte/store'

export async function fetchData() {
	const response = await fetch('https://getnowplaying.penguinoo.workers.dev/');
	return response.json();
}

export async function fetchSpotifyData() {
	const data = await fetchData();
	spotifyData.set({ data: data.response });
	console.log(data.response)
}

export let spotifyData = writable({
  data: null
})
