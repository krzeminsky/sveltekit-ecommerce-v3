<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import AuthErrorDisplay from "$lib/components/form/auth-error-display.svelte";
	import SubmitButton from "$lib/components/form/submit-button.svelte";
    import TextField from "$lib/components/form/text-field.svelte";
	import type { ActionData, PageData } from "./$types";

    export let form: ActionData;

    let usernameValue: string;
    let passwordValue: string;

    $: isValid = usernameValue && passwordValue;
    let awaitingResponse = false;
</script>

<svelte:head>
    <title>Log in</title>
</svelte:head>

<div class="absolute-center w-96 text-center">
    <h1 class="text-3xl mb-4">Log in</h1>

    <form method="POST" class="w-full flex flex-col gap-2 mb-4" use:enhance={() => {
        awaitingResponse = true;
        
        return async ({ result }) => {
            await applyAction(result);

            awaitingResponse = false;
        }
    }}>
        <TextField id="username-input" name="username" label="Username" required bind:value={usernameValue} />
        <TextField id="password-input" name="password" label="Password" type="password" required bind:value={passwordValue} />
        <SubmitButton disabled={!isValid} awaiting={awaitingResponse} />

        {#if form}
        <AuthErrorDisplay authError={form.error} />
        {/if}
    </form>

    <a href="/signup" class="text-gray-400 underline">I already have an account</a>
</div>