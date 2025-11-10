import tailwindcss from '@tailwindcss/vite';
import { runtimeConfig } from './config/runtime';
import { typescript } from './config/typescript';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript,
  runtimeConfig,

  css: ['~/assets/css/app.css'],
  modules: [
    '@nuxt/icon',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    dirs: ['constants'],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    customCollections: [
      {
        prefix: 'svg',
        dir: './app/assets/svg',
        recursive: true, // include all the icons in nested directories:
      },
    ],
  },
});
