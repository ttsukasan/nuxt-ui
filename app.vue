<script setup lang="ts">
import '~/assets/main.css'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  },
  meta: [{property: 'og:title', content: `App Name OGP`}]
})
</script>

<template>
  <!-- 背景ここから -->
  <div class="bg-stone-50">
    <div class="pattern-diagonal-stripes-sm  text-stone-100">
      <!-- 背景ここまで -->
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>
