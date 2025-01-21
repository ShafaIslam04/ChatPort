<template>
    <div>
     <NavBar/>

     <main>
        <slot></slot>
     </main>
    </div>
</template>

<script setup>
import NavBar from '~/src/components/NavBar.vue';


</script>

<style scoped>

</style>