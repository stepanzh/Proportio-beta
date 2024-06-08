<template>
    <div class="app-screen">
        <CalculatorView v-if="proportio.currentScreen == proportio.screens.calc" />
        <div v-if="proportio.currentScreen == proportio.screens.edit">Edit screen</div>
        <div v-if="proportio.currentScreen == proportio.screens.help">Help screen</div>
    </div>
</template>


<script setup>
import CalculatorView from '@/views/proportio/CalculatorView.vue'
import { useProportioStore } from '@/stores/proportio'

const proportio = useProportioStore()

proportio.navToCalc()
</script>


<style scoped>

</style>