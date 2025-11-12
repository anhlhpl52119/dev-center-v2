<script lang="ts" setup>
definePageMeta({
  name: 'home',
});
</script>

<template>
  <main class="flex min-h-screen max-w-7xl mx-auto relative">
    <AppLNB class="w-68 shrink-0 h-screen sticky top-0 overflow-y-auto p-6 pt-8 hidden md:block" />

    <AppArticle class="pt-10 pb-38.5 min-w-80" />

    <AppAside class="w-72 shrink-0 sticky h-screen top-0 overflow-y-auto p-8 hidden lg:block" />
  </main>
</template>
