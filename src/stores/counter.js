import { ref, reactive, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

import { numCount } from './eventCounter'

export const useCounterStore = defineStore('counter', () => {
  const numCountStore = numCount()
  const { name } = storeToRefs(numCountStore)
  const count = ref(100)
  
  const doubleCount = computed(() => count.value * 2)

  return { name, count, doubleCount }
})
