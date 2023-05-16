<script setup>
    import { ref } from 'vue'

    const prop = defineProps({
        todoListEvt:Array
    })
    const todoListEvt = ref(prop.todoListEvt)

    const del = (e) =>{
        todoListEvt.value.splice(e,1)
    }

</script>

<template>
    <li v-for="(item,index) in todoListEvt" :key="item" :title="item.event" >
        <span class="index">{{ index + 1 }}.</span>
        <span class="doing-evt" :style="{color:item.color}">
            {{ item.event.slice(0,1).toUpperCase() +  item.event.slice(1)}}
        </span>
        <span class="close" :title="`Cancel ${item.event}` " @click="del(index)">X</span>
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