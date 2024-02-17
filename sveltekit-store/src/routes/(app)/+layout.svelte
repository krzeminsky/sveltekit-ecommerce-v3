<script lang="ts">
    import AccountIcon from "$lib/assets/icons/account.svg";
    import ShoppingBagIcon from "$lib/assets/icons/shopping-bag.svg";
	import IconButton from "$lib/components/ui/icon-button.svelte";
	import { fadeScale } from "$lib/transitions/fade-scale";
    import { melt, createDropdownMenu } from "@melt-ui/svelte";
	import type { LayoutData } from "./$types";

    export let data: LayoutData;

    const { elements: { trigger, menu, item, separator }, states: { open } } = createDropdownMenu({ forceVisible: true });
</script>

<div class="fixed top-0 left-0 w-full h-14 shadow-md bg-gray-50 z-50 flex items-center justify-between">
    <div/>
    
    <input type="search" placeholder="Search" class="mx-4 h-12 rounded-full bg-white px-4 border-2 border-gray-100 outline-none focus:outline-none focus:border-gray-300 transition-all min-w-0 max-w-96 flex-1 basis-0" />
    
    <div class="mr-4 flex gap-2">
        <a href="/shopping-bag">
            <IconButton label="Shopping bag" src={ShoppingBagIcon} alt="Shopping bag" />
        </a>
        
        <div use:melt={$trigger}>
            <IconButton label="Account actions" src={AccountIcon} alt="Account actions" />
        </div>
    </div>
</div>

{#if $open}
<div id="menu" class="p-2 bg-white z-10 origin-top-right shadow-md rounded-lg flex flex-col gap-1" use:melt={$menu} transition:fadeScale={{}}>
    {#if data.user}
    <a href="/account" class="menu-item" use:melt={$item}>Account</a>
    <a href="/dashboard" class="menu-item" use:melt={$item}>Dashboard</a>
    <div class="bg-gray-500 h-[1px]" use:melt={$separator}/>
    <a href="/logout" class="menu-item">Logout</a>
    {:else}
    <a href="/login" class="menu-item">Log in</a>
    {/if}
</div>
{/if}

<slot />

<style lang="postcss">
    .menu-item {
        @apply bg-transparent hover:bg-gray-100 transition-all rounded-md px-2 py-1;
    }
</style>