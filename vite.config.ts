import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { glob } from 'glob';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.tsx',
                ...glob.sync('resources/js/pages/**/*.tsx')
            ],
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: 'localhost',
        },
        cors: {
            origin: '*',
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        },
        allowedHosts: true,
    },
});
