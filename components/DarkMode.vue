<template>
    <button @click="toggleDarkMode" class="p-2 rounded bg-gray-200 dark:bg-gray-700">
        <span v-if="isDarkMode"><Icon class="material-symbols:sunny-outline"/></span>
        
        <span v-else><Icon class="ic:outline-nightlight-round"/></span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDarkMode = ref(false);

function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
}
</script>

