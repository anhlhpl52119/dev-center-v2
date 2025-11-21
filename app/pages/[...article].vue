<script lang="ts" setup>
definePageMeta({
  layout: 'article',
});

const content = ref('');
const markdown = computed(() => content.value);
async function onCallApi() {
  const rs = await $fetch('/api/gh-auth');
  console.log(rs);
}
</script>

<template>
  <AppArticle class="mt-10" />
  <button @click="onCallApi">
    asd
  </button>
  <MarkdownTOC
    :content="markdown"
    class="sticky top-0 ml-10 hidden h-screen w-51 shrink-0 overflow-y-auto pt-8 lg:block"
  />
</template>
