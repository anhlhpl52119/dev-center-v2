<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="mx-auto h-64 max-w-1600 px-16 lg:px-40">
      <div class="relative flex size-full items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-16 leading-30">
          <Icon
            name="svg:stove-text-logo"
            class="hidden h-16 w-71 md:block"
          />

          <span class="text-20 font-bold">
            {{ $t('common.bubbliz_guide') }}
          </span>
        </NuxtLink>

        <!-- right nav -->
        <div class="lg:relative ml-auto flex justify-end-safe items-center lg:w-600">
          <!-- external link -->
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

          <!-- search -->
          <SearchControl>
            <template v-if="false" #trigger="{ toggle, isShowed }">
              <button
                v-show="!isShowed"
                aria-label="Search page content"
                aria-describedby="Fuzzy search content of specific page"
                class="clickable hover:bg-abg-dimmed inline-flex items-center justify-center rounded-full p-6"
                @click="toggle"
              >
                <Icon
                  name="svg:search"
                  class="m-2 size-16"
                />
              </button>
            </template>
          </SearchControl>
        </div>

        <!-- menu -->
        <UserMenuControl />

        <UserMenuControl />
      </div>
    </nav>
  </header>
</template>
