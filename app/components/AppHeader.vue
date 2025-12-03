<script setup lang="ts">
import { Dropdown as VDropdown } from 'floating-vue';

const isShowLanguageMenus = ref<boolean>(false);
const { locale, setLocale } = useI18n();
const DEFAULT_LOCALES: Record<string, any> = {
  ko: { code: 'ko', name: '한국어', iso: 'ko-KR' },
  en: { code: 'en', name: 'English (US)', iso: 'en-US' },
};
const search = ref('');
</script>

<template>
  <header>
    <nav class="mx-auto h-64 max-w-1600 px-16 lg:px-40 relative">
      <!-- Left -->
      <div class="h-full flex items-center relative">
        <div class="mr-auto">
          <NuxtLink to="/" class="leading-30 flex items-center gap-16">
            <Icon name="svg:stove-text-logo" class="hidden md:block w-71 h-16" />

            <span class="font-bold text-20">
              {{ $t('common.bubbliz_guide') }}
            </span>
          </NuxtLink>
        </div>

        <!-- right -->
        <div class="flex items-center">
          <!-- Dev center link -->
          <NuxtLink
            to="#"
            external
            target="_blank"
            rel="noopener noreferrer"
            class="hidden group clickable sm:flex gap-2 items-center justify-center h-32 py-7 pl-12 pr-8 rounded-full hover:bg-abg-dimmed"
          >
            <span class="tracking-[-0.0132em] text-12 font-medium">
              {{ $t('common.go_to_creator_center') }}
            </span>

            <Icon
              name="svg:navigate-out"
              class="group-hover:text-primary size-12 m-2"
            />
          </NuxtLink>

          <!-- search icon -->
          <SearchControl />

          <!-- menu -->
          <UserMenuControl />
        </div>
      </div>
    </nav>
  </header>
</template>
