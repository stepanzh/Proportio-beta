<template>
    <div class="app-screen">
        <CalculatorView v-if="proportio.currentScreen == proportio.screens.calc" />
        <EditView v-if="proportio.currentScreen == proportio.screens.edit" />
        <div v-if="proportio.currentScreen == proportio.screens.help">Help screen</div>
    </div>
</template>


<script setup>
import CalculatorView from '@/views/proportio/CalculatorView.vue'
import EditView from '@/views/proportio/EditView.vue'
import { useProportioNavStore } from '@/stores/proportioNav'

const proportio = useProportioNavStore()

proportio.navToCalc()
</script>


<style scoped>

</style>