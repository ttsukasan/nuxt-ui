<script setup lang="ts">

</script>

<template>
  <UContainer class="min-h-screen max-w-sm bg-white">
    <div>
      <ULink to="/" class="underline mr-2">MyApp</ULink>
      <ULink to="/about" class="underline mr-2">About</ULink>
    </div>
    <slot/>
  </UContainer>
</template>

<style scoped>

</style>
