<template>
    <div>
        <!-- Table -->
        <div class="calc-table">
            <div v-for="ingr in store.ingredients" :key="ingr.id" class="table-row">
                <TextField v-model="ingr.name" placeholder="Ингредиент" class="cell-name" />
                <OriginalAmount v-model="ingr.originalAmount" placeholder="250" class="cell-amount" />
                <TextField v-model="ingr.unit" placeholder="гр" class="cell-unit" />
            </div>
        </div>

        <!-- Actions -->
        <div>
            <PButton @click="proportio.navToEdit()" :iconOnly="true" class="btn-filled-secondary">
                <template #icon>
                    <ArrowsUpDownIconMini />
                </template>
            </PButton>
            <PButton @click="store.add()" label="Добавить ингредиент" class="btn-filled-primary">
                <template #icon>
                    <PlusCircleIconMini />
                </template>
            </PButton>
        </div>
    </div>
</template>


<script setup>
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'
import { useProportioNavStore } from '@/stores/proportioNav'
import OriginalAmount from '@/components/OriginalAmount.vue'

const proportio = useProportioNavStore()
const store = useProportioCalculatorStore()
</script>


<style scoped>

</style>