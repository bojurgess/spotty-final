<script lang="ts">
	import SpotifyPlayer from '$lib/components/Spotify/SpotifyPlayer.svelte';
	import ThemePicker from '$lib/components/Spotify/ThemePicker.svelte';

	let links: any[] = [
		{
			name: 'Steam',
			url: 'https://steamcommunity.com/id/penguino__/',
			class: 'fa-brands fa-steam fa-xl',
			color: '#000000',
			tooltip: 'penguino__'
		},
		{
			name: 'Spotify',
			url: 'https://open.spotify.com/user/8fzywdklm84r9hupsurfxdoj2',
			class: 'fa-brands fa-spotify fa-xl',
			color: '#1db954',
			tooltip: '—Beno'
		},
		{
			name: 'Github',
			url: 'https://github.com/bojurgess',
			class: 'fa-brands fa-github fa-xl',
			color: '#24292e',
			tooltip: 'bojurgess'
		},
		{
			name: 'Discord',
			url: 'https://discord.com/users/beno#8252',
			class: 'fa-brands fa-discord fa-xl',
			color: '#7289da',
			tooltip: 'beno#8252'
		}
	];
</script>

<div class="flex justify-center items-center h-[100vh] w-[100vw] bg-[#111111]">
	<section class="flex flex-col">
		<div class="flex flex-col justify-center mb-4 text-white">
			<h1 class="font-black text-8xl">Beno.</h1>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.youtube.com/watch?v=aKlcJJkK0H0"
				class="hover:underline decoration-2"
				><h2>Some people are diesels... FUCK ME. Those are trouble.</h2></a
			>
		</div>
		<SpotifyPlayer compactDisplay={true} />
		<article id="links" class="flex mt-4 w-2/3">
			{#each links as link}
				<a
					href={link.url}
					class="flex justify-center items-center rounded-full w-full h-12 mr-2 tooltip tooltip-bottom"
					data-tip={link.tooltip}
					style="background-color: {link.color};"
					target="_blank"
					rel="noreferrer"
				>
					<i class={link.class} />
				</a>
			{/each}
		</article>
	</section>
</div>