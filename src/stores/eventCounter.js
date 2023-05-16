import { ref } from 'vue'
import { defineStore } from 'pinia'

export const numCount = defineStore('count', () => {
  const name = ref('bob')

  const increment = () => {
    name.value = name.value == 'bob' ? 'ana' : 'bob'
  }

  return { name, increment }
})
