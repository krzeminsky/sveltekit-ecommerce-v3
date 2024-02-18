<script lang="ts">
	import { AuthError } from "$lib/types/auth-error";

    export let authError: AuthError;
    let message = '';

    $: switch (authError) {
        case AuthError.InvalidData: message = 'Invalid data!'; break;
        case AuthError.UsernameExists: message = 'Username is already in use!'; break;
        case AuthError.CredentialsMissmatch: message = `Username and password don't match!`; break;
    }
</script>

<small class="block text-center text-red-500">{message}</small>