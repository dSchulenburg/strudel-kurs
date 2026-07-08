import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is build-configurable so ONE codebase serves two targets:
//   - Standalone / Docker Hub image  -> STRUDEL_BASE=/            (served at root)
//   - Behind Traefik on lernmodule   -> STRUDEL_BASE=/strudel-kurs/ (prefix-stripped)
// Local `npm run dev` / `npm run build` default to the lernmodule subpath.
export default defineConfig({
  plugins: [react()],
  base: process.env.STRUDEL_BASE || '/strudel-kurs/',
  server: { port: 3030 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom'] },
      },
    },
  },
});
