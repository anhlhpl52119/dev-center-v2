<script setup lang="ts">
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import AdmonitionPlugin from '@/lib/markdown-it-plugins/admonition';

const props = defineProps<{
  content?: string;
}>();

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  quotes: '“”‘’',
  xhtmlOut: true,
})
  .use(AdmonitionPlugin);

const renderedContent = computed(() => {
  if (!props.content) {
    return '';
  }
  const html = md.render(props.content);

  if (import.meta.client) {
    return DOMPurify.sanitize(html);
  }

  return html;
});
</script>

<template>
  <div v-if="!renderedContent" />
  <div
    v-else
    class="markdown-body"
    v-html="renderedContent"
  />
</template>
