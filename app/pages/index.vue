<script lang="ts" setup>
definePageMeta({
  name: 'home',
});

const config = useRuntimeConfig();
</script>

<template>
  <main class="asdss">
    <h1 class="text-base">
      Ok bro
    </h1>
    <div>
      <h1 class="font-bold">
        Runtime
      </h1>
      <pre class="mt-24">{{ config.public }}</pre>
    </div>
    <span class="block mt-12">hello</span>
    <div class="text-dimmed">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ad magnam rem necessitatibus, sint autem molestias ut possimus inventore, illo eius voluptatem nisi delectus mollitia illum aut officia debitis quisquam.
        Ex sit ut atque porro exercitationem fugit laborum odio totam ab accusantium! Beatae rem a dolorem eum est ratione dignissimos. Delectus quod vel architecto, consequatur nam unde praesentium eligendi esse.
      </p>
      <br><br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas laboriosam distinctio dolorum recusandae consequuntur consequatur saepe, alias quos eveniet earum inventore, optio dolore nisi magnam iste vel. Id, odio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto minima dolorem aut qui quibusdam pariatur incidunt, nisi laudantium facere necessitatibus magni consequatur numquam vero dolores alias saepe provident natus? Facere.
    </div>
  </main>
</template>
