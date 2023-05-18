<script setup>
    import { ref } from 'vue'
    const prop = defineProps({
        todoListEvt:Array
    })
    const todoListEvt = ref(prop.todoListEvt)

    const del = (e) => todoListEvt.value.splice(e,1)
    

</script>

<template>
    <li v-for="(item,index) in todoListEvt" :key="item" :title="item.event" >
        <span class="doing-evt" :style="{color:item.color}">{{ index + 1 }}. {{ item.event.slice(0,1).toUpperCase() +  item.event.slice(1)}}</span>
        <span class="close" :title="`Cancel ${item}` " @click="del(index)">X</span>
    </li>
</template>

<style lang="scss" scoped>
    li{
        display: flex;
        justify-content: space-between;
        color: red;
        border-bottom: 1px solid gray;
        padding: .25rem 0;
        .doing-evt{
            margin: auto 0;
        }
        .close{
            cursor: pointer;
            padding: .25rem .5rem;
            &:hover{
                background-color: aqua;
                transition: all .25s linear;
            }
        }
    }

</style>