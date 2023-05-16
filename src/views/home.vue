<script setup>
import { ref, reactive } from 'vue'

import inputZone from '@/components/inputZone.vue'
import todoList from '@/components/todo-list.vue'

const todoListEvt = reactive(
    [
        {
            event:'read a book',
            color:'red'
        },{
            event:'run 3km',
            color:'blue'
        },{
            event:'play game',
            color:'green'
        }
    ]
)

</script>

<template>
    <div class="wraper">
        <slot name="text"></slot>
        <inputZone :todoListEvt="todoListEvt"></inputZone>
        <hr>
        <ul class="lsit">
            <todo-list :todoListEvt="todoListEvt"></todo-list>
        </ul>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped >
.wraper {
    width: 30%;
    height: fit-content;
    margin: 4rem auto 0;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 5px;
    ul {
        list-style: none;
        padding-left: 0;
    }
}
</style>