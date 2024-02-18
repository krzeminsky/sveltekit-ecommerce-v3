<script lang="ts">
    export let id: string;
    export let name: string;
    export let label: string;

    export let type: string = 'text';
    export let placeholder = label;
    export let required = false;
    export let autocomplete = 'nope';

    export let value = '';
</script>

<div class="relative mt-8 w-full">
    <input {id} {name} {placeholder} {type} {autocomplete} {required} class="w-full px-4 p-2 border-2 border-gray-300 rounded-lg outline-none focus:outline-none focus:border-gray-500 transition-all peer" on:input={e => value = e.currentTarget.value} />
    <label for={id} class="select-none absolute bottom-full left-1 bg-white peer-focus:translate-y-1/2 peer-focus:left-3 peer-focus:px-1 transition-all">{label}</label>
</div>