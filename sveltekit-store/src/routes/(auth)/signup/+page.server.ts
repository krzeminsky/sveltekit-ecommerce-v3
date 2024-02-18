import { lucia } from '$lib/server/auth/lucia.js';
import { insertUser, userExists } from '$lib/server/auth/user.js';
import { AuthError } from '$lib/types/auth-error.js';
import { userAuthSchema } from '$lib/validation/user-auth-schema.js'
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies, url }) => {
        try {
            const data = userAuthSchema.parse(Object.fromEntries(await request.formData()));
            
            if (userExists(data.username)) return fail(400, { error: AuthError.UsernameExists });

            const userId = insertUser(data.username, data.password);

            const session = await lucia.createSession(userId.toString(), { });
            const sessionCookie = lucia.createSessionCookie(session.id);

            cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        } catch {
            return fail(400, { error: AuthError.InvalidData });
        }

        throw redirect(302, `/${url.searchParams.get('returnTo')??''}`);
    }
}