<template>
  <div class="min-h-screen bg-palette-obsidian text-palette-sand flex flex-col font-sans antialiased selection:bg-palette-rust selection:text-white">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Jannie Ugay - IT Professional` : 'Jannie Ugay | Aspiring IT Professional'
  },
  meta: [
    { name: 'description', content: 'Personal portfolio of Jannie Ugay, an aspiring IT professional studying BS Information Technology at Caraga State University.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/jannie-ugay.jpg' }
  ]
})
</script>
