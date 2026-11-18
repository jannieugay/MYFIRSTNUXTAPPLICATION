<template>
  <footer class="mt-auto border-t border-palette-mineral bg-palette-obsidian/95 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full overflow-hidden ring-1 ring-palette-rust/60">
            <img src="/jannie-ugay.jpg" alt="Jannie Ugay" class="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p class="text-sm font-bold text-palette-sand">JANNIE UGAY</p>
            <p class="text-xs text-palette-sand-muted">BS Information Technology • Caraga State University</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex items-center gap-6 text-sm text-palette-sand-muted">
          <NuxtLink to="/" class="hover:text-palette-rust-light transition-colors">Home</NuxtLink>
          <NuxtLink to="/profile" class="hover:text-palette-rust-light transition-colors">Profile</NuxtLink>
          <a href="mailto:ugayjannie@gmail.com" class="hover:text-palette-rust-light transition-colors">ugayjannie@gmail.com</a>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-palette-mineral/60 text-center text-xs text-palette-sand-dark flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {{ currentYear }} Jannie Ugay. All rights reserved.</p>
        <div class="flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-palette-rust"></span>
          <span>Crafted with Nuxt 4 &amp; Tailwind CSS (Subtle Elegance Palette)</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
