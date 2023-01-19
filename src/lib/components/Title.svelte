<script lang="ts">
	import { currentColor } from '$lib/utils/colorUtils';

	let data: any = [
		{
			text: 'B',
			color: '#ff0000'
		},
		{
			text: 'e',
			color: '#00ff00'
		},
		{
			text: 'n',
			color: '#0000ff'
		},
		{
			text: 'o',
			color: '#ffff00'
		},
		{
			text: '.',
			color: '#00ffff'
		}
	];

	function handleClick(color: any) {
		currentColor.set(color);
	}
</script>

{#each data as item}
	<button
		on:click={() => {
			handleClick(item.color);
		}}><h2>{item.text}</h2></button
	>
{/each}
