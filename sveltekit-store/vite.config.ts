import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
    plugins: [sveltekit()],
    optimizeDeps: {
        exclude: ["oslo"]
    },
    server: {
        https: {
            key: fs.readFileSync(`./cert/key.pem`),
            cert: fs.readFileSync(`./cert/cert.pem`)
        },
        proxy: {}
    }
});