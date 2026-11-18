<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 text-sm text-palette-sand-muted">
        <NuxtLink to="/" class="hover:text-palette-rust-light flex items-center gap-1 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Home
        </NuxtLink>
        <span>/</span>
        <span class="text-palette-rust-light font-medium">Personal Profile</span>
      </nav>

      <!-- Profile Header / Hero Card -->
      <header class="p-6 sm:p-8 rounded-3xl bg-palette-graphite border border-palette-mineral shadow-2xl relative overflow-hidden">
        <div class="absolute -right-20 -top-20 w-72 h-72 bg-palette-rust/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <!-- Profile Avatar with Red/Terracotta accent ring -->
          <div class="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
            <div class="w-full h-full rounded-2xl overflow-hidden ring-4 ring-palette-rust/40 p-1 bg-palette-obsidian shadow-xl">
              <img src="/jannie-ugay.jpg" alt="Jannie Ugay" class="w-full h-full object-cover object-top rounded-xl" />
            </div>
            <div class="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-full ring-2 ring-palette-obsidian" title="Active IT Student">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <!-- Name, Role & Short Bio -->
          <div class="space-y-3 text-center sm:text-left flex-1">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h1 class="text-2xl sm:text-3xl font-extrabold text-palette-sand tracking-wide uppercase">
                JANNIE UGAY
              </h1>
              <span class="px-3 py-1 text-xs font-semibold rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Age 20 • BSIT Student
              </span>
            </div>
            <p class="text-base font-semibold text-palette-rust-light">
              Aspiring IT Professional &amp; Software Developer
            </p>
            <p class="text-sm text-palette-sand-muted max-w-2xl leading-relaxed">
              Currently pursuing a Bachelor of Science in Information Technology at Caraga State University. Dedicated to mastering algorithms, database systems, networking fundamentals, and full-stack development to build useful digital solutions.
            </p>

            <div class="pt-2 flex flex-wrap justify-center sm:justify-start gap-3">
              <NuxtLink
                to="/"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-palette-obsidian hover:bg-palette-mineral text-palette-sand text-xs sm:text-sm font-medium transition-colors border border-palette-mineral"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Return to Home
              </NuxtLink>

              <a
                href="mailto:ugayjannie@gmail.com"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-palette-rust hover:bg-palette-rust-hover text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                ugayjannie@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Section 1: Personal Information -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-palette-graphite border border-palette-mineral flex items-center justify-center text-palette-rust-light shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-palette-sand">Personal Information</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Card Column 1 -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral space-y-3">
            <div class="flex items-center justify-between border-b border-palette-mineral/80 pb-2.5">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Full Name</span>
              <span class="text-sm font-semibold text-palette-sand">JANNIE UGAY</span>
            </div>

            <div class="flex items-center justify-between border-b border-palette-mineral/80 pb-2.5">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Age</span>
              <span class="text-sm font-semibold text-palette-rust-light">20 Years Old</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Birthday</span>
              <span class="text-sm font-semibold text-palette-sand">January 30, 2006 (01-30-2006)</span>
            </div>
          </div>

          <!-- Card Column 2 -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral space-y-3">
            <div class="flex items-center justify-between border-b border-palette-mineral/80 pb-2.5">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Email Address</span>
              <a href="mailto:ugayjannie@gmail.com" class="text-sm font-semibold text-palette-rust-light hover:underline">
                ugayjannie@gmail.com
              </a>
            </div>

            <div class="flex items-center justify-between border-b border-palette-mineral/80 pb-2.5">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Phone / Mobile</span>
              <a href="tel:+639386960401" class="text-sm font-semibold text-palette-sand hover:text-palette-rust-light transition-colors">
                +63 938 696 0401
              </a>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs uppercase font-bold text-palette-sand-muted tracking-wider">Current Status</span>
              <span class="text-sm font-semibold text-emerald-400">College Student (BSIT)</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Educational Background -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-palette-graphite border border-palette-mineral flex items-center justify-center text-palette-rust-light shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-palette-sand">Educational Background</h2>
        </div>

        <div class="space-y-4">
          <!-- College -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 relative group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-palette-rust"></span>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  Bachelor of Science in Information Technology (BSIT)
                </h3>
              </div>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral w-fit">
                2024 – Present
              </span>
            </div>
            <p class="text-sm font-semibold text-palette-sand pl-5">
              Caraga State University
            </p>
            <p class="text-xs text-palette-sand-muted mt-2 pl-5 leading-relaxed">
              Engaged in coursework covering programming fundamentals, data structures, relational database management, systems networking, and interactive web application design.
            </p>
          </div>

          <!-- Senior High School -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 relative group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-palette-mineral"></span>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  Senior High School — ICT Strand (Information &amp; Communications Technology)
                </h3>
              </div>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-palette-obsidian text-palette-sand-muted border border-palette-mineral w-fit">
                2022 – 2024
              </span>
            </div>
            <p class="text-sm font-semibold text-palette-sand pl-5">
              Tubod National High School
            </p>
            <p class="text-xs text-palette-sand-muted mt-2 pl-5 leading-relaxed">
              Developed strong foundational competency in computer hardware, basic programming logic, computer systems servicing, and web design fundamentals.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 3: Skills & Interests -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-palette-graphite border border-palette-mineral flex items-center justify-center text-palette-rust-light shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-palette-sand">Skills &amp; Interests</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Python -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🐍</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Programming
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Python
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Writing clean scripts, understanding data structures, automation routines, and computational problem solving.
            </p>
          </div>

          <!-- C Programming -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">💻</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Core Systems
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              C Programming
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Grasping low-level memory concepts, pointers, logic flow, and foundational algorithmic thinking.
            </p>
          </div>

          <!-- SQL & Databases -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🗄️</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Data
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              SQL &amp; Databases
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Designing relational schemas, performing CRUD queries, table normalization, and data persistence logic.
            </p>
          </div>

          <!-- HTML & CSS -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🎨</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Web
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              HTML &amp; CSS
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Crafting structured web pages, semantic layout composition, responsive interfaces, and modern styling.
            </p>
          </div>

          <!-- Networking -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🌐</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Infrastructure
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Networking
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Understanding IP addressing, subnetting, TCP/IP &amp; OSI models, routers, switches, and network topologies.
            </p>
          </div>

          <!-- Problem Solving -->
          <div class="p-5 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/60 transition group space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🧩</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Mindset
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Problem Solving
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Analytical debugging, methodical troubleshooting, breaking complex problems into achievable steps.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4: Hobbies & Activities -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-palette-graphite border border-palette-mineral flex items-center justify-center text-palette-rust-light shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-palette-sand">Hobbies &amp; Activities</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Playing Online Games -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 group space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-3xl group-hover:scale-110 transition-transform">🎮</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Gamer &amp; Strategist
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Playing Online Games
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Passionate about competitive multiplayer and strategic team games. Sharpening reflex reaction times, decision-making under pressure, and team coordination.
            </p>
          </div>

          <!-- Listening to Music -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 group space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-3xl group-hover:scale-110 transition-transform">🎧</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Focus &amp; Rhythm
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Listening to Music
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Curating soundtracks for coding sessions, study flows, and relaxation. Exploring a wide range of genres that boost focus, mood, and creative inspiration.
            </p>
          </div>

          <!-- Playing Volleyball -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 group space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-3xl group-hover:scale-110 transition-transform">🏐</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Sports &amp; Fitness
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Playing Volleyball
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Staying active and energized on the court. Engaging in team sports that build stamina, quick physical reflexes, communication, and sportsmanship.
            </p>
          </div>

          <!-- Cooking -->
          <div class="p-6 rounded-2xl bg-palette-graphite border border-palette-mineral hover:border-palette-rust/50 transition-all duration-300 group space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-3xl group-hover:scale-110 transition-transform">🍳</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-palette-obsidian text-palette-rust-light border border-palette-mineral">
                Culinary Craft
              </span>
            </div>
            <h3 class="text-base font-bold text-palette-sand group-hover:text-palette-rust-light transition-colors">
              Cooking
            </h3>
            <p class="text-xs text-palette-sand-muted leading-relaxed">
              Experimenting in the kitchen with diverse flavors, mastering home-cooked recipes, and enjoying the mindful, creative process of preparing good food.
            </p>
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Footer Link -->
      <div class="pt-8 border-t border-palette-mineral flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-palette-graphite hover:bg-palette-mineral text-palette-sand text-sm font-medium border border-palette-mineral transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Homepage
        </NuxtLink>

        <span class="text-xs text-palette-sand-dark">
          Jannie Ugay • Caraga State University
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Personal Profile'
})
</script>
