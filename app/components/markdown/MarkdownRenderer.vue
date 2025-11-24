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
}).use(AdmonitionPlugin);

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
  <div v-if="!renderedContent">
    <span class="text-tcl-dimmed">Xin chào, Quá nhiều từ để có thể nói hết, Quyết định của tôi là trái quýt
      đã lột vỏ nưng nhiều sơ</span>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt commodi
      corporis ratione sit quo delectus, cum accusantium, eos dolorem deleniti
      voluptas vero excepturi. Quaerat iste odio, quo non dolorem atque! Nam
      cumque sint natus sit quia repellendus suscipit inventore dolorem dolor
      autem eum in fugiat pariatur, vel fugit similique. Deserunt, dolore! Iste
      magni sed consequatur alias quo eius maiores sit. Enim expedita iste quas
      ducimus, sint temporibus inventore nobis iusto, nam delectus, doloremque
      autem corporis. In expedita labore, debitis laborum, architecto aspernatur
      sequi ullam pariatur officiis voluptatem laboriosam, porro odio? Nesciunt
      ad molestiae eaque, minus inventore quaerat voluptatem perferendis facilis
      officia voluptate architecto aut sapiente iure. Iure eveniet quae, facilis
      dolorem eligendi dolor quibusdam veritatis aperiam ipsam repellendus magni
      libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
      tempora quia impedit sint! Numquam consequuntur aut incidunt dolorum, esse
      suscipit minima, praesentium facilis earum nobis quas vel animi, quo
      culpa.
    </p>
    <h2>Đây là title 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
      veniam? Odit animi autem voluptatibus, delectus quibusdam ex fugiat
      pariatur eaque reiciendis sed soluta! Nesciunt sunt, aut laborum quos
      voluptatibus magnam.
    </p>
  </div>
  <div
    v-else
    class="markdown-body"
    v-html="renderedContent"
  />
</template>

<style>
@import '~/assets/css/github/github-markdown.css';
@import '~/assets/css/github/github-light.css';
</style>
