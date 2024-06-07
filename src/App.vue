<template>
  <div>
    <CalculatorView />
  </div>
</template>


<script setup>
import CalculatorView from '@/views/CalculatorView.vue'
import { useIngredientsStore } from '@/stores/ingredients'

const store = useIngredientsStore()
store.add()

</script>


<style scoped>

</style>