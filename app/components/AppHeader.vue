<script setup lang="ts">
console.log('');
</script>

<template>
  <header class="bg-abg-base">
    <nav class="max-w-400 h-16 px-10 mx-auto flex items-center justify-end-safe">
      <!-- Left -->
      <div class="mr-auto">
        <NuxtLink to="/">
          <Icon name="svg:stove-text-logo" class="h-4 align-middle" />
        </NuxtLink>

        <span class="ml-4 align-middle text-xl">
          창작자 센터 바로가기
        </span>
      </div>

      <!-- Right -->
      <ul class="flex gap-4 items-center">
        <li>
          <NuxtLink
            external
            class="group font-medium cursor-pointer"
            target="_blank"
          >
            <span>창작자 센터 바로가기</span>
            <Icon
              name="svg:navigate-out"
              class="size-3 ml-1.5 transition-colors duration-200 group-hover:text-primary"
            />
          </NuxtLink>
        </li>

        <li>
          <input
            type="text"
            class="border border-abd-base rounded-full py-3 pl-4 pr-10 w-55"
            placeholder="검색어를 입력하세요."
          >
        </li>

        <li>
          <Icon name="svg:locale" class="py-auto size-5 block" />
        </li>
        <li><i class="block">avatar</i></li>
      </ul>
    </nav>
  </header>
</template>
