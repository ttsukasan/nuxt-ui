<script setup lang="ts">

</script>

<template>
  <UContainer class="min-h-screen bg-yellow-50 box-border border border-dashed border-yellow-700">
    <div>
      <ULink to="/" class="underline mr-2">MyApp</ULink>
      <ULink to="/about" class="underline mr-2">About</ULink>
    </div>
    <slot/>
  </UContainer>
</template>

<style scoped>

</style>
