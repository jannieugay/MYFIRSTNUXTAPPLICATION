<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
