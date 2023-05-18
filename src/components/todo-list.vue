<script setup>
    import { ref } from 'vue'
<<<<<<< HEAD
=======

>>>>>>> 98263cae81a81a5f89f28bdb66e4dc592c5413f3
    const prop = defineProps({
        todoListEvt:Array
    })
    const todoListEvt = ref(prop.todoListEvt)

<<<<<<< HEAD
    const del = (e) => todoListEvt.value.splice(e,1)
    
=======
    const del = (e) =>{
        todoListEvt.value.splice(e,1)
    }
>>>>>>> 98263cae81a81a5f89f28bdb66e4dc592c5413f3

</script>

<template>
    <li v-for="(item,index) in todoListEvt" :key="item" :title="item.event" >
<<<<<<< HEAD
        <span class="doing-evt" :style="{color:item.color}">{{ index + 1 }}. {{ item.event.slice(0,1).toUpperCase() +  item.event.slice(1)}}</span>
        <span class="close" :title="`Cancel ${item}` " @click="del(index)">X</span>
=======
        <span class="index">{{ index + 1 }}.</span>
        <span class="doing-evt" :style="{color:item.color}">
            {{ item.event.slice(0,1).toUpperCase() +  item.event.slice(1)}}
        </span>
        <span class="close" :title="`Cancel ${item.event}` " @click="del(index)">X</span>
>>>>>>> 98263cae81a81a5f89f28bdb66e4dc592c5413f3
    </li>
</template>

<style lang="scss" scoped>
    li{
        display: flex;
        justify-content: space-between;
        gap: .5rem;
        color: black;
        border-bottom: 1px solid gray;
        padding: .25rem 0;
        .index{
            margin: auto;
        }
        .doing-evt{
            width: 100%;
            margin: auto 0;
            font-weight: 700;
        }
        .close{
            cursor: pointer;
            padding: .25rem .5rem;
            font-weight: 700;
            &:hover{
                color: red;
                transition: all .25s linear;
            }
        }
    }

</style>