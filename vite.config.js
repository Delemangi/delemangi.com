import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve('.', 'src'),
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8088,
  },
  resolve: {
    alias: {
      '~bootstrap': resolve('.', 'node_modules/bootstrap'),
      '~bootstrap-icons': resolve('.', 'node_modules/bootstrap-icons'),
    },
  },
});
