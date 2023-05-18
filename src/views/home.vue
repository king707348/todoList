<script setup>
import { ref, reactive } from 'vue'

import inputZone from '@/components/inputZone.vue'
import todoList from '@/components/todo-list.vue'

const todoListEvt = reactive(
    [
        {
            event: 'read a book',
            color: 'red',
            isEvtDone: false
        }, {
            event: 'run 3km',
            color: 'blue',
            isEvtDone: false
        }, {
            event: 'play game',
            color: 'green',
            isEvtDone: false
        }, {
            event: 'sleep',
            color: 'purple',
            isEvtDone: true
        }
    ]
)
const getListEvt = (isDone) => {
    return todoListEvt.filter((item) => item.isEvtDone == isDone)
}

</script>

<template>
<<<<<<< HEAD
    <section class="main">
        <div class="wraper">
            <slot name="text"></slot>
            <inputZone :todoListEvt="todoListEvt"></inputZone>
            <hr>
            <ul class="lsit">
                <todo-list :todoListEvt="getListEvt(false)"></todo-list>
            </ul>

        </div>
        <div class="wraper">
            <ul class="done">
                <todo-list :todoListEvt="getListEvt(true)"></todo-list>
            </ul>
        </div>
    </section>
=======
    <div class="wraper">
        <slot name="text"></slot>
        <inputZone :todoListEvt="todoListEvt"></inputZone>
        <hr>
        <ul class="lsit">
            <todo-list :todoListEvt="todoListEvt"></todo-list>
        </ul>
        <slot></slot>
    </div>
>>>>>>> 98263cae81a81a5f89f28bdb66e4dc592c5413f3
</template>

<style lang="scss" scoped >
.main{
    width: 100%;
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
}

</style>