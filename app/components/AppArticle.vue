<script lang="ts" setup>
const { content, title, updatedAt } = useRoutesContent();

const heading = computed(() => title.value || '');
const description = computed(() => '');
const lastUpdatedAt = computed(() => updatedAt.value);
</script>

<template>
  <article itemscope itemtype="http://schema.org/Article">
    <header>
      <h1 itemprop="headline" class="text-32 leading-44 mb-4 font-bold">
        {{ heading }}
      </h1>
      <p
        v-if="description"
        itemprop="description"
        class="text-13 leading-22 tracking-[-0.0025rem] text-dimmed"
      >
        {{ description }}
      </p>
      <p>asdasd</p>
    </header>

    <MarkdownRenderer
      :content="content"
      itemprop="articleBody"
      class="bg-abg-base mt-40 min-h-160 max-w-full bd-radius-32 p-30 shadow-sm overflow-x-auto"
    />

    <p
      v-if="lastUpdatedAt"
      itemprop="lastUpdatedAt"
      class="text-dimmed mt-20 text-right text-13"
    >
      {{ $t('common.last_update_at', { at: lastUpdatedAt }) }}
    </p>
  </article>
</template>
