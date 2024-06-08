<template>
    <CalculatorView v-if="proportio.currentScreen == proportio.screens.calc" />
    <EditView v-if="proportio.currentScreen == proportio.screens.edit" />
    <HelpView v-if="proportio.currentScreen == proportio.screens.help" />
</template>


<script setup>
import CalculatorView from '@/views/proportio/CalculatorView.vue'
import EditView from '@/views/proportio/EditView.vue'
import HelpView from '@/views/proportio/HelpView.vue'
import { useProportioNavStore } from '@/stores/proportioNav'

const proportio = useProportioNavStore()

proportio.navToCalc()
</script>


<style scoped>

</style>