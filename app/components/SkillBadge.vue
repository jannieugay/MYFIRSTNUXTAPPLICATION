<template>
  <span
    class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border shadow-sm cursor-default"
    :class="variantClasses"
  >
    <span class="w-2 h-2 rounded-full" :class="dotClasses"></span>
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'rust' | 'mineral' | 'dark'
  }>(),
  {
    variant: 'rust'
  }
)

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'mineral':
      return 'bg-palette-mineral/50 text-palette-sand border-palette-mineral hover:border-palette-rust-light/60 hover:bg-palette-mineral'
    case 'dark':
      return 'bg-palette-obsidian text-palette-sand-muted border-palette-mineral hover:border-palette-sand-muted hover:text-palette-sand'
    case 'rust':
    default:
      return 'bg-palette-graphite text-palette-sand border-palette-mineral hover:border-palette-rust-light hover:bg-palette-mineral/40'
  }
})

const dotClasses = computed(() => {
  switch (props.variant) {
    case 'mineral':
      return 'bg-palette-sand-muted'
    case 'dark':
      return 'bg-palette-sand-dark'
    case 'rust':
    default:
      return 'bg-palette-rust-light'
  }
})
</script>
