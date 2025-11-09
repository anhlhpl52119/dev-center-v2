<script setup lang="ts">
console.log('');
</script>

<template>
  <header class="h-[64px] bg-abg-base">
    <nav class="max-w-[1200px] h-full px-10 mx-auto flex items-center justify-end-safe">
      <!-- Left -->
      <div class="mr-auto">
        <strong class="text-lg">STOVE</strong>
        <span class="inline-block ml-1">
          창작자 센터 바로가기
        </span>
      </div>

      <!-- Right -->
      <ul class="flex gap-4 items-center">
        <li><span class="inline-block">창작자 센터 바로가기</span></li>
        <li>
          <input
            type="text"
            class="border border-abd-base rounded-full py-3 pl-4 pr-10 w-[220px]"
            placeholder="검색어를 입력하세요."
          >
        </li>
        <li><i class="block">Locale</i></li>
        <li><i class="block">avatar</i></li>
      </ul>
    </nav>
  </header>
</template>
