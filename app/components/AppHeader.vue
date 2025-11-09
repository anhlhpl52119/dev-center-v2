<script setup lang="ts">
console.log('');
</script>

<template>
  <header class="h-[64px] bg-abg-base flex px-10">
    <div class="flex gap-2 items-center">
      <div class="font-bold text-lg">
        STOVE
      </div>

      <p>
        창작자 센터 바로가기
      </p>
    </div>

    <div class="ml-auto flex items-center gap-2">
      <div>창작자 센터 바로가기</div>
      <input
        type="text"
        class="border border-abd-base rounded-full py-3 pl-4 pr-10 w-[220px]"
        placeholder="검색어를 입력하세요."
      >
      <div>Locale</div>
      <div>avatar</div>
    </div>
  </header>
</template>
