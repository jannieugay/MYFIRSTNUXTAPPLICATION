<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-palette-obsidian/90 border-b border-palette-mineral transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-palette-rust/50 group-hover:ring-palette-rust-light transition-all duration-300 shadow-md">
            <img src="/jannie-ugay.jpg" alt="Jannie Ugay" class="w-full h-full object-cover object-top" />
          </div>
          <div>
            <span class="text-base sm:text-lg font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors tracking-wide">
              JANNIE UGAY
            </span>
            <span class="block text-xs text-palette-sand-muted font-medium">
              Aspiring IT Professional
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-2">
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            :class="route.path === '/' ? 'bg-palette-rust text-white shadow-md shadow-palette-rust/30' : 'text-palette-sand hover:text-white hover:bg-palette-graphite border border-transparent hover:border-palette-mineral'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Home
            </span>
          </NuxtLink>

          <NuxtLink
            to="/profile"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            :class="route.path === '/profile' ? 'bg-palette-rust text-white shadow-md shadow-palette-rust/30' : 'text-palette-sand hover:text-white hover:bg-palette-graphite border border-transparent hover:border-palette-mineral'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Profile
            </span>
          </NuxtLink>

          <!-- Contact Quick Button -->
          <a
            href="mailto:ugayjannie@gmail.com"
            class="ml-3 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-palette-sand-muted hover:text-palette-sand bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all flex items-center gap-1.5"
          >
            <svg class="w-3.5 h-3.5 text-palette-rust-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact
          </a>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-xl text-palette-sand-muted hover:text-white bg-palette-graphite border border-palette-mineral focus:outline-none focus:ring-2 focus:ring-palette-rust"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden pb-4 pt-2 border-t border-palette-mineral space-y-2">
        <NuxtLink
          to="/"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-2.5 rounded-xl text-base font-medium transition-colors"
          :class="route.path === '/' ? 'bg-palette-rust text-white font-semibold' : 'text-palette-sand hover:bg-palette-graphite'"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/profile"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-2.5 rounded-xl text-base font-medium transition-colors"
          :class="route.path === '/profile' ? 'bg-palette-rust text-white font-semibold' : 'text-palette-sand hover:bg-palette-graphite'"
        >
          Profile
        </NuxtLink>
        <a
          href="mailto:ugayjannie@gmail.com"
          class="block px-4 py-2.5 rounded-xl text-sm font-medium text-palette-sand-muted hover:text-white hover:bg-palette-graphite"
        >
          Email: ugayjannie@gmail.com
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
</script>
