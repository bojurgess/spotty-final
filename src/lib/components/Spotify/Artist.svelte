<script lang="ts">
  import { spotifyData } from "$lib/utils/spotifyUtils";
  import { onDestroy, onMount } from "svelte";

  let songData = {
    data: null
  }

  const unsubscribe = spotifyData.subscribe((value) => {
    songData = value
  })

  onMount(() => {
    console.log(songData)
  })

  onDestroy(unsubscribe)
</script>

{#if songData.data !== null}
  <a href="/">{songData.data.item.name}</a>
{/if}