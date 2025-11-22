/* Refer to https://nuxt.com/docs/4.x/guide/going-further/runtime-config#typing-runtime-config */
declare module 'nuxt/schema' {
  /* Secret run time config */
  interface RuntimeConfig {}

  /* Public runtime config */
  interface PublicRuntimeConfig {
    runType: 'dev' | 'production';
    apiBaseUrl: string;
    defaultLocale: 'en' | 'vi';
    siteUrl: string;
    i18n: {
      baseUrl: string;
      defaultLocale: 'en' | 'vi';
    };
  }
}

export {};
