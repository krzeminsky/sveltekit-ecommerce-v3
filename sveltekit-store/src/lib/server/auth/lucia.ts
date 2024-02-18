import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { database } from "../database/database";

const sqliteAdapter = new BetterSqlite3Adapter(database, {
    user: 'user',
    session: 'session'
});

export const lucia = new Lucia(sqliteAdapter, {
    sessionCookie: {
        attributes: {
            secure: true
        }
    },

    getUserAttributes: (attributes) => {
        return {
            username: attributes.username
        }
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: { 
            username: string;
        }
    }
}