<template>
    <div>
        <div v-for="ingr in store.ingredients" :key="ingr.id">
            <!-- one row -->
            <div class="table-row">
                <span class="cell-name">{{ ingr.displayedName }}</span>
                <ScaledAmount v-model="ingr.scaledAmount" class="cell-amount" />
                <span class="cell-unit">{{ ingr.unit === '' ? 'empty-unit' : ingr.unit }}</span>
            </div>
            <!-- Debug info -->
            <div>
                <span>o = {{ ingr.originalAmount }};</span>
                <span>s = {{ ingr.scaledAmount }};</span>
                <span>n = {{ ingr.name }};</span>
                <span>u = {{ ingr.unit }};</span>
                <span>i = {{ ingr.id }};</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useIngredientsStore } from '@/stores/ingredients'
import ScaledAmount from '@/components/ScaledAmount.vue'

const store = useIngredientsStore()
</script>


<style scoped>

</style>