// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface SpotifyPlayer {
			device: {
				id: string;
				is_active: boolean;
				is_private_session: boolean;
				is_restricted: boolean;
				name: string;
				type: string;
				volume_percent: number;
			};
			shuffle_state: boolean;
			repeat_state: 'track' | 'context' | 'off';
			timestamp: number;
			context: {
				external_urls: { [key: string]: string };
				href: string;
				type: 'album' | 'artist' | 'playlist' | 'show' | 'episode';
				uri: string;
			} | null;
			progress_ms: number | null;
			item: {
				album: {
					album_type: 'album' | 'single' | 'compilation';
					artists: {
						external_urls: { [key: string]: string };
						href: string;
						id: string;
						name: string;
						type: 'artist';
						uri: string;
					}[];
					available_markets: string[];
					external_urls: { [key: string]: string };
					href: string;
					id: string;
					images: {
						height: number;
						url: string;
						width: number;
					}[];
					name: string;
					release_date: string;
					release_date_precision: 'year' | 'month' | 'day';
					total_tracks: number;
					type: 'album';
					uri: string;
				};
				artists: {
					external_urls: { [key: string]: string };
					href: string;
					id: string;
					name: string;
					type: 'artist';
					uri: string;
				}[];
				available_markets: string[];
				disc_number: number;
				duration_ms: number;
				explicit: boolean;
				external_ids: {
					isrc: string;
				};
				external_urls: { [key: string]: string };
				href: string;
				id: string;
				is_local: boolean;
				name: string;
				popularity: number;
				preview_url: string;
				track_number: number;
				type: 'track';
				uri: string;
			} | null;
			is_playing: boolean;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
