<script setup>
import { ref } from 'vue';
const enabled = ref(true);
const gender = ref("남");
const color = ref("노랑");
</script>

<template>
    <div class="MyForm">
        <div class="row">
            <label><input type="checkbox" v-model="enabled" /> 활성</label>
        </div>
        <div class="row">
            <label><input type="radio" value="남" v-model="gender" /> 남</label>
            <label><input type="radio" value="여" v-model="gender" /> 여</label>
        </div>
        <div class="row">
            <select v-model="color">
                <option>노랑</option>
                <option>빨강</option>
                <option>파랑</option>
            </select>
        </div>
        <hr />
        <div class="row">활성: {{ enabled }}</div>
        <div class="row">성별: {{ gender }}</div>
        <div class="row">색상: {{ color }}</div>
    </div>
</template>

<style scoped>
div.MyForm { padding: 2em; background: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type="radio"]) { margin-right: 1em; }
</style>
