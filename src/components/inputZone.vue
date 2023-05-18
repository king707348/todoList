<script setup>
import { ref, watch } from 'vue'

const prop = defineProps({
    todoListEvt: Array
})
const addList = ref(prop.todoListEvt)

const text = ref('')
const evtDefaultColor = ref('rgb(0,0,0)')

const randomColor = () => {
    const maxRGB_Params = 255
    let getColor_Params = []
    let change = evtDefaultColor.value.slice(4,-1).split(',')

    for(let i in change){
        getColor_Params.push(Math.floor(Math.random()*maxRGB_Params) + Number(change[i]))
        getColor_Params[i] = getColor_Params[i] > maxRGB_Params ? getColor_Params[i] - maxRGB_Params : getColor_Params[i]
    }
    change = `rgb(${getColor_Params})`
    evtDefaultColor.value = change

    return evtDefaultColor
}

const btnfn = () => {
    if (text.value !== '') {
        addList.value.push(
            {
                event: text.value,
                color: randomColor().value
            }
        )
        text.value = ''
        console.table(addList.value)
    } else {
        window.alert('Plz enter something!')
    }
}

watch(
    [
        text
    ], (newVal, oldVal) => {
        // console.log('newVal', newVal)
        // console.log('oldVal', oldVal)
    }, { deep: true }
)

// counterStore.$subscribe((mutation, state) => {
//     console.log(mutation.events)
//     console.log(state)
// })

</script>

<template>
    <div class="box">
        <input type="text" v-model="text" @keyup.enter=btnfn placeholder="Todo something...">
        <button class="btn" @click=btnfn>ADD</button>
    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    input,
    .btn {
        font-size: 1.5rem;
    }

    input {
        background: #eaeaea;
        border: none;
        padding: .25rem;
    }
}
</style>