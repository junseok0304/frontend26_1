<script setup>
const row_size = 9;
const col_size = 8;
</script>

<template>
    <table>
        <tr v-for="r in row_size" :key="r">
            <td v-for="c in col_size" :key="c">
                {{ c + 1 }} * {{ r }} = {{ (c + 1) * r }}
            </td>
        </tr>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
    margin: auto;
}

td {
    padding: 5px 10px;
    border: 1px solid #555;
    text-align: left;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1.4;
}
</style>