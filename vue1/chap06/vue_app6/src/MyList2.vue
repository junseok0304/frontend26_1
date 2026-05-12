<script setup>
const persons = [{ id: 101, name: "홍길동", age: 16 }, { id: 102, name: "김철수", age: 20 }, { id: 103, name: "박영희", age: 25 }, { id: 104, name: "최민수", age: 30 }];
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