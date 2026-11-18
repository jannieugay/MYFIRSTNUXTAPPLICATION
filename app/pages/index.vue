<template>
  <div class="relative overflow-hidden py-12 sm:py-20 lg:py-28 min-h-[calc(100vh-10rem)] flex items-center justify-center">
    <!-- Ambient subtle background glow with #5F2E1B terracotta palette -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-palette-rust/25 via-palette-mineral/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="p-8 sm:p-12 lg:p-14 rounded-3xl bg-palette-graphite border border-palette-mineral shadow-2xl relative overflow-hidden text-center">
        <div class="absolute -right-16 -top-16 w-60 h-60 bg-palette-rust/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- In-Page Navigation Menu -->
        <nav class="mb-10 inline-flex items-center gap-1 p-1.5 rounded-2xl bg-palette-obsidian border border-palette-mineral shadow-inner">
          <NuxtLink
            to="/"
            class="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-palette-rust text-white shadow-md shadow-palette-rust/30 flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </NuxtLink>

          <NuxtLink
            to="/profile"
            class="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-palette-sand-muted hover:text-palette-sand hover:bg-palette-mineral/50 flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Profile
          </NuxtLink>
        </nav>

        <!-- Profile Picture / Avatar -->
        <div class="flex justify-center mb-6">
          <div class="relative group">
            <div class="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-b from-palette-rust via-palette-rust-light to-palette-mineral shadow-xl">
              <div class="w-full h-full rounded-full overflow-hidden bg-palette-obsidian">
                <img
                  src="/jannie-ugay.jpg"
                  alt="Jannie Ugay"
                  class="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <!-- Online Indicator -->
            <div class="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-palette-graphite" title="Active"></div>
          </div>
        </div>

        <!-- Name -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase text-palette-sand mb-3">
          JANNIE UGAY
        </h1>

        <!-- Welcome Message -->
        <div class="max-w-xl mx-auto mb-6">
          <p class="text-base sm:text-lg font-medium text-palette-sand">
            Welcome to my homepage! I'm glad you're here.
          </p>
        </div>

        <!-- Short Introduction -->
        <div class="max-w-2xl mx-auto mb-8 p-5 sm:p-6 rounded-2xl bg-palette-obsidian/70 border border-palette-mineral text-palette-sand text-sm sm:text-base leading-relaxed">
          <p class="italic text-palette-sand">
            "I’m an aspiring IT professional who loves learning new technology and building useful things. Take a look around and get to know me."
          </p>
        </div>

        <!-- Quick Action Link to Profile -->
        <div class="flex justify-center">
          <NuxtLink
            to="/profile"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-palette-rust hover:bg-palette-rust-hover text-white font-semibold text-sm sm:text-base shadow-lg shadow-palette-rust/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>View Personal Profile</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home'
})
</script>
