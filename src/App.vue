<template>
  <div>
    <!-- TODO: Site nav -->
    <ProportioView />
  </div>
</template>


<script setup>
import ProportioView from '@/views/proportio/ProportioView.vue'
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'

const store = useProportioCalculatorStore()
store.add()

</script>


<style scoped>

</style>