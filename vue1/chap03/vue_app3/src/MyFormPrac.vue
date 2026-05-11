<script setup>
import { ref } from 'vue';
const studentNo = ref("202214043");
const name = ref("홍길동");
const dept = ref("소프");
const record = ref("재학");
</script>

<template>
    <div class="MyForm">
        <div class="row">
            <label>학번: <input type="text" v-model="studentNo"></label>
        </div>
        <div class="row">
            <label>이름: <input type="text" v-model="name"></label>
        </div>

        <div class="row">
            <select v-model="dept">
                <option value="소프">소프트웨어공학</option>
                <option value="컴공">컴퓨터공학</option>
                <option value="정통">정보통신공학</option>
            </select>
        </div>

        <div class="row">
            <label><input type="radio" v-model="record" value="재학">재학</label>
            <label><input type="radio" v-model="record" value="졸업">졸업</label>
            <label><input type="radio" v-model="record" value="휴학">휴학</label>
        </div>

        <hr />

        <div class="row">학번: {{ studentNo }}</div>
        <div class="row">이름: {{ name }}</div>
        <div class="row">소속: {{ dept }}</div>
        <div class="row">학적상태: {{ record }}</div>
    </div>
</template>

<style scoped>
div.MyForm {
    padding: 2em;
    background: #f8f8f8;
}

div.row {
    margin: 0.7em;
}

label:has(input[type="text"]) {
    margin-right: 1em;
}
</style>