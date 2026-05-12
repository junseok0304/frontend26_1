<script setup>
import MyList1 from './MyList1.vue';
import MyList2 from './MyList2.vue';
import MyList3 from './MyList3.vue';
import HwGugu1 from './HwGugu1.vue';
import HwGugu2 from './HwGugu2.vue';
</script>

<template>
  <div id="app">
    <MyList1 />
    <hr /> 
    <MyList2 />
    <hr />
    <MyList3 />
    <hr />
    <HwGugu1 />
    <hr />
    <HwGugu2 />
  </div>
</template>

<style scoped>
div#app {
  padding: 30px;
  margin: 30px auto;
  width: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
