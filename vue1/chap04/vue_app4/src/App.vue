<script setup>
import MyCounter from './MyCounter.vue'
</script>

<template>
  <main class="app">
    <MyCounter/>
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
