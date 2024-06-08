<template>
  <div>
    <!-- TODO: Site nav -->
    <ProportioView />
  </div>
</template>


<script setup>
import ProportioView from '@/views/proportio/ProportioView.vue'
import { useIngredientsStore } from '@/stores/ingredients'

const store = useIngredientsStore()
store.add()

</script>


<style scoped>

</style>