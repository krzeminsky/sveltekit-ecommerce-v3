<script lang="ts">
	import CircleSpinner from "../loading-spinners/circle-spinner.svelte";

    export let disabled = false;
    export let awaiting = false;

    $: disableButton = disabled || awaiting;
</script>

<button class="w-full h-11 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:pointer-events-none transition-all" disabled={disableButton} aria-disabled={disableButton}>
    {#if awaiting}
    <CircleSpinner size={24} />
    {:else}
    Submit
    {/if}
</button>