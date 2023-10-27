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
  <div>
    <div class="absolute min-h-screen w-full bg-stone-50 -z-10">
      <div class="min-h-screen w-full pattern-diagonal-stripes-sm  bg-stone-800 text-stone-100">
        <!-- 背景 -->
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
