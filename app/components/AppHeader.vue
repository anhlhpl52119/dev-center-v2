<script setup lang="ts">
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
    <nav class="relative mx-auto h-64 max-w-1600 px-16 lg:px-40">
      <!-- Left -->
      <div class="relative flex h-full items-center">
        <div class="mr-auto">
          <NuxtLink to="/" class="flex items-center gap-16 leading-30">
            <Icon
              name="svg:stove-text-logo"
              class="hidden h-16 w-71 md:block"
            />

            <span class="text-20 font-bold">
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
            class="group clickable hover:bg-abg-dimmed hidden h-32 items-center justify-center gap-2 rounded-full py-7 pr-8 pl-12 sm:flex"
          >
            <span class="text-12 font-medium tracking-[-0.0132em]">
              {{ $t('common.go_to_creator_center') }}
            </span>

            <Icon
              name="svg:navigate-out"
              class="group-hover:text-primary m-2 size-12"
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
