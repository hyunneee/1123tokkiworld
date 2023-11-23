// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.html', '**/*.js', '**/*.css', '**/*.png', '**/*.svg', '**/*.glb'],
    rollupOptions: {
      treeshake: false,
    },
  },
  resolve: {
    alias: {
      'three': 'three',
    // 'three': path.resolve(__dirn
      'src': path.resolve(__dirname, 'src'), // src 폴더를 짧은 별칭으로 설정
    },
  },
});
