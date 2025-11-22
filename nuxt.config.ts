import tailwindcss from '@tailwindcss/vite';
import { runtimeConfig } from './config/runtime';
import { typescript } from './config/typescript';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript,
  runtimeConfig,

  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon', '@nuxtjs/i18n', '@vueuse/nuxt', 'floating-vue/nuxt'],
  vite: { plugins: [tailwindcss()] },
  imports: {
    dirs: ['constants'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en',
        files: ['en/common.json'],
      },
      {
        code: 'vi',
        language: 'vi',
        name: 'Vietnamese',
        files: ['vi/common.json'],
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'vi',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'LOCALE',
    },
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
