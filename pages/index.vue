<script setup lang="ts">
definePageMeta({
  title: 'My home page'
})
// 読み込み時に実行
onMounted(() => {
  useNuxtApp().$gameSetup();
})
</script>

<template>
  <div class="bg-yellow-50 box-border border border-dashed border-yellow-700">
    <h1 class="text-3xl mb-3">Home</h1>
    <hr class="my-6">
    <div id="game"></div>
    <hr class="my-6">
    <!--- link to about -->
    <ULink to="/about">About</ULink>
    <UButton to="/about">About</UButton>
  </div>
</template>

<style scoped>

</style>
