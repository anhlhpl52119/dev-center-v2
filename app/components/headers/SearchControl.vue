<script lang="ts" setup>
const show = ref(false);
const searchTxt = ref('');

function toggle() {
  show.value = !show.value;
}
</script>

<template>
  <div class="bg-abg-base z-2 right-0 left-0" :class="{ absolute: show }">
    <!-- Icon trigger -->
    <slot
      name="trigger"
      :toggle="toggle"
      :isShowed="show"
    />

    <!-- Search bar -->
    <input
      v-if="!$slots.trigger || show"
      v-model="searchTxt"
      type="text"
      name="search"
      placeholder="검색어를 입력하세요."
      class="bg-abg-base rounded-full leading-20 h-44 px-16 py-12 abd-base-2 w-full"
      @click="show = true"
      @blur="show = false"
    >

    <!-- Results -->
    <div v-if="show" class="absolute mt-4 abd-base-1 shadow-md w-full h-400 bg-abg-base z-2 bd-radius-20 p-16">
      <pre>{{ $slots.trigger }}</pre>
    </div>
  </div>
</template>
