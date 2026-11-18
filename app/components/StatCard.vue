<template>
  <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 hover:shadow-xl hover:shadow-palette-rust/5 group">
    <div class="flex items-center justify-between mb-2">
      <span class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-palette-sand via-palette-rust-light to-palette-rust">
        {{ value }}
      </span>
      <span v-if="badge" class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
        {{ badge }}
      </span>
    </div>
    <h3 class="text-sm font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
      {{ title }}
    </h3>
    <p class="text-xs text-palette-sand-muted mt-1 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  title: string
  description: string
  badge?: string
}>()
</script>
