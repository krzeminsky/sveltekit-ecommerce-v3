<script lang="ts">
    export let label: string;
    export let src: string;
    export let alt: string;
</script>

<button aria-label={label} class="p-2 bg-transparent hover:bg-gray-200 active:bg-gray-300 transition-all rounded-full" on:click>
    <img {src} {alt} />
</button>