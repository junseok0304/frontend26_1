<script setup>
const dan_size = 8;
const row_size = 9;
</script>

<template>
    <table>
        <tr>
            <td v-for="dan in dan_size" :key="dan">
                <div v-for="i in row_size" :key="i">
                    {{ dan + 1 }} * {{ i }} = {{ (dan + 1) * i }}
                </div>
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