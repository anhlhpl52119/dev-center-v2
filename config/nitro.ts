import type { NuxtConfig } from 'nuxt/schema';

export const nitro: NuxtConfig['nitro'] = {
  serverAssets: [{
    baseName: 'contents',
    dir: './contents', // Relative to Nitro `srcDir`
  }],
};
