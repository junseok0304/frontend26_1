<script setup>
import { ref } from 'vue';
const todos = ref([
    { id: 1, title: "과제" },
    { id: 2, title: "시험공부" },
    { id: 3, title: "코딩훈련" }
]);
const title = ref('');
function addTodo() {
    const lastId = todos.value.length == 0 ? 0 :
        todos.value[todos.value.length - 1].id;
    todos.value.push({ id: lastId + 1, title: title.value });
    title.value = "";
}
</script>
<template>
    <div>
        <h1>할 일</h1>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>할일</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" v-bind:key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" v-model.trim="title" />
        <button type="button" v-on:click="addTodo">추가</button>
    </div>
</template>
<style scoped>
h1 {
    border-bottom: 1px solid gray;
    text-shadow: 1px 1px 2px #aaa;
}

table {
    margin: 1em 0;
    width: 100%;
    font-size: 11pt;
}

thead {
    background-color: #eee;
    text-align: center;
}

td {
    border-bottom: 1px solid #bbb;
    padding: 0.3em;
}

td:nth-child(1) {
    text-align: center;
    width: 30px;
}

input[type=text] {
    padding: 0.3em;
    margin-right: 0.3em;
    width: 22em;
    font-size: 11pt;
}

button {
    padding: .2em .9em .3em .9em;
    border: none;
    font-size: 11pt;
    background-color: #08f;
    box-shadow: 2px 2px 2px #aaa;
    color: white;
    text-shadow: 1px 1px 2px #444;
}

button:active {
    box-shadow: none;
    transform: translateY(2px);
    border: none;
}
</style>