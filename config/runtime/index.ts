import type { NuxtConfig } from 'nuxt/schema';
import { dev } from './public-variables/dev';
import { live } from './public-variables/live';

const runType = process.env.RUN_TYPE || 'live';
const publicEnvConfig: Record<string, any> = {
  dev,
  live,
};

export const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: publicEnvConfig[runType] || live,
};
