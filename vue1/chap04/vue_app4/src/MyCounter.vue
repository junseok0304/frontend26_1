<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
    <div>
        <p> {{ count }}</p>
        <button type="button" v-on:click="++count">Increase</button>
        <button type="button" v-on:click="--count">Decrease</button>
    </div>
</template>

<style scoped>
div { padding: 1em; text-align: center; 
background-color: #e8ffe8; border: 1px solid #aca; }
p { font-size: 20pt; text-align: center; margin: 0; }
button { padding: 0.7em 1.5em; margin: 5px; }
</style>