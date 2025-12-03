<script lang="ts" setup>
const show = ref(false);
</script>

<template>
  <div class="left-0 right-0 bg-abg-base" :class="{ absolute: show }">
    <!-- Icon -->
    <button
      v-if="!show"
      aria-label="Search page content"
      aria-describedby="Fuzzy search content of specific page"
      class="p-6 clickable rounded-full hover:bg-abg-dimmed inline-flex items-center justify-center"
      @click="show = !show"
    >
      <Icon
        name="svg:search"
        class="size-16 m-2"
      />
    </button>

    <!-- Search bar -->
    <input
      v-if="show"
      class="p-8 bd-radius-8 abd-base-1 w-full"
      @input="show = !show"
    >
  </div>
</template>
