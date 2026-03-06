import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: 'src/main.js',
      name: 'STDateTimeTracker',
      fileName: () => 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      output: { assetFileNames: 'style.[ext]' }
    }
  }
});
