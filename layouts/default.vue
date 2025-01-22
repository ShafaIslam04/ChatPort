<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="max-w-6xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
</script>

<style scoped></style>