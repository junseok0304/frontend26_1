<script setup>
import { ref } from 'vue';
const enabled = ref(true);
const gender = ref("남");
</script>

<template>
    <div class="MyForm">
        <div class="row">
            <label><input type="checkbox" v-model="enabled" /> 활성</label>
        </div>
        <div class="row">
            <label><input type="radio" value="남" v-model="gender" /></label>
            <label><input type="radio" value="여" v-model="gender" /></label>
        </div>
        <hr />
        <div class="row">활성: {{ enabled }}</div>
        <div class="row">성별: {{ gender }}</div>
    </div>
</template>

<style scoped>
div.MyForm { padding: 2em; background: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type="radio"]) { margin-right: 1em; }
</style>
