<script lang="ts">
    import { type AnyMeltElement, emptyMeltElement, melt } from '@melt-ui/svelte'

    export let label: string;
    export let src: string;
    export let alt: string;

    export let element: AnyMeltElement = emptyMeltElement as AnyMeltElement;
</script>

<button aria-label={label} class="p-2 bg-transparent hover:bg-gray-200 active:bg-gray-300 transition-all rounded-full" on:click use:melt={$element}>
    <img {src} {alt} />
</button>