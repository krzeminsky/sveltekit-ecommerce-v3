<script lang="ts">
    import AccountIcon from "$lib/assets/icons/account.svg";
    import ShoppingBagIcon from "$lib/assets/icons/shopping-bag.svg";
	import IconButton from "$lib/components/ui/icon-button.svelte";
</script>

<div class="fixed top-0 left-0 w-full h-14 shadow-md bg-gray-50 z-50 flex items-center justify-between">
    <div/>
    
    <input type="search" placeholder="Search" class="mx-4 h-12 rounded-full bg-white px-4 border-2 border-gray-100 outline-none focus:outline-none focus:border-gray-300 transition-all min-w-0 max-w-96 flex-1 basis-0" />
    
    <div class="mr-4 flex gap-2">
        <IconButton src={ShoppingBagIcon} alt="Shopping bag" />
        <IconButton src={AccountIcon} alt="Account icon"/>
    </div>
</div>

<slot />