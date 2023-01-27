<svelte:head>
	<title>Beno</title>
</svelte:head>

<script>
	import '../app.css';
</script>

<body>
	<slot />
</body>

<style>
	body {
		background-color: #111111;
		background-image: url('/topography.svg')
	}
</style>