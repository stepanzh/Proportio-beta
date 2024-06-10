<template>
    <div>
        <div class="calc-table">
            <div v-for="ingr in store.ingredients" :key="ingr.id" class="table-row">
                <span class="cell-name">{{ ingr.displayedName }}</span>
                <ScaledAmount v-model="ingr.scaledAmount" :placeholder="ingr.originalAmount" class="cell-amount" />
                <span class="cell-unit">{{ ingr.unit }}</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'
import ScaledAmount from '@/components/ScaledAmount.vue'

const store = useProportioCalculatorStore()
</script>


<style scoped>

</style>