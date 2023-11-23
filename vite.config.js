// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.html', '**/*.js', '**/*.css', '**/*.glb', '**/*/*.glb'],
    rollupOptions: {
      treeshake: false,
    },
  },
  resolve: {
    alias: {
      // 'three': 'three',
      'three': path.resolve(__dirname, 'node_modules/three'),
    },
  },
});
