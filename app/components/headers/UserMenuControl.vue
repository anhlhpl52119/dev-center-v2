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
    aria-label="Toggle user menu"
    aria-describedby="Show menu"
    aria-pressed="false"
    class="hidden md:inline-flex clickable hover:bg-abg-dimmed ml-4 items-center justify-center rounded-full p-6"
  >
    <Icon name="svg:locale" class="size-20" />
  </button>
</template>
