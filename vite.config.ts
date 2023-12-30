import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/fonts/[name].[ext]',
            },
        },
    },
    server: {
        fs: {
            allow: ['assets', 'src', 'node_modules'],
        },
    },
})
