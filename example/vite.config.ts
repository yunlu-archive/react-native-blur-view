import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const extensions = [
  '.web.js',
  '.web.ts',
  '.web.jsx',
  '.web.tsx',
  '.mjs',
  '.js',
  '.mts',
  '.ts',
  '.jsx',
  '.tsx',
  '.json',
];

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __DEV__: !isProduction,
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['react-native-web'],
      },
    }),
  ],
  resolve: {
    extensions,
    alias: {
      'react-native': 'react-native-web',
      '@dppo/react-native-blur-view': path.resolve(__dirname, '../src/index'),
    },
  },
});
