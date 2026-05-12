<script setup>
const list = ["zero", "one", "two", "three", "four", "five"];
</script>

<template>
    <div>
        <span v-for="(s, index) in list" v-bind:key="s">
            {{ index }} - {{ s }}
        </span>
    </div>
</template>

<style scoped>
span {
    display: inline-block;
    margin: 5px;
    padding: 8px 15px;
    border: 1px solid black;
}
</style>