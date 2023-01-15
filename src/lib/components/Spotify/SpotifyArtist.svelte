<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let name: string;
	export let url: string;
</script>

<Link text={name} {url} />
