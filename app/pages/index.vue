<script lang="ts" setup>
definePageMeta({
  name: 'home',
});

const config = useRuntimeConfig();
</script>

<template>
  <main class="mx-auto grid grid-cols-[150px_1fr_120px] pt-8">
    <div>LNB</div>

    <div class="w-[400px]">
      <h1 class="font-bold text-3xl">
        Lorem ipsum dolor sit
      </h1>
      <p class="text-dimmed text-sx">
        Amet consectetur adipisicing elit.
      </p>

      <article class="bg-abg-base p-8 rounded-4xl shadow-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deserunt officiis eius numquam. Culpa incidunt officia repudiandae placeat? Dolore odit quia suscipit dolores ad illo reiciendis excepturi fugit veritatis iusto.
      </article>
    </div>

    <div>RNB</div>
  </main>
</template>
