<template>
    <div>
        <!-- Mode toggle -->
        <div>
            <button @click="setOriginal">Как в рецепте</button>
            <button @click="setScaled">Пересчитать</button>
            <span>mode = {{ mode }}</span>
        </div>
        <!-- Table -->
        <div v-for="ingr in store.ingredients" :key="ingr.id">
            <div>
                <div v-if="mode == Modes.original">
                    <TextField v-model="ingr.name" />
                    <OriginalAmount v-model="ingr.originalAmount" />
                    <TextField v-model="ingr.unit" />
                    <button @click="store.remove(ingr.id)">Удалить</button>
                </div>
                <div v-else-if="mode == Modes.scale">
                    <span>{{ ingr.name === '' ? 'empty-name' : ingr.name }}</span>
                    <ScaledAmount v-model="ingr.scaledAmount" />
                    <span>{{ ingr.unit === '' ? 'empty-unit' : ingr.unit }}</span>
                </div>
                <div v-else>Something went wrong... Check mode and Modes</div>
                <div>
                    <span>o = {{ ingr.originalAmount }};</span>
                    <span>s = {{ ingr.scaledAmount }};</span>
                    <span>n = {{ ingr.name }};</span>
                    <span>u = {{ ingr.unit }};</span>
                    <span>i = {{ ingr.id }};</span>
                </div>
            </div>
        </div>
        <!-- Actions -->
        <div>
            <div v-if="mode == Modes.original">
                <button @click="store.add()">Добавить ингредиент</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useIngredientsStore } from '@/stores/ingredients'
import OriginalAmount from '@/components/OriginalAmount.vue'
import ScaledAmount from '@/components/ScaledAmount.vue'


const store = useIngredientsStore()

const Modes = Object.freeze({
    original: 1,
    scale: 2
})

const mode = ref(Modes.original)
function setOriginal() { mode.value = Modes.original }
function setScaled() {
    // Validate original amounts
    const isAllOriginalAmountAreCorrect = !store.ingredients.some((ingr) => isNaN(ingr.originalAmount))
    const isValid = isAllOriginalAmountAreCorrect;

    if (!isValid) {
        alert('У некоторых ингредиентов не указано кол-во')
        return
    }

    // TODO: If enterred only one ingredient, show warning

    mode.value = Modes.scale
}
</script>


<style scoped>

</style>