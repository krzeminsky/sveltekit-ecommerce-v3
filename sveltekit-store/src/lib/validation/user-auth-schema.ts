import { z } from "zod";

export const userAuthSchema = z.object({
    username: z.string().min(1).max(16).regex(/^[a-zA-Z0-9]+$/),
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]+$/)
});