<template>
    <div class="font-montserrat flex flex-col min-h-screen">
        
        <header class="py-4 bg-[#292727] text-white">
            <nav class="container mx-auto flex items-center justify-between">
                <img class="h-8" src="../public/favicon.ico" alt="chatport logo" />
                <NuxtLink to="/" class="text-lg font-bold">chatport</NuxtLink>
                <ul class="flex items-center gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/chat">Chat</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <NavBar />
        <main class="flex-1 container mx-auto p-4">
            <slot /> <slot/>
        </main>
    </div>
</template>

<script setup>
import NavBar from '~/src/components/NavBar.vue';


</script>

<style scoped></style>