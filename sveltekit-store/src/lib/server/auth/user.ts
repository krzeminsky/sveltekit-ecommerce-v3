import { database } from "../database/database";
import { Argon2id } from "oslo/password";

const argon = new Argon2id();

export function userExists(username: string) {
    return database.prepare("SELECT 1 FROM user WHERE username = ?").pluck(true).get(username) == 1;
}

export function insertUser(username: string, password: string) {
    return database.prepare("INSERT INTO user VALUES(NULL, ?, ?)").run(username, argon.hash(password)).lastInsertRowid as number;
}

export function getUser(username: string) {
    return database.prepare("SELECT * FROM user WHERE username = ?").get(username) as { id: number, username: string, password: string }|undefined;
}

const DUMMY_USER_HASH = "5ab4855381f31f284c02d200ee127683ab01cfc3";
export async function verifyPassword(password: string, hash?: string) {    
    if (!hash) {
        await argon.verify(DUMMY_USER_HASH, password); // ? dummy hash is used to prevent brute force attackers from identifying valid usernames 
        return false;
    } else return await argon.verify(hash, password);
}