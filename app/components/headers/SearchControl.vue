<script lang="ts" setup>
const show = ref(false);
</script>

<template>
  <div class="bg-abg-base right-0 left-0" :class="{ absolute: show }">
    <!-- Icon -->
    <button
      v-if="!show"
      aria-label="Search page content"
      aria-describedby="Fuzzy search content of specific page"
      class="clickable hover:bg-abg-dimmed inline-flex items-center justify-center rounded-full p-6"
      @click="show = !show"
    >
      <Icon name="svg:search" class="m-2 size-16" />
    </button>

    <!-- Search bar -->
    <input
      v-if="show"
      class="bd-radius-8 abd-base-1 w-full p-8"
      @input="show = !show"
    >
  </div>
</template>
