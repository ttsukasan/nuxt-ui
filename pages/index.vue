<script setup lang="ts">
definePageMeta({
  title: 'My home page'
})
</script>

<template>
  <div class="bg-violet-100">
    <h1 class="text-3xl mb-3">Home</h1>
    <p>message</p>
    <!--- link to about -->
    <ULink to="/about">About</ULink>
    <UButton to="/about">About</UButton>
  </div>
</template>

<style scoped>

</style>
