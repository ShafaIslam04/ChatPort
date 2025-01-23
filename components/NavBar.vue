<template>
  <header class="flex items-center justify-between p-4 bg-gray-500 text-white shadow-md dark:bg-gray-800">
      <!-- Logo and Title -->
      <div class="flex items-center gap-2">
          <img src="/public/chat_logo.png" alt="ChatPort Logo" class="w-8 h-8" />
          <h1 class="text-2xl font-bold">ChatPort</h1>
      </div>

      <!-- Navigation and Theme Toggle -->
      <nav class="flex items-center font-blod gap-4">
          <NuxtLink to="/" class="text-gray-200 hover:text-blue-300 dark:text-gray-300">
              Home
          </NuxtLink>
          <NuxtLink to="/user" class="text-gray-200 hover:text-blue-300 dark:text-gray-300">
              Users
          </NuxtLink>
          <NuxtLink to="/chat" class="text-gray-200 hover:text-blue-300 dark:text-gray-300">
              Chats
          </NuxtLink>
          <button @click="toggleTheme"
              class="ml-4 px-4 py-2 text-sm font-medium bg-white text-blue-500 rounded-md shadow-md hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
          </button>
      </nav>
      
  </header>
</template>

<script setup lang="ts">


// State for theme toggling
const isDarkMode = ref(false);

// Function to toggle theme
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>