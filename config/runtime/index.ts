import type { NuxtConfig } from 'nuxt/schema';
import { dev } from './public-variables/dev';
import { production } from './public-variables/production';

const runType = process.env.RUN_TYPE || 'production';
const publicEnvConfig: Record<string, any> = {
  dev,
  production,
};

export const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: publicEnvConfig[runType] || production,
};
