<script setup lang="ts">
const isAuthentication = false;
</script>

<template>
  <button
    aria-label="Toggle user menu"
    aria-describedby="Show menu"
    aria-pressed="false"
    class="md:hidden clickable hover:bg-abg-dimmed ml-4 inline-flex items-center justify-center rounded-full p-8"
  >
    <Icon name="svg:dot-vertical" class="size-18" />
  </button>

  <button
    aria-label="Switch locale"
    aria-describedby="Change locale"
    aria-pressed="false"
    class="hidden md:inline-flex clickable hover:bg-abg-dimmed ml-24 items-center justify-center rounded-full p-10"
  >
    <Icon name="svg:locale" class="size-20" />
  </button>

  <button
    aria-label="User login"
    aria-describedby="Info logged user"
    aria-pressed="false"
    class="hidden md:inline-flex clickable hover:bg-abg-dimmed ml-16 items-center justify-center rounded-full p-6"
  >
    <Icon name="svg:locale" class="size-20" />
  </button>

  <ClientOnly>
    <div
      id="generateGNBScript"
      class="stds-gnb-end "
      :class="[isAuthentication ? 'block' : 'hidden md:block']"
    />
    <template #fallback>
      <div
        id="generateGNBScript"
        class="stds-gnb-end "
        :class="[isAuthentication ? 'd-block' : 'hidden md:block']"
      >
        <div class="placeholder-glow">
          <span class="placeholder avatar-skeleton-gnb" />
        </div>
      </div>
    </template>
  </ClientOnly>
</template>
