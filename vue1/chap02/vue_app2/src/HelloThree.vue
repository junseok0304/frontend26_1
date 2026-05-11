<script setup>
import { ref } from 'vue';
const studentNo = ref('202214043');
const name = ref('홍길동');
</script>

<template>
    <div>
        <p>학번: {{ studentNo }}</p>
        <input type="text" v-model="studentNo">
        <p>이름: {{ name }}</p>
        <input type="text" v-model="name">
    </div>
</template>

<style scoped>
    div { 
        background-color: #f0f0f0; padding: 1em;
        text-align: center;
    }
</style>
