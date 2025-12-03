<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();
const slots = useSlots();

const isActive = ref(false);

const hasDefaultSlot = computed(() => !!slots.default);
const hasIconSlot = computed(() => !!slots.icon);

function handleClick(event: MouseEvent) {
  isActive.value = !isActive.value;
  emit('click', event);
}
</script>

<template>
  <button
    class="btn"
    :class="[{ 'btn--active': isActive, 'btn--icon-only': !hasDefaultSlot }]"
    :aria-pressed="isActive"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="hasDefaultSlot" class="btn__text">
      <slot />
    </span>

    <span v-if="hasIconSlot" class="btn__icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid #3b82f6;
  border-radius: 0.5rem;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background-color: #2563eb;
    border-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  &--active {
    background-color: #10b981;
    border-color: #10b981;

    &:hover {
      background-color: #059669;
      border-color: #059669;
    }
  }

  &--icon-only {
    padding: 0.75rem;

    .btn__icon {
      margin-left: 0;
    }
  }

  &__text {
    line-height: 1;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 1.25rem;
  }
}
</style>
