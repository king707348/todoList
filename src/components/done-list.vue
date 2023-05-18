<script setup>
import { ref } from 'vue'

const prop = defineProps({
    doneListEvt: Array,
})
const doneList = ref(prop.doneListEvt)
console.table(doneList.value)
const del = (ev) => {
    doneList.value.splice(ev, 1)
}
</script>

<template>
    <li v-for="(item, index) in doneList" :key="item" :title="item.event" :id="`doneList${index + 1}`" draggable="true">
        <span>{{ index + 1 }}</span>
        <span>
            {{ item.event.slice(0, 1).toUpperCase() + item.event.slice(1) }}
        </span>
        <span class="close" :title="`Cancel ${item.event}`" @click="del(index)">X</span>
    </li>
</template>

<style lang="scss" scoped>
li {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    color: black;
    border-bottom: 1px solid gray;
    padding: .25rem 0;

    .index {
        margin: auto;
    }

    .close {
        cursor: pointer;
        padding: .25rem .5rem;
        font-weight: 700;

        &:hover {
            color: red;
            transition: all .25s linear;
        }
    }
}
</style>