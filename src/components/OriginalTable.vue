<template>
    <div>
        <div v-for="ingr in store.ingredients" :key="ingr.id">
            <!-- One row -->
            <div class="table-row">
                <TextField v-model="ingr.name" class="cell-name" />
                <OriginalAmount v-model="ingr.originalAmount" class="cell-amount" />
                <TextField v-model="ingr.unit" class="cell-unit" />
            </div>
            <!-- Debug info -->
            <div>
                <span>o = {{ ingr.originalAmount }};</span>
                <span>s = {{ ingr.scaledAmount }};</span>
                <span>n = {{ ingr.name }};</span>
                <span>d = {{ ingr.displayedName }};</span>
                <span>u = {{ ingr.unit }};</span>
                <span>i = {{ ingr.id }};</span>
            </div>
        </div>
        <!-- Actions -->
        <div>
            <button @click="proportio.navToEdit()">Изменить</button>
            <PButton @click="store.add()" label="Добавить ингредиент" class="btn-filled-primary">
                <template #icon>
                    <PlusCircleIcon />
                </template>
            </PButton>
        </div>
    </div>
</template>


<script setup>
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'
import { useProportioNavStore } from '@/stores/proportioNav'
import OriginalAmount from '@/components/OriginalAmount.vue'
import { PlusCircleIcon } from '@heroicons/vue/16/solid'

const proportio = useProportioNavStore()
const store = useProportioCalculatorStore()
</script>


<style scoped>

</style>