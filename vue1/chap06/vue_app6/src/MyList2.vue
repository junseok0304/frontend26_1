<script setup>
import { ref } from 'vue';
const persons = ref ([{ id: 101, name: "홍길동", age: 16 }, { id: 102, name: "김철수", age: 20 }, { id: 103, name: "박영희", age: 25 }, { id: 104, name: "최민수", age: 30 }]);

function remove(index) {
    if (confirm("삭제하시겠습니까?")){
        persons.value.splice(index,1);
    }
}
</script>

<template>
    <table>
        <tr>
            <td>ID</td>
            <td>이름</td>
            <td>나이</td>
        </tr>
        <tr v-for="person in persons" v-bind:key="person.id">
            <td>{{ person.id }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td><button type="button" v-on:click="remove(index)">삭제</button></td>
        </tr>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
    width: 400px;
}

td {
    padding: 5px;
    border: 1px solid #aaa;
    text-align: center;
}

tr:nth-child(1) {
    background-color: #ddd;
}
</style>