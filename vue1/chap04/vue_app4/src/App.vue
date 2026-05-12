<script setup>
import { ref } from 'vue';
import MyCounter from './MyCounter.vue'
const title = ref("my counter");
const step = ref(1);
const value = ref(5);
</script>

<template>
  <main class="app">
    <input type="text" v-model="title"/>
    <input type="number" v-model="step"/>
    <input type="number" v-model="value"/>
    <hr />
    <MyCounter :title="title" :step="step" :value="value" />
  </main>
</template>

<style scoped>
main.app { 
  width: 400px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
