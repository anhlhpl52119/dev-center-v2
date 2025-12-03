<script lang="ts" setup>
definePageMeta({
  layout: 'article',
});
const { content } = useRoutesContent();
const markdown = computed(() => content.value);
</script>

<template>
  <AppArticle class="mt-10 flex-1" />
  <MarkdownTOC
    :content="markdown"
    class="sticky top-0 ml-40 hidden h-screen w-204 shrink-0 overflow-y-auto pt-32 lg:block"
  />
</template>
