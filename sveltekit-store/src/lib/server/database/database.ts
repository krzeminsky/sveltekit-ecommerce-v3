import { DATA_PATH } from "$env/static/private";
import Database from "better-sqlite3";

export const database = new Database(`${DATA_PATH}/database.db`);