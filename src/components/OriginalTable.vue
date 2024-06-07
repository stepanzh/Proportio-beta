<template>
    <div>
        <div v-for="ingr in store.ingredients" :key="ingr.id">
            <!-- One row -->
            <div class="table-row">
                <TextField v-model="ingr.name" class="cell-name"/>
                <OriginalAmount v-model="ingr.originalAmount" class="cell-amount"/>
                <TextField v-model="ingr.unit" class="cell-unit" />
                <!-- <button @click="store.remove(ingr.id)">Удалить</button> -->
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
        <!-- Actions -->
        <div>
            <button @click="store.add()">Добавить ингредиент</button>
        </div>
    </div>
</template>


<script setup>
import { useIngredientsStore } from '@/stores/ingredients'
import OriginalAmount from '@/components/OriginalAmount.vue'

const store = useIngredientsStore()
</script>


<style scoped>

</style>