import { lucia } from '$lib/server/auth/lucia.js';
import { redirect } from '@sveltejs/kit'

export const GET = async ({ cookies }) => {
    const sessionId = cookies.get(lucia.sessionCookieName);
    
    if (sessionId) {
        await lucia.invalidateSession(sessionId);
        const sessionCookie = lucia.createBlankSessionCookie();
        
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
    }

    throw redirect(302, "/");
}