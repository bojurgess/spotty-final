<script lang="ts">
  import { fetchSpotifyData } from "$lib/utils/spotifyUtils";
	import { onMount } from "svelte";

  import Artist from './Artist.svelte';

  onMount(async () => {
    fetchSpotifyData()
  })
</script>

<Artist /><br/>
<button on:click={fetchSpotifyData}>Refetch Data</button>